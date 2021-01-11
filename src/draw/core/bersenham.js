export function bersenham(p0, p1, drawPixel) {
	const {x: x0, y: y0} = p0;
	const {x: x1, y: y1} = p1;

	if (Math.abs(y1 - y0) < Math.abs(x1 - x0)) {
		if (x0 > x1)
			plotLineAlongXAxis(p1, p0, drawPixel);
		else
			plotLineAlongXAxis(p0, p1, drawPixel);
	}
	else {
		if (y0 > y1)
			plotLineAlongYAxis(p1, p0, drawPixel);
		else
			plotLineAlongYAxis(p0, p1, drawPixel);
	}
}

function plotLineAlongXAxis(A, B, drawPixel) {
	const {x: x0, y: y0} = A;
	const {x: x1, y: y1} = B;

	const dx = x1 - x0;
	let dy = y1 - y0;

	let yi = 1;
	if (dy < 0) {
		yi = -1;
		dy = -dy;
	}

	let D = (2 * dy) - dx;
	let y = y0;
	for (let x = x0; x <= x1; x++) {
		drawPixel(x, y);
		if (D >= 0) {
			y = y + yi;
			D = D + (2 * (dy - dx));
		}
		else {
			D = D + 2 * dy;
		}
	}
}

function plotLineAlongYAxis(A, B, drawPixel) {
	const {x: x0, y: y0} = A;
	const {x: x1, y: y1} = B;

	let dx = x1 - x0;
	const dy = y1 - y0;

	let xi = 1;
	if (dx < 0) {
		xi = -1;
		dx = -dx;
	}

	let D = (2 * dx) - dy;
	let x = x0;
	for (let y = y0; y <= y1; y++) {
		drawPixel(x, y);
		if (D > 0) {
			x = x + xi;
			D = D + (2 * (dx - dy));
		}
		else {
			D = D + 2 * dx;
		}
	}
}
