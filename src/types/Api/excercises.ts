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

export interface WorkoutPlan {
  name?: string;
  trainings: {
    monday: number | string[];
    tuesday: number | string[];
    wednesday: number | string[];
    thursday: number | string[];
    friday: number | string[];
    saturday: number | string[];
    sunday: number | string[];
  }[];
}
