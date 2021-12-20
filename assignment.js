const students = [
    {
        rollNum: 1,
        name: 'Sam',
        marks: {
            maths: 10,
            phy: 20,
            chem: 21
        }
    },
    {
        rollNum: 2,
        name: 'David',
        marks: {
            maths: 40,
            phy: 10,
            chem: 43
        }
    },
    {
        rollNum: 3,
        name: 'Max',
        marks: {
            maths: 12,
            phy: 80,
            chem: 78
        }
    },
    {
        rollNum: 4,
        name: 'Jimmy',
        marks: {
            maths: 90,
            phy: 30,
            chem: 87
        }
    }
];

let topper = students[0];
for(let student of students){
    if(student.marks.maths > topper.marks.maths) {
        topper = student;
    }
}
console.log('Maths topper is', topper.name);

const topperViaReduce = students.reduce( (prev, curr) => curr.marks.maths > prev.marks.maths ? curr : prev, students[0])
console.log('Maths topper is', topperViaReduce.name);

let totalMathsMarks = students.map(s => s.marks).map(m => m.maths).reduce((res, curr) => res + curr, 0);
console.log('Average math marks is ', totalMathsMarks/students.length);

const res1 = students
    .map((student) => {
        return {
            name: student.name,
            // total: student.marks.maths + student.marks.phy + student.marks.chem
            total: Object.values(student.marks).reduce((res, curr) => res + curr)
        }
    })
    .sort((record1, record2) => record2.total - record1.total)
    .map((record,i) => {
        return {
            rank: i + 1,
            name: record.name,
            total: record.total
        }
    })
    ;

console.log(res1);

const mathsAvg = students
    .map(s => s.marks)
    .reduce((res, curr) => res + curr.maths, 0)/students.length;
const res3 = {
    maths: mathsAvg
};

const totalAvg = students
    .map(s => s.marks)
    .reduce((res, curr) => ({maths: curr.maths + res.maths, chem: curr.chem + res.chem, phy: curr.phy + res.phy}), {maths: 0, chem: 0, phy: 0})
    ;

console.log(totalAvg);

