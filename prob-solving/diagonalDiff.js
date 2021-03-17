function diagonalDifference(arr) {
    // Write your code here
    let rightToLeft = 0;
    let leftToRight = 0;
    const arrLength = arr.length;

    arr.forEach((ele, ind) => {
        rightToLeft += ele[ind];
        leftToRight += ele[arrLength - 1 - ind];
    });

    return Math.abs(rightToLeft - leftToRight);
}

const arrs = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
];

diagonalDifference(arrs);
