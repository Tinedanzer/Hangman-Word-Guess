
// document.addEventListener("keyup", myFunction);
// document.onkeyup = function(event) {
//     $("#guessed").append(event);
// }

// function myFunction() {
//   const x = document.onkeyup;
//   x = x.value.toLowerCase();
//   $("#guessed").append(x);
// }
const spacing= " ";
// document.addEventListener("keyup", myFunction);

// function myFunction(event) {
//     $("#guessed").append(event);
//   var x = document.getElementById("fname");
//   x.value = x.value.toLowerCase();
// }

document.onkeyup = function(event) {
    // var node =document.createElement("li");
    const textnode =document.createTextNode(event.key);
    // node.append(textnode);
    $("#guessed").append(spacing);
    $("#guessed").append(textnode);
    // document.getElementById("guessed").appendChild(textnode);
}