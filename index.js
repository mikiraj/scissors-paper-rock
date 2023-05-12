console.log("HI");

const myArray=["ROCK", "PAPER", "SCISSOR"];

function getComputerChoice(){
  let choice1 = myArray[Math.floor(Math.random() * 3)];
  let choice = choice1.toUpperCase();
  console.log(choice);
  return choice;
}

function getMyChoice(){
  let myChoice1=prompt("ROCK,PAPER or SCISSOR");
  myChoice=myChoice1.toLocaleUpperCase();
  
  if(myChoice.startsWith("R")){
    myChoice="ROCK"
  }else if(myChoice.startsWith("P")){
    myChoice="PAPER"
  }else if(myChoice.startsWith("S")){
    myChoice="SCISSOR"
  }else{
    getMyChoice();    /* THERE IS SOME MISTAKE HERE */
  }
  console.log(myChoice)
  return myChoice;
}
  let scoreComputer=0;
  let scoreMe=0;
function rockPaperScissor(){
  
  let a= getMyChoice()
  let b= getComputerChoice()
  if(a == b){
    return "Tie";
  }else if(
    (a == "ROCK" && b == "PAPER") ||
    (a == "PAPER" && b == "SCISSOR") ||
    (a == "SCISSOR" && b == "ROCK") 
  ){
    scoreComputer++;
    return "Lost"
  }else if(
    (a == "PAPER" && b == "ROCK") ||
    (a == "SCISSOR" && b == "PAPER") ||
    (a == "ROCK" && b == "SCISSOR") 
  )
  {
    scoreMe++;
    return "Won"
  }

}

console.log(rockPaperScissor())
console.log(scoreComputer)
console.log(scoreMe)



function game(){
  let win=0;
  let lose=0;

  for(let i=0; i<6 ; i++){ 
     
     
   } 
}

game(); 