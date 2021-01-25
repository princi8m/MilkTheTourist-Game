function setup ()
{

    bg = loadImage('/Assets/piazza-navona-1.jpg');
    createCanvas(1600  , 800);
    img_player = loadImage('/Assets/statue-1.png');
}

function draw () {
    background(bg);
    image(img_player, 310, 310);
}

function player (direction)
{

}