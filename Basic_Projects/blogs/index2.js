// const arr=[1,2,3,4];

// const newArr=arr.map(arr=>arr*3);// The .map() function is defined
// console.log(newArr);
// Now lets create our own polfill

if(!Array.prototype.newMap){
    Array.prototype.newMap=function(userFn){
        const newArray=[];
        for(let i=0;i<this.length;i++){
            const value=userFn(this[i],i);
            newArray.push(value);
        }
        return newArray;
    }
}

const arr2=[1,2,3,4];
const newArrr=arr2.newMap(arr2=>arr2*3);// The .map() function is defined
console.log(newArrr);





