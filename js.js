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


var variable1 = "variable 1";
let variable2 = "variable 2";
const constante = "12342554";


function varTest(){
  let variable3 = "variable 3";
  var x = 31;
  if (true){
    var x = 71;
    console.log(x);
  }
  console.log(x);
}
console.log(variable3);

//ejemplo de constante
const variable4 =variable2;
console.log(varable2);
variable2 = 10;
console.log(varable2);

//Funcion de flecha
const nuevaFuncion = () => {
  let y = 20;
  if (true){
    let y = 50;
    console.log(y);
  }
  console.log(y);
}
nuevaFuncion();

const nombre = "Andrea";
const apellido = "Ferrer";

console.log("Hola mi nombre es " + nombre + "mi apellido es " + apellido);

console.log(`Hola mi nombre es ${nombre} y mi apellido es ${apellido}`);

const arreglo = [1,2,3,4,5];
console.log(arreglo);







let subtitle = document.querySelector('#subtitle'); 
let parrafo = document.querySelector('#parrafo');

console.log(subtitle);

console.log(subtitle.textContent);
subtitle.textContent = 'Nuevo valor';

subtitle.classList.add('red');
subtitle.classList.remove('red');


const animales = ['Perro', 'Gato', 'Mapache', 'Pez', 'Leopardo', 'Raton', 'Zorro'];
const list = document.querySelector('#list');

animales.push('Elefante');


animales.forEach((animal, index) => {
  let item = document.createElement('li');
  item.textContent = `${index + 1} ${animal}`;
  list.appendChild(item);
} );