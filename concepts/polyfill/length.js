// Lets first understand what does .length function does, it will return the length of Array;
//lets demonstrate it first, then I will create a polyfill for the same.

const arr=[1,2,3,4,5];

let count=0;
for(let i=0;i<arr.length;i++){
    count++;
}
console.log(count);



//Lets create a polyfill for this.

if(!Array.prototype.len){
    Array.prototype.len=function(userFn){
        let count=0;
        for(let i=0;i<this.length;i++){
            count++;
        }
        return count;
    }
}

const newarr=[2,3,4,5,6];
const l=newarr.len();

