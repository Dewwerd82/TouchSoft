'use strict';

const addBtn = document.querySelector('.btnAdd');              // кнопка добавить
const btnFilter = document.querySelector('.btnFilter');        // кнопка фильтровать
const btnReset = document.querySelector('.btnReset');          // кнопка сброс
var num = document.querySelector('.num');                      // поле ввода количество
var addAllText = document.querySelector('.addAllText');        // поле добавленных строк
var addFilterText = document.querySelector('.addFilterText');  // поле отфильтрованных строк
var input = document.querySelector('.firstStr');               // поле ввода

var arrStr = [];
var newArr = [];
var arrFil = [];

// перебор массива на строки
function search (arr){
    let str = '';
    arr.forEach((element) => {
        str = str + element + '\n';
      })
       return str;
}

// список добавленных строк
function addArr(){
    newArr = arrStr.push(input.value);
    console.log(arrStr); 
    addAllText.value = search(arrStr);
    input.value = '';
}

// список отфильтрованных строк
function arrFilter(){
    let splits = '';
    let str = '';
    let arr, arrFull = [];
    arrStr.forEach((element) => {                        // перебираем массив строк
        splits = element.split(' ', Number(num.value));  // разделяет строку на элементы, разделителем служит пробел и удаляем ненужные элементы
        str = str + splits.join(' ');                    // соединяем строку по пробелу
        arr = arrFull.push(str);                         // добавляем полученную строку в массив
        str = '';
        console.log(arrFull);
      })

      addFilterText.value = search(arrFull);
}

// очищаем все поля
function reset(){
    addAllText.value = '';
    addFilterText.value = '';
    num.value = 1;
    arrStr = [];
    newArr = [];
}

addBtn.addEventListener('click', addArr);
btnFilter.addEventListener('click', arrFilter);
btnReset.addEventListener('click', reset);