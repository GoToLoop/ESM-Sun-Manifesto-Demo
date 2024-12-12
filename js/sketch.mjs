// Importing class Rectangle from file "Rectangle.mjs" in subfolder "classes":
import Rectangle from "../classes/Rectangle.mjs";

// Exporting sketch() callback so it can be accessed by "secondsketch.mjs":
export default function sketch(p) { // param "p" is the the newly created sketch
  // Make this p5.js sketch instance "p" see its callback methods:
  p.setup = setup;
  p.draw = draw;
  p.keyPressed = keyPressed;

  p.a = 5; // p5 instance property "a" added
  p.b = 8; // p5 instance property "b" added

  p.myrect = new Rectangle(10, 20); // p5 instance property "myrect" added
}

var bg; // background color module-scoped variable for this sketch

function setup() {
  this.createCanvas(600, 400); // keyword "this" represents sketch's instance'

  this.noLoop(); // refreshes canvas only when a key is pressed

  this.print(++this.a); // prop "a" is now 6
  this.print(++this.b); // prop "b" is now 9

  this.print(this.myrect.area); // prop "myrect.area" is 200

  this.fill("yellow"); // yellow foreground
  this.stroke("orange"); // orange outline
  this.strokeWeight(20); // large outline

  // if "bg" hasn't been initialized yet, set it to color "sky blue":
  if (!bg) bg = this.color(135, 206, 235);
}

function draw() {
  this.background(bg); // sky blue background
  this.circle(550, 50, 100); // sun at the top right
}

function keyPressed() {
  const k = this.keyCode;

  if (k == this.RIGHT_ARROW) ++this.b;
  else if (k == this.LEFT_ARROW) --this.b;

  else if (k == this.DOWN_ARROW) ++this.a;
  else if (k == this.UP_ARROW) --this.a;

  this.panel.redraw(); // redraws "secondsketch.mjs"'s canvas
  this.redraw(); // redraws "sketch.mjs"'s canvas'
}
