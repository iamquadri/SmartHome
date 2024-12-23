

const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector(".nav_items");

// open nav menu
menuBtn.addEventListener("click", () => {
    menu.style.display = 'flex';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})

// close nav menu
closeBtn.addEventListener("click", () => {
    menuBtn.style.display = 'none';
    menuBtn.style.display = 'inline block';
    closeBtn.style.display = 'none';
})



// const menuBtn = document.querySelector("#menu_btn");
// const menu = document.querySelector(".nav_items");
// const closeBtn = document.querySelector("#close-btn");


// menuBtn.addEventListener('click', () => {
//     menu.style.display = "flex";
//     menuBtn.style.display = "none";
//     closeBtn.style.display = "inline-block";
// })


// close nav menu
// const closeNav = () => {
//     menu.style.display = "none";
//     closeBtn.style.display = "none";
//     menuBtn.style.display = "inline-block";
// }
// closeBtn.addEventListener('click', closeNav);





// FAQs
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus';
        } else {
            icon.className = 'uil uil-plus';
            
        }
    })
})


// add background style to navbar 
// window.addEventListener('scroll', () => {
//     document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
// })

