class Person {
    constructor(nm) {
        this.name = nm;
    }
    greet = () => {
        console.log("Hi, I'm " + this.name + "!");
    }
}
let joe = new Person("Joe");
joe.greet();
setTimeout(joe.greet, 500);