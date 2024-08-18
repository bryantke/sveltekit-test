<script lang="ts">
    import type { Exercise } from '$lib/types';
    
    export let exercise: Exercise;
  </script>
  
  <div class="bg-white shadow-md rounded-lg p-4">
    <h2 class="text-xl font-semibold mb-2">{exercise.name}</h2>
    <p class="text-gray-600 mb-2">Body Part: {exercise.bodyPart}</p>
    <p class="text-gray-600 mb-2">Target: {exercise.target}</p>
    <p class="text-gray-600 mb-2">Equipment: {exercise.equipment}</p>
    <img src={exercise.gifUrl} alt={exercise.name} class="w-full h-auto mb-2" />
    <h3 class="font-semibold mb-1">Secondary Muscles:</h3>
    <ul class="list-disc list-inside mb-2">
      {#each exercise.secondaryMuscles as muscle}
        <li>{muscle}</li>
      {/each}
    </ul>
    <h3 class="font-semibold mb-1">Instructions:</h3>
    <ol class="list-decimal list-inside">
      {#each exercise.instructions as instruction}
        <li>{instruction}</li>
      {/each}
    </ol>
  </div>