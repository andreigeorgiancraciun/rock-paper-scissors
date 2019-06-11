
let userScore=0;
let computerScore=0;

const userScore_span = document.getElementById("user-score"); // scorul tau
const computerScore_span = document.getElementById("computer-score");// scorul calculatorului

const result_p = document.querySelector(".result > p"); // the result showed as a msg

const rock_div = document.getElementById("r"); //butonul pentru rock
const paper_div = document.getElementById("p"); //butonul pentru paper
const scissors_div = document.getElementById("s"); // butonul pentru scissors

function getComputerChoise(){
    const choise = ["r", "p", "s"];
    return choise[Math.floor(Math.random()*3)];
}

function convertToWorld(letter){
    if(letter == "r") return "ROCK";
    if(letter == "p") return "PAPER";
    if(letter == "s") return "SCISSORS";
}

function win(userChoise, computerChoise){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWorld(userChoise) + " BEATS " +
                             convertToWorld(computerChoise) + ". YOU WIN!";
    document.getElementById(userChoise).classList.add("green-glow");
    setTimeout(function(){
        document.getElementById(userChoise).classList.remove("green-glow")} , 300);
    
}

function lose(userChoise, computerChoise){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWorld(userChoise) + " LOSES TO " +
                             convertToWorld(computerChoise) + ". YOU LOST!";
    document.getElementById(userChoise).classList.add("red-glow");
    setTimeout(function(){
        document.getElementById(userChoise).classList.remove("red-glow")} , 300);
}

function draw(userChoise, computerChoise){
    
    result_p.innerHTML = convertToWorld(userChoise) + " EQUALS " +
                             convertToWorld(computerChoise) + ". IT'S A DRAW!";
    document.getElementById(userChoise).classList.add("white-glow");
    setTimeout(function(){
        document.getElementById(userChoise).classList.remove("white-glow")} , 300);
}

function game(userChoise){
    const computerChoise = getComputerChoise();
    switch(userChoise + computerChoise){
        //cand castiga userul
        case "rs":
        case "pr":
        case "sp":
            win(userChoise, computerChoise);
            break;
        //cand pierde userul
        case "rp":
        case "ps":
        case "sr":
            lose(userChoise, computerChoise);
            break;
        //egalitate
        case "rr":
        case "pp":
        case "ss":
            draw(userChoise, computerChoise);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function (){
        game("p");
    })

    scissors_div.addEventListener('click', function(){
        game("s");
})
}

main();