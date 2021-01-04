<script>
  import { getPersistedPeople, persistPeople } from '../localStorage.js';

	import { pairSets } from '../pairSetsStore.js';

  let people = getPersistedPeople();

  function generateNewPairs() {
    pairSets.generateNewPairs(people);
    persistPeople(people);
  }
</script>

<style>
  textarea {
    width: 100%;
  }
</style>

<div>
  <textarea bind:value={people} placeholder="List of people to assign to pairs (separate with linebreaks, commas, or semicolons)"></textarea>
</div>
<div>
  <button type="button" on:click={generateNewPairs}>Generate Pairs</button>
</div>
