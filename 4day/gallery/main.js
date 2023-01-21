const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = [
          'pic1.jpg',
          'pic2.jpg', 
          'pic3.jpg', 
          'pic4.jpg',
          'pic5.jpg',
        ];

/* Declaring the alternative text for each image file */
const alt = {
    'pic1.jpg' : '1',
    'pic2.jpg' : '2',
    'pic3.jpg' : '3',
    'pic4.jpg' : '4',
    'pic5.jpg' : '5',
}

/* Looping through images */
for (const image of images){
    const newImg = document.createElement('img');
    newImg.setAttribute('src', `images/${image}`);
    newImg.setAttribute('alt', alt[image]);
    thumbBar.appendChild(newImg);
    newImg.addEventListener('click', e =>{
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    let btnType = btn.getAttribute('class');
    if (btnType ===  'dark') { 
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';    
    }
});