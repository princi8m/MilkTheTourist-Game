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
    //drawGrid();
   //console.log((floor(mouseX/50)),(floor(mouseY/50)));s
}



function player ()
{    
 image(img_player[dir_player], playerX-40, playerY+40);
}


function drawGrid (){
   
        for (let i = 0; i < 24; i ++ )
        {
          textSize(32);
          text(i, (50*i), 30);
          text(i,  0, 30+(50*i));
          line((50*i), 0, (50*i), 1200);
          line(0, 50*i, 1200, 50*i);

          for (let z = 0; z<12; z++){
           text(cGrid[i][z],(i*50), 50+(z*50));
          checkSquare();
          }

        } // end for loop
     
    
}
