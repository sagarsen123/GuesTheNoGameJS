let guessCount = 0;
let maxScore = 100;
let no = Math.floor(Math.random()*100);
let userInput = null;

while(maxScore > 0){
    userInput = Number.parseInt(prompt('Enter the no : '))
    guessCount++;
    if(userInput===no){
        console.log('You Guesed The no Right in ' + guessCount + "Attempts");
        console.log('Your Score is ' + maxScore);
        break;
    }else if(no < userInput ) console.log('Entered No is greater than actual no');
    else { 
        console.log('Entered No is smaller than actual no');
    }
    maxScore--;
}

if(maxScore===0 ) console.log('You lost');
