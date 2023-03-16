// casting with `as`
let x: unknown = "anonymous"
console.log((x as string).length);

// casting with <>
console.log((<string>x).length);  // doesn't work in TSX

// forcing cast
console.log(((x as unknown) as number));

// exe
let myVar: unknown = "Hello world!";
console.log((<string>myVar).length);
console.log((myVar as string).length);

