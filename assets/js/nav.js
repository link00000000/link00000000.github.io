toggleNav = (hamburgerElem) => {
    let nav = document.getElementsByTagName('nav')[0];

    if(hamburgerElem.classList.contains('open')) {
        removeClass(hamburgerElem, 'open');
        removeClass(nav, 'open');
    } else {
        addClass(hamburgerElem, 'open');
        addClass(nav, 'open');
    }
}
