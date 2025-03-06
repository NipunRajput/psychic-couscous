//Lets write the working of .map function then I will create a new polyfill with different name with the same function of .map function
//It is applied on Array

const arr=[1,2,3,4,5];

const store=arr.map(arr=>arr*2);

console.log(store);

//Now I have applied the .map function, now i will create my own polyfill with same functionality

if(!Array.prototype.myMap){
    Array.prototype.myMap=function(userFn){
        const newarr=[];
        for(let i=0;i<this.length;i++){
            const up=userFn(this[i],i);
            newarr.push(up)
        }
        return newarr;
    }
}

const arr2=[5,2,3,4,5];

const store2=arr2.myMap(r2=>r2*2);
console.log(store2);

