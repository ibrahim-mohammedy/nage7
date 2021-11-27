class SubtractionQuestion {
  title = "اطرح الرقمين التاليين:";
  firstNumber = 0;
  secondNumber = 0;
  answer = 0;
  userAnswer = 0;
  optionsCount = 5;
  options = [];
  isAnswered = false;
  canAnswer = true;
  onAnswer = null;
  constructor() {
    this.secondNumber = this.getRandomNumber(1, 1000);
    this.firstNumber = this.getRandomNumber(this.secondNumber, 1500);
    this.answer = this.firstNumber - this.secondNumber;
    this.options = this.getOptions();
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
    console.log("max.toString().length=" + max.toString().length);
    return max.toString().length;
  }

  getAnswerHtml() {
    if (!this.isAnswered) {
      var html = '<div id="answer">..';
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

  getHtml = function () {
    var html = "";
    html += '<div class="addition-question">';
    html += '<div class="question-body">';
    html += '<div class="number">' + this.firstNumber + "</div>";
    html += '<div class="op">-</div>';
    html += '<div class="number">' + this.secondNumber + "</div>";
    html += "<div>";
    for (var i = 0; i < this.getMaxNumberLength(); i++) html += "-----";
    html += "</span>";
    html += this.getAnswerHtml();
    html += "</div> ";
    html +=
      '<div class="question-options ' +
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

  getRandomNumber(min, max) {
    return (Math.round(Math.random() * 100) % (max - min + 1)) + min;
  }

  getReportHtml() {
    var html = "";
    html += '<div class="addition-question">';
    html += '<div class="question-body">';
    html += '<div class="number">' + this.firstNumber + "</div>";
    html += '<div class="op">+</div>';
    html += '<div class="number">' + this.secondNumber + "</div>";
    html += "<div>---------</span>";
    html += this.getAnswerHtml();
    html += "</div> ";
    html +=
      '<div class="question-options ' +
      (this.canAnswer ? "" : "disabled") +
      '">';
    html += "</div> ";
    html += "</div>";
    return html;
  }
}
