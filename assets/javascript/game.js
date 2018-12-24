const spacing= " ";
const currentWord=['cheer','grumpy','funshine','tenderheart','share','surprise'];
let chosenLetters=[];
// guessed letters go in this array.
let guessJs=[''];
let guesses= 13;
let win=0;
const letters = /^[A-Za-z]+$/;
// const lettersMain = /^[A-Za-z]+$/;
// add in loss counter if u wanna on html  and javascript.
let loss=0;
// Global Functions
// math function to give me, ultimately an index of 0-5
const randomSelection=()=>{
    return Math.floor(Math.random()*currentWord.length);
};
const pushKey=()=>{
    guessJs.push(event.key);
};
// creates new blanks with an appropriate ID, as well as chooses the new random word with the math function
// also gives ids to the letters of the randomly chosen word!
const placeBlanks=()=>{
// resetting a few fields before adding new spaces
    $('#spaces').empty();
    chosenLetters=[];
    let newWord=currentWord[randomSelection()]
    chosenLetters.push(newWord)
    for (let i = 0; i < newWord.length; i++) {
// creates the spaces with IDS
        let magicSpace= $('<span>').attr('id', 'letter'+i);
        console.log(Object.values(magicSpace));
        $('#spaces').append(magicSpace);
        $('#letter'+i).append("_");
        $('#letter'+i).append(spacing);
// ****************
// TO DO:
// creates letter IDS and matches them with the space IDS
// ****************

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
// checks if the keypress matches any of the chosen word's letters. returns true
    let checkSome2=(lettersCheck)=>{
        return chosenLetters===keyP;
    };
    // for (let i = 0; i < guessJs.length; i++) {
        if(chosenLetters.some(checkSome2)){
// *******************************************
// TO DO: CREATE LETTER ID, then match your spacing id(already created) with the letter ID and
// fill in proper blank
// *******************************************
            pushKey();
        };
        if(guessJs.some(checkSome) !==true && keyP.match(letters)){
            $("#guessed").append(spacing);
            $("#guessed").append(keyP);    
            pushKey();
            guesses--;
            $('#chances').html(guesses);
                if(guesses===0){
                    loseMessage();
                }
        }
        else if(guessJs.some(checkSome) === true){
            alert('You have already chosen this letter, try being better!');   
        };
    // };
};
gameInit();
