import type { Exercise, ApiErrorResponse } from './types';

const API_KEY = import.meta.env.VITE_RAPID_API_KEY;
const API_HOST = 'exercisedb.p.rapidapi.com';

async function fetchExercises(query: string): Promise<Exercise[]> {
  const url = `https://${API_HOST}/exercises/bodyPart/${query}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST
    }
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorData: ApiErrorResponse = await response.json();
      throw new Error(errorData.message || 'Failed to fetch exercises');
    }
    const result: Exercise[] = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function fetchExerciseById(id: string): Promise<Exercise> {
  const url = `https://${API_HOST}/exercises/exercise/${id}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST
    }
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorData: ApiErrorResponse = await response.json();
      throw new Error(errorData.message || 'Failed to fetch exercise details');
    }
    const result: Exercise = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { fetchExercises, fetchExerciseById };