const videoGame = {
    Game:"witcher 3",
    genre:"action-rpg",
    year:2015
  }
  function newFunc(videoGame, str){
    return str in videoGame;
    
  }
  console.log(newFunc(videoGame, 'Game'));