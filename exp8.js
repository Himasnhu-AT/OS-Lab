var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var n = 5;
var m = 3;
var available = [3, 3, 2];
var max = [
    [7, 5, 3],
    [3, 2, 2],
    [9, 0, 2],
    [2, 2, 2],
    [4, 3, 3],
];
var allocation = [
    [0, 1, 0],
    [2, 0, 0],
    [3, 0, 2],
    [2, 1, 1],
    [0, 0, 2],
];
var need = [];
for (var i = 0; i < n; i++) {
    need[i] = [];
    for (var j = 0; j < m; j++) {
        need[i][j] = max[i][j] - allocation[i][j];
    }
}
var work = __spreadArray([], available, true);
var finish = new Array(n).fill(false);
var safeSequence = [];
var count = 0;
while (count < n) {
    var found = false;
    for (var i = 0; i < n; i++) {
        if (!finish[i]) {
            var j = void 0;
            for (j = 0; j < m; j++) {
                if (need[i][j] > work[j]) {
                    break;
                }
            }
            if (j === m) {
                for (var k = 0; k < m; k++) {
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
}
else {
    console.log("System is in an unsafe state");
}
