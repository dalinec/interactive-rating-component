const submitBtn = document.querySelector('.submit');
const cardOne = document.querySelector('.card-container-1');
const cardTwo = document.querySelector('.card-container-2');
const ratingBtns = document.querySelectorAll('.rating');
const score = document.querySelector('.score');
const warning = document.querySelector('.warning-msg');
let starsScore = '';

const removeActiveBtn = () => {
  for (btn of ratingBtns) {
    btn.classList.remove('active');
  }
};

const handleRating = (event) => {
  removeActiveBtn();
  event.target.classList.add('active');
  return (starsScore = event.target.innerHTML);
};

for (btn of ratingBtns) {
  btn.addEventListener('click', handleRating);
}

const handleSubmit = () => {
  if (starsScore !== '') {
    cardOne.classList.add('hide');
    score.textContent = starsScore;
    cardTwo.classList.remove('hide');
  } else {
    warning.innerHTML = 'Select a rating before submitting!';
  }
};

submitBtn.addEventListener('click', handleSubmit);
