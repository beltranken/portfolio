import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { GlobalService } from '../shared/services/global.service';
import { Rotating, Lines, TWO_PI, Dots, getTime } from './objects';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.scss']
})
export class SnakeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('snakeCanvas', {static: false}) snakeCanvas!: ElementRef<HTMLCanvasElement>;

  activeMenu!: MenuItem;

  subscription!: Subscription;
  requestId: number = 0;
  width: number = 0;
  height: number = 0;
  context!: CanvasRenderingContext2D;
  lastTick: number = 0;
  fpsInterval: number = 0;
  ready: boolean = true;
  moving: boolean = false;

  radius: number = 80;
  speed: number = 0.01;

  isRunning: boolean = false;

  centerX: number = 0;
  centerY: number = 0; 

  innerRoratingObjs!: Rotating;
  outerRoratingObjs!: Rotating;
  linesObj!: Lines;
  dotsObj!: Dots;

  constructor(private globalServices: GlobalService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    const context = this.snakeCanvas.nativeElement.getContext('2d');
    if(context) {
      this.context = context;

      this.createObjs();
      this.fpsInterval = 1000 / 240;
      this.start();

      this.subscription = this.globalServices.activeMenu.subscribe(menuItem => {
        if(menuItem.name) {
          this.activeMenu = menuItem;
          this.moving = true;
          this.ready = true;
        }
      });
    }
  }

  tick = () => {
    this.requestId = requestAnimationFrame(this.tick);

    const now = getTime();
    const elapsed = now - this.lastTick;
    
    if(elapsed > this.fpsInterval && this.isRunning) {
      this.lastTick = now - (elapsed % this.fpsInterval);
      this.clear();
      this.animate();
    }
  }

  animate() {
    this.context.save();
    this.context.translate(this.centerX, this.centerY);
    this.innerRoratingObjs.updateAndDraw(this.lastTick, '#ff0000', '#364f6b');
    this.outerRoratingObjs.updateAndDraw(this.lastTick, '#ff0000', '#364f6b');
    this.linesObj.updateAndDraw(this.lastTick);
    this.dotsObj.updateAndDraw(this.lastTick);
    this.context.restore();
  }

  setSizes() {
    this.width = this.context.canvas.width = 500;
    this.height = this.context.canvas.height = 500;
    this.centerX = this.width / 2;
    this.centerY = this.height / 2;
  }

  start = () => {
    if(this.context) {  
      this.setSizes();    
      this.isRunning = true;
      this.requestId = requestAnimationFrame(this.tick);
    }
  }

  stop() {
    this.isRunning = false;
    if(this.requestId) {
      cancelAnimationFrame(this.requestId);
      this.requestId = 0;
    }
  }

  clear() {
    //TODO: limit the clearing to the 350x350 only
    this.context.clearRect(0, 0, this.width, this.height);
  }

  createObjs() {
    this.innerRoratingObjs = new Rotating(this.context, this.speed, this.radius, 53, 0.09);
    this.outerRoratingObjs = new Rotating(this.context, this.speed, this.radius*2, 13, 0.5, 10);
    this.linesObj = new Lines(this.context, this.radius*2-30);
    this.dotsObj = new Dots(this.context, this.radius*2);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.stop();
  }
}
