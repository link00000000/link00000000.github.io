contactFormOverride = () => {
    let form = document.querySelector('.contact-form');
    let name = form.name.value;
    let emailFrom = form.email.value;
    let emailTo = form.dataset.email;
    let message = form.message.value;
    let mailto = `mailto:${emailTo}?subject=A%20message%20from%20${encodeURIComponent(name + ' - ' + emailFrom)}&body=${encodeURIComponent(message)}`;
    window.location = mailto;
}
