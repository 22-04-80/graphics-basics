import {changeColor} from "../utils/changeColor";

export function handleColorChange(changeEvent) {
	const {target: {value}} = changeEvent;

	const color = value.split('');
	color.splice(0, 1);

	const redValue = color.splice(0, 2).join('');
	const greenValue = color.splice(0, 2).join('');
	const blueValue = color.splice(0, 2).join('');

	changeColor(redValue, greenValue, blueValue);
}
