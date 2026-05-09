import { TrainingProgram } from './types';

export const PROGRAMS: TrainingProgram = {
  PPL: [
    {
      id: 'push',
      title: 'Push (Dada, Bahu, Trisep)',
      exercises: [
        {
          id: 'bench-press',
          name: 'Flat Barbell Bench Press',
          sets: 3,
          reps: '8-12',
          mindMuscle: 'Fokus pada peregangan dada saat menurunkan beban dan kontraksi kuat di puncak.',
          category: 'Chest'
        },
        {
          id: 'shoulder-press',
          name: 'Dumbbell Shoulder Press',
          sets: 3,
          reps: '8-12',
          mindMuscle: 'Jaga bahu tetap stabil, tekan beban ke atas tanpa mengunci siku sepenuhnya.',
          category: 'Shoulders'
        },
        {
          id: 'incline-db-press',
          name: 'Incline Dumbbell Press',
          sets: 3,
          reps: '10-12',
          mindMuscle: 'Tekankan pada bagian dada atas. Gunakan tempo lambat untuk kontrol penuh.',
          category: 'Chest'
        },
        {
          id: 'lateral-raise',
          name: 'Lateral Raises',
          sets: 3,
          reps: '12-15',
          mindMuscle: 'Bayangkan menarik tangan keluar ke samping, bukan hanya ke atas.',
          category: 'Shoulders'
        },
        {
          id: 'tricep-pushdown',
          name: 'Triceps Rope Pushdown',
          sets: 3,
          reps: '12-15',
          mindMuscle: 'Kunci posisi siku di samping tubuh, tekan sampai trisep benar-benar terkontraksi.',
          category: 'Triceps'
        }
      ]
    },
    {
      id: 'pull',
      title: 'Pull (Punggung, Bisep)',
      exercises: [
        {
          id: 'lat-pulldown',
          name: 'Lat Pulldown',
          sets: 3,
          reps: '8-12',
          mindMuscle: 'Tarik dengan siku, bayangkan memeras sayap (lats) di bagian bawah.',
          category: 'Back'
        },
        {
          id: 'seated-row',
          name: 'Seated Cable Row',
          sets: 3,
          reps: '8-12',
          mindMuscle: 'Tarik beban menuju perut bawah, rapatkan tulang belikat.',
          category: 'Back'
        },
        {
          id: 'face-pull',
          name: 'Face Pulls',
          sets: 3,
          reps: '12-15',
          mindMuscle: 'Tarik tali ke arah dahi, fokus pada bahu belakang dan otot trapesium.',
          category: 'Rear Delts'
        },
        {
          id: 'db-curl',
          name: 'Dumbbell Bicep Curl',
          sets: 3,
          reps: '10-12',
          mindMuscle: 'Putar pergelangan tangan di puncak gerakan untuk kontraksi maksimal.',
          category: 'Biceps'
        },
        {
          id: 'hammer-curl',
          name: 'Hammer Curls',
          sets: 3,
          reps: '10-12',
          mindMuscle: 'Fokus pada otot brachialis dan lengan bawah.',
          category: 'Biceps'
        }
      ]
    },
    {
      id: 'legs',
      title: 'Legs (Kaki)',
      exercises: [
        {
          id: 'squat',
          name: 'Barbell Back Squat',
          sets: 3,
          reps: '8-12',
          mindMuscle: 'Distribusikan beban di tengah telapak kaki, rasakan quads bekerja saat bangkit.',
          category: 'Quads'
        },
        {
          id: 'leg-press',
          name: 'Leg Press',
          sets: 3,
          reps: '10-12',
          mindMuscle: 'Jangan biarkan punggung bawah terangkat dari kursi. Kontrol penuh di fase negatif.',
          category: 'Quads'
        },
        {
          id: 'leg-curl',
          name: 'Lying Leg Curl',
          sets: 3,
          reps: '12-15',
          mindMuscle: 'Tekan pinggul ke bantalan, rasakan kontraksi penuh pada hamstring.',
          category: 'Hamstrings'
        },
        {
          id: 'leg-extension',
          name: 'Leg Extension',
          sets: 3,
          reps: '12-15',
          mindMuscle: 'Tahan 1 detik di puncak untuk isolasi quads maksimal.',
          category: 'Quads'
        },
        {
          id: 'calf-raise',
          name: 'Standing Calf Raise',
          sets: 4,
          reps: '15-20',
          mindMuscle: 'Berdiri tegak di ujung kaki, regangkan betis sepenuhnya di bawah.',
          category: 'Calves'
        }
      ]
    }
  ],
  UpperLower: [
    {
      id: 'upper',
      title: 'Upper Body',
      exercises: [
        { id: 'db-bench', name: 'Dumbbell Bench Press', sets: 4, reps: '8-12', mindMuscle: 'Rentang gerak maksimal.', category: 'Chest' },
        { id: 'pull-up', name: 'Pull Ups / Lat Pulldown', sets: 4, reps: '8-12', mindMuscle: 'Dorong dada ke atas.', category: 'Back' },
        { id: 'ohp', name: 'Overhead Press', sets: 3, reps: '8-12', mindMuscle: 'Sangat stabilkan core.', category: 'Shoulders' },
        { id: 'rows', name: 'Barbell Row', sets: 3, reps: '10-12', mindMuscle: 'Tarik ke pusar.', category: 'Back' },
      ]
    },
    {
      id: 'lower',
      title: 'Lower Body',
      exercises: [
        { id: 'deadlift', name: 'Romanian Deadlift', sets: 4, reps: '10-12', mindMuscle: 'Tarik pinggul ke belakang.', category: 'Hamstrings' },
        { id: 'goblet-squat', name: 'Goblet Squat', sets: 4, reps: '12-15', mindMuscle: 'Jaga torso tetap tegak.', category: 'Quads' },
        { id: 'walking-lunge', name: 'Walking Lunges', sets: 3, reps: '10/leg', mindMuscle: 'Langkah terkontrol.', category: 'Legs' },
      ]
    }
  ],
  FullBody: [
    {
      id: 'full-body-1',
      title: 'Full Body Session',
      exercises: [
        { id: 'squat-fb', name: 'Squats', sets: 3, reps: '8-12', mindMuscle: 'Power from legs.', category: 'Legs' },
        { id: 'bench-fb', name: 'Bench Press', sets: 3, reps: '8-12', mindMuscle: 'Chest focus.', category: 'Chest' },
        { id: 'row-fb', name: 'Rows', sets: 3, reps: '8-12', mindMuscle: 'Back squeeze.', category: 'Back' },
        { id: 'ohp-fb', name: 'Shoulder Press', sets: 2, reps: '10-12', mindMuscle: 'Shoulder drive.', category: 'Shoulders' },
      ]
    }
  ]
};
