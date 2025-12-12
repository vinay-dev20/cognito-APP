import React from 'react';
import { Flame, Crosshair, PawPrint, Snowflake, Waves, CloudFog, Sun, User, RectangleVertical, Glasses, ShieldAlert, Gift, Timer, Droplets, Skull, DoorOpen, Zap, Bomb, Footprints, ArrowRight } from 'lucide-react';

/* Reusable Door Component */
const Door: React.FC<{ color: string, borderColor: string, icon: React.ReactNode, label: string }> = ({ color, borderColor, icon, label }) => (
  <div className="flex flex-col items-center group w-full">
    <div className={`w-full aspect-[3/5] ${color} border-4 ${borderColor} rounded-t-full relative overflow-hidden shadow-sm transition-transform hover:-translate-y-1`}>
      <div className="absolute inset-0 flex items-center justify-center opacity-80">
        {icon}
      </div>
      <div className={`absolute bottom-0 w-full h-2 ${borderColor.replace('border', 'bg')}`}></div>
      <div className="absolute top-1/2 right-2 w-1.5 h-1.5 bg-black/20 rounded-full"></div>
    </div>
    <span className="mt-2 text-[10px] sm:text-xs font-bold text-gray-700 uppercase tracking-wider text-center">{label}</span>
  </div>
);

/* 1. Generic Three Doors (Configurable) */
interface ThreeDoorsProps {
  door1: { label: string, icon: React.ReactNode, color: string, borderColor: string };
  door2: { label: string, icon: React.ReactNode, color: string, borderColor: string };
  door3: { label: string, icon: React.ReactNode, color: string, borderColor: string };
}

export const GenericThreeDoors: React.FC<ThreeDoorsProps> = ({ door1, door2, door3 }) => {
  return (
    <div className="w-full max-w-md mx-auto my-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
      <div className="flex justify-center gap-4 sm:gap-8">
        <Door {...door1} />
        <Door {...door2} />
        <Door {...door3} />
      </div>
    </div>
  );
};

/* 2. Four Doors (Sun) */
export const FourDoorsVisual: React.FC = () => {
  return (
    <div className="w-full max-w-lg mx-auto my-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        <Door color="bg-cyan-100" borderColor="border-cyan-200" icon={<Snowflake className="text-cyan-500" size={24} />} label="Freezing" />
        <Door color="bg-blue-100" borderColor="border-blue-200" icon={<Waves className="text-blue-500" size={24} />} label="Sharks" />
        <Door color="bg-green-100" borderColor="border-green-200" icon={<CloudFog className="text-green-500" size={24} />} label="Gas" />
        <Door color="bg-amber-100" borderColor="border-amber-200" icon={<Sun className="text-amber-500" size={24} />} label="Sun" />
      </div>
    </div>
  );
};

/* 3. Concrete Room (Mirror) */
export const MirrorRoomVisual: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto my-6 p-8 bg-gray-200 rounded-xl border-4 border-gray-300 shadow-inner relative flex justify-center items-center h-48">
      <div className="absolute top-4 text-gray-400 text-xs font-mono">CONCRETE ROOM</div>
      <div className="flex gap-8 items-end">
        <div className="flex flex-col items-center">
          <div className="w-16 h-24 bg-blue-100 border-2 border-blue-200 rounded-lg flex items-center justify-center shadow-md transform -skew-x-6">
            <RectangleVertical className="text-blue-400 opacity-50" size={32} />
          </div>
          <span className="text-xs text-gray-500 mt-2 font-bold">Mirror</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-12 bg-amber-800 rounded shadow-md border-t-4 border-amber-900"></div>
          <div className="flex justify-between w-20">
             <div className="w-2 h-8 bg-amber-800"></div>
             <div className="w-2 h-8 bg-amber-800"></div>
          </div>
          <span className="text-xs text-gray-500 mt-2 font-bold">Table</span>
        </div>
      </div>
    </div>
  );
};

