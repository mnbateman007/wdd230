// const mainnav = document.querySelector('.navigation');
// const hambutton = document.querySelector('.ham');

// hambutton.addEventListener('click', () => {
//     mainnav.classList.toggle('responsive');
// })

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

let date = new Date();
let year = date.getFullYear();
document.querySelector('h3').innerHTML = "&copy" + year + " | Megan Bateman | Idaho";

let currentdate = document.lastModified;
document.querySelector('h4').textContent = `Last Updated: ${currentdate}`;


// let date = new Date;

// get weekDay = date.getDay();

// if (weekDay ==1 || weekDay ==2){
    
// }

let day = date.getDay();

if (day == 1 || day == 2) {
    let banner = document.querySelector('.banner');
    banner.style.display = 'block';

    document.querySelector(".banner-button").addEventListener("click", function () {
        banner.style.display = 'none';
      });
} else {
    let banner = document.querySelector('.banner');
    banner.style.display = 'none';
}