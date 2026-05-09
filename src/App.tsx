import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Dumbbell, 
  ChevronRight, 
  ArrowLeft, 
  Target, 
  Clock, 
  Info
} from 'lucide-react';
import { SplitType, WorkoutDay, Exercise } from './types';
import { PROGRAMS } from './constants';
import { TrainingTimer } from './components/TrainingTimer';

export default function App() {
  const [selectedSplit, setSelectedSplit] = useState<SplitType | null>(null);
  const [activeDay, setActiveDay] = useState<WorkoutDay | null>(null);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  const reset = () => {
    setSelectedSplit(null);
    setActiveDay(null);
    setSelectedExercise(null);
  };

  const handleDaySelect = (day: WorkoutDay) => {
    setActiveDay(day);
    setSelectedExercise(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-600 selection:text-white">
      {/* Header */}
      <header className="h-16 border-b border-slate-800 bg-slate-900/50 flex items-center justify-between px-8 backdrop-blur-xl sticky top-0 z-50">
        <div className="flex items-center gap-3 cursor-pointer" onClick={reset}>
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            <Dumbbell size={18} />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white uppercase">
            Hypertrophy <span className="text-blue-500">Elite</span>
          </h1>
        </div>
        <div className="flex gap-6 items-center">
          <div className="text-right hidden sm:block">
            <p className="text-[10px] uppercase tracking-widest text-slate-500">Pelatih</p>
            <p className="text-sm font-medium">Coach Specialist Bodybuilding</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center group cursor-help transition-colors hover:border-blue-500">
             <Info size={20} className="text-blue-400" />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-8 pb-32">
        <AnimatePresence mode="wait">
          {!selectedSplit ? (
            <motion.section
              key="split-selection"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-400 text-[10px] font-bold uppercase tracking-widest">
                  Professional Systems
                </div>
                <h2 className="text-5xl font-black tracking-tight text-white italic">PILIH PROTOKOL ANDA.</h2>
                <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">Program hipertrofi yang dirancang secara ilmiah untuk memaksimalkan pembentukan massa otot melalui stimulasi metabolik dan tension mekanik.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {(['PPL', 'UpperLower', 'FullBody'] as SplitType[]).map((type) => (
                  <button
                    key={type}
                    id={`split-${type}`}
                    onClick={() => setSelectedSplit(type)}
                    className="group relative bg-slate-900 border border-slate-800 p-10 rounded-[2rem] text-left overflow-hidden hover:border-blue-500 transition-all hover:-translate-y-2"
                  >
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/10 blur-[80px] group-hover:bg-blue-600/30 transition-all duration-700" />
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="text-[10px] font-mono text-blue-500 mb-2 uppercase tracking-[0.2em] font-bold">program_type</div>
                      <h3 className="text-3xl font-black text-white italic mb-8 uppercase tracking-tighter">
                        {type === 'PPL' ? 'Push Pull Legs' : type === 'UpperLower' ? 'Upper & Lower' : 'Full Body'}
                      </h3>
                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-slate-500 text-sm group-hover:text-blue-400 transition-colors flex items-center gap-2 font-bold uppercase tracking-widest">
                          Lihat Detail <ChevronRight size={16} />
                        </span>
                        <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                           <Target className="text-slate-400 group-hover:text-white" size={20} />
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Clock size={80} />
                  </div>
                  <h4 className="text-blue-400 font-black uppercase text-sm tracking-widest mb-6 border-b border-slate-800 pb-4">Standard Operational Procedure</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      <p className="text-slate-400 text-sm italic"><strong>Tempo Master:</strong> Eksekusi 3-1-1 adalah non-negosiabel untuk stimulasi serat otot.</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      <p className="text-slate-400 text-sm italic"><strong>Intensitas RPE 9:</strong> Membutuhkan beban yang menyisakan 1 reps dalam tangki.</p>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-600 p-10 rounded-[2rem] flex flex-col justify-center">
                  <h4 className="text-white font-black text-2xl italic uppercase tracking-tight mb-2">Rest Period Protocol</h4>
                  <p className="text-blue-100/80 mb-6 text-sm">Konsistensi jeda istirahat 60-90 detik mengoptimalkan akumulasi metabolit (Pump) tanpa mengorbankan performa set berikutnya.</p>
                  <div className="flex gap-4">
                    <div className="bg-white/10 px-4 py-2 rounded-xl text-center">
                      <p className="text-[10px] text-blue-200 uppercase tracking-widest font-bold">Lower Body</p>
                      <p className="text-lg font-black text-white">90s</p>
                    </div>
                    <div className="bg-white/10 px-4 py-2 rounded-xl text-center">
                      <p className="text-[10px] text-blue-200 uppercase tracking-widest font-bold">Upper Body</p>
                      <p className="text-lg font-black text-white">60s</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          ) : !activeDay ? (
            <motion.section
              key="day-selection"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <button 
                onClick={() => setSelectedSplit(null)}
                className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors font-bold uppercase text-xs tracking-widest"
              >
                <ArrowLeft size={16} /> Back to selection
              </button>
              
              <div className="flex justify-between items-end border-b border-slate-800 pb-8">
                <div className="space-y-2">
                  <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">PROTOKOLAKTIF</h2>
                  <p className="text-slate-500 font-mono text-sm tracking-widest">SYSTEM: {selectedSplit} ARCHITECTURE</p>
                </div>
                <div className="hidden sm:flex gap-4">
                  <div className="bg-slate-900 border border-slate-800 px-6 py-3 rounded-2xl text-center">
                    <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em]">Volume</p>
                    <p className="text-xl font-black text-white italic">HIGH</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {PROGRAMS[selectedSplit].map((day) => (
                  <button
                    key={day.id}
                    onClick={() => handleDaySelect(day)}
                    className="group flex justify-between items-center bg-slate-900 p-8 rounded-[2rem] border border-slate-800 hover:border-blue-500 transition-all text-left relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-blue-600/5 to-transparent" />
                    <div className="relative z-10">
                      <h3 className="text-2xl font-black text-white uppercase tracking-tight italic mb-1 group-hover:text-blue-400 transition-colors">{day.title}</h3>
                      <p className="text-slate-500 text-sm font-mono tracking-widest uppercase">{day.exercises.length} Total Exercises</p>
                    </div>
                    <ChevronRight className="text-slate-700 group-hover:text-blue-500 transition-colors relative z-10" size={32} />
                  </button>
                ))}
              </div>
            </motion.section>
          ) : (
            <motion.section
              key="active-workout"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-10"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:items-center bg-slate-900/50 border border-slate-800 p-8 rounded-[2.5rem]">
                <div className="space-y-1">
                  <span className="px-3 py-1 bg-blue-600 text-[10px] font-bold rounded-full text-white tracking-[0.2em] uppercase">Session Active</span>
                  <h2 className="text-3xl font-black text-white tracking-tight uppercase italic">{activeDay.title}</h2>
                  <p className="text-slate-500 text-xs font-mono tracking-widest uppercase">{activeDay.exercises.length} Latihan • 60 Menit Target</p>
                </div>
                <button 
                  onClick={() => setActiveDay(null)}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white px-6 py-3 rounded-2xl transition-all font-bold uppercase text-xs tracking-widest"
                >
                  Ganti Sesi
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Exercise List */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="bg-slate-900 rounded-[2rem] border border-slate-800 overflow-hidden shadow-2xl">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-950/50 border-b border-slate-800 text-slate-500 text-[10px] uppercase tracking-[0.2em] font-black">
                          <th className="py-6 px-8 font-bold">Latihan</th>
                          <th className="py-6 px-4 font-bold text-center">Set</th>
                          <th className="py-6 px-4 font-bold text-center">Reps</th>
                          <th className="py-6 px-8 font-bold text-right">Aksi</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        {activeDay.exercises.map((ex, index) => (
                          <tr 
                            key={ex.id}
                            id={`ex-${ex.id}`}
                            onClick={() => setSelectedExercise(ex)}
                            className={`border-b border-slate-800/50 transition-all cursor-pointer group ${
                              selectedExercise?.id === ex.id 
                                ? 'bg-blue-600/10' 
                                : 'hover:bg-slate-800/30'
                            }`}
                          >
                            <td className="py-5 px-8">
                               <div className="flex flex-col">
                                 <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">{ex.category}</span>
                                 <span className={`font-black text-lg italic uppercase tracking-tight ${selectedExercise?.id === ex.id ? 'text-blue-400' : 'text-white'}`}>
                                   {index + 1}. {ex.name}
                                 </span>
                               </div>
                            </td>
                            <td className="py-5 px-4 text-center">
                               <div className="bg-slate-800 w-10 h-10 flex items-center justify-center rounded-xl mx-auto font-mono text-blue-400 font-bold group-hover:bg-slate-700 transition-colors">
                                 {ex.sets}
                               </div>
                            </td>
                            <td className="py-5 px-4 text-center font-bold text-slate-400">
                               {ex.reps}
                            </td>
                            <td className="py-5 px-8 text-right">
                               <button className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${selectedExercise?.id === ex.id ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-500 group-hover:bg-slate-700'}`}>
                                 <ChevronRight size={16} />
                               </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Tracking Area */}
                <div className="lg:col-span-5 space-y-8 h-fit lg:sticky lg:top-24">
                  {selectedExercise ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="space-y-8"
                    >
                      <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-10 overflow-hidden relative">
                         <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-600/10 blur-[100px] rounded-full" />
                         
                         <div className="relative z-10 space-y-6">
                            <div className="pb-6 border-b border-slate-800">
                              <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-2">Protocol Details</label>
                              <div className="text-3xl font-black text-white uppercase italic tracking-tighter leading-none mb-1">{selectedExercise.name}</div>
                              <div className="inline-block px-2 py-0.5 bg-blue-600 text-[10px] font-bold text-white uppercase tracking-widest rounded-sm">TEMPO 3-1-1</div>
                            </div>

                            <div className="space-y-4">
                              <div className="flex items-start gap-4 bg-slate-950 p-6 rounded-2xl border border-blue-500/20">
                                <div className="p-3 bg-blue-600/20 rounded-xl text-blue-400 mt-1">
                                  <Info size={18} />
                                </div>
                                <div>
                                  <label className="text-[9px] font-black text-slate-600 uppercase tracking-widest block mb-1">Coach Insight</label>
                                  <p className="text-sm text-slate-300 italic font-medium leading-relaxed">
                                    "{selectedExercise.mindMuscle}"
                                  </p>
                                </div>
                              </div>
                            </div>
                         </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                        <TrainingTimer type="tempo" />
                        <TrainingTimer type="rest" initialDuration={selectedSplit === 'FullBody' || activeDay.id === 'legs' ? 90 : 60} />
                      </div>
                    </motion.div>
                  ) : (
                    <div className="bg-slate-900/30 border-2 border-dashed border-slate-800 rounded-[2.5rem] p-16 text-center flex flex-col items-center justify-center min-h-[500px]">
                      <div className="w-24 h-24 rounded-[2rem] bg-slate-900 flex items-center justify-center mb-8 border border-slate-800 shadow-2xl">
                        <Dumbbell className="text-slate-700" size={48} />
                      </div>
                      <h4 className="text-white text-xl font-black uppercase italic tracking-tight mb-2">PILIH LATIHAN</h4>
                      <p className="text-slate-500 text-sm max-w-[200px] leading-relaxed">Pilih salah satu item di tabel latihan untuk membuka detail protokol dan timer tempo.</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Status */}
      <footer className="h-12 bg-slate-950 border-t border-slate-800 px-8 flex items-center justify-between sticky bottom-0 z-50 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)] animate-pulse"></div>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Coach Specialist Monitoring Active</span>
        </div>
        <p className="text-[9px] text-slate-600 uppercase tracking-[0.3em] font-bold hidden sm:block italic">© 2024 Hypertrophy Elite — Production Neural System</p>
      </footer>
    </div>
  );
}

