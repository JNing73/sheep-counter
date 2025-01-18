let saveEl = document.getElementById("save-el");
let saveElAppend = document.getElementById("save-el__append");
let countEl = document.getElementById("count-el");
let count = 0;
let firstCountRecorded = false;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    
    if (!firstCountRecorded) {
        saveEl.textContent = "You counted: " + count;
        saveElAppend.innerHTML = " before sleeping";
        firstCountRecorded = true;
    }
    else {
        saveEl.textContent += " - " + count;
    }
    countEl.textContent = 0;
    count = 0;
}
