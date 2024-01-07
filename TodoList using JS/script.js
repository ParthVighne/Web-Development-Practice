console.log("working");

function displayItems() {

    //Loads Saved list from local storage
    let savedList = localStorage.getItem("list");
    let todoList = [];
    if (savedList != null) {
        todoList = JSON.parse(savedList);
    }

    //Display Logic
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

displayItems();

const addToList = () => {
    //Loads Saved list from local storage
    let savedList = localStorage.getItem("list");
    let todoList = [];
    if (savedList != null) {
        todoList = JSON.parse(savedList);
    }

    //Add element logic
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
    localStorage.setItem("list", JSON.stringify(todoList));
    displayItems();
}

const deleteFromList = (i) => {
    //Loads Saved list from local storage
    let savedList = localStorage.getItem("list");
    let todoList = [];
    if (savedList != null) {
        todoList = JSON.parse(savedList);
    }

    //Delete note from list
    todoList.splice(i, 1);

    //Save list in local storage
    localStorage.setItem("list", JSON.stringify(todoList));
    displayItems();
}

// const editList = (i) => {
//     let item = todoList[i].item;
//     let dueDate = todoList[i].dueDate;
//     let textBox = document.querySelector("#textBox");
//     let dateBox = document.querySelector("#todoDate");
//     textBox.value = item;
//     textBox.dueDate = dueDate;

// }