const burgerMenuButton = document.querySelector('.burger-menu');
const productListArrow = document.querySelector('.product-list__arrow');
const productList = document.querySelector('.product-list__container');
const productListOverlay = document.querySelector('.product-list__overlay');
const productListHidden = document.querySelector('.product-list__hidden');

burgerMenuButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (productList.style.display === 'none') {
        productList.style.display = 'block'
    } else {
        productList.style.display = 'none'
    }
});

productListArrow.addEventListener('click', (e) => {
    e.preventDefault();
    if (productListOverlay.style.display === 'none') {
        productListOverlay.style.display = 'block'
    } else {
        productListOverlay.style.display = 'none'
    }
});
