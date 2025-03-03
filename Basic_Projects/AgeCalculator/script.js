const dateLabel=document.getElementById('birthday');
const birthDate=document.getElementById('get-resultBtn');
const resultfn=document.getElementById('show-result');

// To take the input and print the result
function calculateAge(){
    const Birthday=dateLabel.value;
    if(Birthday === ""){
        alert('Please Enter a Valid Birth Date');
    }else{
        const age=getAge(Birthday);
        resultfn.innerHTML=`Your Age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}
function getAge(Birthday){
    const BirthdayDate=new Date(Birthday);
    const currentDate=new Date();
    let age=currentDate.getFullYear()-BirthdayDate.getFullYear();
    const months=currentDate.getMonth()-BirthdayDate.getMonth();
    if(months<0 || (months=== 0 && currentDate.getDate()<BirthdayDate.getDate())){
        age--;
    }
    return age;
}
birthDate.addEventListener("click",calculateAge);