const colors = ['red', 'green', 'purple', 'blue', 'blueviolet', 'brown', 'tomato', 'orangered', 'gold', 'orange', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightsteelblue', 'lightyellow'];

const getRandomNumber = () => Math.floor(Math.random() * colors.length);

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  const randomColor = colors[getRandomNumber()];
  color.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
});
