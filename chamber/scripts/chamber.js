const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('.ham');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');
})

let date = new Date();
let year = date.getFullYear();
document.querySelector('h3').innerHTML = "&copy" + year + " | Megan Bateman | Idaho";

let currentdate = document.lastModified;
document.querySelector('h4').textContent = `Last Updated: ${currentdate}`;