/* 4. Green Glass Door */
export const GreenGlassVisual: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto my-6 flex justify-center">
      <div className="relative group">
        <div className="w-40 h-64 bg-green-500/20 border-8 border-green-600 rounded-t-full backdrop-blur-sm flex items-center justify-center shadow-xl">
           <Glasses className="text-green-700 opacity-50" size={64} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
           <span className="block text-green-900 font-display font-bold text-xl drop-shadow-sm">GREEN</span>
           <span className="block text-green-900 font-display font-bold text-xl drop-shadow-sm">GLASS</span>
           <span className="block text-green-900 font-display font-bold text-xl drop-shadow-sm">DOOR</span>
        </div>
      </div>
    </div>
  );
};

/* 5. Two Guards */
export const TwoGuardsVisual: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto my-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
      <div className="flex justify-center gap-12">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center border-2 border-blue-200">
            <User className="text-blue-600" size={32} />
          </div>
          <div className="mt-2 text-center">
            <span className="block text-xs font-bold text-gray-500">Guard A</span>
            <span className="block text-[10px] text-gray-400">(Truth or Lie?)</span>
          </div>
        </div>
        
        <div className="w-0.5 bg-gray-200 h-20 self-center"></div>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center border-2 border-red-200">
            <User className="text-red-600" size={32} />
          </div>
          <div className="mt-2 text-center">
            <span className="block text-xs font-bold text-gray-500">Guard B</span>
            <span className="block text-[10px] text-gray-400">(Truth or Lie?)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 6. Monty Hall */
export const MontyHallVisual: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto my-6 p-4">
      <div className="flex justify-center gap-4">
        <Door color="bg-purple-100" borderColor="border-purple-300" icon={<span className="text-2xl font-bold text-purple-400">1</span>} label="Door 1" />
        <Door color="bg-purple-100" borderColor="border-purple-300" icon={<span className="text-2xl font-bold text-purple-400">2</span>} label="Door 2" />
        <Door color="bg-purple-100" borderColor="border-purple-300" icon={<span className="text-2xl font-bold text-purple-400">3</span>} label="Door 3" />
      </div>
      <div className="mt-4 flex justify-center gap-8 text-sm text-gray-500">
        <div className="flex items-center gap-1"><Gift size={14} /> 1 Prize</div>
        <div className="flex items-center gap-1"><PawPrint size={14} /> 2 Goats</div>
      </div>
    </div>
  );
};

/* 7. Ropes */
export const RopesVisual: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto my-6 p-6 bg-gray-50 rounded-xl border border-gray-100 flex flex-col items-center gap-6">
      <div className="flex items-center gap-4 w-full">
         <span className="text-xs font-bold text-gray-400 w-12">Rope A</span>
         <div className="flex-grow h-2 bg-amber-200 rounded-full relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-red-400 animate-pulse"></div>
            <div className="absolute right-0 top-0 bottom-0 w-2 bg-red-400 animate-pulse"></div>
         </div>
         <Timer size={16} className="text-gray-400" />
      </div>
      <div className="flex items-center gap-4 w-full">
         <span className="text-xs font-bold text-gray-400 w-12">Rope B</span>
         <div className="flex-grow h-2 bg-amber-200 rounded-full relative overflow-hidden">
           <div className="absolute left-0 top-0 bottom-0 w-2 bg-gray-300"></div>
         </div>
         <Timer size={16} className="text-gray-400" />
      </div>
    </div>
  );
};

/* 8. Water Sources */
export const WaterSourcesVisual: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto my-6 p-4">
       <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center p-3 bg-blue-50 rounded-xl border border-blue-100">
             <Droplets className="text-blue-400 mb-2" />
             <span className="text-xs font-bold text-blue-900">Still Lake</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-amber-50 rounded-xl border border-amber-100">
             <Waves className="text-amber-600 mb-2" />
             <span className="text-xs font-bold text-amber-900">Muddy River</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-green-50 rounded-xl border border-green-100">
             <Droplets className="text-green-600 mb-2" />
             <span className="text-xs font-bold text-green-900">Puddle</span>
          </div>
       </div>
    </div>
  );
};

