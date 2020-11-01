var olEl = document.querySelector("ol");


var listOfAllScores = JSON.parse(localStorage.getItem("scoresObject"));

console.log(listOfAllScores.length);

// if(listOfAllScores.length > 0) {

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
// }
document.body.appendChild(olEl);

console.log(listOfAllScores);