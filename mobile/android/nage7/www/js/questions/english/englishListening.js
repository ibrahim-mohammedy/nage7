class EnglishListeningQuestion extends EnglishChoiceQuestion {
  yearId = 0;
  subjectId = 0;
  unitsIds = [];
  lessonsIds = [];
  translationDirection;
  word = null;
  startIndex = 0;
  numberOfCharacters = 0;
  constructor(
    _yearId,
    _subjectId,
    _unitsIds,
    _lessonsIds,
    _translationDirection
  ) {
    super(
      _yearId,
      _subjectId,
      _unitsIds,
      _lessonsIds,
      TranslationDirection.EnglishArabic
    );

    this.title = "استمع ثم اختر الترجمة الصحيحة:";
    this.yearId = _yearId;
    this.subjectId = _subjectId;
    this.lessonsIds = _lessonsIds;
    this.unitsIds = _unitsIds;
    this.answerIsInBody = false;
    this.translationDirection = _translationDirection;
    this.userAnswer = "";
    this.bodyClasses = "";
    this.optionsClasses = "";
    this.answerCanBeReversed = false;
    this.pickRandomWord();
  }

  getBody() {
    return "";
  }

  getHtml() {
    if (this.options.length == 0) this.initOptions();

    var html = "";
    html +=
      '<div class="question listening-question" word="' + this.word.word + '">';
    html += '<div class="question-body row">';
    html += `<div class="${this.optionsClasses}" 
      ${this.getTextClass()}
      '">`;
    html +=
      '<div class="question-options mt-0 ' +
      this.getOptionsClass() +
      (this.canAnswer ? "" : "disabled") +
      '">';
    for (var i = 0; i < this.optionsCount; i++) {
      html +=
        '<div class="option image-text text-right free-height">' +
        this.options[i] +
        '<img src="' +
        "data/media/images/english/" +
        Utilities.cleanWord(this.getWordByTranslation(this.options[i]).word) +
        '/0.jpg">' +
        "</div>";
    }
    html += "</div> ";
    html += "</div>";
    html += "</div> ";
    html += "</div>";
    return html;
  }

  initExtraEvents() {
    const that = this;
    if (this.isAnswered) return;
    const questionBody = $('div[question-id="' + this.id + '"]');
    if (!questionBody) return;
    var word = $(questionBody).find(".listening-question").attr("word");
    word = Utilities.cleanWord(word);
    SoundPlayer.play("./data/media/sound/english/" + word + "/0.mp3", () => {
      setTimeout(() => {
        that.initExtraEvents();
      }, 3000);
    });
  }
}
