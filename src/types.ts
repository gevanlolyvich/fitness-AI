export type SplitType = 'PPL' | 'UpperLower' | 'FullBody';

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: string;
  mindMuscle: string;
  category: string;
}

export interface WorkoutDay {
  id: string;
  title: string;
  exercises: Exercise[];
}

export type TrainingProgram = Record<SplitType, WorkoutDay[]>;
