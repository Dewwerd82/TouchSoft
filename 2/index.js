let name = prompt('Введите имя','')

function sayHello(str){
    switch(str){
        case 'Oleg' : alert("Hello, " + str); break;
        case 'Viktor' : alert("Hello, " + str); break;
        case 'Mark' : alert("Hi, " + str); break;
        default : alert("How do you do " + str);
    }
}

sayHello(name); 