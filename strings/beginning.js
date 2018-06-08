// we can create strings with literals
const good = 'sleep';
const food = 'cheese';
const dreamJob = 'hotdog vendor'; // this is a camelCase variable 


// capitalize dreamJob but we have to create a new one 
// because we can't make changes to the old one.

const capDreamJob = dreamJob[0].toUpperCase() + dreamJob.slice(1);
console.log("capDreamJob: ", capDreamJob);


