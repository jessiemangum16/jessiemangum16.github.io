class Vec {
    constructor (x,y){
        this.x = x;
        this.y = y;
    }
    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    plus(num2) {
        return { x: this.x + num2.x, y: this.y + num2.y };
    }
    minus(num2) {
        return { x: this.x - num2.x, y: this.y - num2.y };
    }
}

function calculate(){
    const x1 = parseFloat(document.getElementById("x-1").value);
    const y1 = parseFloat(document.getElementById("y-1").value);
    const x2 = parseFloat(document.getElementById("x-2").value);
    const y2 = parseFloat(document.getElementById("y-2").value);

    let outputAdd = new Vec(x1, y1).plus(new Vec(x2, y2));
    let outputSub = new Vec(x1, y1).minus(new Vec(x2, y2));

    let outputDistance1 = new Vec(x1, y1).length;
    let outputDistance2 = new Vec(x2, y2).length;

    document.getElementById("add-div").innerText ="Add: 1st vector + 2nd vector = " + "( " + outputAdd.x + ", " + outputAdd.y + " )";
    document.getElementById("sub-div").innerText = "Subtract: 1st vector - 2nd vector = " + "( " + outputSub.x + ", " + outputSub.y + " )";
    document.getElementById("distance-1").innerText = "Vector distance from origin: " + outputDistance1.toFixed(2);
    document.getElementById("distance-2").innerText = "Vector distance from origin: " + outputDistance2.toFixed(2);
}



