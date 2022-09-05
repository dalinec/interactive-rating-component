const submitBtn = document.querySelector('.submit');
const cardOne = document.querySelector('.card-container-1');
const cardTwo = document.querySelector('.card-container-2');
const ratingBtns = document.querySelectorAll('.rating');
const score = document.querySelector('.score');
let starsScore = 3;

const handleSubmit = () => {
  cardOne.classList.add('hide');
  score.textContent = starsScore;
  cardTwo.classList.remove('hide');
};

submitBtn.addEventListener('click', handleSubmit);

const handleRating = (event) => {
  for (btn of ratingBtns) {
    btn.classList.remove('active');
  }

  if (!event.target.classList.contains('active')) {
    event.target.classList.add('active');
  } else {
    event.target.classList.remove('active');
  }

  starsScore = event.target.textContent;
};

for (btn of ratingBtns) {
  btn.addEventListener('click', handleRating);
}
