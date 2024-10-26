//Sum of arguments value
function Sum(){
    let total = 0;
    for (let argumento of arguments){ // Arguments supports all arguments send
        total += argumento;
    };
    console.log(total);
}

Sum(2,3,2)  // Sum the numbers of the function arguments.