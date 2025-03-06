//Lets first understand what does .push function does, Its basically adds a element towards the end of a array
//lets declare it

const arr=[1,2,3];

arr.push(5);

console.log(arr);

//Now I will try to create is polyfill with a new name

if(!Array.prototype.pushit){
    Array.prototype.pushit=function(userFn){
        this[this.length]=userFn;
        return this;
    }
}
const array=[4,5,6];
array.pushit(8);
console.log(array);



