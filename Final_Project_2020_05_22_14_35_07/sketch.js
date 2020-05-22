let cookie, button, button2, mk, wa, sig = 1;

function preload () {
  cookie = loadImage('unnamed.png')
  mk = loadImage('milk.png')
  wa = loadImage('water.png')
}

function setup() {
  createCanvas(400, 400);
  button = createButton('Milk')
  button.mousePressed(milk);
  button2 = createButton('Water')
  button2.mousePressed(water);
}

function draw() {
  scale(0.5);
    image(cookie, 250,200);
}

function milk() {
  let sig = 2
  image(mk, 400,150);
  button.hide();
}

function water() {
  scale(0.15);
  image(wa, 3500,700);
  
  if (sig = 2) {
  button2.hide(); 
  }
}