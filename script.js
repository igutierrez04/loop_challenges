// Print odds 1-20
// Using a loop write code that will console.log all of the odd values from 1 up to 20.

function printOdds(){
    for(var i=1; i<20; i+=2){
        console.log(i);
    }
}

printOdds();

// Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.

function decreasingMultiples(){
    for(var i=100; i>=0; i--){
        if(i % 3 == 0){
            console.log(i);
        }
    }
}

decreasingMultiples();

// Print the sequence
// Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

function printSequence(){
    for(var i = 4; i>=-3.5; i -= 1.5){
        console.log(i);
    }
}

printSequence();

// Sigma
// Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.

function sigma(){
    var sum = 0;
    for(var i = 1; i <=100; i++){
        sum += i;
    }
    console.log(sum)
}

sigma();

// Factorial
// Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.

function fractional(){
    var result = 1;
    for(var i = 0; i < 12; i++){
        result += result * i;
    }
    console.log(result);
}

fractional();