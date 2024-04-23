const n: number = 5;
const m: number = 3;

const available: number[] = [3, 3, 2];
const max: number[][] = [
  [7, 5, 3],
  [3, 2, 2],
  [9, 0, 2],
  [2, 2, 2],
  [4, 3, 3],
];
const allocation: number[][] = [
  [0, 1, 0],
  [2, 0, 0],
  [3, 0, 2],
  [2, 1, 1],
  [0, 0, 2],
];
const need: number[][] = [];

for (let i = 0; i < n; i++) {
  need[i] = [];

  for (let j = 0; j < m; j++) {
    need[i][j] = max[i][j] - allocation[i][j];
  }
}

const work: number[] = [...available];
const finish: boolean[] = new Array(n).fill(false);
const safeSequence: number[] = [];

let count = 0;
while (count < n) {
  let found = false;

  for (let i = 0; i < n; i++) {
    if (!finish[i]) {
      let j;
      for (j = 0; j < m; j++) {
        if (need[i][j] > work[j]) {
          break;
        }
      }

      if (j === m) {
        for (let k = 0; k < m; k++) {
          work[k] += allocation[i][k];
        }

        safeSequence.push(i);
        finish[i] = true;
        found = true;
        count++;
      }
    }
  }

  if (!found) {
    break;
  }
}

if (count === n) {
  console.log("Safe sequence:", safeSequence);
} else {
  console.log("System is in an unsafe state");
}
