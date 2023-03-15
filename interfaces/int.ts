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



// aliases
type carYear = number
type carName = string
type carStatus = boolean
type Car = {
    year: carYear,
    name: carName,
    status_car: carStatus
}

const myCar: Car = {
    name: "LAND CUISER",
    year: 2010,
    status_car: true 
}

console.log("=======================");

console.log(
    "name: "+myCar.name+"\n",
    "Year: "+myCar.name+"\n",
    "status: "+myCar.name+"\n"
);
