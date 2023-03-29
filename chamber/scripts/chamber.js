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