class ContiguousAllocation {
  private storage: boolean[];

  constructor(size: number) {
    this.storage = new Array(size).fill(false);
  }

  allocate(size: number): number {
    let start = -1;
    let count = 0;

    for (let i = 0; i < this.storage.length; i++) {
      if (!this.storage[i]) {
        if (start === -1) {
          start = i;
        }
        count++;
        if (count === size) {
          for (let j = start; j <= i; j++) {
            this.storage[j] = true;
          }
          return start;
        }
      } else {
        start = -1;
        count = 0;
      }
    }

    return -1;
  }

  deallocate(start: number, size: number): void {
    for (let i = start; i < start + size; i++) {
      this.storage[i] = false;
    }
  }
}

const storageSize = 100;
const allocation = new ContiguousAllocation(storageSize);

const file1Size = 20;
const file1Start = allocation.allocate(file1Size);
if (file1Start !== -1) {
  console.log(`File 1 allocated at block ${file1Start}`);
} else {
  console.log(`File 1 allocation failed`);
}

const file2Size = 30;
const file2Start = allocation.allocate(file2Size);
if (file2Start !== -1) {
  console.log(`File 2 allocated at block ${file2Start}`);
} else {
  console.log(`File 2 allocation failed`);
}

allocation.deallocate(file1Start, file1Size);
console.log(`File 1 deallocated`);

const file3Size = 40;
const file3Start = allocation.allocate(file3Size);
if (file3Start !== -1) {
  console.log(`File 3 allocated at block ${file3Start}`);
} else {
  console.log(`File 3 allocation failed`);
}