/* 9. Alligators */
export const AlligatorDoorsVisual: React.FC = () => {
    return (
    <div className="w-full max-w-md mx-auto my-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
      <div className="flex justify-center gap-8">
        <Door color="bg-emerald-100" borderColor="border-emerald-200" icon={<ShieldAlert className="text-emerald-600" size={32} />} label="Alligators" />
        <Door color="bg-yellow-100" borderColor="border-yellow-200" icon={<Skull className="text-yellow-600" size={32} />} label="Lions" />
      </div>
    </div>
  );
};

/* 10. Blind Passage */
export const BlindPassageVisual: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto my-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
      <div className="flex justify-center gap-8">
        <Door color="bg-gray-200" borderColor="border-gray-300" icon={<Footprints className="text-gray-600" size={32} />} label="Passage 1" />
        <Door color="bg-gray-200" borderColor="border-gray-300" icon={<Footprints className="text-gray-600" size={32} />} label="Passage 2" />
      </div>
      <div className="flex justify-center mt-4">
        <div className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-500 flex items-center gap-2">
           <ArrowRight size={14}/> One leads to freedom
        </div>
      </div>
    </div>
  );
};


/* MAIN EXPORT */
export const RiddleVisual: React.FC<{ type?: string }> = ({ type }) => {
  switch (type) {
    case 'three-doors-assassins':
      return <GenericThreeDoors 
        door1={{ label: 'Fire', icon: <Flame className="text-orange-500" size={32} />, color: 'bg-orange-100', borderColor: 'border-orange-200' }}
        door2={{ label: 'Assassins', icon: <Crosshair className="text-slate-500" size={32} />, color: 'bg-slate-200', borderColor: 'border-slate-300' }}
        door3={{ label: 'Lions', icon: <PawPrint className="text-yellow-600" size={32} />, color: 'bg-yellow-100', borderColor: 'border-yellow-200' }}
      />;
    case 'three-doors-explosives':
      return <GenericThreeDoors 
        door1={{ label: 'Fire', icon: <Flame className="text-orange-500" size={32} />, color: 'bg-orange-100', borderColor: 'border-orange-200' }}
        door2={{ label: 'Explosives', icon: <Bomb className="text-red-500" size={32} />, color: 'bg-red-100', borderColor: 'border-red-200' }}
        door3={{ label: 'Lions', icon: <PawPrint className="text-yellow-600" size={32} />, color: 'bg-yellow-100', borderColor: 'border-yellow-200' }}
      />;
    case 'three-doors-traps':
      return <GenericThreeDoors 
        door1={{ label: 'Fire', icon: <Flame className="text-orange-500" size={32} />, color: 'bg-orange-100', borderColor: 'border-orange-200' }}
        door2={{ label: 'Explosives', icon: <Bomb className="text-red-500" size={32} />, color: 'bg-red-100', borderColor: 'border-red-200' }}
        door3={{ label: 'Lions', icon: <PawPrint className="text-yellow-600" size={32} />, color: 'bg-yellow-100', borderColor: 'border-yellow-200' }}
      />;
    case 'three-doors-eels':
      return <GenericThreeDoors 
        door1={{ label: 'Fire', icon: <Flame className="text-orange-500" size={32} />, color: 'bg-orange-100', borderColor: 'border-orange-200' }}
        door2={{ label: 'Lions', icon: <PawPrint className="text-yellow-600" size={32} />, color: 'bg-yellow-100', borderColor: 'border-yellow-200' }}
        door3={{ label: 'Eels', icon: <Zap className="text-blue-500" size={32} />, color: 'bg-blue-100', borderColor: 'border-blue-200' }}
      />;
    
    case 'four-doors': return <FourDoorsVisual />;
    case 'mirror-room': return <MirrorRoomVisual />;
    case 'green-glass': return <GreenGlassVisual />;
    case 'two-guards': return <TwoGuardsVisual />;
    case 'monty-hall': return <MontyHallVisual />;
    case 'ropes': return <RopesVisual />;
    case 'water-sources': return <WaterSourcesVisual />;
    case 'alligator-doors': return <AlligatorDoorsVisual />;
    case 'blind-passage': return <BlindPassageVisual />;
    default: return null;
  }
};