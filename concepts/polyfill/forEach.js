// Lets understand how does foreach function works
//It is function available on Array
//it returns every instance(element) once

const arr=[1,2,3,4,5];

const result=arr.forEach(function(value,index){
    console.log(`The number present are ${value} on the index: ${index}`);
});

console.log(result);

//Now that we have written the actual working of the function, and we kmow it exists, we shall now create the polyfill for forEach() with a different name with the same functionality.

if(!Array.prototype.nowEach){
    Array.prototype.nowEach=function(userFn){
        const newarr=this;//this over here points towards the userFn.
        for(let i=0;i<newarr.length;i++){
            console.log(newarr[i],i);
        }
    }
}
const res=arr.nowEach(function(value,index){
    console.log(`The value is ${value} and the index is ${index}`);
})
console.log(res);

// We have successfully written a polyfill for the forEach function.