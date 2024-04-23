var Process = /** @class */ (function () {
    function Process(id) {
        this.id = id;
        this.resources = [];
    }
    return Process;
}());
var Resource = /** @class */ (function () {
    function Resource(id) {
        this.id = id;
        this.process = null;
    }
    return Resource;
}());
var WaitForResource = /** @class */ (function () {
    function WaitForResource(process, resource) {
        this.process = process;
        this.resource = resource;
    }
    return WaitForResource;
}());
var WaitForGraph = /** @class */ (function () {
    function WaitForGraph() {
        this.waitList = [];
    }
    WaitForGraph.prototype.addWaitForResource = function (waitForResource) {
        this.waitList.push(waitForResource);
    };
    WaitForGraph.prototype.hasCycle = function () {
        var visited = new Set();
        var recursionStack = new Set();
        function hasCycleUtil(process) {
            console.log("Process:", process.id);
            if (!visited.has(process)) {
                visited.add(process);
                recursionStack.add(process);
                for (var _i = 0, _a = process.resources; _i < _a.length; _i++) {
                    var waitForResource = _a[_i];
                    var nextProcess = waitForResource.resource.process;
                    if (nextProcess &&
                        !visited.has(nextProcess) &&
                        hasCycleUtil(nextProcess)) {
                        return true;
                    }
                    else if (recursionStack.has(nextProcess)) {
                        return true;
                    }
                }
            }
            recursionStack.delete(process);
            return false;
        }
        return hasCycleUtil(this.waitList[0].process);
    };
    return WaitForGraph;
}());
// Example usage
var process1 = new Process(1);
var process2 = new Process(2);
var resource1 = new Resource(1);
var resource2 = new Resource(2);
process1.resources.push(resource1);
process2.resources.push(resource2);
resource1.process = process1;
resource2.process = process2;
var waitForGraph = new WaitForGraph();
waitForGraph.addWaitForResource(new WaitForResource(process1, resource2));
waitForGraph.addWaitForResource(new WaitForResource(process2, resource1));
var hasCycle = waitForGraph.hasCycle();
console.log("Has cycle:", hasCycle);
