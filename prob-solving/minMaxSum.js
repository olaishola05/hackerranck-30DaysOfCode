function miniMaxSum(arr) {
    let sumOfMin = 0;
    let sumOfMax = 0;
    let sortArr = arr.sort(); //sort the array to get accurate sum

    for (let x = 1; x < sortArr.length; x++) {
        sumOfMin += arr[x];
    }

    for (let j = 0; j < sortArr.length - 1; j++) {
        sumOfMax += arr[j];
    }

    console.log(sumOfMax, sumOfMin);
}

const ar = [1, 2, 3, 4, 5];
const test2 = [7, 69, 2, 221, 8974];
miniMaxSum(test2);
