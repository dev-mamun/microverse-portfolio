const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const html = document.querySelector('html');
const body = document.querySelector('body');
const projects = [{
  name: 'Multi-Post Stories Gain + Glorys',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  image: {
    featured: 'SnapshootPortfolio.svg',
  },
  technologies: ['Ruby on Rails', 'Html', 'css', 'javascript'],
  link: {
    live: '#', source: '#',
  },
}, {
  name: 'Profesional Art Printing Data',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  image: {
    featured: 'SnapshootPortfolio.svg',
  },
  technologies: ['Ruby on Rails', 'Html', 'css', 'javascript'],
  link: {
    live: '#', source: '#',
  },
}, {
  name: 'Data Dashboard & Healthcare',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  image: {
    featured: 'SnapshootPortfolio.svg',
  },
  technologies: ['Ruby on Rails', 'Html', 'css', 'javascript'],
  link: {
    live: '#', source: '#',
  },
}, {
  name: 'Profesional Art Printing Data',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  image: {
    featured: 'SnapshootPortfolio.svg',
  },
  technologies: ['Ruby on Rails', 'Html', 'css', 'javascript'],
  link: {
    live: '#', source: '#',
  },
}, {
  name: 'Data Dashboard & Healthcare',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  image: {
    featured: 'SnapshootPortfolio.svg',
  },
  technologies: ['Ruby on Rails', 'Html', 'css', 'javascript'],
  link: {
    live: '#', source: '#',
  },
}, {
  name: 'Multi-Post Stories Gain + Glorys',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  image: {
    featured: 'SnapshootPortfolio.svg',
  },
  technologies: ['Ruby on Rails', 'Html', 'css', 'javascript'],
  link: {
    live: '#', source: '#',
  },
}];

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
    projects.forEach((item) => {
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
        id: '', type: 'button', className: 'c-btn', innerText: 'See Project',
      }));

      const ul = document.createElement('ul');
      item.technologies.forEach((tech) => {
        const li = Object.assign(document.createElement('li'), { innerText: tech });
        /* const a = Object.assign(
            document.createElement('a'),
            {title: tech, href: '#', rel: 'noopener noreferrer', innerText: tech}
        );
        li.append(a); */
        ul.append(li);
      });
      cardContent.childNodes[1].appendChild(ul);

      article.append(cardImage, cardContent);
      parent.appendChild(article);
      // eslint-disable-next-line no-console
      console.log(item);
    });
  }
};
