const spacing= " ";
const currentWord=['cheer','grumpy','funshine','tenderheart','share','surprise'];
// guessed letters go in this array.
let guessJs=[''];
let guesses= 13;
let win=0;
const letters = /^[A-Za-z]+$/;
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
    //    let magicSpace=document.createElement('span'); magicSpace.setAttribute('id',"letter"+i);
        let magicSpace= $('<span>').attr('id', 'letter'+i);
        console.log(Object.values(magicSpace));
        $('#spaces').append(magicSpace);
        $('#letter'+i).append("_");
        $('#letter'+i).append(spacing);
    }
};
// adding a win counter and producing a new game
const winCounter=()=>{
    win++
    $('#wins').html(win);
    alert('You\'re a Carebear now!')
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
    placeBlanks();
};
document.onkeyup = function(event) {
    let keyP= event.key;
// instead of a for loop, i opted to use a .some() to check if any of the array matches with
// the key pressed; if it did, the match returns true and is evaluated below.
    let checkSome=(guessesCheck, i, arr)=>{
        return guessesCheck ===keyP;
    }
    // for (let i = 0; i < guessJs.length; i++) {
        if(guessJs.some(checkSome) !==true){
            $("#guessed").append(spacing);
            $("#guessed").append(keyP);    
            pushKey();
            guesses--;
            $('#chances').html(guesses);
                if(guesses===0){
                    loseMessage();
                }
        }
        else if(true === guessJs.some(checkSome)){
            alert('You have already chosen this letter, try being better!');   
        };
//    exits for loop
    // };
};
gameInit();
