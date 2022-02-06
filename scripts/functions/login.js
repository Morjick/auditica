export const login = () => {
  const log = document.getElementById('login')
  const password = document.getElementById('password')

  const data = {
    log: log.value,
    password: password.value
  }

  console.log(data)
}