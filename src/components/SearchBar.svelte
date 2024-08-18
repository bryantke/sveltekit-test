<script>
    export let value = '';
  
    function handleSubmit() {
      dispatch('search');
    }
  
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
  </script>
  
  <form on:submit|preventDefault={handleSubmit} class="flex gap-2">
    <input
      type="text"
      bind:value
      placeholder="Search exercises..."
      class="flex-grow p-2 border rounded"
    />
    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">
      Search
    </button>
  </form>