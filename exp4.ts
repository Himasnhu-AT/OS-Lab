interface Block {
  start: number;
  end: number;
  size: number;
  allocated: boolean;
}

interface Process {
  name: string;
  size: number;
}

function worstFit(blocks: Block[], processes: Process[]): Block[] {
  // Sort blocks in descending order of size
  blocks.sort((a, b) => b.size - a.size);

  for (const process of processes) {
    let allocated = false;

    for (const block of blocks) {
      if (!block.allocated && block.size >= process.size) {
        // Allocate the process to the block
        block.allocated = true;
        allocated = true;
        break;
      }
    }

    if (!allocated) {
      console.log(`Process ${process.name} could not be allocated.`);
    }
  }

  return blocks;
}

function bestFit(blocks: Block[], processes: Process[]): Block[] {
  // Sort blocks in ascending order of size
  blocks.sort((a, b) => a.size - b.size);

  for (const process of processes) {
    let allocated = false;

    for (const block of blocks) {
      if (!block.allocated && block.size >= process.size) {
        // Allocate the process to the block
        block.allocated = true;
        allocated = true;
        break;
      }
    }

    if (!allocated) {
      console.log(`Process ${process.name} could not be allocated.`);
    }
  }

  return blocks;
}

function firstFit(blocks: Block[], processes: Process[]): Block[] {
  for (const process of processes) {
    let allocated = false;

    for (const block of blocks) {
      if (!block.allocated && block.size >= process.size) {
        block.allocated = true;
        allocated = true;
        break;
      }
    }

    if (!allocated) {
      console.log(`Process ${process.name} could not be allocated.`);
    }
  }

  return blocks;
}

const blocks: Block[] = [
  { start: 0, end: 99, size: 100, allocated: false },
  { start: 100, end: 199, size: 100, allocated: false },
  { start: 200, end: 299, size: 100, allocated: false },
];

const processes: Process[] = [
  {
    id: 1,
    name: "Process A",
    size: 50,
    burstTime: 0,
    priority: 0,
    arrivalTime: 0,
  },
  {
    id: 2,
    name: "Process B",
    size: 150,
    burstTime: 0,
    priority: 0,
    arrivalTime: 0,
  },
  {
    id: 3,
    name: "Process C",
    size: 75,
    burstTime: 0,
    priority: 0,
    arrivalTime: 0,
  },
];

console.log("Worst Fit:");
console.log(worstFit(blocks, processes));

console.log("Best Fit:");
console.log(bestFit(blocks, processes));

console.log("First Fit:");
console.log(firstFit(blocks, processes));
