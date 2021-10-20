
// //////////////////////// hamburger menu ////////////////////////////
const hamBtn = document.querySelector('.header_ham');
const mainLogo = document.querySelector('.header_logo img');
const overlay = document.querySelector('.header_overlay');
const mobMenu = document.querySelector('.header_overlayMenu');
const addRemoveMobMenu = document.querySelectorAll('.addRemoveMobMenu');

addRemoveMobMenu.forEach((addRemove) => {
  addRemove.addEventListener('click', e => {
      // Ham Animation
      hamBtn.classList.toggle('hamAnimation');
      // Hiding the main bookmark logo on mobile
      mainLogo.classList.toggle('hidden');
      // toggling overlay
      overlay.classList.toggle('activeOverlay');
      // making body overflow hidden when overlay appears
      document.body.classList.toggle('overflow-hidden');
      // smooth scroll
      const mobileLinks = [...document.querySelectorAll('.header_overlayMenu_link')];

      mobileLinks.forEach(element => {
        element.addEventListener('click',smoothScroll(element));
        });
      // hiding the mob menu
      mobMenu.classList.toggle('activeMobMenu');
  });
});

// ////////////////////////////// tabs /////////////////////////////////////
const featureContent = document.querySelector('.features_content');
const changer = document.querySelector('.features_changer');
const featureHeading = document.querySelector('.features_content_description h2');
const featureParagraph = document.querySelector('.features_content_description p');
const featureImage = document.querySelector('.features_content_image img');

let features = [
  {
      heading: 'Bookmark in one click',
      description:
          'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
      imgPath: 'images/illustration-features-tab-1.svg',
      altText: 'dashboard',
  },
  {
      heading: 'Intelligent search',
      description:
          'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
      imgPath: 'images/illustration-features-tab-2.svg',
      altText: 'dashboard with magnifying glass',
  },
  {
      heading: 'Share your bookmarks',
      description:
          'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
      imgPath: 'images/illustration-features-tab-3.svg',
      altText: 'people waving to each other',
  },
];

function changeTab(index) {
  function changeContent(index) {
      featureHeading.textContent = features[index].heading;
      featureParagraph.textContent = features[index].description;
      featureImage.src = features[index].imgPath;
      featureImage.alt = features[index].altText;
  }

  featureContent.classList.add('fade-out');

  setTimeout(() => {
      changeContent(index);
      featureContent.classList.remove('fade-out');
  }, 1000);
};

function changeTabs(e) {
  for (tab of changer.children) {
      tab.classList.remove('active');
  }

  e.target.classList.add('active');

  if (e.target.id === 'simple') {
      changeTab(0);
  } else if (e.target.id === 'speedy') {
      changeTab(1);
  } else if (e.target.id === 'easy') {
      changeTab(2);
  }
};

changer.addEventListener('click', (e) => {
  changeTabs(e);
});

// ///////////////////////////////////////// faq /////////////////////

const faqButton = document.querySelectorAll('.faq_button');

faqButton.forEach(button => {
    button.addEventListener('click', (e) => {

        if (e.target.getAttribute('aria-expanded') === 'true') {
            e.target.setAttribute('aria-expanded', false)
        }
        else {
            faqButton.forEach(btn => {
                if (btn === e.target) {
                    btn.setAttribute('aria-expanded', true)
                }
                // else{
                //     btn.setAttribute('aria-expanded', false)
                // }
            });
        }
    });
});

// /////////////////////////////// contact ///////////////////////////////

const contactForm = document.querySelector('.contact_form');
const emailField = document.querySelector('#email');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let userEmail = emailField.value;
    const emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z]+(\.[a-zA-Z]+)?$/;
    if(emailRegex.test(userEmail)) {
        emailField.parentElement.classList.remove('error')
        emailField.value = '';
        emailField.blur();
    }
    else{
        emailField.parentElement.classList.add('error')
    }
});

// ////////////////////////////// smooth scroll ////////////////////////////
const scrollLink = [...document.querySelectorAll('.header_nav_link')];
const ctaButtons = [...document.querySelectorAll('.hero_cta a')];
const footerLinks = [...document.querySelectorAll('.footer_links a')];


scrollLink.forEach(element => {
    element.addEventListener('click',smoothScroll(element));
});

ctaButtons.forEach(element => {
    element.addEventListener('click',smoothScroll(element));
});

footerLinks.forEach(element => {
    element.addEventListener('click',smoothScroll(element));
});

function smoothScroll (el){
    el.addEventListener('click', (e) =>{
        e.preventDefault();
    
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        let position = element.offsetTop - 90;
    
        window.scrollTo({
          left: 0,
          top: position,
          behavior: 'smooth'
        });
    
      });
};
