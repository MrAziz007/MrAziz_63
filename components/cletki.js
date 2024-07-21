import { obj } from "../script.js";

export function createGrid() {
    let dspGrid = document.querySelector('.dspGrid');

    let elems = document.createElement('div');
    let Title = document.createElement('h3');
    let Descr = document.createElement('p');
    let boxTime = document.createElement('div');
    let date = document.createElement('p');
    let Time = document.createElement('p');
    let btnClass = document.createElement('button');

    Title.textContent = obj.inpTitle
    Descr.textContent = obj.inpDescription
    date.textContent = new Date().getFullYear();
    Time.textContent = new Date().getHours() + ':' + new Date().getMinutes();
    btnClass.textContent = 'В процессе'
    
    elems.classList.add('elems');
    btnClass.classList.add('btnClass');
    btnClass.classList.add('btnClass1');
    boxTime.classList.add('boxTime');

    btnClass.onclick = () => {
        if (btnClass.classList.contains('btnClass1')) {
            btnClass.textContent = 'Выполнено';
            btnClass.classList.remove('btnClass1');
            btnClass.classList.add('btnClass2');
        } else if (btnClass.classList.contains('btnClass2')) {
            btnClass.textContent = 'Не выполнено';
            btnClass.classList.remove('btnClass2');
            btnClass.classList.add('btnClass3');
        } else if (btnClass.classList.contains('btnClass3')) {
            btnClass.textContent = 'В процессе';
            btnClass.classList.remove('btnClass3');
            btnClass.classList.add('btnClass1');
        }
    };

    boxTime.append(date, Time)
    elems.append(Title, Descr, boxTime, btnClass);
    dspGrid.append(elems);
}