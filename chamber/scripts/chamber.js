function toggleMenu() {
    document.querySelector("#Navview").classList.toggle("open");
    document.querySelector("#hamburgerBtn").classList.toggle("open");
}
const x = document.querySelector("#hamburgerBtn")
x.onclick = toggleMenu;

let date = new Date();
let day = date.getDay();
let year = date.getFullYear();

document.querySelector('#copy').innerHTML = "&copy" + year + " | Megan Bateman | Idaho";

let currentdate = document.lastModified;

document.querySelector('year').textContent = `Last Updated: ${currentdate}`;

// const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

if (day == 1 || day == 2){
    document.querySelector('#banner').innerHTML = 'Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
}

// let day = date.getDay();

// if (day == 1 || day == 2) {
//     let banner = document.querySelector('.banner');
//     banner.style.display = 'block';

//     document.querySelector(".banner-button").addEventListener("click", function () {
//         banner.style.display = 'none';
//       });
// } else {
//     let banner = document.querySelector('.banner');
//     banner.style.display = 'none';
// }


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


// // storage local and session
// localStorage.setItem('name','Adelyn Smith - Permanent');
// sessionStorage.setItem('class','WDD230 - not Permanent');







