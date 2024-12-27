
const calculator = document.getElementById("calculator");

// Create display
const display = document.createElement("input");
display.id = "result";
display.type = "text";
display.readOnly = true;
calculator.appendChild(display);

// Buttons and layout.
const buttons = [
    ['1', '2', '3', '/'],
    ['4', '5', '6', '*'],
    ['7', '8', '9', '-'],
    ['0', '.', '=', '+'],
    ['C']
];

buttons.forEach(row => {
    const rowDiv = document.createElement("div");
    row.forEach(char => {
        const button = document.createElement("button");
        button.textContent = char;
        button.style.padding = "20px";
        button.style.margin = "5px";
        button.style.fontSize = "20px";
        button.style.cursor = "pointer";
        button.onclick = () => handleInput(char);
        rowDiv.appendChild(button);
    });
    calculator.appendChild(rowDiv);
});

// Handle input
function handleInput(char) {
    const resultField = document.getElementById("result");

    if (char === 'C') {
        resultField.value = '';
    } else if (char === '=') {
        try {
            resultField.value = eval(resultField.value);
        } catch {
            resultField.value = 'Error';
        }
    } else {
        resultField.value += char;
    }
}
