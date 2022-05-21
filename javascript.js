const result = document.getElementById('display');

function display(id) {
    let button = document.getElementById(id);
    let buttonNumber = button.innerText;
    if (result.innerText.length < 17) {
        if (result.innerText == '0') result.innerText = buttonNumber;
        else result.innerText += buttonNumber;
    }
    else {
        window.alert('maximum size occupied');
    }
}
function symbols(id) {
    let initial = result.innerText;
    let button = document.getElementById(id);
    let buttonNumber = button.innerText;
    let arr = result.innerText.split("");
    let lastNumber = arr.slice(-1);
    let dotAppearing = false;
    if (result.innerText.length < 17) {
        if (lastNumber == '+' || lastNumber == '-' || lastNumber == '*' || lastNumber == '/' || lastNumber == '.') {
            arr.pop();
            arr.push(button.innerText);
            result.innerText = arr.join("");
        }
        else if (buttonNumber == '.') {
            for (let i = arr.length - 1; i >= 0 && (arr[i] != '+' && arr[i] != '-' && arr[i] != '*' && arr[i] != '/'); i--) {
                if (arr[i] == '.') dotAppearing = true;
            }
            if (dotAppearing) {
                arr.push("");
                result.innerText = arr.join("");
            }
            else {
                arr.push(".");
                result.innerText = arr.join("");
            }
        }
        else {
            if (initial == '0') {
                if (buttonNumber == '+' || buttonNumber == "-") {
                    result.innerText = buttonNumber;
                }
                else {
                    result.innerText = `0${buttonNumber}`;
                }
            }
            else result.innerText += buttonNumber;
        }
    }
}

function calculate() {
    let numbers = result.innerText;
    let total = eval(numbers);
    total = total.toString();
    result.innerText = total.slice(0, 17);
}

function clearScreen() {
    result.innerText = "0";
}