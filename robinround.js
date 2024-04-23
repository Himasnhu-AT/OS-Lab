var Job = /** @class */ (function () {
    function Job(name, burstTime) {
        this.name = name;
        this.burstTime = burstTime;
    }
    return Job;
}());
function roundRobinScheduling(jobs, timeQuantum) {
    var remainingTime = jobs.map(function (job) { return job.burstTime; });
    var currentTime = 0;
    var completed = false;
    while (!completed) {
        completed = true;
        for (var i = 0; i < jobs.length; i++) {
            if (remainingTime[i] > 0) {
                completed = false;
                if (remainingTime[i] > timeQuantum) {
                    currentTime += timeQuantum;
                    remainingTime[i] -= timeQuantum;
                    console.log("Executed ".concat(jobs[i].name, " for ").concat(timeQuantum, "ms"));
                }
                else {
                    currentTime += remainingTime[i];
                    console.log("Executed ".concat(jobs[i].name, " for ").concat(remainingTime[i], "ms"));
                    remainingTime[i] = 0;
                }
            }
        }
    }
    console.log("All jobs completed in ".concat(currentTime, "ms"));
}
// Example usage
var jobs = [
    new Job("Job 1", 10),
    new Job("Job 2", 5),
    new Job("Job 3", 8),
    new Job("Job 4", 12)
];
var timeQuantum = 4;
roundRobinScheduling(jobs, timeQuantum);
