class Katawarship {
  constructor(position) {
    this.position = position;
  }

  move(x, y) {
    return this.position.x + this.position.y + x + y; // to be deleted
  }
}

module.exports = Katawarship;
