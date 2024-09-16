
let input = document.getElementById('input');
const btn = document.getElementById("btn");
const items = document.querySelector(".items");
const checkbox = document.getElementById("check");
const todoForm = document.getElementById("todo-form");
const localStorageName = 'to-do';

// funçao para criar notas 

function criarNota() {
    if (input.value) {
        // localStorege
        let values = JSON.parse(localStorage.getItem(localStorageName) || "[]");
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageName,JSON.stringify(values))
        showValue()
    }
    input.value = "";
};

function showValue() {
    let values = JSON.parse(localStorage.getItem(localStorageName) || "[]");
    items.innerHTML = '';
    for (let i = 0; i < values.length; i++) {
        items.innerHTML += `<div class="itemStyle">
        <div class="box"><input type="checkbox" id="checkbox" onclick='feito()'><label>${values[i]['name']}</label></div>
        <button class="delete" onclick='apagarNota("${values[i]['name']}")'><span class="material-symbols-outlined">
delete
</span></button></div>`
    }

};

function apagarNota(data)
{
    let values = JSON.parse(localStorage.getItem(localStorageName) || "[]");
    let index = values.findIndex(x => x.name == data);
    values.splice(index,1);
    localStorage.setItem(localStorageName,JSON.stringify(values));
        showValue();
};

showValue()

