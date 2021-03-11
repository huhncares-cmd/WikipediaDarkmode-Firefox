var submitLanguage = document.querySelector("#submitLanguage");

function changeDefaultLanguage(){
    localStorage.setItem("language", document.querySelector("#language").value);
    var value = document.querySelector("#language").value;
    alert("Your default language is now: " + value);
}

if(localStorage.getItem("language") == "" || localStorage.getItem("language") == null || localStorage.getItem("language") == undefined || localStorage.getItem("language") == 0){
    document.getElementById("message").innerHTML = "en";
} else {
    document.getElementById("message").innerHTML = localStorage.getItem("language");
}

submitLanguage.addEventListener("click", changeDefaultLanguage);