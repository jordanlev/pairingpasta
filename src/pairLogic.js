import { shuffle, flattenArrayOfArrays } from "./arrayUtils.js";

function splitIntoRandomPairs(arr) {
  const pairs = [];
  shuffle(arr);
  for (let i = 0; i < arr.length; i += 2) {
    pairs.push(arr.slice(i, i + 2));
  }

  //NOTE: if arr.length was odd, final pair contains a single value

  return pairs;
}

function arePairsUnique(existingPairs, newPairs) {
  for (let i = 0; i < newPairs.length; i++) {
    const newPair = newPairs[i];
    for (let j = 0; j < existingPairs.length; j++) {
      const existingPair = existingPairs[j];
      const asSortedString1 = [...existingPair].sort().join();
      const asSortedString2 = [...newPair].sort().join();
      if (asSortedString1 == asSortedString2) {
        return false;
      }
    }
  }

  return true;
}

export function getDistinctRandomPairings(existingPairSets, newPeople) {
  const flatExistingPairs = flattenArrayOfArrays(existingPairSets);

  let attempts = 1000;
  let newPairs;
  while (attempts > 0) {
    newPairs = splitIntoRandomPairs(newPeople);
    if (arePairsUnique(flatExistingPairs, newPairs)) {
      break;
    } else {
      attempts--;
    }
  }

  return newPairs;
}
