import { obj } from "../script.js";

export function createTable() {
    let table = document.querySelector('table');

    let tr = document.createElement('tr');
    let tdTitle = document.createElement('td');
    let tdDescr = document.createElement('td');
    let tdDate = document.createElement('td');
    let tdTime = document.createElement('td');
    let btnClass = document.createElement('button');

    tdTitle.textContent = obj.inpTitle
    tdDescr.textContent = obj.inpDescription
    tdDate.textContent = new Date().getFullYear();
    tdTime.textContent = new Date().getHours() + ':' + new Date().getMinutes();
    btnClass.textContent = 'В процессе'

    btnClass.classList.add('btnClass');
    btnClass.classList.add('btnClass1');

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

    tr.append(tdTitle, tdDescr, tdDate, tdTime, btnClass);
    table.append(tr);
}