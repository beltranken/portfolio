export const TWO_PI = Math.PI * 2;
export const HALF_PI = Math.PI / 2;
export const hourInterval = TWO_PI / 12;
export const minuteInterval = TWO_PI / 60;
export const secondInterval = TWO_PI / 60;

export class Base {
  context;

  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
  }

	drawCircle(x: number, y: number, color: string, size: number = 2) {
		this.context.beginPath();
		this.context.arc(x, y, size, 0, 2 * Math.PI, false);
		this.context.fillStyle = color;
		this.context.fill();
		this.context.closePath();
	}

  drawLine(x1: number, y1: number, x2: number, y2: number, color: string = '#ff0000', width: number = 1) {
		this.context.beginPath();
    this.context.strokeStyle = color;
    this.context.lineWidth = width;
    this.context.moveTo(x1, y1);
    this.context.lineTo(x2, y2);
    this.context.stroke();
		this.context.closePath();
  }
}

export function getTimeRotation() {
  const now = new Date();
  const hour = ((now.getHours() % 12) + (now.getMinutes() / 60) + (now.getSeconds() / 60 / 60)) * hourInterval;
  const minute = (now.getMinutes() + now.getSeconds() / 60) * minuteInterval;
  const second = now.getSeconds() * secondInterval;

  return { hour, minute, second };
}

export function toRadian(deg: number) {
  return (deg * Math.PI) / 180;
}

export function getTime() {
  return (new Date()).getTime();
}