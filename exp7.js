var ResourceAllocationGraph = /** @class */ (function () {
    function ResourceAllocationGraph(resources, processes) {
        this.resources = resources;
        this.processes = processes;
        this.allocated = [];
        this.requested = [];
        for (var i = 0; i < processes.length; i++) {
            this.allocated[i] = [];
            this.requested[i] = [];
            for (var j = 0; j < resources.length; j++) {
                this.allocated[i][j] = false;
                this.requested[i][j] = false;
            }
        }
    }
    ResourceAllocationGraph.prototype.allocate = function (processIndex, resourceIndex) {
        this.allocated[processIndex][resourceIndex] = true;
    };
    ResourceAllocationGraph.prototype.request = function (processIndex, resourceIndex) {
        this.requested[processIndex][resourceIndex] = true;
    };
    ResourceAllocationGraph.prototype.printGraph = function () {
        console.log("Resource Allocation Graph:");
        console.log("Processes: ", this.processes);
        console.log("Resources: ", this.resources);
        console.log("Allocated:");
        console.log(this.allocated);
        console.log("Requested:");
        console.log(this.requested);
    };
    return ResourceAllocationGraph;
}());
var resources = ["R1", "R2", "R3"];
var processes = ["P1", "P2", "P3"];
var graph = new ResourceAllocationGraph(resources, processes);
graph.allocate(0, 0);
graph.allocate(1, 1);
graph.request(2, 2);
graph.printGraph();
