class Job {
    constructor(public name: string, public burstTime: number) {}
}

function roundRobinScheduling(jobs: Job[], timeQuantum: number): void {
    let remainingTime: number[] = jobs.map(job => job.burstTime);
    let currentTime = 0;
    let completed = false;

    while (!completed) {
        completed = true;

        for (let i = 0; i < jobs.length; i++) {
            if (remainingTime[i] > 0) {
                completed = false;

                if (remainingTime[i] > timeQuantum) {
                    currentTime += timeQuantum;
                    remainingTime[i] -= timeQuantum;
                    console.log(`Executed ${jobs[i].name} for ${timeQuantum}ms`);
                } else {
                    currentTime += remainingTime[i];
                    console.log(`Executed ${jobs[i].name} for ${remainingTime[i]}ms`);
                    remainingTime[i] = 0;
                }
            }
        }
    }

    console.log(`All jobs completed in ${currentTime}ms`);
}

// Example usage
const jobs: Job[] = [
    new Job("Job 1", 10),
    new Job("Job 2", 5),
    new Job("Job 3", 8),
    new Job("Job 4", 12)
];

const timeQuantum = 4;

roundRobinScheduling(jobs, timeQuantum);