const rangeJog = document.getElementById('font-size-control');
const scaleableText = document.getElementById('text');

rangeJog.addEventListener('input', changeSize);

function changeSize () {
    let choosenSize = Number(rangeJog.value);
    scaleableText.style.fontSize = `${choosenSize}px`;
}