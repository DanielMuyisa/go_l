interface Shape {
    getArea: () => number
}

class Siz implements Shape {
    public constructor(protected width: number, protected height: number) {}
    public getArea(): number {
        return this.width * this.height;
    }
}

let siz = new Siz(2,3)
console.log(siz.getArea());
