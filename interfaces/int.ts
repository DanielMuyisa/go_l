interface Square {
    side1?: number,
    side2?: number
}

const makeSqure: Square = {
    side1: 8,
    side2: 8
}
// makeSqure.side1 = 90
console.log(makeSqure);
for (let i = 0; i < makeSqure.side1!; i++) {
    if(i== 0 || i == makeSqure.side1!-1 ) {
        console.log('. . . .  . . . . . . . .');
    }
    console.log(".");
}


// inheritance interfaces
interface Rectangle extends Square {
    width: number, 
    height: number
}

const setSize: Rectangle = {
    width: 30,
    height: 10,
    side1: 100
}

console.log("----- Inheritance interface --------");
console.log(setSize);

