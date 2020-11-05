var olEl = document.querySelector("ol");
var goBackBtn = document.querySelector("#goBack");
var clearHighscores = document.querySelector("#clearHighscores");

var listOfAllScores = JSON.parse(localStorage.getItem("scoresObject"));


if(listOfAllScores) {

    listOfAllScores.sort(function(a, b){
        return b.score-a.score;
    });
    
    for(var i=0; i < listOfAllScores.length; i++) {
        console.log(listOfAllScores[i].name + " " + listOfAllScores[i].score);

        var trEl = document.createElement("tr");

        var indexTd = document.createElement("td");
        indexTd.textContent = i + 1;

        var nameTd = document.createElement("td");
        nameTd.textContent = listOfAllScores[i].name;

        var scoreTd = document.createElement("td");
        scoreTd.textContent = listOfAllScores[i].score;

        trEl.append(indexTd, nameTd, scoreTd);

        if(i % 2 == 0) {
            trEl.setAttribute("class", "alert-info");
        } else {
            trEl.setAttribute("class", "alert-light");
        }

        document.querySelector("tbody").append(trEl);
    }    
}

goBackBtn.addEventListener("click", function() {

    window.history.go(-1);
});

clearHighscores.addEventListener("click", function() {

    localStorage.clear();
    location.reload();
});