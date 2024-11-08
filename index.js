// // // // // All elements
// Elements of first player
const area1=document.getElementById("areaPlayer1")
const nickname1=document.querySelector("#areaPlayer1 h1")
const ball1=document.querySelector("#areaPlayer1 .commonBall")
const ballCurrent1=document.getElementById("tempBall1")
// Elements of second player
const area2=document.getElementById("areaPlayer2")
const nickname2=document.querySelector("#areaPlayer2 h1")
const ball2=document.querySelector("#areaPlayer2 .commonBall")
const ballCurrent2=document.getElementById("tempBall2")
// Control buttons
const newgameBtn=document.getElementById("newgame")
const rolldiceBtn=document.getElementById("rolldice")
const holdBtn=document.getElementById("hold")
const rollimg=document.querySelector(".control img")
const finishBar=document.querySelector(".winner")
const winnerName=document.querySelector(".winner span")
const total1Span=document.querySelector(".total1")
const total2Span=document.querySelector(".total2")
const overlay=document.querySelector(".overlay")
// // // // // Functions
let queue=3
let balCur1=0
let balCur2=0
let balRes1=0
let balRes2=0
const finish=10


rolldiceBtn.addEventListener("click", ()=>{
    let randomNum=Math.floor(Math.random() * 6) + 1;
    rollimg.setAttribute('src', `./assets/images/dice-${randomNum}.png`)
    rollimg.classList.remove("hidden")
    if(randomNum!=1){
        if(queue%2==1){
            balCur1=balCur1+randomNum
            ballCurrent1.innerHTML=balCur1
            area1.classList.add("selectedPlayer")
            area2.classList.remove("selectedPlayer")
        }else if(queue%2==0){
            balCur2=balCur2+randomNum
            ballCurrent2.innerHTML=balCur2
            area1.classList.remove("selectedPlayer")
            area2.classList.add("selectedPlayer")
        }
    }else if(randomNum==1){
        queue+=1
        balCur1=0
        balCur2=0
        ballCurrent1.innerHTML=0
        ballCurrent2.innerHTML=0
    }
})

function openWinner(nickname) {
    finishBar.classList.remove("hidden")
    winnerName.innerHTML=nickname.innerHTML
    total1Span.innerHTML=balRes1
    total2Span.innerHTML=balRes2
    overlay.classList.remove("hidden")
}

holdBtn.addEventListener("click", ()=>{
    if(queue%2==1){
        balRes1+=balCur1
        if(balRes1>=finish){
            openWinner(nickname1)
        }
        ball1.innerHTML=balRes1
        balCur1=0
        ballCurrent1.innerHTML=balCur1
        queue+=1
        area1.classList.add("selectedPlayer")
        area2.classList.remove("selectedPlayer")

    }else if(queue%2==0){
        balRes2+=balCur2
        if(balRes2>=finish){
            openWinner(nickname2)
        }
        ball2.innerHTML=balRes2
        balCur2=0
        ballCurrent2.innerHTML=balCur2
        queue+=1
        area1.classList.remove("selectedPlayer")
        area2.classList.add("selectedPlayer")
    }
})

nickname1.addEventListener("click", ()=>{
    nickname1.innerHTML='<input type="text"/>'
    console.log("hi");
    if(newNick!=null){
        nickname1.innerHTML=newNick
    }
})

function newgame(){
    queue=3
    balCur1=0
    balCur2=0
    balRes1=0
    balRes2=0
    rollimg.classList.add("hidden")
    ballCurrent1.innerHTML=balCur1
    ballCurrent2.innerHTML=balCur2
    ball1.innerHTML=balRes1
    ball2.innerHTML=balRes2
    area1.classList.add("selectedPlayer")
    area2.classList.remove("selectedPlayer")
    finishBar.classList.add("hidden")
    overlay.classList.add("hidden")
}
newgameBtn.addEventListener("click",newgame)



