const btn_subscribe = document.querySelector('.btn-subscribe')
const btn_dimiss = document.querySelector('.btn-dimiss')

const main_card = document.querySelector('.main-card')
const main_message = document.querySelector('.success')

const emailInput = document.querySelector('#iemail')
const emailForm = document.querySelector('#emailForm')

const personEmail = document.querySelector('.personEmail')

/* Event that controls after submit of form

emailForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = emailInput.value;
    
    const isValid = validateEmail(email);
    
    if(isValid) {
        unblockBtn();
        personEmail.innerHTML = email
    } else {
        emailForm.classList.add('errorEmail')
    }

})

// function validate email

const validateEmail = (email) => {
    const regex = /^[^\s]+@[^\s]+.[^\s]+$/;
    return regex.test(email);
}

// function unblock the button

const unblockBtn = () => {
    main_card.classList.toggle('dn')
    main_message.classList.toggle('db')
}

function homePage() {
    unblockBtn();
}

*/


// another tip to validate email

const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const requiredEmail = document.querySelector('.required')

const setError = () => {
    requiredEmail.style.border = '1px solid red'
}

const removeError = () => {
    requiredEmail.style.border = ''
}

const emailValidate = () => {
    if(requiredEmail.value.length < 3) {
        setError();
    } else {
        removeError();
    }
}




