
// const button = document.querySelector('.btn');

// function show() {
//     // button.classList.add('newstyle');
//     button.classList.toggle('newstyle');
// }

// button.addEventListener('click', show());



// button.addEventListener('click', () => {
//     button.classList.add('newstyle');
// })

// hamburger button JS

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('.ham');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');
})


