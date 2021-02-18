const gameArea = document.querySelector(".game");
const button = document.querySelector("button");
const message = document.querySelector(".message");
let gamePlay = false;
let score = 0;

button.addEventListener("click", function(){
if (!gamePlay){
gamePlay=true;
gameArea.innerHTML = " ";
score = 0;
maker(6);
button.innerHTML = "check combo";
message.innerHTML = "Guess The Combo";
}else{
//console.log("Checker");
const numbers = document.querySelectorAll(".numb");
score++;
message.innerHTML="Guesses" + score;
let winCndition = 0;
// console.log(numbers);
for(let i=0 ; i<numbers.length; i++){
//  console.log(numbers[i].value);
//  console.log(numbers[i].correct);

if (numbers[i].value == numbers [i].correct){
    // console.log("Match");

    numbers[i].style.backgroundColor="green";
    numbers[i].style.color="white";
    winCndition++;
}else{
    // console.log("No Match");
let color =(numbers[i].value<numbers[i].correct) ? "blue" : "red";
    numbers[i].style.backgroundColor = color;
    numbers[i].style.color= "balck";
}
if (winCndition==numbers.length){
    // console.log("Game Over");
    gameEnd();
}
}
}
});

// we would like to dynamicly create some elements in HTML.
function gameEnd(){
    message.innerHTML="You solved the combo in " + score + " Guesses. ";
gamePlay = false;
button.innerHTML = "Restart The Game";
}
function maker(num){
for (let x=0 ; x< num ; x++){
    let elements = document.createElement("input");
    elements.setAttribute("type", "number");
    elements.max = 9;
    elements.min = 0;
    elements.size = 1;
    elements.order = x;
    elements.classList.add("numb");
    elements.correct = Math.floor (Math.random () *10);
    elements.value = 0;
    elements.style.width = "50px";
    elements.style.height = "30px";

    // console.log(elements);

    gameArea.appendChild(elements);

}
};