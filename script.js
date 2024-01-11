//Hobby dropdown functions (DJ, Run, Cyc)

function changeDropDownDj() {
    var dropdownContent = document.getElementById("dj");
    var computedStyle = window.getComputedStyle(dropdownContent);

    if (computedStyle.display === "none") {
        dropdownContent.style.display = "block";
        var image = dropdownContent.querySelector("img");

        
    } else if (computedStyle.display === "block") {
        dropdownContent.style.display = "none";
    }
}
function changeDropDownRun() {
    var dropdownContent = document.getElementById("run");
    var computedStyle = window.getComputedStyle(dropdownContent);

    if (computedStyle.display === "none") {
        dropdownContent.style.display = "block";
        var image = dropdownContent.querySelector("img");

        
    } else if (computedStyle.display === "block") {
        dropdownContent.style.display = "none";
    }
}
function changeDropDownCyc() {
    var dropdownContent = document.getElementById("cyc");
    var computedStyle = window.getComputedStyle(dropdownContent);

    if (computedStyle.display === "none") {
        dropdownContent.style.display = "block";
        var image = dropdownContent.querySelector("img");

        
    } else if (computedStyle.display === "block") {
        dropdownContent.style.display = "none";
    }
}

//new function

function newFunction() {

    var ageInput = document.getElementById("age").value;
      if (ageInput.trim() === "") {
        alert('enter your age'); 
    } else if (ageInput >= 13 && ageInput < 20) {
        alert('You are a teenager');
    } else if (ageInput >= 13 && ageInput < 20) {
        alert('You are a teenager');
    } else if (ageInput >= 20 && ageInput < 30) {
        alert('You are in your 20s');
    } else if (ageInput >= 30 && ageInput < 40) {
        alert('You are in your 30s');
    } else if (ageInput >= 40 && ageInput < 60) {
        alert('You are in your 40s or 50s');
    } else if (ageInput >= 60 && ageInput < 80) {
        alert('You are in your 60s or 70s');
    } else if (ageInput >= 80 && ageInput < 100) {
        alert('You are in your 80s or 90s');
    } else if (ageInput >= 100 && ageInput < 156) {
        alert('You are over 100 years old');
    } else {
        alert('You are a ghost, bro!');
    }
    

}