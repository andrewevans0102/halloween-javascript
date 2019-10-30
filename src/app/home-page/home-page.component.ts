import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor() {}

  title = 'halloween-javascript';
  canvas: any;

  ngOnInit() {
    // how to setup Angular to use P5 JS correctly
    // https://stackoverflow.com/questions/49472433/how-to-use-p5-js-in-angular-5-application/53464162

    // how to position your sketch
    // https://github.com/processing/p5.js/wiki/Positioning-your-canvas

    const sketch = s => {
      s.preload = () => {
        // preload code
      };

      s.setup = () => {
        let canvas2 = s.createCanvas(400, 400);
        canvas2.parent('sketch-holder');
      };

      s.draw = () => {
        let bkg = s.random(0, 30);
        let y_r = s.random(240, 255);
        let y_g = s.random(216, 230);
        let y_b = s.random(62, 162);
        // color pumpkin = color(250, 162, 62);
        // color stem = color(105, 117, 84);

        // s.background(bkg);
        s.noStroke();

        // pumpkin
        s.fill(250, 162, 62);
        // s.ellipseMode(105, 117, 84);
        s.ellipse(200, 220, 360, 320);

        // eyes
        s.fill(y_r, y_g, y_b);
        s.push();
        s.translate(s.width * 0.7, s.height * 0.5);
        s.rotate(0.523598776);
        // s.polygon(0, 0, s.width * 0.15, 3);
        const angle = s.TWO_PI / 3;
        s.beginShape();
        for (let a = 0; a < s.TWO_PI; a += angle) {
          const sx = 0 + s.cos(a) * (s.width * 0.15);
          const sy = 0 + s.sin(a) * (s.width * 0.15);
          s.vertex(sx, sy);
        }
        s.endShape(s.CLOSE);

        s.pop();

        s.push();
        s.translate(s.width * 0.3, s.height * 0.5);
        s.rotate(0.523598776);
        // const angle = s.TWO_PI / 3;
        s.beginShape();
        for (let a = 0; a < s.TWO_PI; a += angle) {
          const sx = 0 + s.cos(a) * (s.width * 0.15);
          const sy = 0 + s.sin(a) * (s.width * 0.15);
          s.vertex(sx, sy);
        }
        s.endShape(s.CLOSE);
        s.pop();

        // mouth
        s.arc(
          s.width * 0.5,
          s.height * 0.68,
          s.width * 0.6,
          s.width * 0.25,
          0,
          3.14
          // s.PIE
          // s.PIE * 2,
          // s.OPEN
        );

        // tooth
        s.fill(250, 162, 62);
        s.rect(s.width * 0.6, s.height * 0.68, s.width * 0.08, s.width * 0.07);

        // stem
        s.fill(105, 117, 84);
        s.beginShape();
        s.vertex(s.width * 0.4, 40);
        s.vertex(s.width * 0.6, 20);
        s.vertex(s.width * 0.6, s.height * 0.25);
        s.vertex(s.width * 0.4, s.height * 0.25);
        s.endShape(s.CLOSE);
      };
    };

    this.canvas = new p5(sketch);
  }
}
