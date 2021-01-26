function keys1(){
    if (keyCode === LEFT_ARROW) {
        dir_player=4;
        dirX=-playerSpeed;
        dirY=0;
        playerX = playerX + dirX;
        if (playerX < 100) {playerX = 100 }
      } 
      else if (keyCode === RIGHT_ARROW) {
        dir_player=2;
        dirX=playerSpeed;
        dirY=0;
        playerX = playerX + dirX;
      
      }
      else if (keyCode === UP_ARROW) {
        dir_player=1;
        dirX=0;
        dirY=-playerSpeed;
        playerY = playerY + dirY;
      }
      else if (keyCode === DOWN_ARROW) {
        dir_player=3;
        dirX=0;
        dirY=playerSpeed;
        playerY = playerY + dirY;
    
      }
}

function checkSquare(){
    if ( cGrid[floor(playerX/50)][floor(playerY/50)] === 1 ) {
            console.log("1");
        }
    }