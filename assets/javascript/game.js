const spacing= " ";
const currentWord=['cheer','grumpy', 'funshine','tenderheart', 'share','surprise'];
const guessJs=[''];
function randomSelection(){
    return Math.floor(Math.random()*currentWord.length)+1;
}
// returns a number of letters based on the random word selected:
// currentWord[randomSelection()].length
document.onkeyup = function(event) {
    // var node =document.createElement("li");
    
    const textnode =document.createTextNode(event.key);
    // node.append(textnode);
    let x=event.key;
    // console.log(event.key);
    for (let i = 0; i < guessJs.length; i++) {
        console.log(guessJs[i]);
        if(x===guessJs[i]){
             alert('You have already chosen this letter, try being better!');       
        }
    else {
    $("#guessed").append(spacing);
    $("#guessed").append(textnode);
    
    }
    
//    exits for loop
    }
    // need to place this another spot in order for no duplicate letters in guessed letter array
    guessJs.push(event.key);
}

