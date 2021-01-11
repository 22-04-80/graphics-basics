import {DRAW_TYPE, PANEL_DATA} from "./constants";
import {handleColorChange} from "./handlers/handleColorChange";
import {handlePanelButtonClick} from "./handlers/handlePanelButtonClick";
import {changeColor} from "./utils/changeColor";

export function initializePanel() {
	const panelElement = document.createElement('div');
	panelElement.setAttribute('id', 'app-panel');
	panelElement.setAttribute('class', 'app-panel');
	panelElement.setAttribute(PANEL_DATA.DRAW_TYPE, DRAW_TYPE.LINE);
	panelElement.setAttribute(PANEL_DATA.FIGURE_DATA, JSON.stringify({
		type: DRAW_TYPE.LINE,
		A: null,
		B: null,
	}));

	const buttonsContainerElement = initializeButtons();
	panelElement.appendChild(buttonsContainerElement);

	const colorInputElement = initializeColorPicker();
	panelElement.appendChild(colorInputElement);

	return panelElement;
}

function initializeButtons() {
	const buttonsContainer = document.createElement('div');
	buttonsContainer.addEventListener('click', handlePanelButtonClick);
	buttonsContainer.setAttribute('class', 'panel-buttons-container');

	const drawLineButton = document.createElement('button');
	drawLineButton.setAttribute('id', DRAW_TYPE.LINE);
	drawLineButton.setAttribute('class', 'panel-button');
	drawLineButton.innerText = 'Draw line';

	buttonsContainer.appendChild(drawLineButton);
	return buttonsContainer;
}

function initializeColorPicker() {
	const colorInput = document.createElement('input');
	colorInput.setAttribute('id', 'color-picker');
	colorInput.setAttribute('type', 'color');
	colorInput.addEventListener('input', handleColorChange);
	colorInput.addEventListener('change', handleColorChange);
	changeColor('0', '0', '0', colorInput);

	return colorInput;
}

