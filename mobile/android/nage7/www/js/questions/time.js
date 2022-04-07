class TimeQuestion extends ChoiceQuestion {
  minutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
  ctx = null;
  radius = 0;
  answerMode = ClockMode.Text;
  constructor() {
    super();
    this.title = "اختر الإجابة الصحيحة";
    this.hour = this.getRandomNumber(1, 12);
    this.answerIsInBody = true;
    this.minute = this.minutes.sort(function () {
      return 0.5 - Math.random();
    })[0];
    this.answer = this.formatAnswer(this.hour, this.minute);
    this.answerCanBeReversed = false;
  }

  formatAnswer(hour, minute) {
    if (this.answerMode == ClockMode.Digital)
      return this.hour + " : " + this.minute;

    return this.getCLockAsText(hour, minute);
  }

  getCLockAsText(hour, minute) {
    var clock =
      hour == 1 ? "الواحدة" : Utilities.femaleArabicAlphabeticNumbers[hour - 1];
    if (minute == 0) return clock;

    clock += " و ";
    if (minute <= 10) {
      clock += Utilities.maleArabicAlphabeticNumbers[minute - 1];
      clock += " دقائق";
    } else if (minute == 15) {
      clock += " الربع";
    } else if (minute == 20) {
      clock += " الثلث";
    } else if (minute == 25) {
      clock += " النصف إلا خمس دقائق";
    } else if (minute == 30) {
      clock += " النصف";
    } else if (minute == 35) {
      clock += " النصف وخمس دقائق";
    } else {
      hour = ++hour % 12;
      if (hour == 0) hour = 12;
      clock =
        hour == 1
          ? "الواحدة"
          : Utilities.femaleArabicAlphabeticNumbers[hour - 1];

      if (minute == 40) clock += " إلا الثلث";
      else if (minute == 45) clock += " إلا الربع";
      else if (minute == 50) clock += " إلا عشر دقائق";
      else if (minute == 55) clock += " إلا خمس دقائق";
    }

    return clock;
  }

  getOptionsClass() {
    return "time-question vertical";
  }

  getRandomAnswer() {
    return this.formatAnswer(
      this.getRandomNumber(1, 12),
      this.minutes.sort(function () {
        return 0.5 - Math.random();
      })[0]
    );
  }
  getBody = function () {
    var html = "";
    html += '<div class="time-question">';
    html += '<div class="question-body">';
    html += '<canvas id="clock" width="200"  height="200" />';
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

    this.initExtraEvents();
  }

  initExtraEvents() {
    this.drawClock();
  }

  getScore() {
    return this.userAnswer == this.answer ? 1 : 0;
  }

  getReportHtml() {
    var html = "";
    html += '<div class="time-question">';
    html += '<div class="question-body row">';
    html += '<canvas id="clock" width="200"  height="200" />';
    html += "</div> ";
    html += "</div>";
    return html;
  }

  onReportDisplayed() {
    this.drawClock();
  }

  drawClock() {
    const canvas = $('div[question-id="' + this.id + '"] canvas')[0];
    var ctx = canvas.getContext("2d");
    var radius = canvas.height / 2;
    ctx.translate(radius, radius);
    radius = radius * 0.9;
    this.drawFace(ctx, radius);
    this.drawNumbers(ctx, radius);
    this.drawTime(ctx, radius);
  }

  drawFace(ctx, radius) {
    var grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, "#333");
    grad.addColorStop(0.5, "white");
    grad.addColorStop(1, "#333");
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = "#333";
    ctx.fill();
  }

  drawNumbers(ctx, radius) {
    var ang;
    var num;
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (num = 1; num < 13; num++) {
      ang = (num * Math.PI) / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius * 0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius * 0.85);
      ctx.rotate(-ang);
    }
  }

  drawTime(ctx, radius) {
    //hour
    var hourPos =
      (this.hour * Math.PI) / 6 + (this.minute * Math.PI) / (6 * 60);
    this.drawHand(ctx, hourPos, radius * 0.5, radius * 0.07);
    //minute
    var minutePos = (this.minute * Math.PI) / 30;
    this.drawHand(ctx, minutePos, radius * 0.8, radius * 0.07);
  }

  drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
  }
}

class ClockMode {
  static Digital = 1;
  static Analog = 2;
  static Text = 3;
}
