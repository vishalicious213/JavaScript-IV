// CODE here for your Lambda Classes

class Person {
    constructor(attribute){
        this.name = attribute.name;
        this.age = attribute.age;
        this.location = attribute.location;
    }
    speak() {
        {return `Hello my name is ${this.name}, I am from ${this.location}.`};
    }
}// Person


class Instructor extends Person {
    constructor(attribute) {
        super(attribute);
        this.specialty = attribute.specialty;
        this.favLanguage = attribute.favLanguage;
        this.catchPhrase = attribute.catchPhrase;
    }
    Demo() {
        {return `Today we are learning about ${this.specialty}`};
    }
    Grade() {
        {return `student receives a perfect score on ${this.specialty}.`}
    }
}// Instructor


