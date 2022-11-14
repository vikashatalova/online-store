const productListArrow = document.querySelector('.product-list__arrow');
const productListOverlay = document.querySelector('.product-list__overlay');
const productListHidden = document.querySelector('.product-list__hidden');

const burgerMenuButton = document.querySelector('.burger-menu');
const productList = document.querySelector('.product-list__container');
const headerKatalog = document.querySelector('.header-katalog');

if (burgerMenuButton) {
    burgerMenuButton.addEventListener('click', (e) => {
        e.preventDefault();
        // document.body.classList.toggle('_lock'); // для скрола
        burgerMenuButton.classList.toggle('burger-menu_active');
        productList.classList.toggle('active-menu');
    });
};


const footerInfoHeader = document.querySelectorAll('.footer-info__header');
const footerInfoText = document.querySelectorAll('.footer-info__text');

footerInfoHeader.forEach((head) => {
    head.addEventListener('click', () => {
        footerInfoText.forEach((text) => {
            text.classList.toggle('active-footer');
        });
    });
});

const headerArrow = document.querySelector('.header-contacts__arrow');
const navbarContainer = document.querySelector('.header-contacts__menu');

headerArrow.addEventListener('click', () => {
    navbarContainer.classList.toggle('active-contacts');
})


productListArrow.addEventListener('click', (e) => {
    e.preventDefault();
    if (productListOverlay.style.display === 'none') {
        productListOverlay.style.display = 'block'
    } else {
        productListOverlay.style.display = 'none'
    }
});
