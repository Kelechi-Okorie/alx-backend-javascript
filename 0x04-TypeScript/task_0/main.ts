interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
};

let student1: Student = { firstName: 'John', lastName: 'Doe', age: 30, location: 'Ebonyi' };
let student2: Student = { firstName: 'Jane', lastName: 'Foe', age: 25, location: 'Nigeria' };

const studentsList: Student[] = [student1, student2];

studentsList.forEach((student: Student) => {
    console.log(student.firstName, student.location);
});
