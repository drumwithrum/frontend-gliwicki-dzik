export interface Excercise {
  excerciseId: number;
  name: string;
  description: string;
  url: string;
}

export interface WorkoutExcercise {
  excerciseId: number;
  sets: number;
  reps: number;
}

export interface Workout {
  name: string;
  excercises: WorkoutExcercise[];
}
