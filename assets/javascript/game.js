const spacing= " ";
const currentWord=['cheer','grumpy','funshine','tenderheart','share','surprise'];
let guessJs=[''];
let guesses= 13;
let win=0;
// add in loss counter if u wanna on html  and javascript.
let loss=0;
// Global Functions
const randomSelection=()=>{
    return Math.floor(Math.random()*currentWord.length);
};
const pushKey=()=>{
    guessJs.push(event.key);
};
const placeBlanks=()=>{
    $('#spaces').empty();
    let newWord=currentWord[randomSelection()]
    for (let i = 0; i < newWord.length; i++) {
    //    let magicSpace=document.createElement('span');
    //     magicSpace.setAttribute('id',"letter"+i);
        let magicSpace= $('<span>').attr('id', 'letter'+i);
        // console.log(magicSpace.__proto__.valueOf());
        // console.log(Object.values(magicSpace));
        console.log(magicSpace);
        // magicSpace.attr('id', 'letter'+i);
        $('#spaces').append(magicSpace);
        $('#letter'+i).append("_");
        $('#letter'+i).append(spacing);
        // $('#spaces').attr('id', 'letter'+i);
    }
};
placeBlanks();
// adding a win counter and producing a new game
const winCounter=()=>{
    win++
    $('#wins').append(win);
    placeBlanks();
};
// resetting guesses, guessJs array and html page.
const loseMessage=()=>{
    alert("Sorry #notsorry, you have failed. Try again!");
    guesses=13;
    $('#chances').html(guesses);
    guessJs=[''];
    $('#guessed').empty();
    placeBlanks();
};
// game start function
const gameInit=()=>{

};
// returns a number of letters based on the random word selected:
document.onkeyup = function(event) {
    // var node =document.createElement("li");
    let keyP= event.key;
    // const tekeytnode =document.createTextNode(x); same thing as $("#guessed").append(x);
    // node.append(textnode);
    for (let i = 0; i < guessJs.length; i++) {
        // .every after guessJs.every checks all of the array at once. can be used in the parameter
        if(keyP !== guessJs[i] && keyP !== guessJs[i+1] && keyP!==guessJs[i+2]&&keyP!==guessJs[i+3]){
            $("#guessed").append(spacing);
            $("#guessed").append(keyP);    
            pushKey();
            guesses--;
            $('#chances').html(guesses);
                if(guesses===0){
                    loseMessage();
                }
            break;
        }
        else if(keyP === guessJs[i]){
            alert('You have already chosen this letter, try being better!');   
            break;
        };
//    exits for loop
    };
}

