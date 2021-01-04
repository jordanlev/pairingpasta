<script>
  import { pairSets } from '../../pairSetsStore.js';
  export let pairSetIndex;
  export let pairIndex;

  $: pair = $pairSets[pairSetIndex][pairIndex];
  $: person1 = pair[0];
  $: person2 = pair[1] || '';

  function handlePersonChange(e, personIndex) {
    const newPerson = e.target.value;
    pairSets.updatePerson(pairSetIndex, pairIndex, personIndex, newPerson);
  }

  function handleFocus() {
    this.select();
  }
</script>

<style>
  input {
    width: 100%;
  }

  tr:last-child td {
    padding-bottom: 1.5rem;
  }
</style>

<tr>
  <td>Pair #{pairIndex + 1}: </td>
  <td><input value={person1} on:input={(e) => handlePersonChange(e, 0)} on:focus={handleFocus}></td>
  <td><input value={person2} on:input={(e) => handlePersonChange(e, 1)} on:focus={handleFocus}></td>
</tr>