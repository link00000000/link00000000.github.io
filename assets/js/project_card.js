changeCard = (thisElem, image, title, desc, link) => {
    if(!thisElem.classList.contains('current')) {
        removeClass(document.querySelector('#projects .menu .item.current'), 'current');
        addClass(thisElem, 'current');

        let cardElem = document.querySelector('#projects .card');
        addClass(cardElem, 'card-transition');
        setTimeout(() => {
            cardElem.querySelector('.image').style.backgroundImage = `url(${image})`;
            cardElem.querySelector('.title').innerHTML = title;
            cardElem.querySelector('.desc').innerHTML = desc;
            cardElem.querySelector('.view-on-github').href = link;
            removeClass(cardElem, 'card-transition');
        }, 1000);
    }
}
