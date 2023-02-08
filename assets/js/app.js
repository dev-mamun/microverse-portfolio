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
  name: 'Data Dashboard & Healthcare',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  image: {
    featured: 'assets/img/SnapshootPortfolio.svg',
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
                    <span class="close">X</span>
                    <img src="${item.image.featured}">
                    <div class="overlay">
                        <span class="mclose">X</span>
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
    // Get the <span> element that closes the modal
    const close = document.getElementsByClassName('close')[0];
    const mclose = document.getElementsByClassName('mclose')[0];
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
    close.addEventListener('click', () => {
      modal.style.display = 'none';
      body.classList.remove('disable-scroll');
      html.classList.remove('disable-scroll');
    });
    mclose.addEventListener('click', () => {
      modal.style.display = 'none';
      body.classList.remove('disable-scroll');
      html.classList.remove('disable-scroll');
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
