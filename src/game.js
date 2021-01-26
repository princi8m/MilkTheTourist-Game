function keys1(){
    if (keyCode === LEFT_ARROW) {
        dir_player=4;
        dirX=-5;
        dirY=0;
        playerX = playerX + dirX;
        if (playerX < 100) {playerX = 100 }
      } 
      else if (keyCode === RIGHT_ARROW) {
        dir_player=2;
        dirX=5;
        dirY=0;
        playerX = playerX + dirX;
      
      }
      else if (keyCode === UP_ARROW) {
        dir_player=1;
        dirX=0;
        dirY=-5;
        playerY = playerY + dirY;
      }
      else if (keyCode === DOWN_ARROW) {
        dir_player=3;
        dirX=0;
        dirY=5;
        playerY = playerY + dirY;
    
      }
}