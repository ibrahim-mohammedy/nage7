class Feedback {
  correctAnswer() {
    $("#feedBack,.feedback-bg").remove();
    var html =
      '<div class="feedback-bg"></div><div id="feedBack" class="feedback correct-answer">';
    html += '<img src="images/correct.svg"/>';
    html += '<div class="feedback-text">إجابة صحيحة</div>';
    html += "</div>";
    $("body").append(html);
    $("#feedBack").fadeIn();
    this.hide();

    SoundPlayer.play("sound/correct-answer.mp3");
  }

  wrongAnswer() {
    $("#feedBack,.feedback-bg").remove();
    var html =
      '<div class="feedback-bg"></div><div id="feedBack" class="feedback wrong-answer">';
    html += '<img src="images/wrong.svg"/>';
    html += '<div class="feedback-text">إجابة خاطئة</div>';
    html += "</div>";
    $("body").append(html);
    $("#feedBack").show();
    this.hide();
    SoundPlayer.play("sound/wrong-answer.mp3");
  }

  hide() {
    setTimeout(function () {
      $("#feedBack,.feedback-bg").fadeOut();
    }, 500);
  }
}
