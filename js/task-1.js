const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');
console.log(`Total categories: ${categoriesItems.length}`);
categoriesItems.forEach(categoryItem => {
    const categoryName = categoryItem('h2').textContent;
    const categoryElements = categoryItem.categoryItem('ul li');
    console.log(`Category: ${categoryName}`);
    console.log(`Number of elements: ${categoryElements.length}`);
})
