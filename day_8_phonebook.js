function processData(input) {
    //Enter your code here
    let newInput = input.split("\n");
    let queriesLngt = newInput.splice(0, 1);
    let queryName = newInput.splice(queriesLngt);

    for (let i = 0; i < queriesLngt; i++) {
        newInput[i] = newInput[i].split(" ");
    }
    let phoneBook = new Map(newInput);

    for (let i = 0; i < queryName.length; i++) {
        if (phoneBook.has(queryName[i])) {
            console.log(
                queryName[i] + "=" + phoneBook.get(queryName[i])
            );
        } else {
            console.log("Not found");
        }
    }
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
