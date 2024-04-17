let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset"); // Corrected selector
const messageDiv = document.getElementById("message");
let turnO = true;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const allBoxesFilled = () => {
    let filled = true;
    boxes.forEach((box) => {
      if (box.innerText === "") {
        filled = false;
      }
    });
    return filled;
  };

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      console.log("box was clicked");
      if (turnO) {
        box.innerText = "O";
        turnO = false;
      } else {
        box.innerText = "X";
        turnO = true;
      }
      box.disabled = true;
      showWinner();
    });
  });

const checkWinner = () => {
    for (pattern of winPattern) {
      let pos1 = boxes[pattern[0]].innerText;
      let pos2 = boxes[pattern[1]].innerText;
      let pos3 = boxes[pattern[2]].innerText;
      if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
        if (pos1 === pos2 && pos2 === pos3) {
          return pos1; // Return the winner
        }
      }
    }
    return null; // No winner found
  };

  const showWinner = () => {
    const winner = checkWinner();
    if (winner === "X") {
      alert("X wins!");
    } else if (winner === "O") {
      alert("O wins!");
    } else if (allBoxesFilled()) {
      alert("It's a tie!");
    }
  };

  const resetGame = () => {
    // Reset the turn
    turnO = true;
  
    // Clear the text content of all boxes
    boxes.forEach((box) => {
      box.innerText = "";
      box.disabled = false; // Re-enable all boxes
    });
  
    // Clear the message
    messageDiv.textContent = "";
  };

  resetBtn.addEventListener("click", resetGame);