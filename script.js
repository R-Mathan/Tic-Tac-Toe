const boxes = Array.from(document.getElementsByClassName('box'));
const playText = document.getElementById('playText');
const restartBtn = document.getElementById('restartBtn');
const spaces = [];
console.log(boxes);
const O_TEXT = "0";
const X_TEXT = "X";
let currentPlayer;

const drawBoard = () =>  {
    boxes.forEach((box,index) => {
        let styleString = '';
        if(index < 3){
            styleString += `border-bottom: 3px solid var(--purple);`;
        }
        if(index % 3==0){
            styleString += `border-right: 3px solid var(--purple);`;
        }
        if(index % 3==2){
            styleString += `border-left: 3px solid var(--purple);`;
        }
        if(index > 5){
            styleString += `border-top: 3px solid var(--purple);`;
        }
        box.style = styleString;
        box.addEventListener('click',boxClicked);
    });
};


const boxClicked = (e) =>{
    const id = e.target.id;
    console.log(id);{
        if(!spaces[id]){
            spaces[id] =currentPlayer;
            e.target.innerHTML = currentPlayer;

            if(playerHasWon()){
                playText.innerText = `${currentPlayer}  has won!`;
                return;
            }
            currentPlayer = currentPlayer === O_TEXT ? X_TEXT : O_TEXT;
        }
    }
}

const playerHasWon = () => {
    if(spaces[1] === currentPlayer){
        if(spaces[2] === currentPlayer && spaces[3] === currentPlayer){
            console.log(`${currentPlayer} wins up top`);
            return true;
        }
        if(spaces[4] === currentPlayer && spaces[7] === currentPlayer){
            console.log(`${currentPlayer} wins on the left`);
            return true;
        }
        if(spaces[5] === currentPlayer && spaces[9] === currentPlayer){
            console.log(`${currentPlayer} wins diagonally`);
            return true;
        }
    }
    else if(spaces[9] === currentPlayer){
        if(spaces[3] === currentPlayer && spaces[6] === currentPlayer){
            console.log(`${currentPlayer} wins up right`);
            return true;
        }
        if(spaces[7] === currentPlayer && spaces[8] === currentPlayer){
            console.log(`${currentPlayer} wins on the left`);
            return true;
        }
    }
    if(spaces[5] === currentPlayer){
        if(spaces[2] === currentPlayer && spaces[8] === currentPlayer){
            console.log(`${currentPlayer} vertically`);
            return true;
        }
        if(spaces[4] === currentPlayer && spaces[6] === currentPlayer){
            console.log(`${currentPlayer} horizontally`);
            return true;
        }
    }
};


const restart = () => {

    spaces.forEach((_space,index) => {
        spaces[index] = null;
    });
    boxes.forEach((box) => {
        box.innerHTML = '';
    });
    playText.innerHTML = `Let's Play!`;
    currentPlayer = O_TEXT;
};

restartBtn.addEventListener('click', restart);
restart();
drawBoard();