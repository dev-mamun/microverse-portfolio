const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const html = document.querySelector('html');
const body = document.querySelector('body');
const projects = [{
  name: 'Multi-Post Stories Gain + Glorys',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  image: {
    featured: 'assets/img/SnapshootPortfolio.svg',
  },
  technologies: ['Ruby on Rails', 'Html', 'css', 'javascript'],
  link: {
    live: 'https://dev-mamun.github.io/microverse-portfolio/',
    source: 'https://github.com/dev-mamun/microverse-portfolio',
  },
}, {
  name: 'Profesional Art Printing Data',
  description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then',
  image: {
    featured: 'assets/img/ImgPlaceholder.svg',
  },
  technologies: ['Ruby on Rails', 'Html', 'css', 'javascript'],
  link: {
    live: 'https://dev-mamun.github.io/microverse-portfolio/',
    source: 'https://github.com/dev-mamun/microverse-portfolio',
  },
}, {
  name: 'Data Dashboard & Healthcare',
  description: '<p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath</p>',
  image: {
    featured: 'assets/img/Snapshoot_Portfolio.svg',
  },
  technologies: ['Ruby on Rails', 'Html', 'css', 'javascript'],
  link: {
    live: 'https://dev-mamun.github.io/microverse-portfolio/',
    source: 'https://github.com/dev-mamun/microverse-portfolio',
  },
}];

let modal = '';

// eslint-disable-next-line no-unused-vars
function createPopUp(item, index) {
  // eslint-disable-next-line no-unused-vars
  const html = `<div id="project${index}" class="modal">
            <div class="modal-content">
                <div class="project-img">
                    <span id="cid${index}" class="close">X</span>
                    <img src="${item.image.featured}">
                    <div class="overlay">
                        <span id="mid${index}" class="mclose">X</span>
                    </div>
                </div>
                <div class="title-link">
                    <div>
                        ${item.name}
                    </div>
                    <div>
                        <a type="button" class="c-btn" href="${item.link.live}" target="_blank" rel="noopener noreferrer"><span>See Live</span>
                            <img src="assets/img/IconExport.svg">
                        </a>
                        <a type="button" class="c-btn" href="${item.link.source}" target="_blank" rel="noopener noreferrer"><span>See Source</span>
                            <img src="assets/img/Icon-GitHub.svg">
                        </a>
                    </div>
                </div>
                <div class="project-title">
                    ${item.name}
                </div>
                <div class="tech-tags">
                    <ul>
                        <li>Ruby on Rails</li>
                        <li>Html</li>
                        <li>css</li>
                        <li>javascript</li>
                    </ul>
                </div>
                <div class="project-desc">
                    ${item.description}
                </div>
                <div class="project-link">
                    <a type="button" class="c-btn" href="${item.link.live}" target="_blank" rel="noopener noreferrer"><span>See Live</span>
                        <img src="assets/img/IconExport.svg">
                    </a>
                    <a type="button" class="c-btn" href="${item.link.source}" target="_blank" rel="noopener noreferrer"><span>See Source</span>
                        <img src="assets/img/Icon-GitHub.svg">
                    </a>
                </div>
            </div>
        </div>`;
  const parent = document.getElementById('project-modal');
  parent.insertAdjacentHTML('beforeend', html);
}

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
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
    // Recent work project list
    projects.forEach((item, index) => {
      createPopUp(item, index);
      const parent = document.getElementById('items');

      const article = document.createElement('article');
      article.classList.add('c-posts__item', 'card-wrapper');

      const cardImage = document.createElement('div');
      cardImage.id = 'card-id';
      cardImage.classList.add('card-image-wrapper');

      const cardContent = document.createElement('div');
      cardContent.classList.add('card-content-wrapper');

      cardContent.append(Object.assign(document.createElement('h2'), {
        className: 'work-card-title', innerText: item.name,
      }), Object.assign(document.createElement('div'), {
        id: 'tech-content', className: 'tech-tags',
      }), Object.assign(document.createElement('button'), {
        id: `project-${index}`, type: 'button', className: 'c-btn pdetails', innerText: 'See Project',
      }));

      const ul = document.createElement('ul');
      item.technologies.forEach((tech) => {
        const li = Object.assign(document.createElement('li'), { innerText: tech });
        ul.append(li);
      });
      cardContent.childNodes[1].appendChild(ul);
      article.append(cardImage, cardContent);
      parent.appendChild(article);
    });
    // End of project loop
    const pdetails = document.querySelectorAll('.pdetails');
    pdetails.forEach((btn) => {
      btn.addEventListener('click', () => {
        const mid = btn.getAttribute('id');
        modal = document.getElementById(mid.replace('-', ''));
        modal.style.display = 'block';
        body.classList.add('disable-scroll');
        html.classList.add('disable-scroll');
      });
    });

    const close = document.querySelectorAll('.close');
    close.forEach((btn) => {
      btn.addEventListener('click', () => {
        modal.style.display = 'none';
        body.classList.remove('disable-scroll');
        html.classList.remove('disable-scroll');
      });
    });

    const mclose = document.querySelectorAll('.mclose');
    mclose.forEach((btn) => {
      btn.addEventListener('click', () => {
        modal.style.display = 'none';
        body.classList.remove('disable-scroll');
        html.classList.remove('disable-scroll');
      });
    });

    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
        body.classList.remove('disable-scroll');
        html.classList.remove('disable-scroll');
      }
    });
  }
};
