const images = document.querySelectorAll('[data-src]');

const options = { threshold: .5};

function preloadImg(img) {
    const source = img.getAttribute('data-src');
    if(!source){
        return;
    }
    img.src = source;
}

const io = new IntersectionObserver (
    (entries,io)=> {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            } else {
                preloadImg(entry.target);
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