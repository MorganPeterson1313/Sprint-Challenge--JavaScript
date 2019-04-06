// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
    constructor(attributes)
    {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
    }

    surfaceArea(){
        function mutiplyerAdder(x, y, z , cb) {
            return cb = 2 * (x * y + x * z + y * z);
            
          }

        console.log(mutiplyerAdder( this.length, this.height, this.width) )
      }
    

      volume(){

        function multiply(x, y, z , cb) {
            return cb = (x * y* z);
          }
        console.log(multiply(this.length, this.width ,this.height ));
      }

    }



    const cuboid = new CuboidMaker({
        length: 4,
        width: 5,
        height: 5
      
      });
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.