﻿class GadwalQuestion {
  title = "أجب عن السؤال التالي";
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
    this.firstNumber = this.getRandomNumber(1, 12);
    this.secondNumber = this.getRandomNumber(1, 12);
    this.answer = this.firstNumber * this.secondNumber;
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

  getHtml = function () {
    var html = "";
    html += '<div class="gadwal-question">';
    html += '<div class="question-body">';
    html += '<span class="lateef">' + this.firstNumber + "</span>";
    html += '<span class="op">×</span>';
    html += '<span class="lateef">' + this.secondNumber + "</span>";
    html += '<span class="op">=</span>';
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
    html += '<div class="gadwal-question">';
    html += '<div class="question-body">';
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
