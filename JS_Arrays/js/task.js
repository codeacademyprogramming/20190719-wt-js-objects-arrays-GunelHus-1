"use strict";
let students = [];
let inputs = document.getElementsByClassName("student-inputs");
let trItems = "";

function Student(name,surname,email,phone,age){
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.age = age;
}

function onclickValues(){
    let student = new Student(inputs[0].value, inputs[1].value,inputs[2].value, inputs[3].value, inputs[4].value);

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
function generateLiItems(val, ind, arr ){
    // liItems+= `<li class = "list-group-item">${val.name} ${val.surname} ${val.email} ${val.phone} -${val.age}</li>`;
    trItems += `<tr>
    <th scope="row">${ind}</th>
    <td>${val.name}</td>
    <td>${val.surname}</td>
    <td>${val.email}</td>
    <td>${val.phone}</td>
    <td>${val.age}</td>
  </tr>`;
}
