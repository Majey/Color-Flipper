const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const colorName = document.querySelector(".color-name");
const clickMeBtn = document.getElementById("click-btn");

//EVENT LISTENER
clickMeBtn.addEventListener("click", ()=>{

    let colorCode = "#";    

    for(i=0; i<6; i++){
        const randomNumber = getRandomNumber();
        colorCode += hex[randomNumber];
        document.body.style.backgroundColor = colorCode;
        colorName.textContent = colorCode;           
    }
    
   //FUNCTION TO GENERATE RANDOM NUMBERS
    function getRandomNumber(){
        return Math.floor(Math.random()*hex.length);        
        
    };

});








