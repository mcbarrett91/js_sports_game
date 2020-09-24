let reset = document.querySelector("#reset-button");
let teamOneShoot = document.querySelector("#teamone-shoot-button");
let teamTwoShoot = document.querySelector("#teamtwo-shoot-button");
let count1 = 0;
let count2 = 0;
let countGoal1 = 0;
let countGoal2 = 0;
let countReset = 0;

let numReset = document.querySelector("#num-resets");
reset.addEventListener("click", function () {
  shotsTeamOne.innerHTML = 0;
  shotsTeamTwo.innerHTML = 0;
  goal1.innerHTML = 0;
  goal2.innerHTML = 0;
  count1 = 0;
  count2 = 0;
  countGoal1 = 0;
  countGoal2 = 0;
  countReset += 1;
  numReset.innerHTML = countReset;
});

let goal1 = document.querySelector("#teamone-numgoals");
let shotsTeamOne = document.querySelector("#teamone-numshots");
teamOneShoot.addEventListener("click", function () {
  count1 += 1;
  shotsTeamOne.innerHTML = count1;
  if (Math.random() > 0.75) {
    countGoal1 += 1;
    goal1.innerHTML = countGoal1;
  }
});

let goal2 = document.querySelector("#teamtwo-numgoals");
let shotsTeamTwo = document.querySelector("#teamtwo-numshots");
teamTwoShoot.addEventListener("click", function () {
  count2 += 1;
  shotsTeamTwo.innerHTML = count2;
  if (Math.random() > 0.75) {
    countGoal2 += 1;
    goal2.innerHTML = countGoal2;
  }
});
