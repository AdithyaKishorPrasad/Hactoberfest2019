function factorial(n){
    //base case
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * factorial(n-1);
    }
}
let n = 5;      //factorial of a number 5
answer = factorial(n) //recursive approach
console.log("The factorial of " + n + " is " + answer);
