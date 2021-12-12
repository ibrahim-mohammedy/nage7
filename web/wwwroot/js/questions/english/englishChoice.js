class EnglishChoiceQuestion extends ChoiceQuestion {
  yearId = 0;
  subjectId = 0;
  unitsIds = [];
  lessonsIds = [];
  translationDirection = TranslationDirection.ArabicEnglish;
  word = null;
  constructor(_yearId, _subjectId, _unitsIds, _lessonsIds) {
    super();

    this.title = "اختر الترجمة الصحيحة:";
    this.yearId = _yearId;
    this.subjectId = _subjectId;
    this.lessonsIds = _lessonsIds;
    this.unitsIds = _unitsIds;
    this.circleOptions = false;
    this.answerIsInBody = true;
    this.pickRandomWord();
  }

  pickRandomWord() {
    var allWords = this.getAllWord();
    const randomIndex = Math.round(Math.random() * 100000000) % allWords.length;
    this.word = allWords[randomIndex];
    this.answer = this.word.translation;
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

  getBody = function () {
    var html = "";
    html += '<div class="english-text">' + this.word.word + "</div>";
    return html;
  };

  getOptions() {
    var allWords = this.getAllWord();
    var options = new Array();
    options.push(this.answer);
    while (options.length < this.optionsCount) {
      const randomIndex =
        Math.round(Math.random() * 100000000) % allWords.length;
      if (allWords[randomIndex].word == this.word) continue;
      options.push(allWords[randomIndex].translation);
    }
    options = options.sort((a, b) => 0.5 - Math.random());
    return options;
  }

  getAnswerHtml() {
    if (!this.isAnswered) {
      var html =
        '<div id="answer" class="not-answered d-inline">...........</div>';
      return html;
    }
    return (
      '<div id="answer" class="english-text ' +
      (this.userAnswer == this.answer
        ? "correct-answer d-inline"
        : "wrong-answer") +
      '">' +
      this.userAnswer +
      "</div>"
    );
  }
}

class TranslationDirection {
  ArabicEnglish = 0;
  EnglishArabic = 1;
}
