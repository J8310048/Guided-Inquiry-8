// debugger
class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }

    exercise() {
        console.log("I gotta hit 150 bench press? Dang.");
    }

    fetchJob() {
        console.log(`${this.name} picks up kitty litter detergent for a living`);
    }

}


class Programmer extends Person {
    constructor(name, age, height, languages) {
        super(name, age, height)
        this.languages = languages;
        this.busy = true;
    };

    completeTask() {
        (this.busy = false)
    };

    acceptNewTask() {
        (this.busy = true)
    };

    offerNewTask() {
        if (this.busy === true) {
            console.log(`${this.name} can't accept any new tasks right now`);
        } else {
            console.log(`${this.name} would love to take on a new responsibility`);
            this.busy = true;
        }
    }



    learnLanguage(language) {
        this.languages.push(language);
        console.log(`${this.name} learned ${language}!`);
    }

    listLanguages() {
        this.languages.forEach((l) => {
            console.log(`${this.name} knows ${l}`);
        })
    }
}


// example
// array1.forEach((element) => console.log(element));






let person1 = new Person("Harold", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS", "Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31, [("HTML", "CSS", "JS", "R")]);
c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");
c1.listLanguages();
c2.listLanguages();
c3.listLanguages();
console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);
person1.exercise();
person1.fetchJob();
c1.offerNewTask();
c1.completeTask();
c1.offerNewTask();
c1.offerNewTask();
c1.learnLanguage("React");

c1.exercise();
c1.fetchJob();
c2.exercise();
c2.fetchJob();
c3.exercise();
c3.fetchJob();


































// Alumni Offic Hours Practice 

// console.log({ name: "Joshua", age: "mystery", height: "7'0" })

//this is how a contstructor function is made
// class Person {
//     constructor(name, age, height) {
//         this.name = name;
//         this.age = age;
//         this.height = height;

//     }
//     talk() { return this.name + " says hey"; }
// };


// // Person.talk 

// const person1 = new Person("Daniel", 29, 7);
// const person2 = new Person("T'Challa", 38, 6)
// const person3 = {
//     name: "John",
// }
// console.log(person3.name + " says hey");
// console.log(person4.name + " says hey");
// console.log(person1.talk());
// console.log(person2.talk());