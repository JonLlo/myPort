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