export function drawPixel(imageData, canvasWidth, color, x, y) {
	const {red, green, blue, alpha = 255} = color;

	const pixelIndex = getPixelIndex(x, y, canvasWidth);
	imageData.data[pixelIndex] = red;
	imageData.data[pixelIndex + 1] = green;
	imageData.data[pixelIndex + 2] = blue;
	imageData.data[pixelIndex + 3] = alpha;
}

function getPixelIndex(x, y, canvasWidth, numberOfColors = 4) {
	return x * numberOfColors + y * canvasWidth * numberOfColors;
}
