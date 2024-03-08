//select color here, shapes hinge off this.
class shapeColor{
constructor(){
//empty at first
    this.color=''
}
//actually inserts chosen color
setColor(color){
    this.color=(color);
}

}

//SHAPES BELOW, INHERIT COLOR.
//Uses extend to hinge off of shapeColor and use attributes of both to create one final result.

//TRIANGLE

//////////////
class triangle extends shapeColor {
    render() {
        return `polygon points="50 15, 100 100, 0 100" fill="${this.color}" />`;
    }
}
//////////////

//CIRCLE

////////////////
class circle extends shapeColor {
    render() {
        return `<circle cx="25" cy="75" r="40" fill="${this.color}" />`;
    }
}
//////////////

//SQUARE

////////////////////
class square extends shapeColor{
    render(){
        return `<rect x="10" y="10" width="80" height="80" fill="${this.color}" />`;
    }
}
////////////////////

//Export so index.js can use these.

module.exports = {triangle, circle, square}
