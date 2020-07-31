// Создаём кнопку "Закрыть" и добавляем ее к каждому элементу списка
let todolist = document.getElementsByTagName("LI");
let i;
// В цикле создаем элемент span и вставляем внутрь него текст. Затем проходимся по каждому i-му элементу списка
for (i = 0; i < todolist.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    todolist[i].appendChild(span);
};

// Отрабатываем нажатие на кнопку "закрыть", чтобы скрыть текущий элемент списка с помощью div.style.display = "none";
let close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
};

// Добавляем символ "выполнено" при нажатии на элемент списка
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Создаём новый элемент списка при нажатии на кнопку "Добавить задачу".
function newTask() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    // Реагируем на пустой ввод
    if (inputValue === '') {
        alert("Вы должны хоть что-нибудь написать!");
    } else {
        document.getElementById("myTasks").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    console.log(inputValue);

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
};

// А вот здесь прописываем запуск функции newTask в поле input c id myInput при нажатии на кнопку Enter
document.getElementById("myInput").onkeyup = function (event) {
    if (event.code == "Enter") {
        newTask()
    }
};
