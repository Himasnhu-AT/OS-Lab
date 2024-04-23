interface Process {
  id: number;
  burstTime: number;
  priority: number;
  arrivalTime: number;
}

function sjfScheduling(processes: Process[]): void {
  const n = processes.length;
  let currentTime = 0;
  let totalWaitingTime = 0;
  let totalTurnaroundTime = 0;

  processes.sort((a, b) => a.burstTime - b.burstTime);

  console.log("Process\tBurst Time\tWaiting Time\tTurnaround Time");

  for (let i = 0; i < n; i++) {
    const process = processes[i];
    const waitingTime = currentTime - process.arrivalTime;
    const turnaroundTime = waitingTime + process.burstTime;

    console.log(
      `${process.id}\t${process.burstTime}\t\t${waitingTime}\t\t${turnaroundTime}`
    );

    totalWaitingTime += waitingTime;
    totalTurnaroundTime += turnaroundTime;
    currentTime += process.burstTime;
  }

  const averageWaitingTime = totalWaitingTime / n;
  const averageTurnaroundTime = totalTurnaroundTime / n;

  console.log("\nAverage Waiting Time:", averageWaitingTime);
  console.log("Average Turnaround Time:", averageTurnaroundTime);
}

const processes: Process[] = [
  { id: 1, burstTime: 6, priority: 2, arrivalTime: 0 },
  { id: 2, burstTime: 8, priority: 1, arrivalTime: 1 },
  { id: 3, burstTime: 4, priority: 3, arrivalTime: 2 },
  { id: 4, burstTime: 3, priority: 4, arrivalTime: 3 },
];

sjfScheduling(processes);
