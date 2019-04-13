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
    "h1": "DOM <br> Is <br> Awesome",
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
    "address" : "123 Way 456 Street <br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img[counter] src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Populate nav tags from siteContent object above. 
let navItem = document.querySelectorAll('a');
let navContent = Object.values(siteContent.nav)
navContent.pop();
//////////////////// Learn to do this with forEach... //////////////////
// navLinkValues.forEach((value, index) => {
//   navLinks[index].innerText = value;
// });

/////////////////////   Another forEach solution ///////////////
// let menu_items = document.querySelectorAll('a')
// menu_items.forEach((element, index)=>{element.innerHTML = siteContent['nav'][`nav-item-${index++}`]})

let counter = 0;
for(let i = 0; i < navContent.length; i++){
  navItem[counter].textContent = navContent[i];
  navItem[counter].style.color = 'green';
  counter++;
}
let nav = document.querySelector('nav')
//  Create a new anchor tag with append
const appChild = document.createElement('a');
appChild.textContent = 'Appended';
appChild.style.color = 'blue';
nav.appendChild(appChild)

//  Create a new anchor tag with prepend. 
const prepChild = document.createElement('a');
prepChild.textContent = 'Prepend';
prepChild.style.color = 'blue';
nav.prepend(prepChild);

// Header image
let cta = document.querySelector('#cta-img')
cta.src = siteContent['cta']['img-src'];

// Main H1
let ctaH1 = document.querySelector('.cta-text h1')
ctaH1.innerHTML = siteContent['cta']['h1'];

// Button after 'DOM IS AWESOME'
let butTon = document.querySelector('button')
butTon.textContent = siteContent['cta']['button'];

// class top-content, first H4
let topContent = document.querySelector('.top-content div:nth-child(1) h4')
topContent.textContent = siteContent['main-content']['features-h4'];

let firstP = document.querySelector('.top-content div:nth-child(1) p')
firstP.textContent = siteContent['main-content']['features-content']


// class top-content, second H4
let topP = document.querySelector('.top-content div:nth-child(2) h4')
topP.textContent = siteContent['main-content']['about-h4'];
// Selector for second H4 body > div > section.main-content > div.top-content > div:nth-child(2) > h4
let secondP = document.querySelector('.top-content div:nth-child(2) p')
secondP.textContent = siteContent['main-content']['about-content'];
// selector for second paragraph body > div > section.main-content > div.top-content > div:nth-child(2) > p


let middleImage = document.querySelector('.middle-img');
middleImage.src = siteContent['main-content']['middle-img-src'];

let bottomContentH4_1 = document.querySelector('.bottom-content div:nth-child(1) h4')
bottomContentH4_1.textContent = siteContent['main-content']['services-h4'];

let bottomContentH4_2 = document.querySelector('.bottom-content div:nth-child(2) h4')
bottomContentH4_2.textContent = siteContent['main-content']['services-h4'];

let bottomContentH4_3 = document.querySelector('.bottom-content div:nth-child(3) h4')
bottomContentH4_3.textContent = siteContent['main-content']['vision-h4'];

let bottomContentP_1 = document.querySelector('.bottom-content div:nth-child(1) p')
bottomContentP_1.textContent = siteContent['main-content']['services-content'];

let bottomContentP_2 = document.querySelector('.bottom-content div:nth-child(2) p')
bottomContentP_2.textContent = siteContent['main-content']['product-content'];

let bottomContentP_3 = document.querySelector('.bottom-content div:nth-child(3) p')
bottomContentP_3.textContent = siteContent['main-content']['vision-content'];

let contactH4 = document.querySelector('.contact h4')
contactH4.textContent = siteContent['contact']['contact-h4'];

let contactP_2 = document.querySelector('.contact p:nth-child(2)')
contactP_2.innerHTML = siteContent['contact']['address'];

let contactP_3 = document.querySelector('.contact p:nth-child(3)')
contactP_3.innerHTML = siteContent['contact']['phone'];

let contactP_4 = document.querySelector('.contact p:nth-child(4)')
contactP_4.innerHTML = siteContent['contact']['email'];

let footerP = document.querySelector('footer p')
footerP.textContent = siteContent['footer']['copyright'];



