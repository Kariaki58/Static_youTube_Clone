const menu = document.getElementById("menu");
const mainContent = document.querySelector('main');
const text_elements = document.querySelectorAll(".display");
const hide_elements = document.querySelectorAll('.hide');
const change = document.getElementById("change")
const pElement = document.querySelectorAll('.display p')
const display = document.querySelectorAll('.display')
var root = document.querySelector(':root')
const left = document.querySelector('.left')
const subscription = document.querySelector('.subscription')


let isHidden = false;
let color = true;

left.addEventListener('mouseover', () => {
    left.style.overflowY = 'hidden'
})
menu.addEventListener('click', () => {
    if (!isHidden) {
        hide_elements.forEach(element => {
            element.style.display = 'none';
        });
        mainContent.style.gridTemplateColumns = '8vw calc(100% - 8vw)';
        display.forEach(data => {
            data.style.width = '100%';
            data.style.overflow = 'hidden';
            data.style.flexDirection = 'column'
            data.style.alignItems = 'center'
            data.style.whiteSpace = 'nowrap'
            data.style.height = '4rem'
            data.style.marginRight = '10rem'
            data.style.justifyContent = 'flex-start'
        })
        pElement.forEach((data) => {
            data.style.fontSize = '13px'
        })
        subscription.style.borderBottom = 'none'
    } else {
        hide_elements.forEach(element => {
            element.style.display = '';
        });
        display.forEach(data => {
            data.style.width = '';
            data.style.overflow = '';
            data.style.flexDirection = ''
            data.style.alignItems = ''
            data.style.whiteSpace = ''
            data.style.height = ''
        })
        mainContent.style.gridTemplateColumns = '';
        mainContent.style.gridTemplateColumns = '';
        pElement.forEach((data) => {
            data.style.fontSize = ''
        })
        subscription.style.borderBottom = ''
    }
    isHidden = !isHidden;
});

change.addEventListener('click', () => {
    if (color) {
        root.style.setProperty('--dark-white', 'black');
        root.style.setProperty('--dark', 'white')
        color = false;
    } else {
        root.style.setProperty('--dark-white', 'white');
        root.style.setProperty('--dark', 'black')
        color = true
    }
})