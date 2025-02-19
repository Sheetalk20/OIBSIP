function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
function backspace() {
    let display = document.getElementById('display');
    display.removeAttribute('disabled'); // Temporarily enable input
    display.value = display.value.slice(0, -1);
    display.setAttribute('disabled', ''); // Re-disable input
}
