// function toggleMenu() {
//     document.querySelector("#navView").classList.toggle("open");
//     document.querySelector("#hamburgerBtn").classList.toggle("open");
// }

// document.querySelector('#hamburgerBtn').addEventListener('click', toggleMenu);

let date = new Date();
let day = date.getDay();
let year = date.getFullYear();

document.querySelector('#copy').innerHTML = '&copy;' + year + "| Bountiful Foods";

let currentdate = document.lastModified;

document.querySelector('#year').textContent = `Last Updated: ${currentdate}`;

const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

localStorage.setItem('name','Megan Bateman - Permanent');
sessionStorage.setItem('class','WDD230 - not Permanent');

document.querySelector('#drinkCount').textContent =  localStorage.getItem('drinkCount');