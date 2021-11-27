class Feedback {
    correctAnswer() {
        $('#feedBack,.feedback-bg').remove();
        var html = '<div class="feedback-bg"></div><div id="feedBack" class="correct-answer">';
        html += '<img src="../../images/correct.svg"/>';
        html += '<div class="feedback-text">إجابة صحيحة</div>';
        html += "</div>";
        $('body').append(html);
        $('#feedBack').fadeIn();
        this.hide();

        var player = new Audio('../../sound/correct-answer.mp3');
        //player.playbackRate=1.5;
        player.play();
    }

    wrongAnswer() {
        $('#feedBack,.feedback-bg').remove();
        var html = '<div class="feedback-bg"></div><div id="feedBack" class="wrong-answer">';
        html += '<img src="../../images/wrong.svg"/>';
        html += '<div class="feedback-text">إجابة خاطئة</div>';
        html += "</div>";
        $('body').append(html);
        $('#feedBack').show();
        this.hide();
        var player = new Audio('../../sound/wrong-answer.mp3');
        player.play();
    }

    hide() {
        setTimeout(function () {
            $('#feedBack,.feedback-bg').fadeOut();
        }, 500);
    }
}