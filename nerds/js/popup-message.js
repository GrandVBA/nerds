var link = document.querySelector('.footer-address-button');
var popup = document.querySelector('.modal');
var close = popup.querySelector('.modal-close');
var logName = popup.querySelector('.form-item-name');
var logEmail = popup.querySelector('.form-item-email');
var logMessage = popup.querySelector('.form-item-textmessage');
var form = popup.querySelector('.form-message');

var isStorageSupport = true;
var storage = '';

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
  logName.focus();
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
  popup.classList.remove('modal-error');
});

form.addEventListener('submit', function (evt) {
  if (!logName.value && !logEmail.value && !logMessage.value) {
    evt.preventDefault();
    popup.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('login', login.value);
    }
  }
})

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (popup.classList.contains('modal-show')) {
      popup.classList.remove('modal-show');
      popup.classList.remove('modal-error');
    }
  }
})
