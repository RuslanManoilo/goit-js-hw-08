var throttle = require('lodash.throttle');


const formElem = document.querySelector('.feedback-form');
// console.log(formElem);

formElem.addEventListener('input', throttle(onFormInput, 500));
formElem.addEventListener('submit', formSubmit);

getValueForm();

function onFormInput(event) {
    const emailValue = formElem.elements.email.value;
    const messageValue = formElem.elements.message.value;
    // console.log(emailValue);
    // console.log(messageValue);

    const objForm = {
        email: emailValue,
        message: messageValue,
    };
    // console.log(objForm);

    localStorage.setItem("feedback-form-state", JSON.stringify(objForm));
};

function formSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();

    const objForm = JSON.parse(localStorage.getItem("feedback-form-state"));
    console.log(objForm);
    localStorage.removeItem("feedback-form-state");
}

function getValueForm(event) {
    const saveData = JSON.parse(localStorage.getItem("feedback-form-state"));
        if (saveData) {
            formElem.elements.email.value = saveData.email;
            formElem.elements.message.value = saveData.message;
        };
};