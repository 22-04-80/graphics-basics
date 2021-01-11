import {drawLine} from "../../../draw/drawLine";
import {DRAW_TYPE, PANEL_DATA} from "../../panel/constants";

export function handleCanvasClick(clickEvent) {
	const panelElement = document.getElementById('app-panel');
	const drawType = panelElement.getAttribute(PANEL_DATA.DRAW_TYPE);

	switch (drawType) {
		case DRAW_TYPE.LINE:
			handleLineCanvasClick(clickEvent);
			break;
		default:
			break;
	}
}

function handleLineCanvasClick(clickEvent) {
	const {layerX: x, layerY: y} = clickEvent;
	const panelElement = document.getElementById('app-panel');
	const figureData = JSON.parse(panelElement.getAttribute(PANEL_DATA.FIGURE_DATA));

	if (!figureData.A) {
		figureData.A = {x, y};
		figureData.B = null;
	}
	else if (!figureData.B) {
		figureData.B = {x, y};
		const canvas = document.getElementById('canvas');
		drawLine(canvas.getContext('2d'), figureData);
	}
	else {
		figureData.A = {x, y};
		figureData.B = null;
	}

	panelElement.setAttribute(PANEL_DATA.FIGURE_DATA, JSON.stringify(figureData));
}
