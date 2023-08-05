/* VARIABLES */
let player, walls;
var genshinFont;

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400, 400);
  background(255);
  textFont(genshinFont);

  //Create player sprite
  // player = new Sprite(350, 50, 330, 530);
  // player.rotationLock = true;
  // player.img = 'assets/tartaglia_1.png';
  // player.scale = 0.13;

  player = new Sprite(350, 50, 1300, 1670);
  player.rotationLock = true;
  player.img = 'assets/tartaglia_3.png';
  player.scale = 0.04;

  //Create the maze
  walls = new Group();
  walls.color = color(0);
  walls.collider = "s";
  
  new walls.Sprite(160, 10, 300, 5,);
  new walls.Sprite(10, height/2, 5, height - 15);  
  new walls.Sprite(150, 60, 5, 100);
  new walls.Sprite(width/2 + 35, 390, 325, 5);
  new walls.Sprite(50, 300, 75, 5); 
  new walls.Sprite(340, 146, 110, 5);
  new walls.Sprite(340, 250, 110, 5);
  new walls.Sprite(285, 198, 5, 109);
  new walls.Sprite(185, 332, 5, 109);
  new walls.Sprite(190, 197, 185, 5);
  new walls.Sprite(395, 200, 5, 380);
}

/* DRAW LOOP REPEATS */
function draw() {
  background(255);

  //Move the player
  if (kb.pressing("left")) {
    // player.img = 'assets/tartaglia_1.png';
    player.img = 'assets/tartaglia_3.png';
    player.vel.x = -3;
  } else if (kb.pressing("right")) {
    // player.img = 'assets/tartaglia_2.png';
    player.img = 'assets/tartaglia_4.png';
    player.vel.x = 3;
  } else if (kb.pressing("up")) {
    player.vel.y = -3;
  } else if (kb.pressing("down")) {
    player.vel.y = 3;
  } else {
    player.vel.x = 0;
    player.vel.y = 0;
  }
  //player.moveTowards(mouse);

  // Draw start and end text
  fill(0);
  textSize(20);
  text('Start', 330, 20);
  text('End', 22, 395);

  //Player cannot go above maze
  if (player.y < 20) {
    player.y = 20;
  }
  
  // Player wins
  if (player.y > 380) {
   fill(0);
   textSize(20);
   text('You Win!', 160, 170);
   player.vel.x = 0;
   player.vel.y = 0;
  }
}

/* FONTS */
function preload() {
  genshinFont = loadFont('assets/Genshin_Font.ttf');
}