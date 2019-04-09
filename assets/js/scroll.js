// TODO: Impliment touchscreen scrolling

let pageWrapper = document.getElementById('page-wrapper'); // Contains all fullscreen pages
let navBar = document.getElementsByTagName('nav')[0];
let navBtns = document.getElementsByClassName('nav-controls')[0];
let ticking = false; // True during animation, false otherwise
let isFirefox = (/Firefox/i.test(navigator.userAgent)); // Evaluates to true if browser is firefox
let isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent)); // Evaluates true if browser is IE
let sensitivity = 30; // Amount to scroll before playing animation
let slideTimeout = 600; // How long to lock slide before another slide can occur
let currentSlide = 0; // Current page displayed
let totalSlide = pageWrapper.children.length; // Total number of fullscreen pages

// Attach 'wheel' event listener on page load, 'DOMMouseScroll' if Firefox
window.onload = () => {
    var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
    window.addEventListener(mousewheelEvent, _.throttle(scrollHandler, slideTimeout), false);
    window.addEventListener('keydown', _.throttle(keydownHandler, slideTimeout), false);
}

// Takes the event triggered and begins page transition
scrollHandler = e => {

    // Gets and converts deltas from various browsers
    let delta = 0;
    if (isFirefox) {
        delta = e.detail * (-120);
    } else if (ifIe) {
        delta = -e.deltaY;
    } else {
        delta = e.wheelDelta;
    }

    // If no transition is currently happening
    if (!ticking) {

        // Scroll Down
        if (delta <= -sensitivity) {
            ticking = true;
            if (currentSlide !== totalSlide - 1) {
                transitionPage(true);
            }
            lockSlideTransition();
        }

        // Scroll Up
        if (delta >= sensitivity) {
            ticking = true;
            if (currentSlide != 0) {
                transitionPage(false);
            }
            lockSlideTransition();
        }
    }
}

keydownHandler = e => {
    if (!ticking) {
        if (e.keyCode == 40) {
            ticking = true;
            if (currentSlide !== totalSlide - 1) {
                transitionPage(true);
            }
            lockSlideTransition();
        }
        if (e.keyCode == 38) {
            ticking = true;
            if (currentSlide !==  0) {
                transitionPage(false);
            }
            lockSlideTransition();
        }
        if (e.keyCode == 27) {
            ticking = true;
            changeSlide(pageWrapper.children[0].id);
            lockSlideTransition();
        }
    }
}

navBtnHandler = isDown => {
    if(!ticking) {
        ticking = true;
        if(isDown) {
            if(currentSlide !== totalSlide - 1) {
                transitionPage(true);
            }
        } else {
            if(currentSlide !== 0) {
                transitionPage(false);
            }
        }
        lockSlideTransition();
    }
}

// 'Locks' slide transitions for slideTimeout amount
lockSlideTransition = () => {
    setTimeout(() => {
        ticking = false;
    }, slideTimeout);
}

// If true is passed, transition page down
// else if false is passed, transition page up
transitionPage = (isDown) => {
    if (isDown && currentSlide < totalSlide - 1) {
        addClass(pageWrapper.children[currentSlide], 'moveUp');
        removeClass(pageWrapper.children[currentSlide + 1], 'moveDown');
        currentSlide++;
    }
    if (!isDown && currentSlide > 0) {
        removeClass(pageWrapper.children[currentSlide - 1], 'moveUp');
        addClass(pageWrapper.children[currentSlide], 'moveDown');
        currentSlide--;
    }

    // Update nav
    updateNav();
}

// Updates the nav color and current selection
updateNav = () => {

    // Updates the color of the navbar and nav buttons
    if (currentSlide != 0) {
        addClass(navBar, 'dark');
        addClass(navBtns, 'dark');
    } else {
        removeClass(navBar, 'dark');
        removeClass(navBtns, 'dark');
    }

    // Updates the selection of the navbar
    document.querySelectorAll('nav div a').forEach(elem => {
        removeClass(elem, 'current');
    });
    addClass(document.querySelectorAll('nav div a')[currentSlide], 'current');
}

changeSlide = (anchor) => {
    ticking = true;
    let i = 0;
    let indexOfAnchor;
    while (indexOfAnchor === undefined) {
        if (pageWrapper.children[i].id == anchor) {
            indexOfAnchor = i;
        } else {
            i++;
        }
    }
    for (i = 0; i < indexOfAnchor; i++) {
        removeClass(pageWrapper.children[i], 'moveDown');
        addClass(pageWrapper.children[i], 'moveUp');
    }
    removeClass(pageWrapper.children[i], 'moveDown');
    removeClass(pageWrapper.children[i], 'moveUp');
    for (i = indexOfAnchor + 1; i < totalSlide; i++) {
        removeClass(pageWrapper.children[i], 'moveUp');
        addClass(pageWrapper.children[i], 'moveDown');
    }
    currentSlide = indexOfAnchor;
    updateNav();
    lockSlideTransition();
}
