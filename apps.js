import {info} from './data.js';

let listado = document.querySelector(".listado");
let btns = document.querySelectorAll(".number");

const urlSearchParams = new URLSearchParams(window.location.search);
const page = urlSearchParams.get("page");

let z;
let cant;

if(page==null){
    z=0;
    cant=info.length/2;
}else{
    z=info.length/2;
    cant=info.length;

    btns[0].classList.remove("active");
    btns[1].classList.add("active");
}

document.addEventListener("DOMContentLoaded", cargarListado);

function cargarListado(){

    for(let i=z;i<cant;i++){
        let li = document.createElement("li");
        li.innerHTML=`<p>${i+1}# ${info[i].titulo}</p> <a href="./cuestionario.html?id=${i}"><span class="btn"><i class="fa-solid fa-arrow-right"></i></span></a>`;
        listado.appendChild(li);
    }
}