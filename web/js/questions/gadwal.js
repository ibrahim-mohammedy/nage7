class GadwalQuestion extends ChoiceQuestion {
  constructor() {
    super();
    this.title = "أجب عن السؤال التالي";
    this.firstNumber = this.getRandomNumber(1, 12);
    this.secondNumber = this.getRandomNumber(1, 12);
    this.answer = this.firstNumber * this.secondNumber;
    this.answerIsInBody = true;
  }

  getOptionsClass() {
    return "circles";
  }

  getRandomAnswer() {
    return this.getRandomNumber(
      Math.max(1, this.answer - this.answer),
      this.answer + this.answer
    );
  }
  getBody = function () {
    var html = "";
    html += '<div class="gadwal-question">';
    html += '<div class="question-body">';
    html += '<span class="lateef">' + this.firstNumber + "</span>";
    html += '<span class="op">×</span>';
    html += '<span class="lateef">' + this.secondNumber + "</span>";
    html += '<span class="op">=</span>';
    html += this.getAnswerHtml();
    html += "</div></div>";
    return html;
  };
  getAnswerHtml() {
    if (!this.isAnswered) return '<div id="answer">......</div>';
    return (
      '<div id="answer" class="' +
      (this.userAnswer == this.answer ? "correct-answer" : "wrong-answer") +
      '">' +
      this.userAnswer +
      "</div>"
    );
  }

  initEvents() {
    var self = this;
    $(".option").click(function (e) {
      if (!self.canAnswer) return;
      self.userAnswer = $.trim($(e.target).text());
      self.canAnswer = false;
      self.isAnswered = true;

      $("#answer").html(self.getAnswerHtml());
      $(".question-options").addClass("disabled");

      if (self.onAnswer) self.onAnswer(self);

      const myEvent = new CustomEvent("onUserAnswer", {
        detail: self,
        bubbles: true,
        cancelable: true,
        composed: false,
      });
      document.dispatchEvent(myEvent);
    });
  }

  getScore() {
    return this.userAnswer == this.answer ? 1 : 0;
  }

  getReportHtml() {
    var html = "";
    html += '<div class="gadwal-question">';
    html += '<div class="question-body row">';
    html += '<span class="lateef">' + this.firstNumber + "</span>";
    html += '<span class="op">×</span>';
    html += '<span class="lateef">' + this.secondNumber + "</span>";
    html += '<span class="op">=</span>';
    html += this.getAnswerHtml();
    html += "</div> ";
    html += "</div>";
    return html;
  }
}
