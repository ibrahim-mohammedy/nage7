class EnglishChoiceQuestion extends ChoiceQuestion {
  yearId = 0;
  subjectId = 0;
  unitsIds = [];
  lessonsIds = [];
  translationDirection;
  word = null;
  constructor(
    _yearId,
    _subjectId,
    _unitsIds,
    _lessonsIds,
    _translationDirection
  ) {
    super();

    this.title = "اختر الترجمة الصحيحة:";
    this.yearId = _yearId;
    this.subjectId = _subjectId;
    this.lessonsIds = _lessonsIds;
    this.unitsIds = _unitsIds;
    this.circleOptions = false;
    this.answerIsInBody = true;
    this.translationDirection = _translationDirection;
    this.userAnswer = "";
    this.pickRandomWord();
  }

  getWord() {
    return this.translationDirection == TranslationDirection.ArabicEnglish
      ? this.word.translation
      : this.word.word;
  }

  getAnswer() {
    return this.translationDirection == TranslationDirection.ArabicEnglish
      ? this.word.word
      : this.word.translation;
  }

  getTextClass() {
    return this.translationDirection == TranslationDirection.ArabicEnglish
      ? "english-text"
      : "arabic-text";
  }

  pickRandomWord() {
    var allWords = this.getAllWord();
    const randomIndex = Math.round(Math.random() * 100000000) % allWords.length;
    this.word = allWords[randomIndex];
    this.answer = this.getAnswer();
  }

  getAllWord() {
    var year = DB.years.find((x) => x.id == this.yearId);
    var subject = year.subjects.find((x) => x.id == this.subjectId);
    var allWords = [];
    const units = subject.units.filter(
      (x) => this.unitsIds.find((id) => x.id.toString() == id) != null
    );
    for (var i = 0; i < units.length; i++) {
      allWords = allWords.concat(units[i].data);
    }
    for (var u = 0; u < subject.units.length; u++) {
      for (var l = 0; l < subject.units[u].lessons.length; i++) {
        if (
          !this.lessonsIds.find((x) => x.id == subject.units[u].lessons[l].id)
        )
          continue;
        allWords = allWords.concat(subject.units[u].lessons[l].data);
      }
    }
    return allWords;
  }

  getOptionsClass() {
    return this.getTextClass();
  }
  getOptions() {
    var allWords = this.getAllWord();
    var options = new Array();
    options.push(this.answer);
    while (options.length < this.optionsCount) {
      const randomIndex =
        Math.round(Math.random() * 100000000) % allWords.length;
      if (allWords[randomIndex].word == this.word) continue;
      options.push(
        this.translationDirection == TranslationDirection.ArabicEnglish
          ? allWords[randomIndex].word
          : allWords[randomIndex].translation
      );
    }
    options = options.sort((a, b) => 0.5 - Math.random());
    return options;
  }

  getBody = function () {
    var html = "";
    html +=
      '<div class="col col-lg-6 col-sm-6 col-md-6 col-xs-6 ' +
      this.getTextClass() +
      '">' +
      this.getWord() +
      "</div>";
    html +=
      '<div class="col col-lg-6 col-sm-6 col-md-6 col-xs-6"><img src="' +
      location.origin +
      "/content/images/english/" +
      this.word.word.toLowerCase().replace(/ /g, "-") +
      '/0.jpg"></div>';
    return html;
  };
  
  getHtml = function () {
    if (this.options.length == 0) this.options = this.getOptions();
    var html = "";
    html += '<div class="question">';
    html += '<div class="question-body row">';
    html += '<div class="col col-lg-6 col-sm-6 col-md-6 col-xs-6">';
    html += "<div>" + this.getWord() + "</div>";
    if (!this.answerIsInBody) html += this.getAnswerHtml();
    html +=
      '<img src="' +
      location.origin +
      "/content/images/english/" +
      Utilities.cleanWord(this.word.word) +
      '/0.jpg">';
    html += "</div>";
    html +=
      '<div class="col col-lg-6 col-sm-6 col-md-6 col-xs-6 ' +
      this.getTextClass() +
      '">';
    html +=
      '<div class="question-options mt-0 ' +
      this.getOptionsClass() +
      (this.canAnswer ? "" : "disabled") +
      '">';
    for (var i = 0; i < this.optionsCount; i++) {
      html +=
        '<div class="option d-block free-height">' + this.options[i] + "</div>";
    }
    html += "</div> ";
    html += "</div>";
    html += "</div> ";
    html += "</div>";
    return html;
  };

  getAnswerHtml() {
    if (!this.isAnswered) {
      var html =
        '<div id="answer" class="not-answered d-inline">...........</div>';
      return html;
    }
    return (
      '<div id="answer" class="' +
      this.getTextClass() +
      (this.userAnswer == this.answer
        ? " correct-answer d-inline"
        : " wrong-answer") +
      '">' +
      this.userAnswer +
      "</div>" +
      '<div><img class="english-word audio" word="' +
      this.word.word +
      '" src="https://cdn0.iconfinder.com/data/icons/essentials-solid-glyphs-vol-1/100/Sound-Volume-Audio-128.png"/></div>'
    );
  }
}

class TranslationDirection {
  static ArabicEnglish = 0;
  static EnglishArabic = 1;
}
