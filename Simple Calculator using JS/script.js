//Selecting the input box
let display = document.querySelector('#display');
display.value = "";

//Register button click
const buttonClick = (char) => {
    // on click of operation buttons
    if (char == 'AC') {
        display.value = "";
        display.focus();
    } else {
        display.value += char;
    }
}

// on click of ' = ' or "Enter key"
const calculateValue = () => {
    if (display.value == "") {
        display.setAttribute("placeholder", "Enter a value");
        setTimeout(() => {
            document.getElementById("display").setAttribute("placeholder", "0");
        }, 1200);
    } else {
        //MAIN LOGIC
        //evaluate the value in the input box
        let val = eval(display.value);
        display.value = val;
    }
}

// keyboard ke enter dabaane pe calculation start
document.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        calculateValue();
        display.focus();
    }
});