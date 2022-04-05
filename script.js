let headsCount = 0;
let tailsCount = 0;

//eventListener on button, 
//if user clicks 'flip the penny' button 
//these updates take place:


//penny image gets updated to heads or tails

//then let's get rolling header3 updates to
//heads or tails

let pennyBlueButton = document.querySelector("#blue-button")
pennyBlueButton.addEventListener("click", function (){
    //decide the outcome:heads/tails
    let isHeads = Math.random() < 0.5;
    
    if(isHeads) {
        //updating my DOM to display heads outcome
        document.querySelector("img").src = "./assets/penny-heads.jpg";
        document.querySelector("#rolling").textContent = "You Flipped Heads!"
        headsCount++
    }else{
        //updating my DOM to display tails outcome
        document.querySelector("img").src = "./assets/penny-tails.jpg";
        document.querySelector("#rolling").textContent = "You Flipped Tails!"
        tailsCount++
    }

        
        //calculate sum and percentage for heads/tails
        let sum = headsCount + tailsCount;
        let percentageHeads = Math.round(headsCount/sum * 100);
        let percentageTails = Math.round(tailsCount/sum * 100);

        //update table cells for total counts and percentages
        document.querySelector(".heads-counter").textContent = headsCount;
        document.querySelector(".tails-counter").textContent = tailsCount;
        document.querySelector(".heads-percentage").textContent = percentageHeads + "%";
        document.querySelector(".tails-percentage").textContent = percentageTails + "%";

        
});


//eventListener on button, 
//if user clicks 'clear scoreboard' button 
//these updates take place:

let pennyOrangeButton = document.querySelector("#orange-button")
pennyOrangeButton.addEventListener("click", function (){
    //reset the heads and tails values to zero
    let headsCount = 0;
    let tailsCount = 0;

    //Update the message to the user
    document.querySelector("#rolling").textContent = "Let's Get Rolling!"

    //Update the scoreboard

    ////calculate sum and percentage for heads/tails
    let sum = headsCount + tailsCount;
    let percentageHeads = 0;
    let percentageTails = 0;

    if (sum > 0){
        let percentageHeads = Math.round(headsCount/sum * 100);
        let percentageTails = Math.round(tailsCount/sum * 100);}

        document.querySelector(".heads-counter").textContent = headsCount;
        document.querySelector(".tails-counter").textContent = tailsCount;
        document.querySelector(".heads-percentage").textContent = percentageHeads + "%";
        document.querySelector(".tails-percentage").textContent = percentageTails + "%";

    });
//results table gets updated as reset of 0 as well as percentages


