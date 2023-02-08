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




// function toggleMenu() {
//     document.getElementById("primaryNav").classList.toggle("open");
//     document.getElementById("hamburgerBtn").classList.toggle("open");

// }

// const x = document.getElementById('hamburgerBtn')
// x.onclick = toggleMenu;

// let date = new Date();
// let day = date.getDay();
// let year = date.getFullYear();

// document.querySelector('#copy').innerHTML = '&copy;' + year + "| Idaho Falls Chamber";

// let currentdate = document.lastModified;

// document.querySelector('#year').textContent = `Last Updated: ${currentdate}`;

// const datefield = document.querySelector(".date");
// const now = new Date();
// const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
// 	now
// );

// datefield.innerHTML = `<em>${fulldate}</em>`;

// if (day == 1 || day == 2){
//     document.querySelector('#banner').innerHTML = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
// }


// winds chill calculation

const temp = document.querySelector('.t').textContent;
const ws = document.querySelector('.ws').textContent;

let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(ws,0.16)) + (0.4275*temp*Math.pow(ws,0.16)));

// console.log(chill);


if(temp <= 50 && ws >= 3) {
    document.querySelector('.wc').textContent = chill;
}

