interface MemoryBlock {
  startAddress: number;
  size: number;
  allocated: boolean;
}

class MemoryLayout {
  blocks: MemoryBlock[];

  constructor() {
    this.blocks = [];
  }

  addBlock(startAddress: number, size: number) {
    const block: MemoryBlock = {
      startAddress,
      size,
      allocated: false,
    };

    this.blocks.push(block);
  }

  insertFile(fileSize: number) {
    const freeBlock = this.blocks.find(
      (block) => !block.allocated && block.size >= fileSize
    );

    if (freeBlock) {
      freeBlock.allocated = true;
      console.log("File inserted at address:", freeBlock.startAddress);
    } else {
      console.log("No free block available to insert the file.");
    }
  }

  deleteFile(startAddress: number) {
    const block = this.blocks.find(
      (block) => block.startAddress === startAddress
    );

    if (block) {
      block.allocated = false;
    } else {
      console.log("Block not found.");
    }
  }

  performCompaction() {
    let currentAddress = 0;
    let totalMovement = 0;

    for (const block of this.blocks) {
      if (block.allocated) {
        block.startAddress = currentAddress;
        totalMovement += Math.abs(block.startAddress - currentAddress);
        currentAddress += block.size;
      }
    }

    console.log("Total movement of data:", totalMovement);
  }
}

const memoryLayout = new MemoryLayout();

memoryLayout.addBlock(0, 100);
memoryLayout.addBlock(100, 200);
memoryLayout.addBlock(300, 150);

memoryLayout.insertFile(100);
memoryLayout.insertFile(200);
memoryLayout.insertFile(150);

memoryLayout.deleteFile(0);

memoryLayout.performCompaction();
