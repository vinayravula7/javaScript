

const person = {
    name : "vinay",
    age : 22,
    isStudent : true,
    sub : ["java", "css", "javaScript"],
    sayhello : function(){
        console.log("hello "+ person.name);
    }
};

// console.log(person) // print total object
console.log(person.name)
// console.log(person.sub);
console.log(person.sub[1]);
person.sayhello();