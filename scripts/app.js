import { login } from './functions/login.js'
import { register } from './functions/register.js'

const playBtn = document.getElementById('play')
const footer = document.querySelector('.footer')
const likeBtns = document.querySelectorAll('.like_btn')
const loginBtn = document.getElementById('loginBtn')
const registerBtn = document.getElementById('registerBtn')

if (playBtn) {
  playBtn.addEventListener('click', () => {
    footer.classList.toggle('footer--active')
  })
}

if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    login()
  })
}

if (likeBtns) {
  likeBtns.forEach(btn => {
    btn.addEventListener('click', event => {
      event.target.classList.toggle('bxs-heart')
      event.target.classList.toggle('like_btn--active')
    })
  })
}

if(registerBtn) {
  registerBtn.addEventListener('click', () => {
    register()
  })
}