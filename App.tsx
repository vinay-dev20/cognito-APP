import React, { useState } from 'react';
import { Logo } from './components/Logo';
import { Framework } from './components/Framework';
import { GameSession } from './components/GameSession';
import { Button } from './components/Button';
import { RIDDLES, QUOTES } from './constants';
import { AppStage } from './types';
import { Sparkles, Play, RotateCcw } from 'lucide-react';

export default function App() {
  const [stage, setStage] = useState<AppStage>(AppStage.INTRO);
  const [currentRiddleIndex, setCurrentRiddleIndex] = useState(0);

  const startFramework = () => setStage(AppStage.FRAMEWORK);
  const startGame = () => setStage(AppStage.GAME);
  
  const handleNextRiddle = () => {
    if (currentRiddleIndex < RIDDLES.length - 1) {
      setCurrentRiddleIndex(prev => prev + 1);
    } else {
      setStage(AppStage.COMPLETED);
    }
  };

  const restartApp = () => {
    setStage(AppStage.INTRO);
    setCurrentRiddleIndex(0);
  };

  const getRandomQuote = () => QUOTES[Math.floor(Math.random() * QUOTES.length)];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-google-text">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Logo />
            <div className="text-sm font-medium text-google-subtext hidden md:block">
              Lateral Thinking Training
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col p-4 sm:p-6 lg:p-8">
        
        {/* STAGE: INTRO */}
        {stage === AppStage.INTRO && (
          <div className="flex-grow flex flex-col items-center justify-center fade-in max-w-2xl mx-auto text-center">
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
              <div className="mb-8 flex justify-center text-google-blue">
                <Sparkles size={48} />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-medium mb-6 text-google-text">
                Expand Your Mind
              </h1>
              <p className="text-xl text-google-subtext mb-8 leading-relaxed">
                Welcome to Cognito. This module is designed to break linear thinking patterns through lateral riddles.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-xl mb-10 text-left border-l-4 border-google-blue">
                <p className="text-blue-900 italic font-medium">"{getRandomQuote()}"</p>
              </div>

              <Button onClick={startFramework} className="text-lg px-10 py-4 shadow-md hover:shadow-lg transition-all">
                Start Training
              </Button>
            </div>
          </div>
        )}

        {/* STAGE: FRAMEWORK */}
        {stage === AppStage.FRAMEWORK && (
          <div className="flex-grow flex flex-col items-center fade-in w-full">
            <Framework />
            <div className="mt-12 mb-8 sticky bottom-6 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg border border-gray-200">
              <Button onClick={startGame} className="flex items-center gap-2 px-8">
                <Play size={18} fill="currentColor" /> Begin Challenge
              </Button>
            </div>
          </div>
        )}

        {/* STAGE: GAME */}
        {stage === AppStage.GAME && (
          <GameSession 
            riddle={RIDDLES[currentRiddleIndex]}
            onNext={handleNextRiddle}
            isLast={currentRiddleIndex === RIDDLES.length - 1}
          />
        )}

        {/* STAGE: COMPLETED */}
        {stage === AppStage.COMPLETED && (
          <div className="flex-grow flex flex-col items-center justify-center fade-in text-center">
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 max-w-xl">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-google-green">
                <Sparkles size={40} />
              </div>
              <h2 className="text-3xl font-display mb-4">Training Complete</h2>
              <p className="text-google-subtext mb-8">
                You have successfully completed today's lateral thinking exercises. Remember to apply the framework to practical problems.
              </p>
              <Button onClick={restartApp} variant="outline" className="flex items-center gap-2 mx-auto">
                <RotateCcw size={16} /> Restart Module
              </Button>
            </div>
          </div>
        )}

      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-gray-400">
          <p>© 2024 Cognito Training. Inspired by Google Design Principles.</p>
        </div>
      </footer>
    </div>
  );
}