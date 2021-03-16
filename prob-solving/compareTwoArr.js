function compareTriplets(a, b) {
    let a_score = 0;
    let b_score = 0;
    let result = [];

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            a_score++;
        } else if (a[i] < b[i]) {
            b_score++;
        } else {
            a_score += 0;
            b_score += 0;
        }
    }

    result.push(a_score, b_score);
    console.log(result);
    return result;
}
const array1 = [2, 3, 8, 6];
const array2 = [1, 4, 8, 3];
compareTriplets(array1, array2);
