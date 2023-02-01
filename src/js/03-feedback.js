var throttle = require('lodash.throttle');


const formElem = document.querySelector('.feedback-form');

formElem.addEventListener('input', throttle(onFormInput, 500));
formElem.addEventListener('submit', formSubmit);

const objForm = {
    email: emailValue,
    message: messageValue,
}
// console.log(objForm);

getValueForm();

function onFormInput(event) {
    const emailValue = formElem.elements.email.value;
    const messageValue = formElem.elements.message.value;
    // console.log(emailValue);
    // console.log(messageValue);

    localStorage.setItem("feedback-form-state", JSON.stringify(objForm));
};

function formSubmit(event) {
    event.preventDefault();
    
    localStorage.removeItem("feedback-form-state");

    event.currentTarget.reset();

    console.log(objForm);   
};

function getValueForm() {
   const getObjForm = JSON.parse(localStorage.getItem("feedback-form-state"));

    if (getObjForm) {
        document.querySelector('input') = getObjForm.email;
        document.querySelector('textarea') = getObjForm.message;
    }
};