const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    console.log(response)
    const data = await response.json();
    console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displayProphets(data.prophets);
    displayTable(data.prophets);
}

  getProphetData();


  const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element

    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let portrait = document.createElement('img');

      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${prophet.name} ${prophet.lastname}`;

      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');


      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(portrait);

      cards.appendChild(card);
    } // end of forEach loop
  )} // end of function expression


/*Table Function*/

function displayTable(prophets){

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

   

  prophets.forEach((prophet)=>{
    let tr = document.createElement('tr');
    let td_name = document.createElement('td');
    let td_birthplace = document.createElement('td');
    let td_birthdate = document.createElement('td');

    td_name.textContent = `${prophet.name} ${prophet.lastname}`;
    td_birthplace.textContent = prophet.birthplace;
    td_birthdate.textContent = prophet.birthdate;

    tr.appendChild(td_name);
    tr.appendChild(td_birthplace);
    tr.appendChild(td_birthdate);

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