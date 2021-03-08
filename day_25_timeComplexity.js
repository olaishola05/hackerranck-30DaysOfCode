function processData(input) {
    //Enter your code here
    const inputs = input.split("\n").splice(1).map(Number);
    inputs.forEach((num) => {
        if (num === 2) {
            console.log("Prime\n");
            return;
        }

        if (num === 1 || num % 2 === 0) {
            console.log("Not prime");
            return;
        }

        for (let i = 3; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                console.log("Not prime");
                return;
            }
        }

        console.log("Prime");
    });
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
