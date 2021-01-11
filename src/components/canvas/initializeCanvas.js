import {handleCanvasClick} from "./handlers/handleCanvasClick";

export function initializeCanvas() {
	const canvasWrapper = document.createElement('div');
	canvasWrapper.setAttribute('class', 'canvas-wrapper');

	const canvasElement = document.createElement('canvas');
	canvasElement.setAttribute('id', 'canvas');
	canvasElement.setAttribute('class', 'canvas');
	canvasElement.addEventListener('click', handleCanvasClick);

	canvasWrapper.appendChild(canvasElement);
	return canvasWrapper;
}
