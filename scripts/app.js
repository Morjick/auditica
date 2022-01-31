console.log('i am work')

const likeBtns = document.querySelectorAll('.like_btn')
const descBtns = document.querySelectorAll('.desc_btn')
const playBtn = document.getElementById('play')
const loginBtn = document.getElementById('login')

likeBtns.forEach(likeBtn => {
  likeBtn.addEventListener('click', (e) => {
    // e.target.classList.remove('bx-heart')
    e.target.classList.toggle('bxs-heart')
    e.target.classList.toggle('like_btn--active')
    console.log('click')
      // < i class='bx bxs-heart' ></i >   
  })
})

descBtns.forEach(descBtn => {
  descBtn.addEventListener('click', (e) => {
    console.log('click')
  })
})

playBtn.onclick = () => {
  const footer = document.querySelector('.footer')

  if(playBtn.innerText === 'Pause') {
    playBtn.innerText = 'Play'
  } else if(playBtn.innerText === 'Play') {
    playBtn.innerText = 'Pause'
  }
  
  footer.classList.toggle('footer--active')
}