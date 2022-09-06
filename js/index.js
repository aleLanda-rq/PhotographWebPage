// window.addEventListener('scroll', function()  {
//     var nav=document.querySelector('nav')
// nav.classList.toggle('sticky', window.scrollY> 0);
// })


const body= document.body;
let lastScroll= 0;

window.addEventListener('scroll', () =>{
   const currentScroll = window.scrollY ;
   if(currentScroll <=0){
    body.classList.remove('scroll-up')
   }
    if(currentScroll > lastScroll && !document.querySelector('.scroll-down')) {
        body.classList.remove('scroll-up')
        body.classList.add('scroll-down')
    }
    if(currentScroll < lastScroll && document.querySelector('.scroll-down')) {
        body.classList.remove('scroll-down')
        body.classList.add('scroll-up')
    }
   lastScroll = currentScroll;
})

// -------------------------------------------------



// -------------------------------------------------

function imagePopUps(){
document.querySelectorAll('.gallery-image img').forEach((image)=>{
    image.addEventListener('click', ()=>{
        document.querySelector('.pop_up_image').style.display ='block';
        document.querySelector('.pop_up_image img').src=image.getAttribute('src')
        document.querySelector('header').style.display='none';
    })
})
const popImage = document.querySelector('.pop_up_image span');
if(popImage){
popImage.addEventListener('click', () =>{
    document.querySelector('.pop_up_image').style.display ='none';
        document.querySelector("header").style.display='block';
})
}
}

imagePopUps();

const mobileNav=document.querySelector('.mobile-nav-links');
const navBttn=document.querySelector('.btnimg');
const closebttn=document.querySelector('.btnclose');
const mobilenav = document.querySelector('.mobile-nav');


if(navBttn){
navBttn.addEventListener('click', ()=>{
    navBttn.style.display='none';
    mobileNav.style.display='block';
    closebttn.style.display='block';
    // mobileNav.style.background='rgba(0,0,0,0.5)';

})
}

closebttn.addEventListener('click', ()=>{
    mobileNav.style.display='none';
    navBttn.style.display='block';
    closebttn.style.display='none';
})



