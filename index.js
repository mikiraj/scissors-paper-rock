
console.log("Hello World");

/*
! need to learn how to take input
first function getComputerChoice


*/

 

 function GetComputerChoice() 
 {

    /*We will use this random number generator 0-2 to choose between r/p/s */
  function getRandomInt() 
  {
    return Math.floor(Math.random() * 3);
  }


  /* switch for computers choice*/
    switch(getRandomInt())
    {
      case 0: 
        choise= "rock";
        break;
      case 1: 
        choise= "paper";
        break;
      case 2: 
      choise= "sciccors"; 
      break;
      default:
        choise= "There is a error!";
    }




  return choise;
}



/* console.log( getComputerChoice() ) */


function game(){

  let personaChoise = prompt("Rock,papper or scissors?");
  console.log(personaChoise);


  let getComputerChoice=  GetComputerChoice();
  let numberOfGame =5
  let win=0;
  let loose=0;
  for(let i=0; i<numberOfGame; i++){
    
    let personaChoise = prompt("Rock/papper/scissor?");
    let compDe        = getComputerChoice();
    let per  = personaChoise.toUpperCase();
    let comp = compDe.toUpperCase();

    if(per=comp){/* if comp and person choose the same option game must have more rounds to finish the game */
      numberOfGame++;
    }else if(per = "ROCK"){
      if(comp= "PAPER"){
        console.log("You lost this round. BOOHOO! Computer choosed "+comp);
        loose++;
      }else if(comp= "SCISSORS"){
        console.log("You won this round. Yeeeay! Computer choosed "+comp);
        win++;
      }


    }else if(per = "PAPER"){
      if(comp= "SCISSORS"){
      console.log("You lost this round. BOOHOO! Computer choosed "+comp);
      loose++;
    }else if(comp= "ROCK"){
      console.log("You won this round. Yeeeay! Computer choosed "+comp);
      win++;
    }

  }else if(per = "SCISSORS"){
      if(comp= "ROCK"){
      console.log("You lost this round. BOOHOO! Computer choosed "+comp );
      loose++;
    }else if(comp= "PAPER"){
      console.log("You won this round. Yeeeay! Computer choosed "+comp );
      win++;
    }

  }

  if(win>loose){
    console.log("YOU WON THE GAME. GOOD BOY/GIRL!")
  }else if(loose>win){
    console.log("YOU LOST THE GAME. THAT'S OKAY!!");
  }
}
/*
console.log("let's begin");
game();*/










