let audioTurn = new Audio("sounds/ting1.mp3");
let win = new Audio("sounds/win.wav");


let turn = "X";
let isGameOver = false;


const changeTurn = ()=>{
    return turn === "X"? "0": "X";
}


const checkWin = ()=>{
    let text = document.getElementsByClassName('text');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if((text[e[0]].innerText === text[e[1]].innerText) && (text[e[2]].innerText === text[e[1]].innerText) && (text[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = text[e[0]].innerText + " Won"
            isGameOver = true
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";
            win.play();
        }
    })
}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let text = element.querySelector('.text');
    element.addEventListener('click', ()=>{
        if(text.innerText === ''){
            text.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isGameOver){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            }
        }
    })
})


reset.addEventListener('click', ()=>{
    let texts = document.querySelectorAll('.text');
    Array.from(texts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isGameOver = false;
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px"
})
