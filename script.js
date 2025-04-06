//part 1
const student = {
    name: "ashley",
    age: 24,
    enrolled: true,
    courses: ["math", "english", "science"],
}

console.log(student.name, student.age); // output: ashley 24

//part 2
const jsonString = JSON.stringify(student); // convert object to JSON string
console.log(jsonString); // output: {"name":"ashley","age":24,"enrolled":true,"courses":["math","english","science"]}

const jsonObject = JSON.parse(jsonString); // convert JSON string to object
console.log(jsonObject); 

