1. Find the smallest integer in the array - https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }

2. Geometry Basics: Circle Circumference in 2D - Geometry Basics: Circle Circumference in 2D

  function circleCircumference(circle) {
    return circle.radius * Math.PI * 2;
  }

3. Fun with ES6 Classes #2 - Animals and Inheritance - https://www.codewars.com/kata/56f935002e6c0d55fa000d92/train/javascript

  class Shark extends Animal {
    constructor(name, age, status) {
      super(name, age, 0, "shark", status);
    }
  }

  class Cat extends Animal {
    constructor(name, age, status) {
      super(name, age, 4, "cat", status);
    }
    introduce() {
      return  `Hello, my name is ${this.name} and I am ${this.age} years old.` + `  `+ `Meow meow!`;
    }
  }

  class Dog extends Animal {
    constructor(name, age, status, master) {
      super(name, age, 4, "dog", status);
      this.master = master;
    }
    greetMaster() {
      return `Hello ${this.master}`;
    }
  }



4. Training JS #12: loop statement --for..in and for..of - https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript

  function giveMeFive(obj){
    let five = [];
    for (var key in obj) { 
      if (key.length === 5) {
          five.push(key);
      }  
      if (obj[key].length === 5) {
          five.push(obj[key]);
      }     
    }
    return five;
}
