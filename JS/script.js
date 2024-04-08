let currentOperand = document.querySelector('[data-current-operand]');
let previousOperand = document.querySelector('[data-previous-operand]');

function appendNumber(number) {
    currentOperand.innerText += number;
}

function appendOperator(operator) {
    currentOperand.innerText += ` ${operator} `;
}

function clearDisplay() {
    currentOperand.innerText = '';
    previousOperand.innerText = '';
}

function deleteLast() {
    currentOperand.innerText = currentOperand.innerText.slice(0, -1);
}

function calculateResult() {
    try {
        previousOperand.innerText = currentOperand.innerText;
        currentOperand.innerText = eval(currentOperand.innerText);
    } catch (error) {
        currentOperand.innerText = 'Error';
    }
}

function checkLoginStatus() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser) {
        alert('Please login to access this page.');
        window.location.href = './login.html';
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = './login.html';
}

// Add this function call at the end of your existing script.js file
checkLoginStatus();
