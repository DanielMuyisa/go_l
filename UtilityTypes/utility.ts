import { TupleType } from "typescript";

// interface with optional value
interface Research {
    source: string,
    ref: string
}
// partial
const rs: Partial<Research> = {}
// required
const rsReq: Required<Research> = {
    source: "string",
    ref: "red"
}

// Object Record with key:values
// key: string
// value: number
const utc_time: Record<string, number> = {
    "t1": -20,
    "t2": -40
}

rs.ref = 'ref'
console.log(rs.ref);
console.log(rsReq);

console.log('---- TIME UTC -----\n\n');
console.log(utc_time["t1"]);


// remove key and value in a object
interface Auth {
    id?: number,
    mail: string,
    status: boolean
}
// const Infoo: Required<Auth> = {
//     id: 0,
//     mail: 'smtp@mail.ia',    
//     status: true
// }   

const Retruiv: Omit<Auth, 'mail' | 'status'> = {
    id: 3
    // mail and status not disoi
}


// Pick remove all not specified key
const Rm: Pick<Auth, 'mail'> = {
     mail: 'ftp@mail.ia'
} 
console.log(Rm.mail);
