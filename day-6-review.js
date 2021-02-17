function processData(input) {
    //Enter your code here
    let newInput = input.split("\n").slice(1);
    newInput.forEach((s) => {
        let even = "";
        let odd = "";
        for (let i = 0; i < s.length; i++) {
            if (i % 2 === 0) {
                even += s[i];
            } else if (i % 2 !== 0) {
                odd += s[i];
            }
        }
        console.log(even + " " + odd);
    });
}
