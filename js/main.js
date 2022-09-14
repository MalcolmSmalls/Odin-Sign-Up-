
const password = document.getElementById('password')
const confirmedPassword = document.getElementById('confirmed_password')
const passText = document.querySelector('.invalid_pass')

confirmedPassword.addEventListener('keyup', matchPass)

function matchPass(e){
    if(password.value !== confirmedPassword.value){
        // alert('sheeez')
        password.classList.toggle('invalid')
        confirmedPassword.classList.toggle('invalid')
        passText.classList.toggle('hidden')
    }
}