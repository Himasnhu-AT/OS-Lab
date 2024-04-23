function sjfScheduling(processes) {
    var n = processes.length;
    var currentTime = 0;
    var totalWaitingTime = 0;
    var totalTurnaroundTime = 0;
    processes.sort(function (a, b) { return a.burstTime - b.burstTime; });
    console.log("Process\tBurst Time\tWaiting Time\tTurnaround Time");
    for (var i = 0; i < n; i++) {
        var process = processes[i];
        var waitingTime = currentTime - process.arrivalTime;
        var turnaroundTime = waitingTime + process.burstTime;
        console.log("".concat(process.id, "\t").concat(process.burstTime, "\t\t").concat(waitingTime, "\t\t").concat(turnaroundTime));
        totalWaitingTime += waitingTime;
        totalTurnaroundTime += turnaroundTime;
        currentTime += process.burstTime;
    }
    var averageWaitingTime = totalWaitingTime / n;
    var averageTurnaroundTime = totalTurnaroundTime / n;
    console.log("\nAverage Waiting Time:", averageWaitingTime);
    console.log("Average Turnaround Time:", averageTurnaroundTime);
}
var processes = [
    { id: 1, burstTime: 6, priority: 2, arrivalTime: 0 },
    { id: 2, burstTime: 8, priority: 1, arrivalTime: 1 },
    { id: 3, burstTime: 4, priority: 3, arrivalTime: 2 },
    { id: 4, burstTime: 3, priority: 4, arrivalTime: 3 },
];
sjfScheduling(processes);
