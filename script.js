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

//part 3
let {name, age, enrolled, courses} = student; 
console.log(name); 
console.log(age);
console.log(enrolled);
console.log(courses);

let scores = [ 85, 92, 78, 90 ];
let [ first , second ] = scores;
console.log(first);
console.log(second);

//part 4
let studentCopy = { ...student }; 
console.log(studentCopy); 

let modifiedStudent = { ...student, graduationYear: 2023 }; 
console.log(modifiedStudent);

let extraCourses = ["history", "art"];
let mergedCourses = [...student.courses, ...extraCourses];
console.log(mergedCourses);

//part 5
function addCourse() {
    let newCourse = prompt("Enter a new course:"); 
    if (newCourse) {
        student.courses.push(newCourse);
        console.log(`Added course: ${newCourse}`);
    } else {
        console.log("No course added.");
    }
}

function calculateCourses() {
    let totalCourses = student.courses.length;
    console.log(`Total courses: ${totalCourses}`);
}

addCourse();
calculateCourses();

//bonus task
function calculateAverage() {
    return scores.reduce((acc, score) => acc + score, 0) / scores.length;
}

console.log("average of scores:", calculateAverage());