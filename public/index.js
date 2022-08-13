// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', null);
};

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode');

  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
    // if it has been enabled, turn it off
  } else {
    disableDarkMode();
  }
});

const button = document.querySelector('.btn');

button.addEventListener('click', () => {
  button.classList.toggle('liked');
});

const shareBtn = document.querySelector('.share-btn');
const shareOptions = document.querySelector('.share-options');

shareBtn.addEventListener('click', () => {
  shareOptions.classList.toggle('active');
});

const card = document.querySelector('.card');
card.addEventListener('click', () => {
  card.classList.toggle('is-flipped');
});
white_check_mark;
eyes;
raised_hands;

///let buttonComment = document.querySelector(".button-comment");
///let isShow = true;
//function showHide() {
// if (isShow) {
//  buttonComment.style.display = "none";
//   isShow = false;
//  } else {
//  buttonComment.style.display = "block";
//   isShow = true;
// }
//}

//function showHide() {
// isShow = !isShow;
//buttonComment.classList.toggle("hide", isShow)
//}

let buttonComment = document.querySelector('.button-comment');
let comment = document.querySelector('.comment');

comment.addEventListener('click', () => {
  if (buttonComment.style.display === 'none') {
    buttonComment.style.display = 'block';
  } else {
    buttonComment.style.display = 'none';
  }
});
