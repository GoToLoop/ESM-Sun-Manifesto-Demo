export default class Rectangle {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.alto * this.ancho;
  }
}
