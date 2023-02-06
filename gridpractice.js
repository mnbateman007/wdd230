let date = new Date();
let year = date.getFullYear();
document.querySelector('h3').innerHTML = "&copy" + year + "Chula Vista Chamber" + "| Megan Bateman |" + "| WDD230 Project |";

let currentdate = document.lastModified;
document.querySelector('h4').textContent = `Last Updated: ${currentdate}`;