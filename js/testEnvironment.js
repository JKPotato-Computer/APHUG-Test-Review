// Controls the front-end of displaying test information.
const environment = (function() {
	let checkPhase = false;
	
	function displayQuestion() {
		let questionData = handler.testData[handler.currentQuestion];
		document.querySelector("#questionNumberText").textContent = "Question " + (handler.currentQuestion + 1);
		document.querySelector("#questionText").textContent = questionData.Question;
		
		if (questionData.Image != "") {
			document.querySelector("#imageHolder").style.display = "flex";
			document.querySelector("#mainImage").src = "img/" + questionData.Image;
		} else {
			document.querySelector("#imageHolder").style.display = "none";
			document.querySelector("#mainImage").src = "";
		}
		
		let options = questionData.Options;
		
		for (let optionIndex = 1;optionIndex < 6;optionIndex++) {
			let opt = options[optionIndex - 1];
			document.querySelector("#choice" + optionIndex + "Description").textContent = opt;
		}
		
		for (const choiceBtn of document.querySelectorAll('div[name="answerChoices"]')) {
			if (document.querySelector("#" + choiceBtn.id + "Description").textContent == handler.guessedAnswers[handler.currentQuestion] ) {
				choiceBtn.className = "selected";
			} else {
				choiceBtn.className = "";
			}
		}
		
		if (checkPhase) {
			let correctAnswer = ((questionData.Options.indexOf(questionData.Correct) + 1) || -1);
			let guessedAnswer = ((questionData.Options.indexOf(handler.guessedAnswers[handler.currentQuestion]) + 1) || -1);
			
			for (const e of document.querySelectorAll("#answerOptions > div")) {
				if ((parseInt(e.id.split("answerChoice")[1]) == correctAnswer) && (handler.guessedAnswers[handler.currentQuestion])) {
					e.className = "correct";
				} else if (parseInt(e.id.split("answerChoice")[1]) == guessedAnswer) {
					e.className = "incorrect";
				} else {
					e.className = "";
				}
			}
		} else {
			for (const e of document.querySelectorAll("#answerOptions > div")) {
				e.className = "";
			}
		}
		 
		while (document.querySelector("#questionsBar").firstChild) {
			document.querySelector("#questionsBar").removeChild(document.querySelector("#questionsBar").lastChild);
		}
		
		
		let questionsPer = Math.floor((window.innerWidth * 0.0196186) - 4.49413)
		for (let i = (Math.floor(handler.currentQuestion / questionsPer) * questionsPer); i < ((Math.floor(handler.currentQuestion/questionsPer) + 1)*questionsPer);i++) {
			if (i >= handler.testData.length) {
				break;
			}
			
			let questionCircle = document.createElement("div");
			questionCircle.id = "questionCircle" + i;
			questionCircle.className = "questionCircle" + ((handler.guessedAnswers[i]) ? (" filled") : (""));
			questionCircle.textContent = (i+1);
			
			document.querySelector("#questionsBar").appendChild(questionCircle);
		
			questionCircle.onclick = function() {
				handler.currentQuestion = i;
				displayQuestion();
				document.querySelector("#nextQuestion").className = (handler.currentQuestion == (handler.testData.length - 1)) ? ("locked") : ("");
				document.querySelector("#previousQuestion").className = (handler.currentQuestion == 0) ? ("locked") : ("");
			}
		}
		
		document.querySelector("#currentQuestion").textContent = (handler.currentQuestion + 1) + " of " + handler.testData.length;
	}
	
	function submitTest() {
		let correct = 0;
		let blank = 0;
		for (let answerIndex = 0;answerIndex < handler.testData.length;answerIndex++) {
			correct += (handler.checkAnswer(answerIndex,(handler.guessedAnswers[answerIndex]) || "")) ? (1) : (0);
			
			if (!handler.guessedAnswers[answerIndex]) {
				blank++;
			}
		}
		
		checkPhase = true;
		displayQuestion();
		document.querySelector("#answerFeedback").style.display = "";
		document.querySelector("#answerFeedback").textContent = correct + " / " + handler.testData.length + " (" + blank + " unanswered)";
		setTimeout(function() { document.querySelector("#answerFeedback").style.display = "none"; },5000)
		
		if (blank == 0) {
			handler.endTimer();
		}
	}
	
	for (const choice of document.querySelectorAll('#answerOptions > div')) {
		choice.onclick = function() {
			handler.guessedAnswers[handler.currentQuestion] = document.querySelector("#" + choice.id.split("answer")[1].toLowerCase() + "Description").textContent;
			document.querySelector("#questionCircle" + handler.currentQuestion).className = "questionCircle filled";
			
			checkPhase = false;
			
			for (const choiceBtn of document.querySelectorAll('div[name="answerChoices"]')) {
				if (document.querySelector("#" + choiceBtn.id + "Description").textContent == handler.guessedAnswers[handler.currentQuestion] ) {
					choiceBtn.className = "selected";
				} else {
					choiceBtn.className = "";
				}
			}
		}
	}
	
	document.querySelector("#previousQuestion").onclick = function() {
		if (handler.currentQuestion > 0) {
			handler.currentQuestion--;
			displayQuestion();
			document.querySelector("#previousQuestion").className = (handler.currentQuestion == 0) ? ("locked") : ("");
			document.querySelector("#nextQuestion").className = (handler.currentQuestion == (handler.testData.length - 1)) ? ("locked") : ("");
		}
	}
	
	document.querySelector("#nextQuestion").onclick = function() {
		if (handler.currentQuestion < (handler.testData.length - 1)) {
			handler.currentQuestion++;
			displayQuestion();
			document.querySelector("#nextQuestion").className = (handler.currentQuestion == (handler.testData.length - 1)) ? ("locked") : ("");
			document.querySelector("#previousQuestion").className = (handler.currentQuestion == 0) ? ("locked") : ("");
		}
	}
	
	document.querySelector("#submitQuestions").onclick = function() {
		submitTest();
	}
	
	function initalize() {
		handler.generateRandomTest();
		displayQuestion();
		
		handler.startTimer((handler.testData.length * (60000)) + (120000))
	}
	
	return {
		initalize : initalize,
		submitTest : submitTest
	};
})();