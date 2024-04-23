var ContiguousAllocation = /** @class */ (function () {
    function ContiguousAllocation(size) {
        this.storage = new Array(size).fill(false);
    }
    ContiguousAllocation.prototype.allocate = function (size) {
        var start = -1;
        var count = 0;
        for (var i = 0; i < this.storage.length; i++) {
            if (!this.storage[i]) {
                if (start === -1) {
                    start = i;
                }
                count++;
                if (count === size) {
                    for (var j = start; j <= i; j++) {
                        this.storage[j] = true;
                    }
                    return start;
                }
            }
            else {
                start = -1;
                count = 0;
            }
        }
        return -1;
    };
    ContiguousAllocation.prototype.deallocate = function (start, size) {
        for (var i = start; i < start + size; i++) {
            this.storage[i] = false;
        }
    };
    return ContiguousAllocation;
}());
var storageSize = 100;
var allocation = new ContiguousAllocation(storageSize);
var file1Size = 20;
var file1Start = allocation.allocate(file1Size);
if (file1Start !== -1) {
    console.log("File 1 allocated at block ".concat(file1Start));
}
else {
    console.log("File 1 allocation failed");
}
var file2Size = 30;
var file2Start = allocation.allocate(file2Size);
if (file2Start !== -1) {
    console.log("File 2 allocated at block ".concat(file2Start));
}
else {
    console.log("File 2 allocation failed");
}
allocation.deallocate(file1Start, file1Size);
console.log("File 1 deallocated");
var file3Size = 40;
var file3Start = allocation.allocate(file3Size);
if (file3Start !== -1) {
    console.log("File 3 allocated at block ".concat(file3Start));
}
else {
    console.log("File 3 allocation failed");
}
