class KasrQuestion extends ChoiceQuestion{
  title = "";
  firstNumber = 0;
  secondNumber = 0;
  answer = 0;
  operation = "+";
  userAnswer = 0;
  optionsCount = 5;
  options = [];
  isAnswered = false;
  canAnswer = true;
  onAnswer = null;
  constructor() {
    super();
  }

  getOptions() {
    var options = new Array();
    options.push(this.answer);
    for (var i = 0; i < this.optionsCount - 1; i++) {
      options.push(
        this.getRandomNumber(
          Math.max(1, this.answer - this.answer),
          this.answer + this.answer
        )
      );
    }
    options = options.sort((a, b) => 0.5 - Math.random());
    return options;
  }

  getMaxNumberLength() {
    var max = Math.max(this.firstNumber, this.secondNumber);
    max = Math.max(max, this.answer);
    return max.toString().length;
  }

  getAnswerHtml() {
    if (!this.isAnswered) {
      var html = '<div id="answer" class="not-answered">..';
      for (var i = 0; i < this.getMaxNumberLength(); i++) html += ".....";
      html += "</div>";
      return html;
    }
    return (
      '<div id="answer" class="number ' +
      (this.userAnswer == this.answer ? "correct-answer" : "wrong-answer") +
      '">' +
      this.userAnswer +
      "</div>"
    );
  }

  getBody = function () {
    var html = "";
   html += '<div class="number">' + this.firstNumber + "</div>";
    html += '<div class="op">' + this.operation + "</div>";
    html += '<div class="number">' + this.secondNumber + "</div>";
    html += "<div>";
    for (var i = 0; i < this.getMaxNumberLength(); i++) html += "-----";
    html += "</div>";
    return html;
  };
}
