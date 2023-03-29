function toggleMenu() {
    document.querySelector("#Navview").classList.toggle("open");
    document.querySelector("#hamburgerBtn").classList.toggle("open");
}
const x = document.querySelector("#hamburgerBtn")
x.onclick = toggleMenu;

let date = new Date();
let day = date.getDay();
let year = date.getFullYear();

document.querySelector('#copy').innerHTML = "&copy" + year + " | Megan Bateman | Chula Vista";

let currentdate = document.lastModified;

document.querySelector('year').textContent = `Last Updated: ${currentdate}`;

const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

localStorage.setItem('name','Megan Bateman - Permanent');
sessionStorage.setItem('class','WDD230 - not Permanent');

// let day = date.getDay();

// if(!localStorage.getItem('lastvisit')) {
//     localStorage.setItem('lastvisit', Date.now());
//     document.getElementById('visits').textContent = 'This is your 1st visit';
// } else {
//     giveDate();
// }

// function giveDate() {
//     let lastDate = localStorage.getItem('lastvisit');
//     let currDate = Date.now();
    
//     let difference = currDate - lastDate;
//         console.log(difference);
//         let daysDifference = Math.floor(difference/1000/60/60/24);

//     document.getElementById('visits').textContent = daysDifference;

//     localStorage.setItem('lastvisit', Date.now());
    