import {DRAW_TYPE, PANEL_DATA} from "../constants";

export function handlePanelButtonClick(clickEvent) {
	const {target: {id}} = clickEvent;

	switch (id) {
		case DRAW_TYPE.LINE:
			handleLinePanelButtonClick();
			break;
		default:
			handleLinePanelButtonClick();
	}
}

function handleLinePanelButtonClick() {
	const panelElement = document.getElementById('app-panel');

	panelElement.setAttribute(PANEL_DATA.FIGURE_DATA, JSON.stringify({
		type: DRAW_TYPE.LINE,
		A: null,
		B: null,
	}));
}
