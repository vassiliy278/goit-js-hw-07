const wrapper = document.getElementById('ingredients')
const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

ingredients.forEach( e => { 
    const listElement = document.createElement('li');
    listElement.textContent = e;
    wrapper.prepend(listElement)
})


// for (let i = 0; i < ingredients.length; i += 1) {
//     const listElement = document.createElement('li');
//     listElement.textContent = ingredients[i];
//     wrapper.prepend(listElement)
// }

