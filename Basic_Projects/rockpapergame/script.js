const rockbtn=document.getElementById('rock');
const paperbtn=document.getElementById('paper');
const scissorbtn=document.getElementById('scissor');
const playerscr=document.getElementById('pl1');
const computerscr=document.getElementById('pl2');
const finalrslt=document.getElementById('result');

rockbtn.addEventListener('click',rockfirst);
paperbtn.addEventListener('click',paperfirst);
scissorbtn.addEventListener('click',scissorfirst);
let playercount=0;
let computercount=0;
function rockfirst(){
    const result="rock";
    let chosen=Computer();
    console.log("Player chose:", result);
    console.log("Computer chose:", chosen);
    let outcome="";
    switch (chosen){
        case "rock":
            outcome="It's a Tie";
            break;
        case "scissor":
            outcome="You Win!!, Rock Destroys Scissor";
            playercount++;
            break;
        case "paper":
            outcome="You Lost!!, Paper catches the Rock";
            computercount++;
            break;
    }
    finalrslt.textContent=outcome;
    playerscr.textContent=playercount;
    computerscr.textContent=computercount;
}

function paperfirst(){
    const result="paper";
    let chosen=Computer();
    console.log("Player chose:", result);
    console.log("Computer chose:", chosen);
    let outcome="";
    switch (chosen){
        case "rock":
            outcome="You Win!!, Paper catches Rock";
            playercount++;
            break;
        case "scissor":
            outcome="You Lost!!, Scissor cuts paper";
            computercount++;
            break;
        case "paper":
            outcome="It's a Tie";
            break;
    }
    finalrslt.textContent=outcome;
    playerscr.textContent=playercount;
    computerscr.textContent=computercount;
}

function scissorfirst(){
    const result="scissor";
    let chosen=Computer();
    console.log("Player chose:", result);
    console.log("Computer chose:", chosen);
    let outcome="";
    switch (chosen){
        case "rock":
            outcome="You Lost!!, Scissor destroyed by Rock";
            computercount++;
            break;
        case "scissor":
            outcome="It's a Tie";
            break;
        case "paper":
            outcome="You Win!!, Scissor Cuts Paper"
            playercount++;
            break;
    }
    finalrslt.textContent=outcome;
    playerscr.textContent=playercount;
    computerscr.textContent=computercount;
}

function Computer(){
    const choice=['rock','paper','scissor'];
    let chosen='';
    for(let i=0;i<choice.length;i++){
        chosen=choice[Math.floor(Math.random() * choice.length)];
    }
    return chosen;
}


