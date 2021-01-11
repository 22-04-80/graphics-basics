import {getColor} from "../components/panel/utils/getColor";
import {bersenham} from "./core/bersenham";
import {drawPixel} from "./drawPixel";

export function drawLine(canvasContext, figureData) {
	if (!figureData.A && !figureData.B) {
		return;
	}

	const {canvas: {width: canvasWidth, height: canvasHeight}} = canvasContext;
	const {A, B} = figureData;
	const color = getColor();
	const imageData = canvasContext.getImageData(0, 0, canvasWidth, canvasHeight);

	const partiallyAppliedDrawPixel = drawPixel.bind(Object.create(null), imageData, canvasWidth, color);
	bersenham(A, B, partiallyAppliedDrawPixel);

	canvasContext.putImageData(imageData, 0, 0);
}
