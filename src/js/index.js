import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];


const slideList = [
    {
        img: "../src/assets/img/img1.jpg",
        text: "pierwszy text",
    },
    {
        img: "../src/assets/img/img2.jpg",
        text: "drugi text",
    },
    {
        img: "../src/assets/img/img3.jpg",
        text: "trzeci text",
    }
]

const time = 5000; // banner img switch time
let active = 0;  // first active img

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++
    if (active === (slideList.length)) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
    console.log(active);
}

const keyChangeSlide = (e) => {

    if (!e) {
        changeSlide();

    } else if (e.keyCode === 39) {
        clearInterval(bannerInterval);
        changeSlide()
        startInterval();

    } else if (e.keyCode === 37) {
        clearInterval(bannerInterval);
        --active
        if (active === (slideList.length)) {
            active = 0;
        } else if (active < 0) {
            active = slideList.length -1;
        }
        image.src = slideList[active].img;
        h1.textContent = slideList[active].text;
        changeDot();
        console.log(active);
        startInterval();
    }


}


let bannerInterval;

const startInterval = () => {
    bannerInterval = setInterval(keyChangeSlide, time);
}
window.addEventListener('keydown', keyChangeSlide);
startInterval();
