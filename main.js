const canvasEl = document.querySelector('canvas'),
  canvasCtx = canvasEl.getContext("2d"),
  gapX = 10

const lineWidth = 15;

function setup() {
  canvasEl.width = canvasCtx.width = window.innerWidth
  canvasEl.height = canvasCtx.height = window.innerHeight
}
function draw() {
  // desenho do campo
  canvasCtx.fillStyle = '#286047'
  canvasCtx.fillRect(0, 0, window.innerWidth, window.innerHeight)

  //  desenho da linha central
  canvasCtx.fillStyle = '#ffffff'
  canvasCtx.fillRect(window.innerWidth / 2 - lineWidth / 2, 0, lineWidth, window.innerHeight)

  // desenho da raquete esquerda

  canvasCtx.fillStyle = '#ffffff'
  canvasCtx.fillRect(gapX, 240, lineWidth, 200)

  // desenho da raquete direita
  canvasCtx.fillStyle = '#ffffff'
  canvasCtx.fillRect(window.innerWidth - lineWidth - gapX, 200, lineWidth, 200)

}

setup();
draw();