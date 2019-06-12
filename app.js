
let userScore=0;
let computerScore=0;
const winningScore = 5;

const userScore_span = document.getElementById("user-score"); // scorul tau
const computerScore_span = document.getElementById("computer-score");// scorul calculatorului

const result_p = document.querySelector(".result > p"); // the result showed as a msg

const rock_div = document.getElementById("r"); //butonul pentru rock
const paper_div = document.getElementById("p"); //butonul pentru paper
const scissors_div = document.getElementById("s"); // butonul pentru scissors

const userface_div = document.querySelector(".user-face");
const finalMessage_p = document.getElementById("finalMessage");

function getComputerChoise(){
    const choise = ["r", "p", "s"];
    return choise[Math.floor(Math.random()*3)];
}

function convertToWorld(letter){
    if(letter == "r") return "ROCK";
    if(letter == "p") return "PAPER";
    if(letter == "s") return "SCISSORS";
}

function checkScore(){
    if(userScore === winningScore){
        endGame("player wins");
        
    } else if(computerScore === winningScore){
        endGame("computer wins");
        
    }
}

function resetGame(){
    userScore = 0;
    computerScore = 0;
    
    // incearca sa resetezi mesajele nu doar scorul 
}

function endGame(finalResult){
    if(finalResult === "player wins"){
        finalMessage_p.innerHTML = "YOU WON THE GAME!"
    } else {
        finalMessage_p.innerHTML = "What happened? C'mon, try again!!"
    }

    // optional incearca sa adaugi un buton aici pentru reset

    resetGame();

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
    
    userface_div.innerHTML = "🤩";
    setTimeout(function(){
        userface_div.innerHTML = "&#129300"}, 700);

    checkScore();
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

    userface_div.innerHTML = "🥴";
    setTimeout(function(){
        userface_div.innerHTML = "&#129300"}, 700);

    checkScore();
}

function draw(userChoise, computerChoise){
    
    result_p.innerHTML = convertToWorld(userChoise) + " EQUALS " +
                             convertToWorld(computerChoise) + ". IT'S A DRAW!";
    document.getElementById(userChoise).classList.add("white-glow");
    setTimeout(function(){
        document.getElementById(userChoise).classList.remove("white-glow")} , 300);

    userface_div.innerHTML = "&#129320";
    setTimeout(function(){
        userface_div.innerHTML = "&#129300"}, 700);

    checkScore();
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