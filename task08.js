
const enteredNumber = document.querySelector('input[type="number"]');
enteredNumber.addEventListener('input', numero);
function numero () {
    multiplyValue = enteredNumber.value;
}
