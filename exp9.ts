class Process {
  id: number;
  resources: Resource[];

  constructor(id: number) {
    this.id = id;
    this.resources = [];
  }
}

class Resource {
  id: number;
  process: Process | null;
  resource: any;

  constructor(id: number) {
    this.id = id;
    this.process = null;
  }
}

class WaitForResource {
  process: Process;
  resource: Resource;

  constructor(process: Process, resource: Resource) {
    this.process = process;
    this.resource = resource;
  }
}

class WaitForGraph {
  waitList: WaitForResource[];

  constructor() {
    this.waitList = [];
  }

  addWaitForResource(waitForResource: WaitForResource) {
    this.waitList.push(waitForResource);
  }

  hasCycle(): boolean {
    const visited: Set<Process> = new Set();
    const recursionStack: Set<Process> = new Set();

    function hasCycleUtil(process: Process): boolean {
      console.log("Process:", process.id);
      if (!visited.has(process)) {
        visited.add(process);
        recursionStack.add(process);

        for (const waitForResource of process.resources) {
          const nextProcess = waitForResource.resource.process;
          if (
            nextProcess &&
            !visited.has(nextProcess) &&
            hasCycleUtil(nextProcess)
          ) {
            return true;
          } else if (recursionStack.has(nextProcess)) {
            return true;
          }
        }
      }

      recursionStack.delete(process);
      return false;
    }
    return hasCycleUtil(this.waitList[0].process);
  }
}

// Example usage
const process1 = new Process(1);
const process2 = new Process(2);
const resource1 = new Resource(1);
const resource2 = new Resource(2);

process1.resources.push(resource1);
process2.resources.push(resource2);

resource1.process = process1;
resource2.process = process2;

const waitForGraph = new WaitForGraph();
waitForGraph.addWaitForResource(new WaitForResource(process1, resource2));
waitForGraph.addWaitForResource(new WaitForResource(process2, resource1));

const hasCycle: boolean = waitForGraph.hasCycle();
console.log("Has cycle:", hasCycle);
