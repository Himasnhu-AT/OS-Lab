class PetersonsAlgorithm {
  private flag: boolean[];
  private victim: number;

  constructor() {
    this.flag = [false, false];
    this.victim = 0;
  }

  public lock(pid: number): void {
    this.flag[pid] = true;
    this.victim = pid;
    while (this.flag[1 - pid] && this.victim === pid) {
      // busy wait
    }
  }

  public unlock(pid: number): void {
    this.flag[pid] = false;
  }
}

const petersonsAlgorithm = new PetersonsAlgorithm();

setTimeout(() => {
  petersonsAlgorithm.lock(0);
  console.log("Process 0 is in critical section");
  petersonsAlgorithm.unlock(0);
}, Math.random() * 10);

setTimeout(() => {
  petersonsAlgorithm.lock(1);
  console.log("Process 1 is in critical section");
  petersonsAlgorithm.unlock(1);
}, Math.random() * 100000);
