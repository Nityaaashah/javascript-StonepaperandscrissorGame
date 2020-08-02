const game = () =>{
    let pscore = 0;
    let cscore = 0;
    
    //start the game//
    const startgame = () => {
      const playbtn = document.querySelector(".intro button");
      const introscreen = document.querySelector(".intro");
      const match = document.querySelector(".match");

      playbtn.addEventListener("click", ()=>{
        introscreen.classList.add("fadeout");
        match.classList.add("fadein");
      });
    };

    //startgame()//
    const playmatch = () =>
    {
        const options = document.querySelectorAll(".options button");
        const playerhand = document.querySelector(".player-hands");
        const computerhand = document.querySelector(".computer-hands");
        const hands = document.querySelectorAll(".hands img");
        hands.forEach( hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = "";
            });
        })

        //computer options --For genertaing the options we can generated random number//
        const computeroptions = ["rock","paper","scissors"];

        options.forEach( (option) =>{
            option.addEventListener("click",function() {
                //Computer choice//
                const computernumber =Math.floor(Math.random() * 3 );
                const computerchoice = computeroptions[computernumber];
               setTimeout(()=>{
                    //This is where we will call the compare function//
                compareHands(this.textContent,computerchoice);

                //Update Images//
                playerhand.src = `./assets/${this.textContent}.png`;
                computerhand.src = `./assets/${computerchoice}.png`;
               },2000)

                //Animation
                playerhand.style.animation ="shakeplayer 2s ease"
                computerhand.style.animation = "shakecomputer 2s ease"
            });
        } );
    }; 

    const updatescrore = () =>
    {
        const playerscore = document.querySelector(".player-score p");
        const computerscore = document.querySelector(".computer-score p");
        playerscore.textContent = pscore;
        computerscore.textContent = cscore;
    }

    const compareHands = (playerchoice ,computerchoice) =>{
        //Update Text//

        const winner = document.querySelector('.winner');
        //checking for tie//
        if(playerchoice === computerchoice)
        {
            winner.textContent ="It's a  tie";
            return;
        }
        //check for the rock//
        if(playerchoice === "rock")
        {
            if(computerchoice === "scissors")
            {
                winner.textContent = " Player Wins";
                pscore++;
                return;
            }
            else{
                winner.textContent ="Computer Wins";
                cscore++;
                updatescrore();
                return;
            }
        }
         //check for the paper//
         if(playerchoice === "paper")
         {
             if(computerchoice === "scissors")
             {
                 winner.textContent = " Computer Wins";
                 cscore++;
                 updatescrore();
                 return;
             }
             else{
                 winner.textContent ="player Wins";
                 pscore++;
                 updatescrore();
                 return;
             }
         }
          //check for the scissors//
        if(playerchoice === "scissors")
        {
            if(computerchoice === "rock")
            {
                winner.textContent = " Computer Wins";
                cscore++;
                updatescrore();
                return;
            }
            else{
                winner.textContent ="Player Wins";
                pscore++;
                updatescrore();
                return;
            }
            
        }

    }
    // Call all the inner function//
    startgame();
    playmatch();
};

//Call the outer function//
game();