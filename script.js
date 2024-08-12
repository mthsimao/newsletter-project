const btn_subscribe = document.querySelector('.btn-subscribe')
const btn_dimiss = document.querySelector('.btn-dimiss')

const main_card = document.querySelector('.main-card')
const main_message = document.querySelector('.success')

let emailInput = document.querySelector('#iemail')

let personEmail = document.querySelector('.personEmail')

const msgError = document.querySelector('.error')

// block on the button without email

const blockBtn = () => {
    btn_subscribe.disabled = true
    btn_subscribe.style.cursor = 'not-allowed'
}

blockBtn();

// unblock the button

const unblockBtn = () => {
    personEmail.innerHTML = emailInput.value
    btn_subscribe.disabled = false
    btn_subscribe.style.cursor = 'pointer'
}

// Set or Remove error

const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const requiredEmail = document.querySelector('.required')

const setError = () => {
    emailInput.classList.add('errorEmail')
    msgError.style.display = 'inline-block'
}

const removeError = () => {
    emailInput.classList.remove('errorEmail')
    msgError.style.display = 'none'
}

// Function email validate

function emailValidate() {

    if(emailRegex.test(requiredEmail.value)) {
        removeError();
        unblockBtn();
    } else if(emailInput.value == '') {
        removeError();
        blockBtn();
    } else {
        setError();
        blockBtn();
    }
}

// function to unblock the button

const toggleBtn = () => {
    main_card.classList.toggle('dn')
    main_message.classList.toggle('db')
}

btn_subscribe.addEventListener('click', (event) => {
    event.preventDefault();
    toggleBtn();
})

const homePage = () => {
    toggleBtn();
    emailInput.value = ''
}




