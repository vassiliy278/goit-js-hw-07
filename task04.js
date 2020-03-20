const result = document.getElementById('value');
const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');

let startValue = 0;
function increase() {
    startValue += 1;
    result.textContent = startValue
}

function decrease() {
    if (startValue <= 0){
        return }
    startValue -= 1;
    result.textContent = startValue;
   
}

// console.log(startValue)
increment.addEventListener('click', increase);
decrement.addEventListener('click', decrease);


