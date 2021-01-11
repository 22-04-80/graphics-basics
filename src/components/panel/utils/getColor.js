export function getColor(element = null) {
	const selectedElement = element ? element : document.getElementById('color-picker');

	return {
		red: Number.parseInt(selectedElement.getAttribute('data-color-red'), 16),
		green: Number.parseInt(selectedElement.getAttribute('data-color-green'), 16),
		blue: Number.parseInt(selectedElement.getAttribute('data-color-blue'), 16),
		alpha: 255,
	};
}
