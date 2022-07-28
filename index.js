window.addEventListener('scroll', function()  {
    var nav=document.querySelector('nav')
nav.classList.toggle('sticky', window.scrollY> 0);
})



document.querySelectorAll('.image_container img').forEach((image)=>{
image.onclick = () =>{
    document.querySelector('.pop_up_image').style.display ='block';
    document.querySelector('.pop_up_image img').src=image.getAttribute('src')
    document.querySelector('.sticky').style.display='none';
}
});

document.querySelector('.pop_up_image span').onclick = ()=> {
    document.querySelector('.pop_up_image').style.display ='none';
    document.querySelector(".sticky").style.display='inline';
}

 document.querySelector('.load_button').addEventListener('click',() =>{
console.log('I have been clicked')
 })


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

