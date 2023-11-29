// Exercise #1: Decrease the Student Scores
let scores = [89, 70, 60, 50, 100, 71];

// Start coding here
let totalScore = [];

for (let i = 0; i < scores.length; i++) {
  totalScore[i] = scores[i] - 10;
}

console.log(totalScore);
