

var h = document.getElementById("hiddenMessage");

function submit(){
  

    h.style.display = "none";
var number = document.getElementById("number");
var randNumber = Math.floor(Math.random() * 11); 
var numberInput = number.value;

  
  
if(numberInput == randNumber){


  h.innerText = "You Won!" 
  h.style.display = "block";
}

  else if (numberInput < randNumber){
   h.innerText = "Your number is to low! by " + randNumber;

  h.style.display = "block";
  }
  
  else if (numberInput > randNumber){
  h.innerText = "Your number is to High! " + randNumber;
  h.style.display = "block";
  }

};
