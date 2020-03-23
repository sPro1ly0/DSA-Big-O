// 11. Tower of Hanoi

// Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.

// If you are given 5 disks, how do the rods look like after 7 recursive calls?

// How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?

// What is the runtime of your algorithm?
let moves = 0;
const playTowerHanoi = function (disks, startRod, middleRod, endRod) {
    
    if (disks >= 1) {

        playTowerHanoi(disks - 1, startRod, endRod, middleRod);
        moves++;
        console.log('Move disk from rod ' + startRod + ' to rod ' + endRod);
        console.log(moves);
        playTowerHanoi(disks - 1, middleRod, startRod, endRod)
    }

    return;
}

// playTowerHanoi(3, "A", "B", "C"); // 7 moves
// playTowerHanoi(4, "A", "B", "C"); // 15 moves
// playTowerHanoi(5, "A", "B", "C"); // 31 moves


// Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.
// 1. Counting Sheep

const countingSheep = function (numberOfSheep) {
    
    while (numberOfSheep) {
        if (numberOfSheep > 0) {
            console.log(`${numberOfSheep}: Another sheep jumps over the fence`);
            numberOfSheep -= 1;
        }
        if (numberOfSheep === 0) {
            console.log('All sheep jumped over the fence');
        }
    }
    
};
// countingSheep(3);
// This is a linear time O. The number of operations is proportional to the input number.


// 2. Power Calculator

const powerCalculator = function (base, exponent) {

    if (exponent < 0) {
        return 'exponent should be >= 0';
    } else if (exponent === 0 ) {
        return 1;
    } else {
        return Math.pow(base, exponent);
    }

}

// console.log(powerCalculator(10, 2));

// This is a constant time O. It takes the same amount of time to calculate any power of any number.


// 3. Reverse String

const reverseString = function (str) {
    let newString = '';

    if (str.length === 0) {
        return 'Please enter a string';
    }

    for (let i = 1; i <= str.length; i++) {
        newString += str.charAt(str.length - i)
    }
    return newString;
}

// console.log(reverseString('Hello World'));

// This is a linear time O. The running time is proportional to the string length.


// 4. nth Triangular Number

const triangle = function (num) {
    let sum = 0;

    if (num <= 0) {
        return 0;
    }

    for (let i = 1; i <= num; i++) {
        sum += i;
    }

    return sum;
}

// console.log(triangle(4));

// This is a linear time O. The number of operations is proportional to the input number.


// 5. String Splitter Don't use .split().

const stringSplitter = function (str) {
    let splitArray = [''];
    let s = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == '/') {
            s++;
            splitArray.push('');
        } else {
            splitArray[s] += str.charAt(i)
        }
    }

    return splitArray;
}

// console.log(stringSplitter('02/20/2020'));

// This is a linear time O. The running time is proportional to the string length.


// 6. Fibonacci
let fibonacci = function (num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

// console.log(fibonacci(7));

// This is a linear time O. The number of operations is proportional to the input number.


// 7. Factorial

const factorial = function (num) {

    if (num === 0) {
        return 1;
    } else {
        let product = 1;
        for (let i = 1; i <= num; i++) {
            product = product * i;
        }
        return product;
    }
    
}

console.log(factorial(5));

// This is a linear time O. The number of operations is proportional to the input number.