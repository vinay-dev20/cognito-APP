import React from 'react';
import { ArrowDown, Filter, Lightbulb, CheckCircle2, AlertCircle } from 'lucide-react';

export const Framework: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-display text-google-text mb-4">The Thinking Framework</h2>
        <p className="text-google-subtext max-w-2xl mx-auto">
          Before we begin, internalize this process. Lateral thinking isn't about guessing; it's about structured deconstruction.
        </p>
      </div>

      <div className="relative">
        {/* Central vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-12 relative z-10">
          
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm w-full max-w-md text-center">
              <div className="flex justify-center mb-3 text-google-red">
                <AlertCircle size={32} />
              </div>
              <h3 className="text-xl font-medium mb-2">The Question</h3>
              <p className="text-sm text-gray-500">Initial analysis. Usually seems "Not Practical" at first glance.</p>
            </div>
          </div>

          <div className="flex justify-center md:hidden"><ArrowDown className="text-gray-300" /></div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
             <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm w-full max-w-md text-center">
              <div className="flex justify-center mb-3 text-google-yellow">
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-yellow-50 rounded-full text-xs font-bold text-yellow-700">Part 1</span>
                  <span className="px-3 py-1 bg-yellow-50 rounded-full text-xs font-bold text-yellow-700">Part 2</span>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2">Deconstruction</h3>
              <p className="text-sm text-gray-500">Break the problem into parts. Don't look at the whole picture yet.</p>
            </div>
          </div>

          <div className="flex justify-center md:hidden"><ArrowDown className="text-gray-300" /></div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
             <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm w-full max-w-md text-center">
              <div className="flex justify-center mb-3 text-google-blue">
                <Filter size={32} />
              </div>
              <h3 className="text-xl font-medium mb-2">Filter & Weigh</h3>
              <p className="text-sm text-gray-500">Filter related concepts. Identify every important word in the question.</p>
            </div>
          </div>

          <div className="flex justify-center md:hidden"><ArrowDown className="text-gray-300" /></div>

          {/* Step 4 */}
          <div className="flex flex-col items-center">
             <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm w-full max-w-md text-center">
              <div className="flex justify-center mb-3 text-purple-500">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-xl font-medium mb-2">Generate Possibilities</h3>
              <div className="flex justify-center gap-2 mt-2">
                {[1, 2, 3, 'n'].map(n => (
                  <span key={n} className="w-8 h-8 flex items-center justify-center bg-purple-50 text-purple-700 rounded-full text-xs font-bold">
                    {n}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-2">Explore multiple angles. Divergent thinking.</p>
            </div>
          </div>

          <div className="flex justify-center md:hidden"><ArrowDown className="text-gray-300" /></div>

          {/* Step 5 */}
          <div className="flex flex-col items-center">
             <div className="bg-green-50 border border-green-100 p-6 rounded-2xl shadow-sm w-full max-w-md text-center transform scale-105">
              <div className="flex justify-center mb-3 text-google-green">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-medium mb-2 text-green-900">The Practical Answer</h3>
              <p className="text-sm text-green-700 font-medium">The solution is always practical.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};