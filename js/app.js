//DAY 4 HW
//1. Parameters are set within the parenthesis of a function and will change if you call the function with different data inside the ()
//   Arguements are what take place of the parameters when you input them inside the functions ()
//2. return performs the action w/n the background, but won't display the result anywhere. C
//   console.log writes out the information w/n the websites' console


function checkPalindrome(str) {
    str = str.toUpperCase();
    const newArr = [];
    let splitStr = str.split('');
    for(i = 0; i < str.length; i++){
        newArr.unshift(splitStr[i]);
    }
    let backwards = newArr.join('');
    console.log(backwards);
    if(backwards === str) {
        console.log(`This word ${str} is a palindrome!`);
    }
    else {
        console.log(`This word ${str} is not a palindrome.`)
    }
};
checkPalindrome('notradar');
checkPalindrome('racecar');
checkPalindrome('RaceCar')
checkPalindrome('radar');


 function sumDigits(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum
}
console.log(sumDigits(342));

const calculateSide= (a, b) => {
    let c = '';
    let a2 = a **= 2;
    let b2 = b **= 2
    console.log('Side C is equal to ' + (a2 + b2));
}
calculateSide(3, 2);

function sumArray(numArray) {
    let sum2 = 0;
    for (let i = 0; i < numArray.length; i++) {
    sum2 += numArray[i]
    }
     return sum2;
}
console.log(sumArray([2, 4, 10, 3]));


// My first attempt at checkPrime
// const checkPrime = (numP) => {
//     if(numP % 2 === 0){
//         return false;
//     } 
//     else if (Math.sqrt((numP % 1) !== 0)){
//         return false;
//     }
//     else {
//         return true;
//     }
// }

function checkPrime(num) {
    const sqrt = Math.sqrt(num);
    for (let i = 2; i <= sqrt; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(checkPrime(3));
console.log(checkPrime(4));
console.log(checkPrime(8));
console.log(checkPrime(9));
console.log(checkPrime(12));
console.log(checkPrime(7));
console.log(checkPrime(11));

function printPrimes(isNumPrime) {
    for(let i = 2; i < isNumPrime; i++)
    if(checkPrime(i) === true) {
        console.log(i);
    }
}
printPrimes(50);







