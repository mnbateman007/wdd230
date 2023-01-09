let date = new Date();
let year = date.getFullYear();
document.querySelector('h3').innerHTML = "&copy" + year + " | Megan Bateman | Idaho";

let currentdate = document.lastModified;
document.querySelector('h4').textContent = `Last Updated: ${currentdate}`;

