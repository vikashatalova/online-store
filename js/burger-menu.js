const productListArrow = document.querySelector('.product-list__arrow');
const productListOverlay = document.querySelector('.product-list__overlay');
const productListHidden = document.querySelector('.product-list__hidden');

const burgerMenuButton = document.querySelector('.burger-menu');
const productList = document.querySelector('.product-list__container');

if (burgerMenuButton) {
    burgerMenuButton.addEventListener('click', (e) => {
        e.preventDefault();
        // document.body.classList.toggle('_lock');
        burgerMenuButton.classList.toggle('burger-menu_active')
        productList.classList.toggle('active-menu');
    });
};

// if (burgerMenuButton.classList.contains('active-menu')) {
//     productList.classList.remove('active-menu');
// }

const footerInfoHeader = document.querySelectorAll('.footer-info__header');
const footerInfoText = document.querySelectorAll('.footer-info__text');

footerInfoHeader.forEach((head) => {
    head.addEventListener('click', () => {
        footerInfoText.forEach((text) => {
            text.classList.toggle('active-footer');
        })
    })
})







// burgerMenuButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     if (productList.style.display === 'none') {
//         productList.style.display = 'block'
//     } else {
//         productList.style.display = 'none'
//     }
// });

productListArrow.addEventListener('click', (e) => {
    e.preventDefault();
    if (productListOverlay.style.display === 'none') {
        productListOverlay.style.display = 'block'
    } else {
        productListOverlay.style.display = 'none'
    }
});
