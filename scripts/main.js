let date = new Date();
let year = date.getFullYear();
document.querySelector('h3').innerHTML = "&copy" + year;

let currentdate = document.lastModified;
document.querySelector('div').textContent = `Last Updated: ${currentdate}`;

