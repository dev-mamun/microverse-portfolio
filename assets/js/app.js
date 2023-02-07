const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const html = document.querySelector('html');
const body = document.querySelector('body');
const projects = [
    {
        "name": "Multi-Post Stories Gain + Glorys",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        "image": {
            "featured": "SnapshootPortfolio.svg"
        },
        "technologies": [
            "Ruby on Rails",
            "Html",
            "css",
            "javascript"
        ],
        "link": {
            "live": "#",
            "source": "#"
        }
    },
    {
        "name": "Multi-Post Stories Gain",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        "image": {
            "featured": "SnapshootPortfolio.svg"
        },
        "technologies": [
            "Ruby on Rails",
            "Html",
            "css",
            "javascript"
        ],
        "link": {
            "live": "#",
            "source": "#"
        }
    },
    {
        "name": "Multi-Post Stories",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        "image": {
            "featured": "SnapshootPortfolio.svg"
        },
        "technologies": [
            "Ruby on Rails",
            "Html",
            "css",
            "javascript"
        ],
        "link": {
            "live": "#",
            "source": "#"
        }
    },
];

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('disable-scroll');
    html.classList.toggle('disable-scroll');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));


