interface Student {
  id: number;
  name: string;
  level: string;
  isSenior: boolean;
}

let school: Student[] = [
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

function print(arr: Student[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

type someSchool = {
  teacher: Teacher;
  student: Student;
};

print(school);

function isSenior(student: Student): Student {
  student.isSenior = !student.isSenior;
  return student;
}

console.log(
  isSenior({
    id: 1,
    name: 'Khaled',
    level: 'expert',
    isSenior: true,
  })
);

interface Teacher {
  id: number;
  name: string;
  specialty: string;
  courseNum: number;
}

console.log(school);

function changeCourseNum(teacher: Teacher, num: number): Teacher {
  teacher.courseNum = num;
  return teacher;
}

console.log(
  changeCourseNum(
    {
      id: 2,
      name: 'Amer',
      specialty: 'Javascript',
      courseNum: 2,
    },
    10
  )
);


