const spacing= " ";
const currentWord=['cheer','grumpy','funshine','tenderheart','share','surprise'];
// randomly chosen word goes in this array.
let chosenLetters=[];
// guessed letters go in this array.
let guessJs=[];
let guesses= 13;
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
    guessJs.push(event.key);
};
// creates new blanks with an appropriate ID, as well as chooses the new random word with the math function
// also gives ids to the letters of the randomly chosen word!
const placeBlanks=()=>{
// resetting a few fields before adding new spaces
    chosenLetters=[];
    let newWord=currentWord[randomSelection()].split('');
    chosenLetters.push(newWord);
console.log(chosenLetters[0]);
    for (let i = 0; i < newWord.length; i++) {
// creates the spaces with IDs
        let magicSpace= $('<span>').attr('id', 'blank'+i);
// console.log(Object.values(magicSpace));
        $('#spaces').append(magicSpace);
        $('#blank'+i).append("_");
        $('#blank'+i).append(spacing);
// ****************
// TO DO:
// creates letter IDS and matches them with the space IDS
// ****************

    }
 };
const guessCounter=()=>{
    guesses--;
    $('#chances').html(guesses);
    if(guesses===0){
            loseMessage();}};
// adding a win counter and producing a new game
const winCounter=()=>{
    win++
    $('#wins').html(win);
    alert('Congratulations !!! You\'re a Carebear now!')
    gameInit();
};
// resetting guesses, guessJs array and html page.
const loseMessage=()=>{
    loss++;
    alert("Sorry #notsorry, you have failed. Try again!");
    gameInit();
};
// game start function
const gameInit=()=>{
    guesses=13;
    $('#chances').html(guesses)
    $('#guessed').empty();
    $('#spaces').empty();
    guessJs=[];
    placeBlanks();
};
document.onkeyup = function(event) {
    let keyP= event.key;
// converting the user key press into a string    
    let keyP3=[keyP];
// instead of a for loop, i opted to use a .some() to check if any of the array matches with
// the key pressed; if it did, the match returns true and is evaluated below.
// checks if the keypress matches any of the chosen array's letters. returns true if it does
    let checkSome=(Check)=>{
        return Check===keyP;
    };
// *******************************************
// TO DO: CREATE LETTER ID, then match your spacing id(already created) with the letter ID and
// fill in proper blank
// *******************************************
        if(chosenLetters[0].some(checkSome)===true && guessJs.some(checkSome)!==true){
            console.log('this happened');
            pushKey();
            guessCounter();
              // *************************
    // TODO:add a win condition in this function with an If...... more work to be done on it
    // *************************
    // consider taking this for loop out of the above IF statement
            for (let i = 0; i < chosenLetters.length; i++) {   
                console.log(chosenLetters[i]);
                console.log(chosenLetters[0][i]);
                console.log(keyP);
                // console.log(keyP.toString(keyP));                             
                if(keyP===chosenLetters[0][i]){
                    console.log('success');
                    // if($('#blank'+i)===('#letter'+i)){
                        $('#blank'+i).html(keyP);
                        
                        // if(x==x){
                        //     winCounter();
                        // }
                    // }
                }
            }
        }
        else if(guessJs.some(checkSome) !==true && keyP.match(letters)){
            $("#guessed").append(spacing);
            $("#guessed").append(keyP);    
            pushKey();
            guessCounter();
        }
        else if(guessJs.some(checkSome) === true){
            alert('You have already chosen this letter, try being better!');   
        };
};
gameInit();