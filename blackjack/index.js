let isAlive=false;
let card=[];
let firstCard=0;
let secondCard=0;
let cardStr=document.getElementById("card-id");
let sumStr=document.getElementById("sum-id");
let title=document.getElementById("display");
cardStr.textContent= "Card: " + firstCard +" "+secondCard
sumStr.textContent=firstCard+secondCard;
title.textContent="Start a new round"
function pickCard(){
    firstCard=Random();
    secondCard=Random();
    card.push(firstCard);
    card.push(secondCard);
    isAlive=true;
    if(sumStr.textContent<21){
        title.textContent="Pick a New Card";
    }else if(sumStr.textContent>21){
        title.textContent="You Lose!!!";
        isAlive=false;
    }else if(sumStr.textContent==21){
        title.textContent="BlackJack!!!"
        isAlive=false;
    }
}

function newCard(){
    let newVal=Random();
    // sumStr.textContent +=newVal;
}

function Random(){
    let value=(Math.floor(Math.random()*12))+1;
    if(value==1){
        value=10;
    }else if(value>10){
        value=10;
    }
    return value;
}