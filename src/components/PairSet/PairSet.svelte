<script>
  import Pair from './Pair.svelte';
  import PairSetRemoval from './PairSetRemoval.svelte';
  import { pairSets } from '../../pairSetsStore.js';
  import { indices } from '../../arrayUtils.js';
  export let pairSetIndex;
</script>

<style>
  th {
    border-top: 1px dotted black;
    padding: 1.5rem 0 0 0;
  }
  tbody:first-child th {
    border-top: none;
    margin-top: 0;
    padding-top: 0;
  }
</style>

<tbody>
  <tr>
    <th colspan="3">
      Day #{pairSetIndex + 1}
      <PairSetRemoval pairSetIndex={pairSetIndex} />
    </th>
  </tr>
  {#each indices($pairSets[pairSetIndex]) as pairIndex}
    <Pair pairSetIndex={pairSetIndex} pairIndex={pairIndex} />
  {/each}
</tbody>