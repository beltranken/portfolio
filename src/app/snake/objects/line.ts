import { toRadian, TWO_PI, hourInterval, minuteInterval, Base, HALF_PI, getTimeRotation } from './base';

class Line extends Base {
	x: number;
	y: number = 0;
	wide: number;
  color: string;

	constructor(context: CanvasRenderingContext2D, x: number, y: number, wide: number, color: string) { 
		super(context);
		this.x = x;
		this.y = y;
		this.wide = wide;
    this.color = color
	}

	update(delta: number) {
    
	}

	draw() {
		this.drawLine(0, 0, this.x, this.y, this.color, this.wide);
	}
}

export class Lines {
	context;
	hourObjs: Line;
	minuteObjs: Line;
	secondObjs: Line;
	
	constructor(context: CanvasRenderingContext2D, len: number) {
		this.context = context;
    this.hourObjs = new Line(context, len - 40, 0, 5, '#364f6b');
    this.minuteObjs = new Line(context, len - 15, 0, 3, '#43dde6');
    this.secondObjs = new Line(context, len - 10, 0, 2, '#fc5185');
	}

	updateAndDraw(delta: number) {
		const timeRotation = getTimeRotation();
		this.context.save();
		this.context.rotate(-HALF_PI+timeRotation.hour);
		this.hourObjs.update(delta);
    this.hourObjs.draw();
		this.context.restore();

		this.context.save();
		this.context.rotate(-HALF_PI+timeRotation.minute);
		this.minuteObjs.update(delta);
    this.minuteObjs.draw();
		this.context.restore();
		
		this.context.save();
		this.context.rotate(-HALF_PI+timeRotation.second);
		this.secondObjs.update(delta);
    this.secondObjs.draw();
		this.context.restore();
	}
}