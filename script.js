import { createGrid } from "./components/cletki.js";
import { createTable } from "./components/table.js";
let btnCreate = document.querySelector('.btnCreate');
let vid1 = document.querySelector('.vid1');
let vid2 = document.querySelector('.vid2');
let table = document.querySelector('table');
let dspGrid = document.querySelector('.dspGrid');
let btnClose = document.querySelector('.btnClose');
let modal = document.querySelector('.modal');
let form = document.forms[0];

let obj = {};

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => obj[data])
    .catch(error => console.log(error))

vid1.onclick = () => {
    vid2.classList.remove('vid1');
    vid1.classList.add('vid1');
    table.classList.remove('unactive');
    dspGrid.classList.add('unactive');
};

vid2.onclick = () => {
    vid1.classList.remove('vid1');
    vid2.classList.add('vid1');
    table.classList.add('unactive');
    dspGrid.classList.remove('unactive');
};

btnCreate.onclick = () => {
    modal.style.display = 'block';
};

btnClose.onclick = () => {
    modal.style.display = 'none';
};

form.onsubmit = (e) => {
    e.preventDefault();
    let fn = new FormData(form);
    fn.forEach((value, key) => {
        obj[key] = value;
    });
    modal.style.display = 'none';
    form.reset();
    createTable()
    createGrid()
};

export { obj }