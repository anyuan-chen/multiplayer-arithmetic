const twodigit = () => {
    const a = Math.floor(Math.random() * 99) + 1;
    const b = Math.floor(Math.random() * 99) + 1;
    const c = a + b;

    return { num1: a, num2: b, ans: c, sign: "+" }
}


export { twodigit }