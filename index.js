
console.log("Hi");

/*
! need to learn how to take input
first function getComputerChoice


*/

 

 function getComputerChoice() 
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
        choice= "rock";
        break;
      case 1: 
        choice= "paper";
        break;
      case 2: 
      choice= "sciccors"; 
      break;
      default:
        choice= "There is a error!";
    }




  return choice;
}
console.log( getComputerChoice() )
