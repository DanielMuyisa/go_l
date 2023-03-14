const arr = [1,2,3]
arr.push(2)

// prevent comming number
let head: number = arr[0]

console.log(head);

// tuble (readonly)
let list: readonly [number, boolean, string]
list = [3,false,'s']
// list.push(3,true,"string")  // error
console.log(list)


const n: [x:number, y: string] = [2,'s']
console.log(n);


// desctruct tuple
const point: [number,number] = [12,34]
const [x,y] = point 
console.log(point);
