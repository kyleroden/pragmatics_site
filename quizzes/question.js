//questions

function Question(q, choices, answer)  {
  //q is the question to be asked
  this.text = q;
  this.choices = choices;
  this.answer = answer;
};

Question.prototype.isCorrectAnswer = function(choice) {
  return this.answer === choice;
};
