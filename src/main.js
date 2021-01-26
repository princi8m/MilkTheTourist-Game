function setup ()
{
    bg = loadImage('/Assets/piazza2.jpg');
    createCanvas(1200  , 600);
    img_obelisk = loadImage('/Assets/obelisk.png');
    img_player = loadImage('/Assets/roman1-down.png');
 
    img_player[1] = loadImage('/Assets/roman1-up.png');
    img_player[2] = loadImage('/Assets/roman1-right.png');
    img_player[3] = loadImage('/Assets/roman1-down.png');
    img_player[4] = loadImage('/Assets/roman1-left.png');
    
}

function draw () {
    background(bg);
    keys1();
    player();  
    image(img_obelisk, 567, 80);
}

function player ()
{    
 image(img_player[dir_player], playerX, playerY);
}

