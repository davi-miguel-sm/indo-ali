const button = document.querySelector('.my-button');
const question = document.querySelector('.question');
const indoAli = document.querySelector('#indo-ali');
const song = document.querySelector('#song');

button.addEventListener('click', () => {
	question.style.opacity = 0;
	indoAli.style.opacity = 1;
	song.play();
});
