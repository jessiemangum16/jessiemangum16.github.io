const ticTac = document.getElementById("tic-tac");
const p1 = "X";
const p2 = "O";
let p = p1;

function takeTurn(e) {
    console.log(e.target);
    e.target.innerHTML = p;

    if (p == p1){
        p = p2;
        document.getElementById("player1").style.color = "black";
        document.getElementById("player1").style.textDecoration = "none";
        document.getElementById("player2").style.color = "red";
        document.getElementById("player2").style.textDecoration = "underline";
    }else{
        p = p1;
        document.getElementById("player1").style.color = "red";
        document.getElementById("player1").style.textDecoration = "underline";
        document.getElementById("player2").style.color = "black";
        document.getElementById("player2").style.textDecoration = "none";
    }
}

function resetField(){
    for (let i = 0; i < ticTac.children.length; i++){
        ticTac.children[i].innerText = "";
        p = p1;
    }
}

function draw(){
    for(let i = 0; i < ticTac.children.length; i++){
        if (ticTac.children[i].innerText != "X" && ticTac.children[i].innerText != "O"){
            return false;
        }else{
            return true;
        }
    }
}

ticTac.addEventListener('click', takeTurn);

