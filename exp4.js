function worstFit(blocks, processes) {
    // Sort blocks in descending order of size
    blocks.sort(function (a, b) { return b.size - a.size; });
    for (var _i = 0, processes_1 = processes; _i < processes_1.length; _i++) {
        var process = processes_1[_i];
        var allocated = false;
        for (var _a = 0, blocks_1 = blocks; _a < blocks_1.length; _a++) {
            var block = blocks_1[_a];
            if (!block.allocated && block.size >= process.size) {
                // Allocate the process to the block
                block.allocated = true;
                allocated = true;
                break;
            }
        }
        if (!allocated) {
            console.log("Process ".concat(process.name, " could not be allocated."));
        }
    }
    return blocks;
}
function bestFit(blocks, processes) {
    // Sort blocks in ascending order of size
    blocks.sort(function (a, b) { return a.size - b.size; });
    for (var _i = 0, processes_2 = processes; _i < processes_2.length; _i++) {
        var process = processes_2[_i];
        var allocated = false;
        for (var _a = 0, blocks_2 = blocks; _a < blocks_2.length; _a++) {
            var block = blocks_2[_a];
            if (!block.allocated && block.size >= process.size) {
                // Allocate the process to the block
                block.allocated = true;
                allocated = true;
                break;
            }
        }
        if (!allocated) {
            console.log("Process ".concat(process.name, " could not be allocated."));
        }
    }
    return blocks;
}
function firstFit(blocks, processes) {
    for (var _i = 0, processes_3 = processes; _i < processes_3.length; _i++) {
        var process = processes_3[_i];
        var allocated = false;
        for (var _a = 0, blocks_3 = blocks; _a < blocks_3.length; _a++) {
            var block = blocks_3[_a];
            if (!block.allocated && block.size >= process.size) {
                block.allocated = true;
                allocated = true;
                break;
            }
        }
        if (!allocated) {
            console.log("Process ".concat(process.name, " could not be allocated."));
        }
    }
    return blocks;
}
var blocks = [
    { start: 0, end: 99, size: 100, allocated: false },
    { start: 100, end: 199, size: 100, allocated: false },
    { start: 200, end: 299, size: 100, allocated: false },
];
var processes = [
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
