function compareTriplets(a, b) {
    const [e, d, c] = a;
    const [i, j, k] = b;
    let a_score = 0;
    let b_score = 0;
    let newA = [];
    let newB = [];
    if (a[e] > b[i]) {
        a_score += 1;
    }

    if (b[j] < a[d]) {
        b_score += 1;
    }

    if (a[c] === b[k]) {
        a_score += 0;
        b_score += 0;
    }

    let result = [a_score, b_score];
    console.log(result);
    return result;
}
const array1 = [1, 5, 8];
const array2 = [1, 4, 8];
compareTriplets(array1, array2);
