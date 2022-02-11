const modal = document.getElementById('subscribe-modal');
const closeBtn = document.querySelector('.modal__close');

window.addEventListener('DOMContentLoaded', () => {
  if (!getCookie('modal')) {
    modal.classList.add('modal_active');
  } else {
    console.log(getCookie('modal'));
  }
});

closeBtn.addEventListener('click', () => {
  setCookie('modal', 'removed', { 'max-age': 3600 });
  modal.classList.remove('modal_active');
});

function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)'
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function deleteCookie(name) {
  setCookie(name, '', {
    'max-age': -1,
  });
}

function setCookie(name, value, options = {}) {
  options = {
    path: '/',
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie =
    encodeURIComponent(name) + '=' + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += '; ' + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += '=' + optionValue;
    }
  }

  document.cookie = updatedCookie;
}
