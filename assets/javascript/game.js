const spacing= " ";
const currentWord=['cheer','grumpy', 'funshine','tenderheart', 'share','surprise'];
const guessJs=[''];
function randomSelection(){
    return Math.floor(Math.random()*currentWord.length)+1;
}
function pushKey(){
    guessJs.push(event.key);
}
// returns a number of letters based on the random word selected:
// currentWord[randomSelection()].length
document.onkeyup = function(event) {
    // var node =document.createElement("li");
    const x= event.key;
    const textnode =document.createTextNode(x);
    // node.append(textnode);
    // console.log(x);
    for (let i = 0; i < guessJs.length; i++) {
        // .every after guessJs.every checks all of the array at once. can be used in the parameter
        if(x !== guessJs[i] && x !== guessJs[i+1] && x!==guessJs[i+2]&&x!==guessJs[i+3]){
            $("#guessed").append(spacing);
            $("#guessed").append(textnode);    
            pushKey();
            break;
        }
        else if(x === guessJs[i]){
            alert('You have already chosen this letter, try being better!');   
            break;
        }
        else{};
//    exits for loop
    };
}

