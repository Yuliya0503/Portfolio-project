/*transleter*/
const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить'
  }
}
 
 /*перевод */
 const english = document.querySelector('.english');
 const russian = document.querySelector('.russian');
 

function getTranslate(language) {
  const translate = document.querySelectorAll('[data-i18]');
  translate.forEach((elem) =>
  elem.textContent = i18Obj[language][elem.dataset.i18])
  
};

russian.addEventListener('click', () => 
  getTranslate('ru'));

english.addEventListener('click', () =>
  getTranslate('en'));

 
/*переключатель кнопки*/

const lang = document.querySelectorAll('.language__link');
lang.forEach(item =>{ 
  item.addEventListener('click', (e) =>{
  lang.forEach(el=>{ el.classList.remove('link-selected'); });
  item.classList.add('link-selected')
})
})

/*burger-menu*/

const menuAdaptive = document.querySelector('.menu-adaptive');
const menuBurger = document.querySelector('.menu-burger');
function toggleMenu() {
  menuBurger.classList.toggle('open');
  menuAdaptive.classList.toggle('change');
}
menuAdaptive.addEventListener('click', toggleMenu);

/*portfoli-photo*/
const buttonWinter = document.querySelector('.button-portfolio1');
const buttonSpring = document.querySelector('.button-portfolio2');
const buttonSummer = document.querySelector('.button-portfolio3');
const buttonAutumn = document.querySelector('.button-portfolio4');

const portfolioPhoto = document.querySelectorAll('.portfolio__photo');


buttonWinter.addEventListener('click', () => {
  portfolioPhoto.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
});

buttonSpring.addEventListener('click', () => {
  portfolioPhoto.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`);
});

buttonSummer.addEventListener('click', () => {
  portfolioPhoto.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`);
});

buttonAutumn.addEventListener('click', () => {
  portfolioPhoto.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`);
});


/*кеширование img*/

const seasons = ['winter', 'spring', 'summer', 'autumn'];

function preloadSummerImages() {
  for(let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/summer/${i}.jpg`;
  }
}
preloadSummerImages();

function preloadWinterImages() {
  for(let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/winter/${i}.jpg`;
  }
}
preloadWinterImages();

function preloadSpringImages() {
  for(let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/spring/${i}.jpg`;
  }
}
preloadSpringImages();

function preloadAutumnImages() {
  for(let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/autumn/${i}.jpg`;
  }
}
preloadAutumnImages();

/*style-button active*/

const butPort = document.querySelectorAll('.button-portfolio');

butPort.forEach(item => { 
  item.addEventListener('click', (e) =>{
  butPort.forEach(element => element.classList.remove('active'));
  item.classList.add('active');
})});

/*light-theme*/


const themeBtn = document.querySelector('.theme-btn');
const body = document.querySelector('.body');
const buttonBordered = document.querySelectorAll('.button_bordered');

function toggleButton() {
  themeBtn.classList.toggle('light-btn');
}

themeBtn.addEventListener('click', toggleButton);

themeBtn.addEventListener('click', () => { 
  body.classList.toggle('light-theme');
  menuBurger.classList.toggle('light-theme');
  line.classList.toggle('light-theme-line');
});

themeBtn.addEventListener('click', () => { 
  buttonBordered.classList.toggle('light-bord');
});



