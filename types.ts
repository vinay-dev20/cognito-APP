export interface Riddle {
  id: number;
  question: string;
  clues: string[];
  solution: string;
  motivation: string;
  visualType?: 
    | 'three-doors-assassins' 
    | 'three-doors-explosives' 
    | 'three-doors-traps' 
    | 'three-doors-eels'
    | 'four-doors' 
    | 'mirror-room' 
    | 'green-glass' 
    | 'two-guards' 
    | 'monty-hall' 
    | 'ropes' 
    | 'water-sources' 
    | 'alligator-doors'
    | 'blind-passage';
}

export enum AppStage {
  INTRO = 'INTRO',
  FRAMEWORK = 'FRAMEWORK',
  GAME = 'GAME',
  COMPLETED = 'COMPLETED'
}

export interface TimerState {
  minutes: number;
  seconds: number;
  totalSeconds: number;
}