// Teacher Registration
document.getElementById('teacherRegisterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Teacher registered successfully!');
});

// Teacher Login
document.getElementById('teacherLoginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Teacher logged in successfully!');
});

// Add Student Records
document.getElementById('addStudentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const studentID = document.getElementById('studentID').value;
    const studentName = document.getElementById('studentName').value;
    const subjectsMarks = document.getElementById('subjectsMarks').value;

    const table = document.querySelector('#studentRecordsTable tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${studentID}</td><td>${studentName}</td><td>${subjectsMarks}</td>`;
    table.appendChild(newRow);

    alert('Student record added successfully!');
});

// Student Registration
document.getElementById('studentRegisterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Student registered successfully!');
});

// Student Login
document.getElementById('studentLoginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Student logged in successfully!');
});

// View Result
document.getElementById('viewResultButton').addEventListener('click', function() {
    const studentID = document.getElementById('viewResultID').value;
    const records = document.querySelectorAll('#studentRecordsTable tbody tr');
    let result = 'Result not found';

    records.forEach(row => {
        if (row.children[0].innerText === studentID) {
            result = `Name: ${row.children[1].innerText}, Subjects & Marks: ${row.children[2].innerText}`;
        }
    });

    document.getElementById('resultDisplay').innerText = result;
});

// Contact Us Form
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Your message has been sent!');
});
