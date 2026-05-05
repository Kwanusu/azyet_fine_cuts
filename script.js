let students = {
    1: {
        name: "Joseph",
        age: 40, 
        marks: 80
    },
    2: {
        name: "Derick",
        age: 24, 
        marks: 72
    },
    3: {
        name: "Cecelia",
        age: 30, 
        marks: 82
    },
    4: {
        name: "Kwanusu",
        age: 34, 
        marks: 80
    },
    5: {
        name: "Sonia",
        age: 26, 
        marks: 88
    },
}

function gradingSystem() {
Object.entries(students).forEach(([id, data]) => {
    console.log(`Student ID: ${id}`);
    console.log(`Name: ${data.name}, Marks: ${data.marks}`);
  });
}
gradingSystem();