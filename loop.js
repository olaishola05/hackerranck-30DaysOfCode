function multiplesOfTen() {
    let n = 2;
    let result;
    let x;
    for (x = 1; x < 11; x++) {
        result = n * x;
        let outcome = `${n} x ${x} = ${result}`;
        console.log(outcome);
    }
}

multiplesOfTen();
