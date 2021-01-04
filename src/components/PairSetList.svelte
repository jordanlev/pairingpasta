<script>
  import PairSet from './PairSet/PairSet.svelte';
  import { pairSets } from '../pairSetsStore.js';
  import { indices } from '../arrayUtils.js';
</script>

<style>
  table {
    border-collapse: collapse;
    width: 100%;
  }
</style>

<table>
  {#each indices($pairSets) as pairSetIndex}
    <PairSet pairSetIndex={pairSetIndex} />
  {/each}
</table>
