export const register = async () => {
  const username = document.getElementById('username')
  const passsword = document.getElementById('passsword')
  const confirm = document.getElementById('confirm')

  const data = {
    username: username.value,
    passsword: passsword.value,
    confirm: confirm.value,
  }

  console.log(JSON.stringify(data))

  const responce = await fetch('http://localhost:80/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  const res = responce.json()
  console.log(res)
}