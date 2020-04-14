module.exports = function(arr) {
  let nSwaps = 0;
  let totalRuns = 0;
  do {
    nSwaps = 0;
    for (let i = 0; i < arr.length - 2; ++i) {
      if (arr[i] === arr[i + 1]) {
        const temp = arr[i + 2];
        arr[i + 2] = arr[i + 1];
        arr[i + 1] = temp;
        ++nSwaps;
      }
    }
    ++totalRuns;
  } while (nSwaps !== 0 && totalRuns < arr.length);
  return arr;
};
