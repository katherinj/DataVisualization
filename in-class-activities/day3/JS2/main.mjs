class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " is speaking");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

let mydog = new Dog("Rex", "Labrador");

mydog.speak();
