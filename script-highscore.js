var olEl = document.querySelector("ol");
var goBackBtn = document.querySelector("#goBack");
var clearHighscores = document.querySelector("#clearHighscores");

var listOfAllScores = JSON.parse(localStorage.getItem("scoresObject"));


if(listOfAllScores) {
    console.log(listOfAllScores.length);

    for(var i=0; i < listOfAllScores.length; i++) {
        console.log(listOfAllScores[i].name + " " + listOfAllScores[i].score);

        var liEl = document.createElement("li");
        liEl.textContent = listOfAllScores[i].name + " " + listOfAllScores[i].score;
        
        if(i % 2 == 0) {
            liEl.setAttribute("class", "list-group-item list-group-item-primary");
        } else {
            liEl.setAttribute("class", "list-group-item");
        }
        olEl.appendChild(liEl);    
    }    
}

goBackBtn.addEventListener("click", function() {

    window.history.go(-1);
});

clearHighscores.addEventListener("click", function() {

    localStorage.clear();
    location.reload();
});