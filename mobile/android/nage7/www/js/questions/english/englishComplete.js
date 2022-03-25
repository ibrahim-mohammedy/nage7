class EnglishCompleteQuestion extends EnglishChoiceQuestion {
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

    this.title = "اختر الاجابة الصحيحة:";
    this.yearId = _yearId;
    this.subjectId = _subjectId;
    this.lessonsIds = _lessonsIds;
    this.unitsIds = _unitsIds;
    this.answerIsInBody = true;
    this.translationDirection = _translationDirection;
    this.userAnswer = "";
    this.bodyClasses = "col col-lg-9 col-sm-9 col-md-9 col-xs-9";
    this.optionsClasses = "col col-lg-3 col-sm-3 col-md-3 col-xs-3";
    this.pickRandomWord();
  }

  getWord() {
    let dottedWord = "";
    for (var i = 0; i < this.word.word.length; i++) {
      if (
        i >= this.startIndex &&
        i < this.startIndex + this.numberOfCharacters
      ) {
        dottedWord += '<span class="missing-character">_</span>';
      } else {
        dottedWord += this.word.word[i];
      }
    }

    const html = `<div class="col col-lg-6 col-sm-6 col-md-6 col-xs-12  arabic-text">${
      this.word.translation
    }</div>  <div class="col col-lg-6 col-sm-6 col-md-6 col-xs-12 p-2 english-text ${
      this.startIndex > 0 ? "capital" : ""
    }">${dottedWord}</div>`;
    return html;
  }

  getAnswer() {
    this.startIndex =
      Math.round(Math.random() * 100000000) % (this.word.word.length - 2);
    this.numberOfCharacters = (Math.round(Math.random() * 100000000) % 2) + 2;
    this.numberOfCharacters = Math.min(
      this.numberOfCharacters,
      Math.floor(this.word.word.length / 2)
    );

    return this.word.word.substring(
      this.startIndex,
      this.startIndex + this.numberOfCharacters
    );
  }

  pickRandomWord() {
    var allWords = this.getAllWord().filter(
      (x) => x.word.length > 2 && x.word.indexOf(" ") == -1
    );
    const randomIndex = Math.round(Math.random() * 100000000) % allWords.length;
    this.word = allWords[randomIndex];
    this.answer = this.getAnswer();
  }

  getOptionsClass() {
    return " circles english-text";
  }

  getRandomAnswer() {
    if (this.numberOfCharacters == 0) return "";
    let option = "";
    for (var i = 0; i < this.numberOfCharacters; i++) {
      option += String.fromCharCode(
        (Math.round(Math.random() * 100000000) % 26) + "a".charCodeAt()
      );
    }

    return option;
  }

  getAnswerHtml() {
    if (!this.isAnswered) {
      var html =
        '<div id="answer" class="not-answered d-inline">...........</div>';
      return html;
    }
    return (
      '<div class="text-left"><img class="english-word audio" word="' +
      this.word.word +
      '" src="images/sound.svg"/></div>' +
      '<div id="answer" class="col-12 ' +
      this.getTextClass() +
      '">إجابتك: <span class="english-text">' +
      this.getFormattedAnswer(this.userAnswer) +
      "</span></div>"
    );
  }

  getFormattedAnswer(answer) {
    if (answer == "") {
      for (var i = 0; i < this.numberOfCharacters; i++)
        answer += '<span class="missing-character">_</span>';
    }

    return (
      this.word.word.substr(0, this.startIndex) +
      '<span class="' +
      (answer == this.answer ? " correct-answer d-inline" : " wrong-answer") +
      '">' +
      answer +
      "</span>" +
      this.word.word.substr(this.startIndex + this.numberOfCharacters)
    );
  }

  getFormattedCorrectAnswer() {
    return (
      "الإجابة الصحيحة: <span>" +
      this.getFormattedAnswer(this.answer) +
      "</span>"
    );
  }
}
