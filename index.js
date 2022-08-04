window.addEventListener('scroll', function()  {
    var nav=document.querySelector('nav')
nav.classList.toggle('sticky', window.scrollY> 0);
})

document.querySelectorAll('.image_container img').forEach((image)=>{
    image.addEventListener('click', ()=>{
        document.querySelector('.pop_up_image').style.display ='block';
        document.querySelector('.pop_up_image img').src=image.getAttribute('src')
        document.querySelector('.sticky').style.display='none';
    })
})
const popImage = document.querySelector('.pop_up_image span');
if(popImage){
popImage.addEventListener('click', () =>{
    document.querySelector('.pop_up_image').style.display ='none';
        document.querySelector(".sticky").style.display='inline';
})
}


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

// navBttn.onclick(() =>{
//     console.log('clicked')
// mobileNav.style.display='block';
// mobileNav.style.display='none';

// })




//  const navigationLinks = document.querySelector('.nav_Links');
//  const hamburger = document.querySelector('.buttons');

//  hamburger.addEventListener('click', () =>{
//   hamburger.classList.toggle("active");
//   navigationLinks.classList.toggle("active");
//  })

// document.querySelector('.').forEach(n => n.addEventListener('click', () => {
//     hamburger.classList.toggle("active");
//     navigationLinks.classList.toggle("active");
// }))




// const url="http://localhost:3000"

// fetch(`${url}/images/1`)
// .then((res)=>res.json())
// .then((data)=> loadData(data))





// function loadData(image){
// // images.forEach((image)=> {
// let div= document.querySelector('.image_container')
//  let picture= document.createElement('img')
//   picture.src=image.image;
//   div.appendChild(picture)
// }
// // )}

