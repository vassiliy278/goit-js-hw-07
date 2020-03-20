// 1
const categories = document.getElementById('categories');
console.log(`В списке ${categories.childElementCount} категории`);

// 2
const items = document.querySelectorAll('.item');
items.forEach(num => {
    const title = num.firstElementChild.textContent;
    const subTitleChilds = num.lastElementChild.childElementCount;
    console.log(`Категория: ${title}, Количество эл-тов: ${subTitleChilds}`)
});

// const titles = document.querySelectorAll('h2');
// for (let i = 0; i < items.length; i += 1) {
//     const title = titles[i].textContent;
//     const elementList = items[i].lastElementChild.childElementCount
//     console.log(`Категория: ${title}; \r\n количество элементов: ${elementList}` )
// }