//lets understand joins function , Joins create a new string 

const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(""));
// Expected output: "FireAirWater"

console.log(elements.join("-"));
// Expected output: "Fire-Air-Water"


//What is the common observation from all the 3 examples, that all the string are joined together under quotation mark;
if (!Array.prototype.jointest) {
    Array.prototype.jointest = function (separator = ',') {
        let str = '';
        for (let i = 0; i < this.length; i++) {
            str += this[i];
            if (i !== this.length - 1) {
                str += separator;
            }
        }
        return str;
    };
}
const element = ['Hello', 'World', 'Polyfill'];
console.log(elements.jointest());
console.log(elements.jointest('-'));

