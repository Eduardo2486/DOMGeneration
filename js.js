var parrafos =  document.getElementsByClassName("parrafos");
console.log(parrafos);

document.getElementsByClassName('parrafos')[0].textContent = "text - textContent and getElementsByClassName";
document.getElementsByClassName('parrafos')[1].innerHTML = "text - innerHTML and getElementsByClassName";
document.querySelector('#parrafo3').textContent = "text - textContent and querySelector"; 
document.getElementById('parrafo4').innerHTML = "text - innerHTML and getElementById";


var parrafo1 = document.querySelectorAll('.parrafos')[0];
var parrafo2 = document.querySelector('#parrafo2');

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(parrafo1);
console.log(parrafo2);