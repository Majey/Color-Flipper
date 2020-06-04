const colors = ["GREEN", "RED","WHITE","YELLOW", "PINK", "MAROON", "BLACK", "BLUE","PURPLE"];
const clickButton = document.getElementById("click-btn");
const colorName = document.querySelector(".color-name");

//EVENT LISTENER

clickButton.addEventListener("click", ()=>{
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    colorName.textContent = colors[randomNumber];
});

//FUNCTION TO GENERATE RANDOM NUMBERS

function getRandomNumber(){
  
    return Math.floor(Math.random()*colors.length);
   
}

