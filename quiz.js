const quizData = [

	{
	question: "Which language runs on a browser?",
	a: "Java",
	b: "C",
	c: "Python",
	d: "JavaScript",
	correct: "d",
	},
	
	{
	question: "________ is referred to as the set of rules that govern the use of language",
	a: "Privacy",
	b: "Protocol",
	c: "Policy",
	d: "Piracy",
	correct: "b",
	},
	
	{
	question: "What does CSS stands for?",
	a: "Cascading Style Shit",
	b: "Cascading Styles Sheet",
	c: "Cascading Styles Sheets",
	d: "Cascading Style Sheets",
	correct: "d",
	},
	
	{
	question: "What does HTML stands for?",
	a: "HyperText Makeup Language",
	b: "HyperText Markup Language",
	c: "HiperText Makeup Language",
	d: "HiperText Markup Language", 
	correct: "b",
	},
	
	{
	question: "The network connection that works only within an organization is called?",
	a: "LAN",
	b: "WAN",
	c: "Intranet",
	d: "Extranet",
	correct: "c",
	},
];

	const quiz = document.getElementById("quiz");
	const answerElements = 
	document.querySelectorAll(".answer");
	const questionElement = 
	document.getElementById("question");
	const a_text = document.getElementById("a_text");
	const b_text = document.getElementById("b_text");
	const c_text = document.getElementById("c_text");
	const d_text = document.getElementById("d_text");
	const submitButton = 
	document.getElementById("submit");
	
	let currentQuiz = 0;
	let score = 0;
	
	const deselectAnswers = () => {
	 answerElements.forEach((answer) => (answer.checked = false));
	};
	
	const getSelected = () => {
	 let answer;
	 answerElements.forEach((answerElement) => {
	 if (answerElement.checked) answer = answerElement.id;
	 });
	 return answer;
	};
	
	const loadQuiz = () => {
	 deselectAnswers();
	 const currentQuizData = quizData[currentQuiz];
	 questionElement.innerText = 
	currentQuizData.question;
	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
	};
	
	loadQuiz();
	
	submitButton.addEventListener("click", () => {
	 const answer = getSelected();
	 if(answer){
	  if (answer === quizData[currentQuiz].correct)
	score++;
		currentQuiz++;
		if (currentQuiz < quizData.length) loadQuiz();
		else {
		 quiz.innerHTML = `
			<h2> You answered 
	${score}/${quizData.length} questions correctly </h2>
				<button onclick="history.go(0)"> Take Quiz Again </button>`
			}
	}
	
	});