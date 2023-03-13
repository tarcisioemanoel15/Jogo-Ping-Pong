const canvasEl = document.querySelector('canvas'),
  canvasCtx = canvasEl.getContext("2d"),
  gapX = 10;

const field = {
  w: window.innerWidth,
  h: window.innerHeight,
  draw: function () {

    // desenho do campo
    canvasCtx.fillStyle = '#286047'
    canvasCtx.fillRect(0, 0, this.w, this.h)

  },
}

const line = {
  w: 15,
  h: field.h,

  draw: function () {
    //  desenho da linha central
    canvasCtx.fillStyle = '#ffffff'
    canvasCtx.fillRect(
      field.w / 2 - this.w / 2, 0, this.w, this.h
    )
  }
}

const leftPaddle = {
  x: gapX,
  y: 240,
  w: line.w,
  h: 200,
  draw: function () {
    // desenho da raquete esquerda
    canvasCtx.fillStyle = '#ffffff'
    canvasCtx.fillRect(this.x, this.y, this.w, this.h)
  }
}

const rightPaddle = {
  x: field.w - line.w - gapX,
  y: 240,
  w: line.w,
  h: 200,
  draw: function () {
    // desenho da raquete direita
    canvasCtx.fillStyle = '#ffffff'
    canvasCtx.fillRect(this.x, this.y, this.w, this.h)
  }
}

const ball = {
  x: 120,
  y: 240,
  r: 20,

  draw: function () {
    // desenho da bola
    canvasCtx.fillStyle = "#ffffff"
    canvasCtx.beginPath()
    canvasCtx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
    canvasCtx.fill()

  },
}

function setup() {
  canvasEl.width = canvasCtx.width = window.innerWidth
  canvasEl.height = canvasCtx.height = window.innerHeight
}


function draw() {
  field.draw()
  line.draw()
  leftPaddle.draw()
  rightPaddle.draw()
  ball.draw()
}

setup();
draw();