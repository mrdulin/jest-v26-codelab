const incrementBtn = document.querySelector('.increment');
const outputElement = document.querySelector('.output');

let counter = Number(outputElement.textContent);

console.log('script executed');
function increment() {
	outputElement.textContent = counter++;
	console.log(document.querySelector('.output').textContent);
	console.log('increment');
}
incrementBtn.addEventListener('click', increment);
