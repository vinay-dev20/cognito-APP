import React, { useState, useEffect } from 'react';
import { Riddle } from '../types';
import { Button } from './Button';
import { Lightbulb, Unlock, ChevronRight, Check, Lock, AlertCircle } from 'lucide-react';
import { RiddleVisual } from './Visuals';

interface GameSessionProps {
  riddle: Riddle;
  onNext: () => void;
  isLast: boolean;
}

export const GameSession: React.FC<GameSessionProps> = ({ riddle, onNext, isLast }) => {
  const [unlockedClues, setUnlockedClues] = useState<boolean[]>([false, false, false]);
  const [showSolution, setShowSolution] = useState(false);
  const [score, setScore] = useState(100);

  useEffect(() => {
    // Reset state when riddle changes
    setUnlockedClues([false, false, false]);
    setShowSolution(false);
    setScore(100);
  }, [riddle]);

  const unlockClue = (index: number) => {
    if (!unlockedClues[index]) {
      const penalty = (index + 1) * 15; // Increasing penalty: 15, 30, 45
      setScore(prev => Math.max(0, prev - penalty));
      
      const newUnlocked = [...unlockedClues];
      newUnlocked[index] = true;
      setUnlockedClues(newUnlocked);
    }
  };

  const handleRevealSolution = () => {
    setShowSolution(true);
  };

  return (
    <div className="flex flex-col h-full max-w-5xl mx-auto w-full">
      {/* Game Header */}
      <div className="flex justify-between items-center mb-8 px-2">
        <div className="flex items-center gap-2">
           <span className="text-google-subtext font-medium text-sm tracking-wide uppercase">Lateral Thinking Training</span>
        </div>
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
          <div className="text-sm font-bold text-google-subtext uppercase">Score</div>
          <div className={`text-xl font-display font-bold ${score > 70 ? 'text-google-green' : score > 40 ? 'text-google-yellow' : 'text-google-red'}`}>
            {score}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-grow">
        
        {/* Main Content Area */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Question Card */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8 md:p-12 relative overflow-hidden fade-in">
            <div className="absolute top-0 left-0 w-2 h-full bg-google-blue"></div>
            <div className="flex justify-between items-start mb-6">
              <span className="text-google-blue font-bold tracking-wider text-xs uppercase bg-blue-50 px-3 py-1 rounded-full">Challenge {riddle.id}</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-display text-google-text leading-tight mb-8">
              {riddle.question}
            </h2>

            {/* Visual Art for the Riddle */}
            {riddle.visualType && (
              <div className="mb-8 fade-in">
                <RiddleVisual type={riddle.visualType} />
              </div>
            )}

            {!showSolution ? (
               <div className="flex justify-end">
                 <Button onClick={handleRevealSolution} variant="outline" className="text-sm">
                   Give Up & Show Solution
                 </Button>
               </div>
            ) : (
              <div className="mt-8 pt-8 border-t border-gray-100 fade-in">
                 <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-100 text-green-700 rounded-full shrink-0">
                      <Unlock size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-green-800 mb-2">Solution</h3>
                      <p className="text-lg text-gray-800 leading-relaxed mb-6">{riddle.solution}</p>
                      
                      <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                          <p className="text-green-800 italic text-sm">"{riddle.motivation}"</p>
                      </div>
                    </div>
                 </div>
                 
                 <div className="mt-8 flex justify-end">
                    <Button onClick={onNext} className="flex items-center gap-2">
                      {isLast ? "Complete Training" : "Next Challenge"} <ChevronRight size={18} />
                    </Button>
                 </div>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar / Clues Area */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 mb-2 px-1">
            <Lightbulb size={18} className="text-google-yellow" />
            <h3 className="font-display font-medium text-google-text">Investigation Clues</h3>
          </div>

          {riddle.clues.map((clue, index) => {
            const isUnlocked = unlockedClues[index];
            // Previous clue must be unlocked to unlock current, unless it's the first one
            const isLocked = !isUnlocked && (index > 0 && !unlockedClues[index - 1]);
            const penalty = (index + 1) * 15;

            return (
              <div 
                key={index}
                className={`
                  relative rounded-2xl border transition-all duration-300
                  ${isUnlocked 
                    ? 'bg-yellow-50 border-yellow-200' 
                    : 'bg-white border-gray-200 hover:border-blue-200'}
                  ${isLocked ? 'opacity-50 cursor-not-allowed' : ''}
                `}
              >
                {!isUnlocked ? (
                  <button 
                    onClick={() => !isLocked && unlockClue(index)}
                    disabled={isLocked || showSolution}
                    className="w-full p-5 flex items-center justify-between text-left group focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`
                        w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors
                        ${isLocked ? 'bg-gray-100 text-gray-400' : 'bg-blue-50 text-google-blue group-hover:bg-blue-100'}
                      `}>
                        {isLocked ? <Lock size={14} /> : index + 1}
                      </div>
                      <div className="flex flex-col">
                        <span className={`text-sm font-medium ${isLocked ? 'text-gray-400' : 'text-gray-700'}`}>
                          Level {index + 1} Clue
                        </span>
                        {!isLocked && (
                           <span className="text-xs text-google-red font-medium">-{penalty} pts</span>
                        )}
                      </div>
                    </div>
                    {!isLocked && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium group-hover:bg-blue-50 group-hover:text-google-blue transition-colors">
                        Reveal
                      </span>
                    )}
                  </button>
                ) : (
                  <div className="p-5 fade-in">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-yellow-700 uppercase tracking-wide">Clue {index + 1}</span>
                      <Check size={16} className="text-yellow-600" />
                    </div>
                    <p className="text-yellow-900 text-sm leading-relaxed font-medium">
                      {clue}
                    </p>
                  </div>
                )}
              </div>
            );
          })}

          {!showSolution && (
            <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-start gap-3">
              <AlertCircle size={20} className="text-gray-400 shrink-0 mt-0.5" />
              <p className="text-xs text-gray-500 leading-relaxed">
                Use clues sparingly. Each revealed clue reduces your final score. Analyze the question laterally before seeking help.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};