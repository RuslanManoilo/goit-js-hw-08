var throttle = require('lodash.throttle');


const formElem = document.querySelector('.feedback-form');
const formButton = document.querySelector('.feedback-form button');

formElem.addEventListener('input', throttle(onFormInput, 500));
formButton.addEventListener('click', getFormButton);
formElem.addEventListener('submit', formRemove);

function onFormInput() {
    const emailValue = formElem.elements.email.value;
    const messageValue = formElem.elements.message.value;
    // console.log(emailValue);
    // console.log(messageValue);

    const objForm = {
        email: emailValue,
        message: messageValue,
    }
    // console.log(objForm);

    localStorage.setItem("feedback-form-state", JSON.stringify(objForm));
}

function getFormButton(event) {
    const getObjForm = JSON.parse(localStorage.getItem("feedback-form-state"));
    console.log(getObjForm);
}

function formRemove(event) {
    event.preventDefault();

    const objForm = JSON.parse(localStorage.getItem("feedback-form-state"));
    // console.log(objForm);
    localStorage.removeItem("feedback-form-state");

    event.currentTarget.reset();
}