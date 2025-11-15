// This function adds the clicked button's value to the display
function appendToDisplay(value) {
    // This gets the display element from the HTML
    const display = document.getElementById('display');
    // This adds the value of the clicked button to the display
    display.value += value;
}

// This function clears the display
function clearDisplay() {
    // This gets the display element from the HTML
    const display = document.getElementById('display');
    // This sets the value of the display to an empty string, effectively clearing it
    display.value = '';
}

// This function calculates the expression in the display
function calculate() {
    // This gets the display element from the HTML
    const display = document.getElementById('display');
    try {
        // The eval() function evaluates the string in the display as a mathematical expression
        // For example, if the display shows "2+2", eval("2+2") will return 4
        const result = eval(display.value);
        // This displays the result in the display
        display.value = result;
    } catch (error) {
        // If there is an error in the expression (e.g., "2++2"), it will display "Error"
        display.value = 'Error';
    }
}