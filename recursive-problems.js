// Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.

// If you are given 5 disks, how do the rods look like after 7 recursive calls?

// How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?

// What is the runtime of your algorithm?
let moves = 0;
const playTowerHanoi = function(disks, startRod, middleRod, endRod) {
    
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
 playTowerHanoi(5, "A", "B", "C"); // 31 moves