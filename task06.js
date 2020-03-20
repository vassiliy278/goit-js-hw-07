const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', blur);

function blur() {
    const dataLength = validationInput.dataset.length;
    const enteredText = validationInput.value;
    if (enteredText.length !== Number(dataLength)) {
        validationInput.classList.add('invalid')
    } else { 
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid')
    }
}



