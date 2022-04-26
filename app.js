// const game = () => {
//   let pScore = 0;
//   let cScore = 0;

//   //Start the Game
//   const startGame = () => {
//     const playBtn = document.querySelector(".intro button");
//     const introScreen = document.querySelector(".intro");
//     const match = document.querySelector(".match");

//     playBtn.addEventListener("click", () => {
//       introScreen.classList.add("fadeOut");
//       match.classList.add("fadeIn");
//     });
//   };
//   //Play Match
//   const playMatch = () => {
//     const options = document.querySelectorAll(".options button");
//     const playerHand = document.querySelector(".player-hand");
//     const computerHand = document.querySelector(".computer-hand");
//     const hands = document.querySelectorAll(".hands img");

//     hands.forEach(hand => {
//       hand.addEventListener("animationend", function() {
//         this.style.animation = "";
//       });
//     });
//     //Computer Options
//     const computerOptions = ["rock", "paper", "scissors"];

//     options.forEach(option => {
//       option.addEventListener("click", function() {
//         //Computer Choice
//         const computerNumber = Math.floor(Math.random() * 3);
//         const computerChoice = computerOptions[computerNumber];

//         setTimeout(() => {
//           //Here is where we call compare hands
//           compareHands(this.textContent, computerChoice);
//           //Update Images
//           playerHand.src = `./assets/${this.textContent}.png`;
//           computerHand.src = `./assets/${computerChoice}.png`;
//         }, 2000);
//         //Animation
//         playerHand.style.animation = "shakePlayer 2s ease";
//         computerHand.style.animation = "shakeComputer 2s ease";
//       });
//     });
//   };

//   const updateScore = () => {
//     const playerScore = document.querySelector(".player-score p");
//     const computerScore = document.querySelector(".computer-score p");
//     playerScore.textContent = pScore;
//     computerScore.textContent = cScore;
//   };

//   const compareHands = (playerChoice, computerChoice) => {
//     //Update Text
//     const winner = document.querySelector(".winner");
//     //Checking for a tie
//     if (playerChoice === computerChoice) {
//       winner.textContent = "It is a tie";
//       return;
//     }
//     //Check for Rock
//     if (playerChoice === "rock") {
//       if (computerChoice === "scissors") {
//         winner.textContent = "Player Wins";
//         pScore++;
//         updateScore();
//         return;
//       } else {
//         winner.textContent = "Computer Wins";
//         cScore++;
//         updateScore();
//         return;
//       }
//     }
//     //Check for Paper
//     if (playerChoice === "paper") {
//       if (computerChoice === "scissors") {
//         winner.textContent = "Computer Wins";
//         cScore++;
//         updateScore();
//         return;
//       } else {
//         winner.textContent = "Player Wins";
//         pScore++;
//         updateScore();
//         return;
//       }
//     }
//     //Check for Scissors
//     if (playerChoice === "scissors") {
//       if (computerChoice === "rock") {
//         winner.textContent = "Computer Wins";
//         cScore++;
//         updateScore();
//         return;
//       } else {
//         winner.textContent = "Player Wins";
//         pScore++;
//         updateScore();
//         return;
//       }
//     }
//   };

//   //Is call all the inner function
//   startGame();
//   playMatch();
// };

// //start the game function
// game();

// playerHand.style.animation = "shakePlayer 2s ease";
// computerHand.style.animation = "shakeComputer 2s ease";

let random = Math.random() * 3 + 1;
let startButton = document.querySelector(".intro button");
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let computerHand = document.querySelector(".match .hands .computer-hand");
let playerHand = document.querySelector(".match .hands .player-hand");
let score1 = 0,
  score2 = 0;
let hands = document.querySelectorAll(".hands");
let resetButton = document.querySelector(".ending button");

const rockanimation = function () {
  playerHand.style.animation = "shakePlayer 2s ease";
  computerHand.style.animation = "shakeComputer 2s ease";
};

