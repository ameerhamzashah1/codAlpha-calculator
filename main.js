var calculatorScreen = document.getElementById('calculator-screen');
var currentNumber = '';
var previousNumber = '';
var operation = '';
document.querySelectorAll('button').forEach(function (button) {
    button.addEventListener('click', function () {
        var value = button.getAttribute('value');
        switch (value) {
            case '+':
            case '-':
            case '*':
            case '/':
                operation = value;
                previousNumber = currentNumber;
                currentNumber = '';
                break;
            case '=':
                if (operation && previousNumber) {
                    var result = calculate(previousNumber, currentNumber, operation);
                    currentNumber = result.toString();
                    previousNumber = '';
                    operation = '';
                }
                break;
            case 'all-clear':
                currentNumber = '';
                previousNumber = '';
                operation = '';
                break;
            default:
                currentNumber += value;
        }
        calculatorScreen.value = currentNumber;
    });
});
function calculate(num1, num2, operation) {
    var number1 = parseFloat(num1);
    var number2 = parseFloat(num2);
    switch (operation) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            return number1 / number2;
        default:
            return 0;
    }
}
