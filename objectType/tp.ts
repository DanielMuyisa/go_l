// optional type
const car: { type: string, mileage?: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
    type: "Toyota",
};
car.mileage = 2000;

const c: {type: string, e: number} = {
    type: "Ty",
    e: 2
}

console.log(c.e,car.type);


//
const sd: { type: string, model: string, year?:  number} = {
    type: "Toyota",
    model: "Corolla",
    // year: 2009
};


// complex with index
const days: {[index: string]: string} = {}
days.Today = "mon";
console.log(days['Today']);
