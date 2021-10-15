import { toRadian, TWO_PI, hourInterval, minuteInterval, Base, HALF_PI } from './base';

class Dot extends Base {
  x: number;
  y: number;
  size: number;

  constructor(context: CanvasRenderingContext2D, x: number, y: number, size: number) {
    super(context);
    this.x = x;
    this.y = y;
    this.size = size;
  }

  draw() {
    this.drawCircle(this.x, this.y, '#000000', this.size);
  }
}

export class Dots {
  hourObjs: Array<Dot> = [];
  minuteObjs: Array<Dot> = [];
  center: Dot;

  constructor(context: CanvasRenderingContext2D, radius: number = 130) {
    this.center = new Dot(context, 0, 0, 5);

    for(let i=0; i<TWO_PI; i+=hourInterval) {
      const angle = -HALF_PI + i;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      this.hourObjs.push(new Dot(context, x, y, 3));
    }

    for(let i=0; i<TWO_PI; i+=minuteInterval) {
      const angle = -HALF_PI + i;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      this.minuteObjs.push(new Dot(context, x, y, 1));
    }
  }

  updateAndDraw(delta: number) {
    for(let obj of this.hourObjs) {
      obj.draw();
    }

    for(let obj of this.minuteObjs) {
      obj.draw();
    }

    this.center.draw();
  }
}