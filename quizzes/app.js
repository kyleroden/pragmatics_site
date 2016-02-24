//Pragmatics Quizzes
var questions = [
  // Question takes three arguments: the question, an array with two options, and the correct answer
  new Question("Which county has a larger population?", ["Multnomah", "Baker"], "Multnomah"),
  new Question("Which county is larger?", ["Multnomah", "Baker"], "Baker"),
  new Question("True or False: There are more cows than people in Baker County.", ['True', 'False'],'True')
];

var quiz =  new Quiz(questions);

//Display Quiz
QuizUI.displayNext();
