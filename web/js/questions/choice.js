class ChoiceQuestion {
  id = "";
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
  answerCanBeReversed = true;
  cach = new Object();
  constructor() {
    this.id = Utilities.generateUUID();
  }

  getOptionsClass() {
    return "option";
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

  getRandomAnswer() {}

  addReverseAnswer() {
    if (this.answer.toString().indexOf(" ") != -1) return;
    
    const answerReverse = this.answer.toString().split("").reverse().join("");
    if (this.answerCanBeReversed && answerReverse != this.answer) {
      if (typeof this.answer == "number")
        this.options.push(parseInt(answerReverse));
      else this.options.push(answerReverse);
    }
  }

  initOptions() {
    this.options = [];
    this.options.push(this.answer);
    this.addReverseAnswer();
    var tries = 0;
    while (this.options.length < this.optionsCount) {
      const randomAnswer = this.getRandomAnswer();
      if (
        randomAnswer == this.answer ||
        this.options.indexOf(randomAnswer) != -1
      ) {
        if (tries++ < 20) continue;
      }

      this.options.push(randomAnswer);
    }
    this.options = this.options.sort((a, b) => 0.5 - Math.random());
  }

  getHtml() {
    if (this.options.length == 0) this.initOptions();
    var html = "";
    html += '<div class="question">';
    html += '<div class="question-body">';
    html += this.getBody();
    if (!this.answerIsInBody) html += this.getAnswerHtml();
    html += "</div> ";
    html +=
      '<div class="question-options ' +
      this.getOptionsClass() +
      (this.canAnswer ? "" : "disabled") +
      '">';
    for (var i = 0; i < this.optionsCount; i++) {
      html += '<span class="option">' + this.options[i] + "</span>";
    }
    html += "</div> ";
    html += "</div>";
    return html;
  }

  initExtraEvents() {}

  initEvents() {
    this.initExtraEvents();

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
    html += '<div class="question-body row">';
    html += this.getBody();
    html += this.getAnswerHtml();
    html += "</div> ";
    html += "</div>";
    return html;
  }

  onReportDisplayed() {}

  getFormattedCorrectAnswer() {
    return (
      'الإجابة الصحيحة: <span class="correct-answer">' + this.answer + "</span>"
    );
  }
}
