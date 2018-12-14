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

