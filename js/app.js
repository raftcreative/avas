// selectors

const menuToggle = document.querySelectorAll('.menu-toggle');
const input = document.querySelector('input[type="email"]');
const label = document.querySelector('.email-label');

// listeners
input.addEventListener('input', validator);

if (menuToggle) {
  for (let i = 0; i < menuToggle.length; i++) {
    menuToggle[i].addEventListener(
      'click',
      function (e) {
        document.body.classList.toggle('menu--opened');
        e.preventDefault();
      },
      false
    );
  }
}

// funcs

function validator(txt) {
  console.log('validator');
  txt.preventDefault();
  const contents = input.value.trim();
  if (contents) {
    console.log('THERE IS STUFF');
    input.classList.add('typing');
    label.classList.add('typing');
  } else {
    console.log('THERE IS NO STUFF');
    input.classList.remove('typing');
    label.classList.remove('typing');
  }
}
