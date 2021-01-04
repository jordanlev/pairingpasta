const PAIR_SETS_KEY = "pairingPastaPairSets";
const PEOPLE_KEY = "pairingPastaPeople";

export function persistPairSets(arr) {
  localStorage.setItem(PAIR_SETS_KEY, JSON.stringify(arr));
}

export function getPersistedPairSets() {
  const json = localStorage.getItem(PAIR_SETS_KEY);
  const arr = json ? JSON.parse(json) : [];
  return arr;
}

export function persistPeople(s) {
  localStorage.setItem(PEOPLE_KEY, s);
}

export function getPersistedPeople() {
  return localStorage.getItem(PEOPLE_KEY) || "";
}
