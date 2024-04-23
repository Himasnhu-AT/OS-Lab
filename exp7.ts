class ResourceAllocationGraph {
  private resources: string[];
  private processes: string[];
  private allocated: boolean[][];
  private requested: boolean[][];

  constructor(resources: string[], processes: string[]) {
    this.resources = resources;
    this.processes = processes;
    this.allocated = [];
    this.requested = [];

    for (let i = 0; i < processes.length; i++) {
      this.allocated[i] = [];
      this.requested[i] = [];

      for (let j = 0; j < resources.length; j++) {
        this.allocated[i][j] = false;
        this.requested[i][j] = false;
      }
    }
  }

  allocate(processIndex: number, resourceIndex: number) {
    this.allocated[processIndex][resourceIndex] = true;
  }

  request(processIndex: number, resourceIndex: number) {
    this.requested[processIndex][resourceIndex] = true;
  }

  printGraph() {
    console.log("Resource Allocation Graph:");
    console.log("Processes: ", this.processes);
    console.log("Resources: ", this.resources);
    console.log("Allocated:");
    console.log(this.allocated);
    console.log("Requested:");
    console.log(this.requested);
  }
}

const resources = ["R1", "R2", "R3"];
const processes = ["P1", "P2", "P3"];

const graph = new ResourceAllocationGraph(resources, processes);

graph.allocate(0, 0);
graph.allocate(1, 1);
graph.request(2, 2);

graph.printGraph();
