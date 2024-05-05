// Controls the backend of displaying test information.

const handler = (function() {
	
	/* Configuration */
	var testSections = [0,1,2];
	var noOfQuestions = 20;
	
	/* Active Test */
	let testActive = false;
	let timerActive = false;
	let fiveMinuteWarning = false;
	let timeRemaining = 0;
	let timeEnd = 0;
	
	let testData = [];
	let currentQuestion = 0;
	let guessedAnswers = [];
	
	function fy(a,b,c,d){c=a.length;while(c)b=Math.random()*(--c+1)|0,d=a[c],a[c]=a[b],a[b]=d}
	
	
	const randInt = function(min, max) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
	}
	
	const generateRandomTest = function() {
		let testQuestionSet = [];
		guessedAnswers = new Array(noOfQuestions);
		
		for (const testSection of testSections) {
			for (const testQuestion of database[testSection]) {
				testQuestionSet.push(testQuestion);
			}
		}
		
		while (testData.length < noOfQuestions) {
			let newQuestion = testQuestionSet[randInt(0,testQuestionSet.length - 1)];
			if (!testData.includes(newQuestion)) {
				fy(newQuestion.Options);
				
				testData.push(newQuestion);
			}
		}
		
		return testData;
	}
	
	const checkAnswer = function(questionIndex,answer) {
		return (testData[questionIndex].Correct === answer);
	}
	
	const updateTimer = function() {
		if (!timerActive) {
			return;
		}
		
		timeRemaining = timeEnd - Date.now();
		
		if (timeRemaining <= 0) {
			timerActive = false;
			environment.submitTest();
			return;
		}
		
		if ((!fiveMinuteWarning) && (timeRemaining < 300000)) {
			fiveMinuteWarning = true;
			document.querySelector("#lessThan5Minutes").style.display = "block";
			document.querySelector("#timeLeft").className = "lessThan5Minutes";
			
			setTimeout(function() { document.querySelector("#lessThan5Minutes").style.display = ""; }, 5000)
		}
		
		let M = (Math.floor(timeRemaining / 60000));
		let S = (Math.floor(timeRemaining / 1000) % 60);
		
		document.querySelector("#timeLeft").textContent = ((M < 10) ? ("0" + M) : (M)) + ":" + ((S < 10) ? ("0" + S) : (S))
		
		requestAnimationFrame(updateTimer);
		
	}
	
	const startTimer = function(time) {
		timeEnd = Date.now() + time;
		timerActive = true;
		fiveMinuteWarning = false;
		
		document.querySelector("#timeLeft").className = "";
		
		requestAnimationFrame(updateTimer);
	}
	
	const endTimer = function() {
		timerActive = false;
	}
	
	function clamp(number, min, max) {
	  return Math.max(min, Math.min(number, max));
	}

	document.querySelector("#testCategories").onchange = function() {
		switch(this.value) {
			case "semester1":
				testSections = [0,1,2];
				break;
			case "cycle1":
				testSections = [0];
				break;
			case "cycle2":
				testSections = [1];
				break;
			case "cycle3":
				testSections = [2];
				break;
			case "cycle4":
				testSections = [3];
				break;
			case "cycle5":
				testSections = [4];
				break;
			case "cycle6":
				testSections = [5];
				break;
			case "full":
				testSections = [0,1,2,3,4,5];
				break;
		}
		
		console.log(testSections);
	}

	document.querySelector("#testQuestionNo").onblur = function() {
		noOfQuestions = clamp(parseInt(this.value),1,testSections.length * 40);
	}

	
	return {
		/* Variable Data */
		testSections : testSections,
		noOfQuestions : noOfQuestions,
		timeRemaining : timeRemaining,
		testData : testData,
		currentQuestion : currentQuestion,
		guessedAnswers : guessedAnswers,
	
		/* Function Data */
		generateRandomTest : generateRandomTest,
		checkAnswer : checkAnswer,
		startTimer : startTimer,
		endTimer : endTimer
	};
})();