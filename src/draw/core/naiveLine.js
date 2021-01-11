export function naiveLine(A, B, drawPixel) {
	const {x: xA, y: yA} = A;
	const {x: xB, y: yB} = B;

	const x1 = xA > xB ? xB : xA;
	const y1 = xA > xB ? yB : yA;
	const x2 = xA > xB ? xA : xB;
	const y2 = xA > xB ? yA : yB;


	const slope = (y2 - y1) / (x2 - x1);
	const offset = y1 - slope * x1;

	for (let x = x1; x <= x2; x++) {
		drawPixel(x, Math.floor(slope * x + offset));
	}
}
