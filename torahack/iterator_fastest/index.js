const array = new Array(10000000).fill(0).map((v, i) => i);
let sum = 0;
const len = array.length | 0;
function addSum(v) {
    sum += v;
}

// #1 for
for (let j = 0; j < 5; j++) {
    sum = 0;
    console.time(`for ${j}`);
    for (let i = 0; i < len; i++) {
        sum += array[i];
    }
    console.timeEnd(`for ${j}`);
    console.log(sum);
}

// #2 for of
for (let i = 0; i < 5; i++) {
    sum = 0;
    console.time(`for of ${i}`);
    for (const v of array) {
        sum += v;
    }
    console.timeEnd(`for of ${i}`);
    console.log(sum);
}

// #3-1 forEach(arrow)
for (let i = 0; i < 5; i++) {
    sum = 0;
    console.time(`forEach(arrow) ${i}`);
    array.forEach(v => {
        sum += v;
    });
    console.timeEnd(`forEach(arrow) ${i}`);
    console.log(sum);
}

// 3-2 forEach(pre-defined function)
for (let i = 0; i < 5; i++) {
    sum = 0;
    console.time(`forEach(function) ${i}`);
    array.forEach(addSum);
    console.timeEnd(`forEach(function) ${i}`);
    console.log(sum);
}

// 4-1 map(array)
for (let i = 0; i < 5; i++) {
    sum = 0;
    console.time(`map(arrow) ${i}`);
    array.map(v => sum += v);
    console.timeEnd(`map(arrow) ${i}`);
    console.log(sum);
}

// 4-2 map(pre-defined function)
for (let i = 0; i < 5; i++) {
    sum = 0;
    console.time(`map(function) ${i}`);
    array.map(addSum);
    console.timeEnd(`map(function) ${i}`);
    console.log(sum);
}

// #5 Typed for
for (let j = 0; j < 5; j++) {
    sum = 0;
    console.time(`Typed for ${j}`);
    for (let i = 0; i < len; i = (i + 1) | 0) {
        sum += array[i];
    }
    console.timeEnd(`Typed for ${j}`);
    console.log(sum);
}