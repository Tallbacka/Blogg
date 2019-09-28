// Ovning Webbutveckling .Net
var inputs = document.getElementsByClassName("form-control");
var parent = document.getElementById("wrapper");



/* Creates an blogg object and stringyfies it and 
saves it to localstorage */
function saveData() {

    var idx = Date.now();
    var bloggPost = { Id: idx, header: "", date: "", blogg: "" }

    bloggPost.header = inputs[0].value;
    bloggPost.date = inputs[1].value;
    bloggPost.blogg = inputs[2].value;

    localStorage.setItem(idx, JSON.stringify(bloggPost));

    setDateTime();
    updateBlogg();
}

// Parses data from localstorage to json object and updates the view
function updateBlogg() {
    removeChilds();
    var temp = [];
    for (let i = 0; i < localStorage.length; i++) {
        var postObject = JSON.parse(localStorage.getItem(localStorage.key(i)));

        temp.push(postObject);
    }
    temp.sort((a, b) => { return Date.parse(a.date) - Date.parse(b.date) });

    console.log(temp);

    for (let i = 0; i < temp.length; i++) {
        sortedJson = JSON.parse(JSON.stringify(temp[i]))
        appendElements(sortedJson);
    }
    setDateTime();
}

// Appends graphical elements with data from json object
function appendElements(sortedJson) {

    var divContainer = document.createElement('div');
    divContainer.setAttribute('class', "container");
    divContainer.setAttribute('id', "responseContainer");

    var article = document.createElement('article');

    var pHead = document.createElement('h1');
    pHead.setAttribute('id', "header");
    pHead.innerHTML = sortedJson.header;

    var pDate = document.createElement('p');
    pDate.setAttribute('id', "date");
    pDate.innerHTML = sortedJson.date;

    var pText = document.createElement('p');
    pText.setAttribute('id', "bloggText");
    pText.innerHTML = sortedJson.blogg;

    article.appendChild(pHead);
    article.appendChild(pDate);
    article.appendChild(pText);
    divContainer.appendChild(article);
    parent.appendChild(divContainer);
    parent.insertAdjacentElement("afterbegin", divContainer);

}

// Clear localstorage and remove the childelements
function clearPosts() {
    localStorage.clear();
    removeChilds();
}
// Remove child elements in a parent element
function removeChilds() {
    while (parent.hasChildNodes()) {
        parent.removeChild(parent.lastChild);
    }
}

// sets current datetime
function setDateTime() {
    var dateInput = document.getElementById("date");
    dateInput.value = Date(Date.now());
}