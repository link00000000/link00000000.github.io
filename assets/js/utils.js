// Adds class to an element
addClass = (elem, className) => {
    if(!elem.classList.contains(className)) {
        elem.classList.add(className);
    }
}

// Removes class from an element
removeClass = (elem, className) => {
    if(elem.classList.contains(className)) {
        elem.classList.remove(className);
    }
}
