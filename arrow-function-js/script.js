const calculateResult = (num) => {
    if(num < 1 || num > 20) {
        console.log("The number is outside of the requested range.");
        return false;
    }

    for (let i = 1; i <= num; i++) {
        const multiplication = i * num;
        console.log(`${i} x ${num} = ${multiplication}`);
    }

    for (let i = 1; i <= num; i++) {
        let factorial = 1;
        for (let j = 1; j <= i; j++) {
            factorial *= j;
        }
        console.log(`The factorial of ${i} is: ${factorial}`);
    }
};

calculateResult("20");