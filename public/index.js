"use strict";
let school = [
    {
        id: 1,
        name: 'Khaled',
        level: 'expert',
        isSenior: true,
    },
    {
        id: 2,
        name: 'Ali',
        level: 'intermediate',
        isSenior: false,
    },
    {
        id: 3,
        name: 'Mohammed',
        level: 'beginner',
        isSenior: false,
    },
];
function print(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
print(school);
function isSenior(student) {
    student.isSenior = !student.isSenior;
    return student;
}
console.log(isSenior({
    id: 1,
    name: 'Khaled',
    level: 'expert',
    isSenior: true,
}));
console.log(school);
function changeCourseNum(teacher, num) {
    teacher.courseNum = num;
    return teacher;
}
console.log(changeCourseNum({
    id: 2,
    name: 'Amer',
    specialty: 'Javascript',
    courseNum: 2,
}, 10));
console.log();
let teachers = [
    {
        id: 1,
        name: 'Ahmad',
        specialty: 'JAVA',
        courseNum: 4,
    },
    {
        id: 2,
        name: 'Amer',
        specialty: 'Javascript',
        courseNum: 2,
    },
    {
        id: 3,
        name: 'Rayan',
        specialty: 'Typescript',
        courseNum: 5,
    },
];
// function printAliases(school: [Teacher, Student, Teacher, Student, Teacher, Student]) {
//   for (let i = 0; i < school.length; i++) {
//     if(typeof school[i] == )
//     console.log(school[i]);
//   }
// }
// printAliases(someSchool);
