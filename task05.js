const input = document.getElementById('name-input');
const subText = document.getElementById('name-output')

function showEnteredText() {
    const defaultText = 'незнакомец'
    subText.textContent = input.value;
    if(input.value.length === 0) {
        subText.textContent = defaultText;
    }
}
input.addEventListener('input', showEnteredText)
