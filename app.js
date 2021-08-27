// console.log("23  August 2021");

// let userInput = document.text

var translate = document.querySelector('#btn-translate');
var userInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector("#output");
// let serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
let serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(someText) {
    return serverURL + "?" + "text=" + someText;    
}

function errorHandler(error) {
    console.log("error occured", error)
    alert("Something is worng with server! Please try again after some time.")
}


function clickHandler() {    
    // takng input
    let givenInput = userInput.value;    

    // calling server - processing 
    fetch(getTranslationURL(givenInput))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)

}

translate.addEventListener("click", clickHandler);

// console.log(json.contents.translated))