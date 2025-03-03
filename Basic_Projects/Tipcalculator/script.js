const totalamt=document.getElementById('amountp');
const percentip=document.getElementById('tipr');
const result=document.getElementById('GetResult');
const newamt=document.getElementById('total');

// 1) Check value and print from the two inputs
// 2) Calculate the percentage
// 3) AddEventlistner on the button

function checkValue(){
    const money=parseFloat(totalamt.value);
    const bonus=parseFloat(percentip.value);  //converting string to number

    if(isNaN(money) || money<0){
        alert('Enter a Valid Amount');
        if(isNaN(money) || bonus<0.1){
            alert('Enter a Valid Tip');
        }
    }
    const newtotal=money * (bonus/100);
    const newmoney=money + newtotal;
    newamt.innerHTML=`The New Total is $: ${newmoney}`;
}
result.addEventListener('click',checkValue);