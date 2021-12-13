class ChoiceQuestion {
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
  answerIsInBody = false;
  circleOptions = true;
  constructor() {}

  getOptionsClass() {
    return "option";
  }
  getOptions() {
    return [];
  }

  getAnswerHtml() {
    if (!this.isAnswered) {
      var html = '<div id="answer" class="not-answered">.......';
      html += "</div>";
      return html;
    }
    return (
      '<div id="answer" class="' +
      (this.userAnswer == this.answer ? "correct-answer" : "wrong-answer") +
      '">' +
      this.userAnswer +
      "</div>"
    );
  }

  getBody() {}

  getHtml = function () {
    if (this.options.length == 0) this.options = this.getOptions();
    var html = "";
    html += '<div class="question">';
    html += '<div class="question-body">';
    html += this.getBody();
    if (!this.answerIsInBody) html += this.getAnswerHtml();
    html += "</div> ";
    html +=
      '<div class="question-options ' + this.getOptionsClass()+
      (this.canAnswer ? "" : "disabled") +
      '">';
    for (var i = 0; i < this.optionsCount; i++) {
      html += '<span class="option">' + this.options[i] + "</span>";
    }
    html += "</div> ";
    html += "</div>";
    return html;
  };

  initEvents() {
    var self = this;
    $(".option").click(function (e) {
      if (!self.canAnswer) return;
      self.userAnswer = $.trim($(e.target).text());
      self.canAnswer = false;
      self.isAnswered = true;

      $("#answer").html(self.getAnswerHtml()).removeClass("not-answered");
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

  getRandomNumber(min, max) {
    return (Math.round(Math.random() * 100) % (max - min + 1)) + min;
  }

  getReportHtml() {
    var html = "";
    html += '<div class="question">';
    html += '<div class="question-body">';
    html += this.getBody();
    html += this.getAnswerHtml();
    html += "</div> ";
    html += "</div>";
    return html;
  }
}
