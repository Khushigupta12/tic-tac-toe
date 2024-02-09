let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true; //playerX, playerO

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
    turn0 = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked!");
    if (turn0) {
      box.innerText = "X";
      turn0 = false;
    } else {
      box.innerText = "O";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkWinner = () => {
  for (pat of winPatterns) {
    // console.log(pat[0], pat[1], pat[2]);
    // console.log(
    //   boxes[pat[0]].innerText,
    //   boxes[pat[1]].innerText,
    //   boxes[pat[2]].innerText
    // );
    let pos1 = boxes[pat[0]].innerText;
    let pos2 = boxes[pat[1]].innerText;
    let pos3 = boxes[pat[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        // console.log("winner", pos1);
        showWinner(pos1);
      }
    }
  }
};

newgamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);