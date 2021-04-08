const combine = (input1: number | string, input2: number | string) => {
    const result = input1 + input2;
    return result;
};

const combineAges = combine(30, 26);

console.log(combineAges);

const combineNames = combine('Max', 'Anna');