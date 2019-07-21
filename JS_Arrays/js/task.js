"use strict";
let students = [];
let inputs = document.getElementsByClassName("student-inputs");
let trItems = "";

function Student(name, surname, email, phone, age) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.age = age;
}

function validateInputs(student) {
    let errorValidationMessage = "";
    if (student.name == "") {
        errorValidationMessage += "Student's name is empty\n";
    }
    if (student.surname == "") {
        errorValidationMessage += "Student's surname is empty\n";
    }
    if (student.email == "") {
        errorValidationMessage += "Student's email is empty\n";
    }
    if (student.phone == "") {
        errorValidationMessage += "Student's phone is empty\n";
    }
    if (student.age == "" || isNaN (student.age))  {
        errorValidationMessage += "Student's age is empty or must be number\n";
    }
    if(errorValidationMessage != ""){
        alert(errorValidationMessage);
        return false;
    }
    return true;
}

function onclickValues() {
    let student = new Student(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value, inputs[4].value);
   if( validateInputs(student) === true){

    students.push(student);

    students.forEach(generateLiItems);

    document.getElementsByClassName("students-list")[0].innerHTML = trItems;

    trItems = "";
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
    inputs[4].value = "";
    }
}
function generateLiItems(val, ind, arr) {
    // liItems+= `<li class = "list-group-item">${val.name} ${val.surname} ${val.email} ${val.phone} -${val.age}</li>`;
    ind++;
    trItems += `<tr>
    <th scope="row">${ind}</th>
    <td>${val.name}</td>
    <td>${val.surname}</td>
    <td>${val.email}</td>
    <td>${val.phone}</td>
    <td>${val.age}</td>
  </tr>`;
}
function sortByStudentAge(){
    students.sort(function(student1, student2){
        // Kicikden boyuye yash duzmek
        return student1.age - student2.age;
    });
    students.forEach(generateLiItems);

    document.getElementsByClassName("students-list")[0].innerHTML = trItems;
    trItems = "";
}

