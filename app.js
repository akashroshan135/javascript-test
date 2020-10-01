console.log("Hello World!!!");

const user = {
    name: "Bob",
    age: 25,
    student: false,
    langs: ["C", "C++", "Java"],

    printName: function () {
        console.log(this.name);
    },
};

user.printName();
