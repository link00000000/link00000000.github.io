changeCard = (image, title, desc, link) => {
    let cardElem = document.querySelector('#projects .card');
    addClass(cardElem, 'card-transition')
    cardElem.querySelector('.image').style.backgroundImage = `url(${image})`;
    cardElem.querySelector('.title').innerHTML = title;
    cardElem.querySelector('.desc').innerHTML = desc;
    cardElem.querySelector('.view-on-github').href = link;
    removeClass(cardElem, 'card-transition');
}
