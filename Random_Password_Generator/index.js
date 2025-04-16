const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let firstRes=document.getElementById("ipt1");
let secondRes=document.getElementById("ipt2");
let inputfld=document.getElementById("ipt-num");

function check(){
    let count=inputfld.value;
    if(count<8){
        alert("Atleast 8 Characters")
    }else{
        return count;
    }
}
function generate(){
    firstRes.textContent=password();
    secondRes.textContent=password();
    check()
}


function password(){
    let len=check();
    let result="";
    for(let i=0;i<len;i++){
        let k=Math.floor(Math.random()*characters.length);
        result +=characters[k];
    }
    return result;
}


