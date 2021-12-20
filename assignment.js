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
        rollNum: 1,
        name: 'David',
        marks: {
            maths: 40,
            phy: 10,
            chem: 43
        }
    },
];

const mathsTopper = students.reduce( (prev, curr) => curr.marks.maths > prev.marks.maths ? curr : prev);
console.log(mathsTopper);