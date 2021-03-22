function plusMinus(arr) {
    let pos = [];
    let neg = [];
    let zero = [];
    const len = arr.length;

    arr.forEach((item) => {
        if (item == 0) {
            zero.push(item);
        } else if (item < 0) {
            neg.push(item);
        } else {
            pos.push(item);
        }
    });
    let z = zero.length / len;
    let n = neg.length / len;
    let p = pos.length / len;
    console.log(
        p.toFixed(6) + "\n" + n.toFixed(6) + "\n" + z.toFixed(6)
    );
}

const testArr = [-4, 3, -9, 0, 4, 1];
plusMinus(testArr);
