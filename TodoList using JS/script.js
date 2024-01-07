console.log("working");

let todoList = [{
        item: "Buy Milk",
        dueDate: "07/02/2023"
    },
    {
        item: "Buy Bread",
        dueDate: "07/02/2023"
    },
    {
        item: "Buy BournVita",
        dueDate: "06/03/2023"
    }
];

displayItems();

const addToList = () => {
    let inputElement = document.getElementById("textBox");
    let dateElement = document.getElementById("todoDate");
    let todoItem = inputElement.value;
    let dateItem = dateElement.value;
    if (todoItem != "") {
        todoList.push({
            item: todoItem,
            dueDate: dateItem
        });
        textBox.value = "";
        todoDate.value = "";
    }
    textBox.focus();
    displayItems();
    // console.log(todoList);
}

const deleteFromList = (i) => {
    todoList.splice(i, 1);
    displayItems();
    // console.log(todoList);
}

// const editList = (i) => {
//     let item = todoList[i].item;
//     let dueDate = todoList[i].dueDate;
//     let textBox = document.querySelector("#textBox");
//     let dateBox = document.querySelector("#todoDate");
//     textBox.value = item;
//     textBox.dueDate = dueDate;

// }

function displayItems() {
    let containerElement = document.querySelector(".todo-container");
    let newHTML = "";
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i] != "") {
            // let todoItem = todoList[i].item;
            // let dueDate = todoList[i].dueDate;
            let {
                item,
                dueDate
            } = todoList[i];
            newHTML +=
                `<span>${item}</span>
                 <span>${dueDate}</span>
                 <button type = "button" id = "delete-btn" onclick = "deleteFromList(${i})"> Delete </button>
                 `;
            //  <button type = "button" id = "edit-btn" onclick = "editList(${i})"> Edit </button>
        }
    }
    containerElement.innerHTML = newHTML;
}