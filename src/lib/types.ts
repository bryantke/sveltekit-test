// Exercise model
export interface Exercise {
    bodyPart: string;
    equipment: string;
    gifUrl: string;
    id: string;
    name: string;
    target: string;
    secondaryMuscles: string[];
    instructions: string[];
}

// API response schema for getting a list of exercises
export interface ExerciseListResponse {
exercises: Exercise[];
}

// API request schema for searching exercises
export interface ExerciseSearchRequest {
query: string;
}

// API response schema for getting exercise details
export interface ExerciseDetailResponse {
exercise: Exercise;
}

// API request schema for getting exercise by ID
export interface ExerciseByIdRequest {
id: string;
}

// API schema for error responses
export interface ApiErrorResponse {
error: string;
message: string;
}