const rockFunction = function () {
  if (score1 === 20 || score2 === 20) {
    document.querySelector(".match").classList.add("fadeout");
    document.querySelector(".match").style.zIndex = "-10";
    document.querySelector(".ending").classList.add("fadein");
    document.querySelector(".ending").style.zIndex = "200";
  } else {
    playerHand.src = "assets/rock.png";
    let playerscore = document.querySelector(".player-score p");
    let computerscore = document.querySelector(".computer-score p");
    let random = Math.floor(Math.random() * 3 + 1);
    if (random === 1) {
      computerHand.src = "assets/rock.png";
    } else if (random === 2) {
      computerHand.src = "assets/paper.png";
    } else if (random === 3) {
      computerHand.src = "assets/scissors.png";
    }
    if (random === 1) {
      document.querySelector(".match .winner").textContent = "Its a draw!";
    } else if (random === 2) {
      document.querySelector(".match .winner").textContent = "Computer wins!";
      score2++;
      computerscore.textContent = score2;
    } else if (random === 3) {
      document.querySelector(".match .winner").textContent = "You win!";
      score1++;
      playerscore.textContent = score1;
    }
  }
};

const paperFunction = function () {
  if (score1 === 20 || score2 === 20) {
    document.querySelector(".match").classList.add("fadeout");
    document.querySelector(".match").style.zIndex = "-10";
    document.querySelector(".ending").classList.add("fadein");
    document.querySelector(".ending").style.zIndex = "200";
  } else {
    playerHand.src = "assets/paper.png";
    let playerscore = document.querySelector(".player-score p");
    let computerscore = document.querySelector(".computer-score p");
    let random = Math.floor(Math.random() * 3 + 1);
    if (random === 1) {
      computerHand.src = "assets/rock.png";
    } else if (random === 2) {
      computerHand.src = "assets/paper.png";
    } else if (random === 3) {
      computerHand.src = "assets/scissors.png";
    }
    if (random === 1) {
      document.querySelector(".match .winner").textContent = "You win!!";
      score1++;
      playerscore.textContent = score1;
    } else if (random === 2) {
      document.querySelector(".match .winner").textContent = "Its a draw";
    } else if (random === 3) {
      document.querySelector(".match .winner").textContent = "Computer wins!";
      score2++;
      computerscore.textContent = score2;
    }
  }
};

const scissorsFunction = function () {
  if (score1 === 20 || score2 === 20) {
    document.querySelector(".match").classList.add("fadeout");
    document.querySelector(".match").style.zIndex = "-10";
    document.querySelector(".ending").classList.add("fadein");
    document.querySelector(".ending").style.zIndex = "200";
  } else {
    playerHand.src = "assets/scissors.png";
    let playerscore = document.querySelector(".player-score p");
    let computerscore = document.querySelector(".computer-score p");
    let random = Math.floor(Math.random() * 3 + 1);
    if (random === 1) {
      computerHand.src = "assets/rock.png";
    } else if (random === 2) {
      computerHand.src = "assets/paper.png";
    } else if (random === 3) {
      computerHand.src = "assets/scissors.png";
    }
    if (random === 1) {
      document.querySelector(".match .winner").textContent = "Computer wins!!";
      score2++;
      computerscore.textContent = score2;
    } else if (random === 2) {
      document.querySelector(".match .winner").textContent = "You win!!";
      score1++;
      playerscore.textContent = score1;
    } else if (random === 3) {
      document.querySelector(".match .winner").textContent = "Its a draw";
    }
  }
};

const reset = function () {
  let playerscore = document.querySelector(".player-score p");
  let computerscore = document.querySelector(".computer-score p");
  document.querySelector(".match").classList.add("fadein");
  document.querySelector(".match").style.zIndex = "0";
  document.querySelector(".ending").classList.add("fadeout");
  document.querySelector(".ending").style.zIndex = "-10";
  computerscore.textContent = playerscore.textContent = "0";
  score1 = score2 = 0;
};

rock.addEventListener("click", rockFunction);
paper.addEventListener("click", paperFunction);
scissors.addEventListener("click", scissorsFunction);
startButton.addEventListener("click", function () {
  document.querySelector(".match").classList.add("fadein");
  document.querySelector(".match").style.zIndex = "0";
  document.querySelector(".intro").classList.add("fadeout");
  document.querySelector(".intro").style.zIndex = "-10";
});
resetButton.addEventListener("click", function () {
  let playerscore = document.querySelector(".player-score p");
  let computerscore = document.querySelector(".computer-score p");
  computerscore.textContent = playerscore.textContent = "0";
  score1 = score2 = 0;
  document.querySelector(".match").classList.add("fadein");
  document.querySelector(".match").style.zIndex = "0";
  document.querySelector(".ending").classList.add("fadeout");
  document.querySelector(".ending").style.zIndex = "-10";
});
