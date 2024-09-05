// Smooth Scrolling
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back-to-Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Fade-In Effect using Intersection Observer
const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

fadeInElements.forEach(element => {
    observer.observe(element);
});

// Example of adding a fade-in class in CSS
// .fade-in {
//     opacity: 0;
//     transition: opacity 0.6s ease-in-out;
// }
// .fade-in.visible {
//     opacity: 1;
// }

// Sticky Navigation
const nav = document.querySelector('nav');
const navOffset = nav.offsetTop;

window.addEventListener('scroll', () => {
    if (window.scrollY >= navOffset) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

// Example of sticky class in CSS
// .sticky {
//     position: fixed;
//     top: 0;
//     width: 100%;
//     background: rgba(8, 1, 67, 0.5);
// }

// Lightbox for Images
document.querySelectorAll('img').forEach(image => {
    image.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        const img = document.createElement('img');
        img.src = image.src;
        lightbox.appendChild(img);
        document.body.appendChild(lightbox);
        lightbox.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
    });
});

// Example of lightbox class in CSS
// .lightbox {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.8);
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }
// .lightbox img {
//     max-width: 90%;
//     max-height: 90%;
// }

// Content Tabs
const tabs = document.querySelectorAll('.tabs');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        target.classList.add('active');
    });
});

// Example of tab-content class in CSS
// .tab-content {
//     display: none;
// }
// .tab-content.active {
//     display: block;
// }

// Lazy Loading
document.querySelectorAll('img[data-src]').forEach(img => {
    img.src = img.dataset.src;
    img.removeAttribute('data-src');
});

// Example of lazy loading attribute
// <img data-src="image.jpg" alt="Lazy Load Image">
