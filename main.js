// Ovning Webbutveckling .Net
var inputs = document.getElementsByClassName("form-control")
var wrapper = document.getElementById("wrapper")

var idx = Date.now();

function saveData() {

    var idx = Date.now;

    for (let i = 0; i < inputs.length; i++) {
        switch (inputs[i].id) {
            case header:
                localStorage.setItem("header" + idx, inputs[i].innerHTML)
                break;

            case date:
                localStorage.setItem("date" + idx, inputs[i].innerHTML)
                break;

            default:
                localStorage.setItem("blogg" + idx, inputs[i].innerHTML)
                break;
        }
    }
    ++idx;

    localStorage.setItem

}


function parseData() {

}

function appendElements() {
       
    var divContainer = document.createElement('div');
    divContainer.setAttribute('id', "responseContainer");

    var article = document.createElement('article');

    var pHead = document.createElement('p');
    pHead.setAttribute('id', "header");
    
    var pDate = document.createElement('p');
    pDate.setAttribute('id', "date");
    
    var pText = document.createElement('p');
    pText.setAttribute('id', "bloggText");

    article.appendChild(pText)
    article.appendChild(pDate)
    article.appendChild(pHead)
    divContainer.appendChild(article)
    wrapper.appendChild(divContainer);

}


// function