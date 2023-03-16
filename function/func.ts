// get UTC
function getTime(): number | string {
    return new Date().getTimezoneOffset()
}
// optional params
function setup(ln?:boolean) : string {
    return ln ? "statefull" : "stateless"
}

// default params
function size(x: number = 5) : number {
    return x
}

console.log(getTime());

console.log(setup());

console.log(size());


