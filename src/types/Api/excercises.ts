export interface Excercise {
  exerciseId: number | string;
  name: string;
  description: string;
  url: string;
}

export interface WorkoutExcercise {
  exerciseId: number | string;
  sets: number;
  reps: number;
}

export interface Workout {
  name: string;
  exercises: WorkoutExcercise[];
}

export interface Workout {
  name: string;
  exercises: WorkoutExcercise[];
}

export interface WorkoutApi {
  name: string;
  id?: string | number;
  exercises: any[];
}
