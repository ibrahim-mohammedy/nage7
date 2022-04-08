class KasrQuestion extends ChoiceQuestion {
  constructor() {
    super();
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

  getOptionsClass() {
    return "circles";
  }

  getRandomAnswer() {
    return this.getRandomNumber(
      Math.max(1, this.answer - this.answer),
      this.answer + this.answer
    );
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
}
