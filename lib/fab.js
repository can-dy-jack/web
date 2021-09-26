// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('c');

// create a rectangle object
var rect = new fabric.Rect({
  left: 170,
  top: 100,
  fill: 'rgba(100,100,210,.6)',
  width: 120,
  height: 120,
  angle: 45
});

// "add" rectangle onto canvas
canvas.add(rect);



/* native canvas */
// reference canvas element
var canvasEl = document.getElementById('c2');

// get 2d context to draw on (the "bitmap" mentioned earlier)
var ctx = canvasEl.getContext('2d');

// set fill color of context
ctx.fillStyle = 'red';

// create rectangle at a 100,100 point, with 20x20 dimensions
// ctx.fillRect(60, 60, 60, 60);

// 旋转
ctx.translate(80, 80);
ctx.rotate(Math.PI / 4);
ctx.fillRect(-10, -10, 40, 40);
