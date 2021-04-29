function birthdayCakeCandles(candles) {
    // Write your code here
    let newCandles = candles.sort();
    let maxCandle = Math.max(...newCandles);
    let counter = 0;
    for (c of newCandles) {
        if (c == maxCandle) {
            counter++;
        }
    }
    return counter;
}

const abela = [3, 2, 1, 3];
birthdayCakeCandles(abela);
