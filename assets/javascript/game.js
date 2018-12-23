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
    for (let i = 0; i < guessJs.length; i++) {
        if(event.key===guessJs[i]){
             alert('You have already chosen this letter, try being better!');
             break;
        }
    else {
    $("#guessed").append(spacing);
    $("#guessed").append(textnode);
    guessJs.push(event.key);
    }
   
    }
    // document.getElementById("guessed").appendChild(textnode);
}

