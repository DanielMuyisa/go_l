function versions(x:number | string | Function) {
    return `${x}v`;
}

console.log(versions("win7"));

console.log(versions(newFunction()));

function newFunction(): string | number {
    // return tue; error
    return 9
}

