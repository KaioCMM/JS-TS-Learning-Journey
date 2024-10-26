// Sum of two of numbers with function

// Version One | Good
function sum(number1, number2){
    const total = number1 + number2
    return total;
};
console.log('Sum of version ONE value', sum(1,0));

// Version Two | Very Good
function sum2(number1, number2){
    return number1+number2;
}
console.log('Sum of version TWO value:',sum(1,1));

//Version Three | Excellent
const sum3 = (number1,number2) => number1+number2;
console.log('Sum of version Three value', sum3(2,1))