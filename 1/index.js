const input = document.querySelector('.firstStr'); // поле ввода текста
const out = document.querySelector('.changeStr');  // поле изменённого текста

function Change() {
    let strInput = input.value;
    let numStr = strInput.length;
    let newStr = '';

    out.value = '';

    strInput = strInput.trim(); // удаляем пробелы

    for (let i = 0; i <= numStr - 1; i++){
        
        // перебираем строчку посимвольно устанавливая первый символ заглавной буквой , остальные прописными,
        // с помощью тернарного оператора
         (i == 0) ? newStr = newStr + `${strInput[i].toUpperCase()}` : newStr = newStr + `${strInput[i].toLowerCase()}`;
         
    }
    out.value = newStr;
    newStr = '';
}

input.addEventListener('keyup', Change);