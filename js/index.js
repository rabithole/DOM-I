const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Populate nav tags from siteContent object above. 
let navItem = document.querySelectorAll('a');
let navContent = Object.values(siteContent.nav)
navContent.pop();
// Learn to do this with forEach...
let counter = 0;
for(let i = 0; i < navContent.length; i++){
  navItem[counter].textContent = navContent[i];
  counter++;
}

// Header image
let cta = document.querySelector('#cta-img')
cta.src = 'img/header-img.png'

// Main H1
let ctaH1 = document.querySelector('.cta-text h1')
ctaH1.innerHTML = 'DOM <br> IS <br> AWESOME'

// Button after 'DOM IS AWESOME'
let butTon = document.querySelector('button')
butTon.textContent = 'Get Started';

// class top-content, first H4
let topContent = document.querySelector('.top-content div:nth-child(1) h4')
topContent.textContent = 'FEATURES';
// Selector for first h4 body > div > section.main-content > div.top-content > div:nth-child(1) > h4
let firstP = document.querySelector('.top-content div:nth-child(1) p')
firstP.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'


// class top-content, second H4
let topP = document.querySelector('.top-content div:nth-child(2) h4')
topP.textContent = 'ABOUT';
// Selector for second H4 body > div > section.main-content > div.top-content > div:nth-child(2) > h4
let secondP = document.querySelector('.top-content div:nth-child(2) p')
secondP.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
// selector for second paragraph body > div > section.main-content > div.top-content > div:nth-child(2) > p


let middleImage = document.querySelector('.middle-img');
middleImage.src = 'img/mid-page-accent.jpg';