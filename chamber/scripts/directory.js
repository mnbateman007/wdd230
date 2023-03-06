const url = 'https://github.com/mnbateman007/wdd230/blob/908b86715eb328da38b063d30909a9bf1458c004/chamber/places.json';

async function getBizData() {
    const response = await fetch(url);
    console.log(response)
    const data = await response.json();
    console.table(data.biz);  // note that we reference the prophet array of the data object given the structure of the json file
    displayLogo(data.biz);
    displayTable(data.biz);
}

  getBizData();


  const displayLogo = (logos) => {
    const cards = document.querySelector('div.cards'); // select the output container element

    logos.forEach((logo) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let portrait = document.createElement('img');

      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${logo.name}`;

      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', logo.picture);
      portrait.setAttribute('alt', `Logo for ${logo.name}`);
      portrait.setAttribute('loading', 'lazy');


      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(portrait);

      cards.appendChild(card);
    } // end of forEach loop
  )} // end of function expression


/*Table Function*/

function displayTable(logos){

  // let list = document.getElementById("list").style.display = "none";
  // list.addEventListener("click", displayTable);

  // let cards = document.getElementById("cards").style.display = "none";
  // cards.addEventListener("click",displayProphets);
    // let row = document.querySelectorAll('tr');
    //     row.forEach((item)=>{
    //       item.remove();
    //     })
    // let section = document.querySelectorAll('tr');
    //     section.forEach((item)=>{
    //       item.remove();
    //     })

   

  logos.forEach((logo)=>{
    let tr = document.createElement('tr');
    let td_name = document.createElement('td');
    let td_address = document.createElement('td');

    td_name.textContent = `${logo.name}`;
    td_address.textContent = logo.address;

    tr.appendChild(td_name);
    tr.appendChild(td_address);

    document.querySelector('table').appendChild(tr);

  })
}

table_class = document.querySelector(".table")
card_class =document.querySelector(".cards")
table_button = document.querySelector("#list")
card_button =document.querySelector("#cards")




card_button.addEventListener("click", () => {
  card_class.style.display = "flex";
  table_class.style.display = "none";
});

table_button.addEventListener("click", () => {
  card_class.style.display = "none";
  table_class.style.display = "block";
});

// let lists = document.getElementById("lists");
// lists.addEventListener("click",displayTable);