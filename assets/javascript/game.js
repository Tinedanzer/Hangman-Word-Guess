const spacing= " ";
// words and pictures for the game
const currentWord=['cheer','grumpy','funshine','tenderheart','share','surprise'];
const currentPic=['./assets/images/cheer.png','./assets/images/grumpy.png','./assets/images/funshine.png',
'./assets/images/tenderheart.png','./assets/images/share.png','./assets/images/surprise.png'];
// below in picSim I will be storing the Index number from mathrandom, to properly associate a picture
// with the chosen word later.
let picSim='';
// randomly chosen word goes in this array.
let chosenLetters=[];
// correctly guessed letters go in this array.
let guessedLetters=[];
// guessed letters go in this array.
let guessJs=[];
let guesses= 10;
let win=0;
const letters = /^[A-Za-z]+$/;
// add in loss counter if u wanna on html.
let loss=0;
// Global Functions
// math function to give me, ultimately an index of 0-5
const randomSelection=()=>{
    return Math.floor(Math.random()*currentWord.length);
};
const pushKey=()=>{
    guessJs.push(event.key.toLowerCase());
};
// function to push correctly guessed letters into an array.
const pushKey2=()=>{
    guessedLetters.push(event.key.toLowerCase());
};
// creates new blanks with an appropriate ID, as well as chooses the new random word with the math function
// also gives ids to the letters of the randomly chosen word!
const placeBlanks=()=>{
// calculating a random word, and then splitting each letter to form an array.
    picSim=randomSelection();
    let newWord=currentWord[picSim].split('');
// letters for the game
    chosenLetters.push(newWord);
    for (let i = 0; i < newWord.length; i++) {
// creates the spaces with IDs and made it blue!
        let magicSpace= $('<span>').attr('id', 'blank'+i);
// console.log(Object.values(magicSpace));
        $('#spaces').append(magicSpace);
        $('#blank'+i).append("_");
        $('#blank'+i).append(spacing);
    }
 };
const guessCounter=()=>{
    guesses--;
    $('#chances').html(guesses);
// if guesses get to 0, and assuming you didnt win,  you get a lose message.
    if(guesses===0 && guessedLetters.length!==chosenLetters[0].length){
            loseMessage();}};
// adding a win counter and producing a new game
const winCounter=()=>{
    $("#picture").html("<img src=" + currentPic[picSim] + " width='400px' height='400px'>");
    win++;
    $('#wins').html(win);
    alert('Congratulations !!! You\'re a Carebear now!')
    gameInit();
};
// resetting guesses, guessJs array and html page.
const loseMessage=()=>{
    loss++;
    $('#white').css("z-index", "-1");
    $('#picture').empty();
    alert("Sorry #notsorry, you have failed. Try again!");
    gameInit();
};
// game start function and reset function
const gameInit=()=>{
    guesses=10;
    $('#chances').html(guesses)
    $('#guessed').empty();
    $('#spaces').empty();
    guessJs=[];
    guessedLetters=[];
    chosenLetters=[];
    placeBlanks();
// setting a timeout to display the hanged man for 3.5 seconds.
    setTimeout(function replaceBox(){$('#white').css("z-index", "1")},3500);
};
document.onkeyup = function(event) {
    let keyP= event.key.toLowerCase();
// instead of a for loop, i opted to use a .some() to check if any of the array matches with
// the key pressed; if it did, the match returns true and is evaluated below.
// checks if the keypress matches any of the chosen array's letters. returns true if it does
    const checkSome=(Check)=>{
        return Check===keyP;
    }; 
        if(chosenLetters[0].some(checkSome)===true && guessJs.some(checkSome)!==true){
console.log('this happened');
            pushKey();
            for (let i = 0; i < chosenLetters[0].length; i++) {
                // console.log(chosenLetters[0][i]);
// if the guess is a part of the word, push the letter to the guessLetters array for each time
// the letter is a part of the word
                if(keyP===chosenLetters[0][i]){
                    pushKey2();
console.log(guessedLetters);
                    $('#blank'+i).html(keyP);
// if the letters from the  designated word matches the correctly guessed letters, you win!
                    if(guessedLetters.length==chosenLetters[0].length){
                        setTimeout(winCounter,250);
                        break;
                    }
                }
            }
// including guessCounter to reduce guesses and determine loss, as well as allowing for wins
// to be dominant over losses in case of a tie as shown in loseMessage() within the defined guessCounter above.
            // guessCounter();
        }
// checks to see if any letters are already guessed, if not the new letter is pushed to the array and page
        else if(guessJs.some(checkSome) !==true && keyP.match(letters) && keyP!="shift" && keyP!="control" && 
        keyP!="enter" && keyP!="alt" && keyP!="capslock" && keyP!="backspace" && keyP!="delete"
        && keyP!="audiovolumedown"&& keyP!="audiovolumeup"){
            $("#guessed").append(spacing);
            $("#guessed").append(keyP);    
            pushKey();
            guessCounter();
        }
// if the letter has already been guessed by the user, return an alert.
        else if(guessJs.some(checkSome) === true){
            alert('You have already chosen this letter.... O_o');   
        };
};
gameInit();