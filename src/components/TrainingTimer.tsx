import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, RotateCcw, Timer as TimerIcon } from 'lucide-react';

interface TrainingTimerProps {
  type: 'tempo' | 'rest';
  initialDuration?: number;
  onComplete?: () => void;
}

export const TrainingTimer: React.FC<TrainingTimerProps> = ({ type, initialDuration = 60, onComplete }) => {
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(initialDuration);
  const [tempoStep, setTempoStep] = useState<'eccentric' | 'bottom' | 'concentric'>('eccentric');
  const [repCount, setRepCount] = useState(0);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Tempo logic: 3-1-1 (Total 5s)
  useEffect(() => {
    if (type === 'tempo' && isActive) {
      let stepTime = 0;
      const interval = setInterval(() => {
        stepTime += 0.1;
        
        if (stepTime <= 3) {
          setTempoStep('eccentric');
        } else if (stepTime <= 4) {
          setTempoStep('bottom');
        } else if (stepTime <= 5) {
          setTempoStep('concentric');
        } else {
          stepTime = 0;
          setRepCount(prev => prev + 1);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [type, isActive]);

  // Rest timer logic
  useEffect(() => {
    if (type === 'rest' && isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsActive(false);
            if (onComplete) onComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, timeLeft, type, onComplete]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(initialDuration);
    setRepCount(0);
    setTempoStep('eccentric');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4">
        <button 
          onClick={resetTimer}
          className="p-2 hover:bg-slate-800 rounded-xl text-slate-500 transition-colors"
        >
          <RotateCcw size={16} />
        </button>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className={`p-2 rounded-lg ${type === 'tempo' ? 'bg-blue-600/20 text-blue-400' : 'bg-slate-800 text-slate-400'}`}>
          <TimerIcon size={18} />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
            {type === 'tempo' ? 'Tempo Master' : 'Rest Protocol'}
          </span>
          <span className="text-xs font-bold text-white uppercase italic">
            {type === 'tempo' ? 'Rhythm 3-1-1' : 'Recovery Window'}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center">
        {type === 'rest' ? (
          <div className="w-full space-y-4">
            <div className="text-6xl font-mono font-black text-white tabular-nums text-center tracking-tighter">
              {formatTime(timeLeft)}
            </div>
            <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
              <motion.div 
                className="bg-blue-600 h-full"
                initial={{ width: '100%' }}
                animate={{ width: `${(timeLeft / initialDuration) * 100}%` }}
                transition={{ duration: 1, ease: 'linear' }}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center mb-6 w-full">
            <div className="relative w-48 h-48 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  className="stroke-slate-800 fill-none"
                  strokeWidth="6"
                />
                <motion.circle
                  cx="96"
                  cy="96"
                  r="88"
                  className="stroke-blue-500 fill-none"
                  strokeWidth="6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ 
                    pathLength: isActive ? 1 : 0,
                    transition: { duration: 5, repeat: Infinity, ease: "linear" }
                  }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tempoStep}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className={`text-[10px] font-black tracking-widest uppercase mb-1 px-2 py-0.5 rounded ${
                      tempoStep === 'eccentric' ? 'bg-blue-600/20 text-blue-400' :
                      tempoStep === 'bottom' ? 'bg-white/10 text-white' : 'bg-blue-600 text-white'
                    }`}
                  >
                    {tempoStep === 'eccentric' ? 'DOWN' :
                     tempoStep === 'bottom' ? 'HOLD' : 'UP'}
                  </motion.div>
                </AnimatePresence>
                <div className="text-6xl font-black text-white italic tracking-tighter">
                  {repCount}
                </div>
                <div className="text-[9px] text-slate-500 font-black uppercase tracking-[0.3em]">REPS</div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 w-full mt-6">
               <div className={`h-1 rounded-full ${tempoStep === 'eccentric' ? 'bg-blue-500' : 'bg-slate-800'}`} />
               <div className={`h-1 rounded-full ${tempoStep === 'bottom' ? 'bg-blue-500' : 'bg-slate-800'}`} />
               <div className={`h-1 rounded-full ${tempoStep === 'concentric' ? 'bg-blue-500' : 'bg-slate-800'}`} />
            </div>
          </div>
        )}

        <div className="flex gap-4 w-full mt-6">
          <button
            id={`timer-toggle-${type}`}
            onClick={toggleTimer}
            className={`flex-1 flex items-center justify-center gap-2 py-5 rounded-[1.25rem] font-black uppercase tracking-widest transition-all italic text-sm ${
              isActive 
                ? 'bg-slate-800 text-slate-500 hover:bg-slate-700' 
                : 'bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.3)]'
            }`}
          >
            {isActive ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
            {isActive ? 'Cease' : 'Engage'}
          </button>
        </div>
      </div>
    </div>
  );
};
