import { toRadian, Base, TWO_PI } from './base';

class Obj extends Base {
    radius: number = 0;
    radiusOffset: number = 0.009;
    x1: number = 0;
    y1: number = 0;
    x2: number = 0;
    y2: number = 0;
    speed: number = 0;
    offset: number = 0;
    wave: number = 8;
    waveSpeed: number;
    space: number;
    
    constructor(context: CanvasRenderingContext2D, offset: number, radius: number, radiusOffset: number, speed: number, waveSpeed: number = 0.009, space: number = 0) {
      super(context);
      this.offset = offset;
      this.radius = radius;
      this.radiusOffset = radiusOffset;
      this.speed = speed;
      this.space = space;
      this.waveSpeed = waveSpeed;
    }

    update(delta: number) {
      const radiusDelta = Math.cos(toRadian(delta * this.waveSpeed) + this.radiusOffset) * this.wave;
      const radius1 = this.radius + this.space + radiusDelta;
      const radius2 = this.radius - this.space - radiusDelta;
      
      const speed = toRadian(delta * this.speed) + this.offset;
      const angleX = Math.cos(speed);
      const angleY = Math.sin(speed);

      this.x1 = Math.trunc(angleX * radius1);
      this.y1 = Math.trunc(angleY * radius1);

      this.x2 = Math.trunc(angleX * radius2);
      this.y2 = Math.trunc(angleY * radius2);
    }

    draw(color1: string = '#00ff00', color2: string = '#ff0000') {
      this.drawCircle(this.x1, this.y1, color1, 1);
      this.drawCircle(this.x2, this.y2, color2, 1);
    }
}

export class Rotating {
  context;
  objs: Array<Obj> = [];

  constructor(context: CanvasRenderingContext2D, speed: number, radius: number, wave: number = 20, waveSpeed: number = 0.009, space: number = 0) {
    this.context = context;

    const inc = TWO_PI / 50;
    for(let i=0; i<=TWO_PI; i+=inc) {
      this.objs.push(new Obj(this.context, i, radius, i * wave, speed, waveSpeed, space));
    }
  }

  updateAndDraw(delta: number, color1: string, color2: string) {
    for(let obj of this.objs) {
      obj.update(delta);
      obj.draw(color1, color2);
    }
  }
}