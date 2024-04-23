var PetersonsAlgorithm = /** @class */ (function () {
    function PetersonsAlgorithm() {
        this.flag = [false, false];
        this.victim = 0;
    }
    PetersonsAlgorithm.prototype.lock = function (pid) {
        this.flag[pid] = true;
        this.victim = pid;
        while (this.flag[1 - pid] && this.victim === pid) {
            // busy wait
        }
    };
    PetersonsAlgorithm.prototype.unlock = function (pid) {
        this.flag[pid] = false;
    };
    return PetersonsAlgorithm;
}());
var petersonsAlgorithm = new PetersonsAlgorithm();
setTimeout(function () {
    petersonsAlgorithm.lock(0);
    console.log("Process 0 is in critical section");
    petersonsAlgorithm.unlock(0);
}, Math.random() * 10);
setTimeout(function () {
    petersonsAlgorithm.lock(1);
    console.log("Process 1 is in critical section");
    petersonsAlgorithm.unlock(1);
}, Math.random() * 100000);
