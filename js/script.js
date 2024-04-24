const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errMsg = document.getElementById('err-msg');

linkForm.addEventListener('submit', formSubmit);


//Validate URL
function validURL(str) {
    try {
      new URL(str);
      return true;
    } catch(err) {
      return false;
    }
  }

function formSubmit(e) {
    e.preventDefault();

    if(input.value === '') {
        errMsg.innerHTML = 'Please enter your URL'
        input.classList.add('border-red');
    } else if(!validURL(input.value)) {
        errMsg.innerHTML = 'Please enter a valid URL'
        input.classList.add('border-red');
    } else {
        errMsg.innerHTML = ''
        input.classList.remove('border-red');
        alert('Success')
    };
}

//Hamburger Menu
const btn = document.getElementById('menu-btn');
const hamburgerMenu = document.getElementById('menu');

btn.addEventListener('click', navToggle);

function navToggle() {
    btn.classList.toggle('open')
    hamburgerMenu.classList.toggle('flex')
    hamburgerMenu.classList.toggle('hidden')
}