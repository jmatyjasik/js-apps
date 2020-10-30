export class Pencil {
  constructor(color, size) {
    this.drawing = false;
    this.color = color || "red";
    this.size = size || 10;
  }

  onMouseDown(x, y, ctx) {
    this.drawing = true;
    ctx.beginPath();
  }

  onMouseUp(x, y, ctx) {
    this.drawing = false;
  }

  onMouseMove(x, y, ctx) {
    if (this.drawing) {
      ctx.linewWidth = this.size;
      ctx.strokeStyle = this.color;
      ctx.lineCap = "round";
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  }
}
