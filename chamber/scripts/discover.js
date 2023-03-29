const images = document.querySelectorAll('[data-src]');

const options = {
    threshold: .5};

function preloadImage(img){
    const source = img.getAttribute('data-src');
    if(!source){
        return;
    }
    img.src = source;
}

const io = new IntersectionObserver(
    (entries)=>{
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            } else{
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
            
            console.log(entries);
        })


    },
    options
);

images.forEach(img => {
    io.observe(img);
})

if(!localStorage.getItem('lastvisit')) {
    localStorage.setItem('lastvisit', Date.now());
    document.getElementById('visits').textContent = 'This is your 1st visit';
} else {
    giveDate();
}

function giveDate() {
    let lastDate = localStorage.getItem('lastvisit');
    let currDate = Date.now();
    
    let difference = currDate - lastDate;
        console.log(difference);
        let daysDifference = Math.floor(difference/1000/60/60/24);

    document.getElementById('visits').textContent = daysDifference;

    localStorage.setItem('lastvisit', Date.now());

}












// const images = document.querySelectorAll('[data-src]');

// const options = {
//     threshold: .5};

// function preloadImage(img){
//     const source = img.getAttribute('data-src');
//     if(!source){
//         return;
//     }
//     img.src = source;
// }

// const io = new IntersectionObserver(
//     (entries)=>{
//         entries.forEach(entry => {
//             if(!entry.isIntersecting) {
//                 return;
//             } else{
//                 preloadImage(entry.target);
//                 io.unobserve(entry.target);
//             }
            
//             console.log(entries);
//         })


//     },
//     options
// );

// images.forEach(img => {
//     io.observe(img);
// })

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

// }

// const images = document.querySelectorAll('[data-src]');

// const options = { threshold: .5};

// function preloadImg(img) {
//     const source = img.getAttribute('data-src');
//     if(!source){
//         return;
//     }
//     img.src = source;
// }

// const io = new IntersectionObserver (
//     (entries,io)=> {
//         entries.forEach(entry => {
//             if(!entry.isIntersecting){
//                 return;
//             } else {
//                 preloadImg(entry.target);
//                 io.unobserve(entry.target);
//             }
//             console.log(entries);
//         })

//     },
//     options
// );

// images.forEach(img => {
//     io.observe(img);
// })

// const visitsDisplay = document.querySelector("#visit");

// let numVisits = Number(window.localStorage.getItem("visits-ls"));

// if (numVisits !== 0) {
// 	visitsDisplay.textContent = numVisits;
// } else {
// 	visitsDisplay.textContent = `This is your first visit!`;
// }

// numVisits++;

// localStorage.setItem("visits-ls", numVisits);



// todayDisplay.textContent = Date.now();

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