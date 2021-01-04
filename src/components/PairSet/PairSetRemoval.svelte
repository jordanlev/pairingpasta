<script>
  import { pairSets } from '../../pairSetsStore.js';

  export let pairSetIndex;

  let isConfirming = false;

  function confirm() {
    isConfirming = true;
  }

  function cancel() {
    isConfirming = false;
  }

  function proceed() {
    pairSets.removePairSet(pairSetIndex);
    isConfirming = false;
  }
</script>

<style>
  div {
    float: right;
    font-weight: normal;
  }
  a, a:visited {
    text-decoration: none;
  }
</style>

<div>
  {#if isConfirming}
    [Are you sure?
    <a href="#" role="button" on:click|preventDefault={proceed}>Yes</a>
    /
    <a href="#" role="button" on:click|preventDefault={cancel}>No</a>]
  {:else}
    [<a href="#" role="button" on:click|preventDefault={confirm}>Remove</a>]
  {/if}
</div>
