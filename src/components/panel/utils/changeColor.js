export function changeColor(red, green, blue, element = null) {
	const selectedElement = element ? element : document.getElementById('color-picker');

	selectedElement.setAttribute('data-color-red', red);
	selectedElement.setAttribute('data-color-green', green);
	selectedElement.setAttribute('data-color-blue', blue);
}
