import {initializeCanvas} from "./components/canvas/initializeCanvas";
import {initializePanel} from "./components/panel/initializePanel";
import './style/canvas.css';
import './style/index.css';
import './style/normalize.css';
import './style/panel.css';

(function initialize() {
	const appElement = document.createElement('div');
	appElement.setAttribute('id', 'app');
	appElement.setAttribute('class', 'app-root');

	const panelElement = initializePanel();
	appElement.appendChild(panelElement);

	const canvasElement = initializeCanvas();
	appElement.appendChild(canvasElement);

	document.body.appendChild(appElement);
})();

(function setCanvasSize() {
	const canvas = document.getElementById('canvas');
	canvas.width = canvas.clientWidth;
	canvas.height = canvas.clientHeight;
})();
