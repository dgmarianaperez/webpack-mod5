import _ from 'lodash';
import logo from './UVM.png';
import monito from './github.svg';
import Datos from './datos.csv';
import yaml from './datos.yaml';
import json5 from './datos.json5';
import './estilo.css';
import './estilo.scss';

//operaciones
import sum from './operaciones/sum.js';
import substraction from './operaciones/substraction.js';
import multiplication from './operaciones/multiplication.js';
import division from './operaciones/division.js';
import './operaciones/operaciones.css';
import './operaciones/digital-7.ttf';


document.body.classList.add('fondo'); //poniéndole al body la clase fondo


// service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', ()=> {
        navigator.serviceWorker.register('./service-worker.js').then(registration => {
            console.log("SW resgistrado", registration);
        }).catch(err=>{
            console.log("SW no resgistrado", err)
        })
    })
}

//operaciones
const btn = document.querySelector('#btn');
const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');
const op = document.querySelector('#op');
const res = document.querySelector('#res');

btn.addEventListener('click', e =>{
    switch(op.value){
        case '+':
            res.textContent = sum(n1.value, n2.value);
        break;
        case '-':
            res.textContent = substraction(n1.value, n2.value);
        break;
        case '*':
            res.textContent = multiplication(n1.value, n2.value);
        break;
        case '/':
            res.textContent = division(n1.value, n2.value);
        break;
    }
});
// termina operaciones

// componente principal
function componente() {
    const elemento = document.createElement('div');

    elemento.innerHTML = _.join(['Práctica','realizada en'], ' ');
    elemento.classList.add("columnMenor");
    
    const logoImg = new Image();
    logoImg.src = logo;
    logoImg.classList.add('uvmlogo');
    elemento.appendChild(logoImg);

    const newContent = document.createTextNode("por alumna: Mariana Pérez");
    elemento.appendChild(newContent);

    // creando link
    const link1 = document.createElement("a");
    const imgGH = document.createElement("img");
    imgGH.src = monito;
    link1.href = "https://github.com/dgmarianaperez";
    link1.target = "_blank";
    link1.alt = "Mi github";
    link1.classList.add('mascot');
    link1.appendChild(imgGH);
    elemento.appendChild(link1);
    //document.body.appendChild(link1);    
    
    console.log('Datos de un csv: ' + Datos);
    return elemento;
}

// agregando la función al body
document.body.appendChild(componente());

// llamando variables en consola
console.log(yaml.title);
console.log(json5.owner.name);
console.log(json5.title);
console.log(json5.owner.bio);

