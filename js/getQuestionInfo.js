let listOfTables = [];
let baseTable = {
    Question : "",
    Image : "",
    Options : [],
    Correct : ""
}

let ind = 0;

for (const e of document.querySelectorAll("p")) {
    e.onclick = function() {
        switch (ind) {
            case 0:
				console.log("Question");
                baseTable.Question = e.textContent;
                break;
            case 5:
				console.log("Complete");
                baseTable.Correct = e.textContent;
				baseTable.Options.push(e.textContent);
				console.log(baseTable);
listOfTables.push(baseTable);
                console.log("Current index: " + listOfTables.length - 1)
                baseTable = {
					Question : "",
					Image : "",
					Options : [],
					Correct : ""
				};
				ind = -1;
				break;
            default:
				console.log("Choice: " + ind);
                baseTable.Options.push(e.textContent);
				break;
        }
		
		ind += 1;
    }
}