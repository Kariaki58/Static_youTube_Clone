const menu = document.getElementById("menu");
const mainContent = document.querySelector('main');
const text_elements = document.querySelectorAll(".display");
const hide_elements = document.querySelectorAll('.hide');

let isHidden = false;

menu.addEventListener('click', () => {
    if (!isHidden) {
        hide_elements.forEach(element => {
            element.style.display = 'none';
        });
        mainContent.style.gridTemplateColumns = '5vw auto';
    } else {
        hide_elements.forEach(element => {
            element.style.display = '';
        });
        mainContent.style.gridTemplateColumns = '';
    }
    isHidden = !isHidden;
});