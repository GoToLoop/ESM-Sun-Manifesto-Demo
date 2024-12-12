// Importing sketch() callback from file "sketch.mjs" as firstSketch():
import firstSketch from "./sketch.mjs";

// Exporting sketch() callback so it can be accessed by "index.mjs":
export default function sketch(p) { // param "p" is the the newly created sketch
  // Make this p5.js sketch instance "p" see its callback methods:
  p.setup = setup;
  p.draw = draw;

  // Instantiates firstSketch() and places it in <div> id="first-sketch-holder":
  p.firstSketch = new p5(firstSketch, "first-sketch-holder");

  // "secondsketch.mjs" will be known by "sketch.mjs" as property "panel":
  p.firstSketch.panel = p;
}

var bg; // background color module-scoped variable for this sketch

function setup() {
  this.createCanvas(400, 200); // keyword "this" represents sketch's instance'

  this.noLoop(); // "sketch.mjs" will control when "secondsketch.mjs" refreshes

  this.textSize(12); // increase font size

  // if "bg" hasn't been initialized yet, set it to gray shade 220:
  if (!bg) bg = this.color(220);
}

function draw() {
  this.background(bg); // gray shade 220

  // Unpack instance properties "a" & "b" from property "firstSketch":
  const { a, b } = this.firstSketch;

  // Instance property "a" from "sketch.mjs" p5.js sketch:
  this.text("Valor de a: " + a, 20, 50);

  // Instance property "b" from "sketch.mjs" p5.js sketch:
  this.text("Valor de b: " + b, 20, 80);

  this.text("Conteo de cuadros: " + this.frameCount, 20, 110)
}
