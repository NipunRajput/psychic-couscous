const rockbtn=document.getElementById('rock');
const paperbtn=document.getElementById('paper');
const scissorbtn=document.getElementById('scissor');
const playerscr=document.getElementById('player');
const computerscr=document.getElementById('computer');

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
    switch (chosen){
        case "rock":
            console.log("tie");
            break;
        case "scissor":
            console.log("Player Wins");
            playercount++;
            break;
        case "paper":
            console.log("Computer Wins");
            computercount++;
            break;
    }
    return computercount, playercount;
}

function paperfirst(){
    const result="paper";
    let chosen=Computer();
    console.log("Player chose:", result);
    console.log("Computer chose:", chosen);
    switch (chosen){
        case "rock":
            console.log("Player Wins");
            playercount++;
            break;
        case "scissor":
            console.log("Computer Wins");
            computercount++;
            break;
        case "paper":
            console.log("Tie");
            break;
    }
    return computercount, playercount;
}

function scissorfirst(){
    const result="scissor";
    let chosen=Computer();
    console.log("Player chose:", result);
    console.log("Computer chose:", chosen);
    switch (chosen){
        case "rock":
            console.log("Computer Wins");
            computercount++;
            break;
        case "scissor":
            console.log("Tie");
            break;
        case "paper":
            console.log("Player Wins");
            playercount++;
            break;
    }
    return computercount, playercount;
}

function Computer(){
    const choice=['rock','paper','scissor'];
    let chosen='';
    for(let i=0;i<choice.length;i++){
        chosen=choice[Math.floor(Math.random() * choice.length)];
    }
    return chosen;
}


