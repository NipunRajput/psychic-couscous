const arr=[1,2,3,4,5,6,7];
 // Error : .forEach function does not exist on the arr variable.


 if(!Array.prototype.newforEach){
    Array.prototype.newforEach=function(userFn){
        const newArr=this;  //this over here is pointing towards the current object(whichever function is calling it).
        for(let i=0;i<newArr.length;i++){
            userFn(newArr[i],i);
        }
    }
}
const val=arr.newforEach(function(value,index){
  console.log(`Value at index ${index} is ${value}`);
});
console.log(val);





