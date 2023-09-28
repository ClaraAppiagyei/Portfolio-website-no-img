
/* Nav bar */ 
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav_link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    })
})

function show() {
    document.getElementById('image_wrapper').style.height="400px"
    document.getElementById('image_wrapper').style.display="block"
    document.getElementById('show').style.display="none"
}

function show() {
    document.getElementById('image_wrapper').style.height="0px"
    document.getElementById('image_wrapper').style.display="none"
    document.getElementById('show').style.display="inline"
}

/* Back to top button */
/*
const backToTopButton = document.querySelector("back_to_top_btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = "block";
    }
    else{
        backToTopButton.style.display = "none";
    }
}

backToTopButton.addEventListener("click", backToTop);

function backToTop() {
    window.scrollTo(0, 0);
}
*/
