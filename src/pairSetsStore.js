import { writable } from "svelte/store";
import { getDistinctRandomPairings } from "./pairLogic.js";
import { getPersistedPairSets, persistPairSets } from "./localStorage.js";

function createPairSets() {
  const { subscribe, update } = writable(getPersistedPairSets());

  const generateNewPairs = (people) => {
    if (!people) {
      return;
    }

    const individuals = people
      .split(/[\r\n,;]+/)
      .map((x) => x.trim())
      .filter((x) => x.length);
    const uniqueIndividuals = [...new Set(individuals)];

    if (!uniqueIndividuals.length) {
      return;
    }

    update((pairSets) => {
      const newPairs = getDistinctRandomPairings(pairSets, uniqueIndividuals);
      return [...pairSets, newPairs];
    });
  };

  const updatePerson = (pairSetIndex, pairIndex, personIndex, personName) => {
    update((pairSets) => {
      pairSets[pairSetIndex][pairIndex][personIndex] = personName;
      return pairSets;
    });
  };

  const removePairSet = (removeIndex) => {
    update((pairSets) => {
      pairSets.splice(removeIndex, 1);
      return pairSets;
    });
  };

  return {
    subscribe,
    generateNewPairs,
    updatePerson,
    removePairSet,
  };
}

export const pairSets = createPairSets();

pairSets.subscribe((data) => {
  persistPairSets(data);
});
