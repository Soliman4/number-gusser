let min = 1,
    max = 10,
    winningnum =getRandomNum(min , max),
    guessesleft = 3;

// ui element
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    massage = document.querySelector('.message');

    // assign ui main and max
    minNum.textContent = min;
    maxNum.textContent = max;


    //play agin evenlistener
    game.addEventListener('mousedown', function(e){
        if(e.target.className === 'Play-again'){
            window.location.reload();
        }
    });

    // listen for guess
    guessBtn.addEventListener('click' , function(){
        let guess = parseInt(guessInput.value);
        // viladiate 
        if(isNaN(guess) || guess < min || guess > max){
            setMessage(`please enter a number between ${min} and ${max}`, 'red');
        }
        // chech if won
        if(guess === winningnum){
            gameover(true, `${winningnum} is coorect, YOU WIN`);
        }else{
            //wrong numer 
            guessesleft -=1;
            if(guessesleft === 0){
                // game over
                gameover(false, `Game Over, you lost. the correct number was ${winningnum}`);
            }else{
                // game continue -answer wrong
                //change border
                guessInput.style.borderColor = 'green';
                // clear input
                guessInput.value ='';
                setMessage(`Guess is not correct, ${guessesleft} Guessess Left`);
            }

        }
    });
    function gameover(won , msg){
        let color;
        won === true ? color = 'green' : color = 'red';
        guessInput.disabled = true;
            //change border color
            guessInput.style.borderColor = color;
            //set text color
            massage.style.color=color;
            // set message
            setMessage(msg)

            //PLAY AGAIN
            guessBtn.value='Play Again';
            guessBtn.className += 'Play-again';
    }

    //get wining number
function getRandomNum(min , max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
    //set massage
    function setMessage(msg , color){
        massage.style.color = color;
        massage.textContent= msg;
    }
