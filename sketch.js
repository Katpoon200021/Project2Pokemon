//button variable
let button;

let data;
let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSwCSZP9wwcDCIZXhlC9KnRCKr0zxtTHZBQn03Is5qeFMettISNxkH3SNM0PZi9qjYlR4OqLDO9fE6S/pub?output=csv";

let unova;
let scenary;

//element
let water;
let fire;
let grass;

//pokemon
let serperior;
let emboar;
let samurott;
let stoutland;
let unfexant;
let conkeldurr;
let haxorus;
let scolipede;
let swanna;
let miensharo;
let zoroark;

function preload() {
  //loading images
  //unova region
  unova = loadImage('unova2.PNG');
  //background image
  scenary = loadImage('Grass2.jpg');
  //pokemon images
  serperior = loadImage('serperior.PNG');
  emboar = loadImage('emboar.PNG');
  samurott = loadImage('samurott.PNG');
  stoutland = loadImage('stoutland.PNG');
  unfezant = loadImage('unfezant.PNG');
  conkeldurr = loadImage('conkeldurr.PNG');
  haxorus = loadImage('haxorus.PNG');
  scolipede = loadImage('scolipede.PNG');
  swanna = loadImage('swanna.PNG');
  mienshao = loadImage('mienshao.PNG');
  zoroark = loadImage('zoroark.PNG');
  
  //loading data
  data = loadTable(url, 'csv', 'header');
}

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('data');
}

function draw() {
  background(scenary);
  
  //center text
  textAlign(CENTER);
  textSize(25);
  fill(0);
  stroke(2);
  text('P o k e m o n - U n o v a  R e g i o n', 300, 30);
  
  noStroke();
  rectMode(CENTER);
  fill(0, 240, 0);
  rect(300, 325, 525, 570, 75, 75, 75, 75);
  
  //Loading image page
  //image(unova, 0, 65, 600, 535);
  
  //loading pokemon images
  image(serperior, 100, 40, 50, 60); 
  image(emboar, 100, 100, 50, 50);
  image(samurott, 100, 150, 50, 50);
  image(stoutland, 100, 200, 50, 50);
  image(unfezant, 100, 250, 50, 50);
  image(conkeldurr, 100, 300, 50, 50);
  image(haxorus, 100, 350, 50, 50);
  image(scolipede, 100, 400, 50, 50);
  image(swanna, 100, 450, 50, 50);
  image(mienshao, 100, 500, 50, 50);
  image(zoroark, 100, 550, 50, 50);
  
  if (data) {
    let numRows = data.getRowCount();
    let names = data.getColumn('Pokemon');
    let heights = data.getColumn('Height');
    let weights = data.getColumn('Weight');
  
    
    for (let i = 0; i < numRows; i++) {
      //x position
      let x = 100;
      //y position
      let y = 80 + i * 50;
      //values of pokemons' heights
      let w = heights[i];
      //values of pokemons' weights
      let w1 = weights[i];
      //height of the rectangles
      let h = 20;
      
      rectMode(CORNER);
      fill(0);
      textSize(15);
      textAlign(LEFT);
      text(names[i], x + 100, y - 18);
      
      textAlign(CENTER);
      fill(255, 0,  0);
      rect(x + 100, y - 10, w1, h - 10);
      text(weights[i], x + 360, y - 3);
      text('kg', x + 400, y - 3);
      
      fill(0, 0, 255);
      rect(x + 100, y , w * 10, h - 10);
      text(heights[i], x + 360, y + 10)
      text('m', x + 400, y + 10);
      
    }
  }
}