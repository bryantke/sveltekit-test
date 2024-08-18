<script lang="ts">
    import { fetchExercises } from '$lib/api';
    import type { Exercise } from '$lib/types';
    import SearchBar from '../components/SearchBar.svelte';
    import ExerciseCard from '../components/ExerciseCard.svelte';

    export let data;

    let exercises: Exercise[] = [];
    let searchQuery = '';
  
    async function handleSearch() {
      exercises = await fetchExercises(searchQuery);
    }
  </script>
  
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Exercise Search</h1>
    <SearchBar bind:value={searchQuery} on:search={handleSearch} />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {#each exercises as exercise}
        <ExerciseCard {exercise} />
      {/each}
    </div>
  </div>