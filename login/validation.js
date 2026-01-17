const form = document.getElementById('form')
const id_input = document.getElementById('id-input')
const password_input = document.getElementById('password-input')
const error_message = document.getElementById('error-message')

form.addEventListener('submit', function (e) {
  e.preventDefault() // stop form default submit

  const id = id_input.value.trim()
  const password = password_input.value.trim()

  // Clear previous errors
  error_message.innerText = ''
  id_input.parentElement.classList.remove('incorrect')
  password_input.parentElement.classList.remove('incorrect')

  // Validation
  if (id === '' || password === '') {
    error_message.innerText = 'All fields are required'
    if (id === '') id_input.parentElement.classList.add('incorrect')
    if (password === '') password_input.parentElement.classList.add('incorrect')
    return
  }

  // Login check
  if (id === 'yash' && password === '9170') {
    // ✅ Redirect after successful login
    window.location.href ='..sidebar/main.html'
  } else {
    error_message.innerText = 'Invalid ID or Password'
    id_input.parentElement.classList.add('incorrect')
    password_input.parentElement.classList.add('incorrect')
  }
})
