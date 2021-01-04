export function indices(arr) {
  return [...Array(arr.length).keys()];
}

export function flattenArrayOfArrays(arr) {
  return arr.reduce((prev, curr) => [...prev, ...curr], []);
}

export function shuffle(array) {
  // https://stackoverflow.com/a/2450976

  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
}
