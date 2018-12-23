const spacing= " ";
const currentWord=['cheer','grumpy','funshine','tenderheart','share','surprise'];
let guessJs=[''];
let guesses= 13;
let win=0;
// add in loss counter if u wanna on html  and javascript.
let loss=0;
// *********************************************************
// need to modify math stuff, it's returning undefined and messing up length
// i've sumised the problem is within the placeBlanks() for loop.
// *********************************************************
randomSelection=()=>{
    return Math.floor(Math.random()*currentWord.length)+1;
};
pushKey=()=>{
    guessJs.push(event.key);
};
placeBlanks=()=>{
    $('#spaces').empty();
    for (let i = 0; i < currentWord[randomSelection()].length; i++) {
        $('#spaces').append('_');
        $('#spaces').append(' ');
        $('#spaces').attr('id', 'letter'+i);
    }
};
console.log(currentWord[randomSelection()].length);
placeBlanks();

winCounter=()=>{
    win++
    $('#wins').append(win);
    placeBlanks();
};
loseMessage=()=>{
    alert("Sorry, you have failed. #notsorry");
    guesses=13;
    $('#chances').html(guesses);
    guessJs=[''];
    $('#guessed').empty();
    placeBlanks();
};
// returns a number of letters based on the random word selected:
document.onkeyup = function(event) {
    // var node =document.createElement("li");
    const x= event.key;
    // const textnode =document.createTextNode(x); same thing as $("#guessed").append(x);
    // node.append(textnode);
    for (let i = 0; i < guessJs.length; i++) {
        // .every after guessJs.every checks all of the array at once. can be used in the parameter
        if(x !== guessJs[i] && x !== guessJs[i+1] && x!==guessJs[i+2]&&x!==guessJs[i+3]){
            $("#guessed").append(spacing);
            $("#guessed").append(x);    
            pushKey();
            guesses--;
            $('#chances').html(guesses);
                if(guesses===0){
                    loseMessage();
                }
            break;
        }
        else if(x === guessJs[i]){
            alert('You have already chosen this letter, try being better!');   
            break;
        };
//    exits for loop
    };
}

