function keys1(){
    playerX2=playerX;
    playerY2=playerY;
    if (keyCode === LEFT_ARROW) {
        dir_player=4;
        dirX=-playerSpeed;
        dirY=0;
        playerX2=playerX+dirX;
        if (checkSquare()===0) {playerX=playerX2}
      } 
      else if (keyCode === RIGHT_ARROW) {
        dir_player=2;
        dirX=playerSpeed;
        dirY=0;
        playerX2=playerX+dirX;
        if (checkSquare()===0) {playerX=playerX2}
        
      
      }
      else if (keyCode === UP_ARROW) {
        dir_player=1;
        dirX=0;
        dirY=-playerSpeed;
        playerY2=playerY+dirY;
        if (checkSquare()===0) {playerY=playerY2}
      }
      else if (keyCode === DOWN_ARROW) {
        dir_player=3;
        dirX=0;
        dirY=playerSpeed;
        playerY2=playerY+dirY;
        if (checkSquare()===0) {playerY=playerY2}
    
      }

      else if (keyCode === ENTER) {
       console.log(playerX, playerY);
      
    
      }
}

function checkSquare(){
    // if ( cGrid[floor(playerX/50)][floor(playerY/50)] === 1 ) {
    //         return 0;
    //     } else {return 1;}
    //console.log((cGrid[floor(playerX/50)-1][floor(playerY/50)-1]));
    return cGrid[Math.round(playerX2/50)][Math.round(playerY2/50)+1];
    }