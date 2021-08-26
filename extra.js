console.log("23  August 2021");

// let userInput = document.text

var translate = document.querySelector('#btn-translate');
var userInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector("#output");
let serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

// console.log(userInput);

/*
function clickThayu() {
    console.log("The button was clicked");
    console.log("input" + userInput.value);
}

translate.addEventListener("click", clickThayu);

// exercise

document.querySelector("textarea");
document.querySelector(".input-btn");
document.querySelector("#input-btn");
document.querySelector(["name = translator"]);
document.querySelector("input[name='translator']");
*/

// outputDiv.innerText = "Ruchirang";

function constructURL(someText) {
   let someText = (serverURL + "?text=" + userInput.value);
}

function doFetch(text) { 
    constructURL(someText)
    .then( response => response.json())
    .then(json => outputDiv.innerTxt)
}

doFetch(userInput.value);

// function clickHandler() {
//     outputDiv.innerText = "asjadw erowerw: " + userInput.value;
// }

// translate.addEventListener("click", clickHandler);