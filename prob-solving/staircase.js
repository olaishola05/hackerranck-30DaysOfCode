function staircase(n) {
    for (let i = 1; i <= n; i++) {
        console.log("#".repeat(i).padStart(n));
    }
}

staircase(5);
