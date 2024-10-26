//Function of even number check

//Version One | Good
function checkEven(number){
    const result = number%2;
    if(result == 0){
        return number + " is an even number";
    }else{
        return number + " is not an even number";
    }
}
console.log(checkEven(11));

//Version Two | VeryGood
function checkEven2(number){
    if(number%2 == 0){
        return number + " is an even number";
    }else{
        return number + " is not an even number";
    }
}
console.log(checkEven2(2));

//Version Three | Excellent
const checkEven3 = (number) => `${number} is${number % 2 === 0 ? ' ':' not '}an even number.`
console.log(checkEven3(3));

