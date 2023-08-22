function checkIfGameIsWon(first ,second, third) {
    if (display.textContent.includes('won the game')) {
  return;        
    }
    if(buttons[first].textContent === "X" &&
    buttons[second].textContent === "X"&&
    buttons[third].textContent === "X")
{
     disableButtonsWhenGameIsWon('Player 1');
    return;
} 
  else if(buttons[first].textContent === "O" &&
  buttons[second].textContent === "O"&&
  buttons[third].textContent === "O"
  ){
   disableButtonsWhenGameIsWon('Player 2');
return;}
else{
    // checkDraws();
}

}

function disableButtonsWhenGameIsWon(player) {
    for (let button of buttons) {
        if (button.textContent === "") {
            button.toggleAttribute('disabled')
        }
    }
    display.textContent = player + "won the game"
};