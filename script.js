const btn_subscribe = document.querySelector('.btn-subscribe')
const btn_dimiss = document.querySelector('.btn-dimiss')

const main_card = document.querySelector('.main-card')
const main_message = document.querySelector('.success')

const emailInput = document.querySelector('#iemail')
const emailForm = document.querySelector('#emailForm')

// Event that controls after submit of form

emailForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = emailInput.value;
    const isValid = validateEmail(email)
    // validate email

    if(isValid) {
        btn_subscribe.addEventListener('click', () => {
            main_card.classList.toggle('dn')
            main_message.classList.toggle('db')
        })
        
        btn_dimiss.addEventListener('click', () => {
            main_card.classList.toggle('dn')
            main_message.classList.toggle('db')
        })
    } else {
        
    }
})

// validate function

const validateEmail = (email) => {
    const regex = /^[^\s]+@[^\s]+\.[^\s]+$/
    return regex.test(email);
}

