let student_name = document.querySelector("#studentName");
let student_rollno = document.querySelector("#rollNumber");
let student_marks = document.querySelector("#marks");

let addBtn = document.querySelector("#addBtn");

let studentTable = document.querySelector("#studentData");

let totalStudents = document.querySelector("#totalStudents");
let passStudents = document.querySelector("#passStudents");
let failStudents = document.querySelector("#failStudents");

let total = 0;
let pass = 0;
let fail = 0;

addBtn.addEventListener("click", function () {

    let name = student_name.value;
    let roll = student_rollno.value;
    let marks = Number(student_marks.value);

    let row = document.createElement("tr");

    let tname = document.createElement("td");
    let troll = document.createElement("td");
    let tmarks = document.createElement("td");
    let tgrade = document.createElement("td");
    let tstatus = document.createElement("td");

    tname.innerText = name;
    troll.innerText = roll;
    tmarks.innerText = marks;

    // GRADE
    let grade = "";

    if (marks >= 80) grade = "A+";
    else if (marks >= 70) grade = "A";
    else if (marks >= 60) grade = "B";
    else if (marks >= 50) grade = "C";
    else grade = "F";

    tgrade.innerText = grade;

    // STATUS + STATS
    if (marks >= 50) {
        pass++;
        tstatus.innerHTML = `<span class="badge bg-success">Pass</span>`;
    } else {
        fail++;
        tstatus.innerHTML = `<span class="badge bg-danger">Fail</span>`;
    }

    total++;

    totalStudents.innerText = total;
    passStudents.innerText = pass;
    failStudents.innerText = fail;

    row.append(tname, troll, tmarks, tgrade, tstatus);
    studentTable.append(row);

    // clear inputs
    student_name.value = "";
    student_rollno.value = "";
    student_marks.value = "";

});