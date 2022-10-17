const dropdowns = document.querySelectorAll('.filters__dropdown');

dropdowns.forEach((dropdown) => {
    const select = dropdown.querySelector('.filters__select');
    const caret = dropdown.querySelector('.filters__caret');
    const menu = dropdown.querySelector('.filters__menu');
    const options = dropdown.querySelectorAll('.filters__dropDownContent');
    const selected = dropdown.querySelector('.filters__selected');

    select.addEventListener('click', () => {

        caret.classList.toggle('caret-rotate');

        menu.classList.toggle('menu-open');
    });

    options.forEach((option) => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            options.forEach((option) => {
                option.classList.remove('active');
            });

            option.classList.add('active');
        });
    });
});