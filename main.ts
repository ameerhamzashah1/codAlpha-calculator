const calculatorScreen = document.getElementById('calculator-screen') as HTMLInputElement;
let currentNumber = '';
let previousNumber = '';
let operation = '';

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('value') as string;
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
                    const result = calculate(previousNumber, currentNumber, operation);
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
    
    function calculate(num1: string, num2: string, operation: string): number {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);
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
    