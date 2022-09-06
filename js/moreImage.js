// import javascript from './index.js';

const imageContainer = document.querySelector('.image_container');


const url ='https://api.unsplash.com/photos/random/?client_id=xlVjUwwagGetLaTPXbgcHFqUO9d_rWuT89gQpPrVmvY'

const query = '&query=cyberpunk&count=3'
const loadbttn = document.querySelector('#load_button');

loadbttn.addEventListener('click',() => {
    fetch(url + query)
    .then((res)=>res.json())
    .then((data) => {
        data.forEach(image =>{
            let container = document.createElement('div');
            container.className='gallery-image';
            let images = document.createElement('img');
            images.src=image.urls.regular;
            imageContainer.append(container);
            container.appendChild(images);
            
        })
       
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
    )});


