var MemoryLayout = /** @class */ (function () {
    function MemoryLayout() {
        this.blocks = [];
    }
    MemoryLayout.prototype.addBlock = function (startAddress, size) {
        var block = {
            startAddress: startAddress,
            size: size,
            allocated: false,
        };
        this.blocks.push(block);
    };
    MemoryLayout.prototype.insertFile = function (fileSize) {
        var freeBlock = this.blocks.find(function (block) { return !block.allocated && block.size >= fileSize; });
        if (freeBlock) {
            freeBlock.allocated = true;
            console.log("File inserted at address:", freeBlock.startAddress);
        }
        else {
            console.log("No free block available to insert the file.");
        }
    };
    MemoryLayout.prototype.deleteFile = function (startAddress) {
        var block = this.blocks.find(function (block) { return block.startAddress === startAddress; });
        if (block) {
            block.allocated = false;
        }
        else {
            console.log("Block not found.");
        }
    };
    MemoryLayout.prototype.performCompaction = function () {
        var currentAddress = 0;
        var totalMovement = 0;
        for (var _i = 0, _a = this.blocks; _i < _a.length; _i++) {
            var block = _a[_i];
            if (block.allocated) {
                block.startAddress = currentAddress;
                totalMovement += Math.abs(block.startAddress - currentAddress);
                currentAddress += block.size;
            }
        }
        console.log("Total movement of data:", totalMovement);
    };
    return MemoryLayout;
}());
var memoryLayout = new MemoryLayout();
memoryLayout.addBlock(0, 100);
memoryLayout.addBlock(100, 200);
memoryLayout.addBlock(300, 150);
memoryLayout.insertFile(100);
memoryLayout.insertFile(200);
memoryLayout.insertFile(150);
memoryLayout.deleteFile(0);
memoryLayout.performCompaction();
