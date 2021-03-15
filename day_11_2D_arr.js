"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on("end", (_) => {
    inputString = inputString
        .replace(/\s*$/, "")
        .split("\n")
        .map((str) => str.replace(/\s*$/, ""));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine()
            .split(" ")
            .map((arrTemp) => parseInt(arrTemp, 10));
    }

    let total = -63;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0, curSum = 0; j < arr[i].length - 2; j++) {
            curSum =
                arr[i][j] +
                arr[i][j + 1] +
                arr[i][j + 2] +
                arr[i + 1][j + 1] +
                arr[i + 2][j] +
                arr[i + 2][j + 1] +
                arr[i + 2][j + 2];
            if (curSum > total) total = curSum;
        }
    }
    console.log(total);
}
