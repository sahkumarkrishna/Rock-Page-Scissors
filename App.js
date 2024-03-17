let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score"); // Fixed selector
const compScorePara = document.querySelector("#comp-score"); // Fixed selector

const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3); // Fixed Math.random()
    return options[randIdx];
};

const drawGame = () => { // Fixed function name
    msg.innerText = "Game was a draw. Play again!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => { // Fixed parameter name for clarity
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore; // Fixed variable name
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}.`; // Added missing spaces
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore; // Fixed variable name
        msg.innerText = `You Lost! ${compChoice} beats Your ${userChoice}.` // Added missing spaces
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => { // Fixed parameter name for clarity
    const compChoice = generateComputerChoice(); // Fixed function name
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "scissors" ? true : false;
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock" ? true : false;
        } else { // Assuming the choice is "scissors"
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
