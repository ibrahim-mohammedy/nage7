class QuizStatus {
  notstarted = 0;
  started = 1;
  finished = 2;
}

class QuestionsTypes {
  static Gadwal = 1;
  static Addition = 2;
  static Subtraction = 3;
  static Multiplication = 4;
  static Division = 5;
  static ArabicEnglishChoice = 6;
  static EnglishArabicChoice = 7;
  static EnglishComplete = 8;
  static EnglishListening = 9;
  static Time = 10;
}

class QuestionCategory {
  questionType;
  title;
  numberOfQuestions;
  constructor(_questionType, _title, _numberOfQuestions) {
    this.questionType = _questionType;
    this.title = _title;
    this.numberOfQuestions = _numberOfQuestions;
  }
}

class Quiz {
  time = 5 * 60;
  questionsTypes = [];
  questions = [];
  score = 0;
  startDate = null;
  endDate = null;
  status = QuizStatus.notstarted;
  currentQuestion = 0;
  feedback = new Feedback();
  canNavigateQuestions = false;
  yearId = 0;
  subjectId = 0;
  unitsIds = "";
  lessonsIds = "";
  self = null;
  constructor(divId, _yearId, _subjectId, _unitsIds, _lessonsIds) {
    self = this;
    self.quizAreaId = divId;
    this.yearId = _yearId;
    this.subjectId = _subjectId;
    this.unitsIds = _unitsIds;
    this.lessonsIds = _lessonsIds;
  }

  get score() {
    return self.calculateScore();
  }

  show() {
    var html = '<div id="quizOptions">';
    html += "<table>";
    for (var i = 0; i < self.questionsTypes.length; i++) {
      if (self.questionsTypes.length > 1)
        html +=
          '<tr><td colspan="2" class="text-center">' +
          self.questionsTypes[i].title +
          "</td></tr>";
      html +=
        '<tr><td><label for="txtQuestionsNumber' +
        i +
        '" >عدد الأسئلة</label></td>';
      html += "<td>";
      html += '<button class="btn btn-default increment-number">+</button>';
      html +=
        '<input type="number" class="form-control d-inline w-50 text-center questions-number" question-type="' +
        self.questionsTypes[i].questionType +
        '" id="txtQuestionsNumber' +
        i +
        '" >';
      html += '<button class="btn btn-default decrement-number" >-</button>';
      html += "</td>";
      html += "</tr>";

      // html += "<tr>";
      // html += "<td><label >مستوي الصعوبة</label></td>";
      // html += "<td>";
      // html += '<div class="btn-group btn-group-toggle" data-toggle="buttons">';
      // html += '<label class="btn btn-primary">';
      // html +=
      //     '<input type="radio" name="options" id="hard" autocomplete="off"> صعب';
      // html += "</label>";
      // html += '<label class="btn btn-primary">';
      // html +=
      //     '<input type="radio" name="options" id="medium" autocomplete="off"> متوسط';
      // html += "</label>";
      // html += '<label class="btn btn-primary active">';
      // html +=
      //     '<input type="radio" name="options" id="easy" autocomplete="off" checked> سهل';
      // html += "</label>";
      // html += "</div>";
      // html += "</td>";
      // html += "</tr>";
    }
    html += '<tr><td colspan="2" class="text-center">' + "" + "</td></tr><tr>";
    html +=
      '<td colspan="2" class="text-center"><button class="btn btn-success btn-main" id="btnStart">ابدأ</button></td>';
    html += "</tr>";
    html += "</table></div>";

    $("#" + self.quizAreaId).html(html);
    self.loadDefaultOptions();
    $(".increment-number").click(function () {
      var val = parseInt($(this).parent().find(".questions-number").val()) + 1;
      if (val > 25) return;
      $(this).parent().find(".questions-number").val(val);
    });
    $(".decrement-number").click(function () {
      var val = parseInt($(this).parent().find(".questions-number").val()) - 1;
      if (val < 0) return;
      $(this).parent().find(".questions-number").val(val);
    });

    $("#btnStart").click(function () {
      self.saveDefaultOptions();
      self.addQuestions();
      self.start();
    });
  }

  loadDefaultOptions() {
    var txtBoxs = $(".questions-number");
    for (var i = 0; i < txtBoxs.length; i++) {
      var type = $(txtBoxs[i]).attr("question-type");
      var numberOfQuestions = DB.getItem("quiz-questions-number-" + type);
      if (!numberOfQuestions) numberOfQuestions = "5";
      $(txtBoxs[i]).val(numberOfQuestions);
    }
  }

  saveDefaultOptions() {
    var txtBoxs = $(".questions-number");
    for (var i = 0; i < txtBoxs.length; i++) {
      var type = $(txtBoxs[i]).attr("question-type");
      DB.saveItem("quiz-questions-number-" + type, $(txtBoxs[i]).val());
    }
  }

  start() {
    self.startDate = new Date();
    self.currentQuestion = 0;
    if (self.questions.length <= 0) return;

    var html = "";
    if (!self.canNavigateQuestions)
      html += `<div class="text-left quiz-top-page-number"><input class="form-control" type="text" id="txtCurrentPage" value="1 readonly/ ${self.questions.length}"/></div>`;
    html += '<div id="questionArea" class="question">';

    html += "</div>";
    html += '<div class="pagging">';
    if (self.canNavigateQuestions) {
      html +=
        '<button class="btn btn-primary" id="btnPrevious">السابق</button>';
      html += `<input class="form-control" type="text" id="txtCurrentPage" value="1 / ${self.questions.length}"/>`;
      html += '<button class="btn btn-primary" id="btnNext">التالي</button>';
    }
    html +=
      '<button class="btn btn-success btn-main" id="btnFinish" ' +
      (self.canNavigateQuestions ? "disabled" : "") +
      ">انهاء</button>";
    html += "</div>";
    $("#" + self.quizAreaId).html(html);
    self.displayQuestion();
    self.initEvents();
  }

  addQuestions() {
    var numbers = $(".questions-number");
    self.questions = [];
    for (var i = 0; i < numbers.length; i++) {
      var number = parseInt($(numbers[i]).val());
      var questionType = $(numbers[i]).attr("question-type");
      for (var j = 0; j < number; j++) {
        self.questions.push(self.createQuestion(questionType));
      }
    }

    self.questions = self.questions.sort((a, b) => 0.5 - Math.random());
  }

  createQuestion(type) {
    if (type == QuestionsTypes.Gadwal) return new GadwalQuestion();
    if (type == QuestionsTypes.Addition) return new AdditionQuestion();
    if (type == QuestionsTypes.Subtraction) return new SubtractionQuestion();
    if (type == QuestionsTypes.Multiplication)
      return new MultiplicationQuestion();
    if (type == QuestionsTypes.Division) return new DivisionQuestion();
    if (type == QuestionsTypes.ArabicEnglishChoice)
      return new ArabicEnglishChoiceQuestion(
        this.yearId,
        this.subjectId,
        this.unitsIds,
        this.lessonsIds
      );

    if (type == QuestionsTypes.EnglishArabicChoice)
      return new EnglishArabicChoiceQuestion(
        this.yearId,
        this.subjectId,
        this.unitsIds,
        this.lessonsIds
      );

    if (type == QuestionsTypes.EnglishComplete)
      return new EnglishCompleteQuestion(
        this.yearId,
        this.subjectId,
        this.unitsIds,
        this.lessonsIds
      );

    if (type == QuestionsTypes.EnglishListening)
      return new EnglishListeningQuestion(
        this.yearId,
        this.subjectId,
        this.unitsIds,
        this.lessonsIds
      );

    if (type == QuestionsTypes.Time) return new TimeQuestion();

    return null;
  }

  getScore() {
    var score = 0;
    for (var i = 0; i < self.questions.length; i++) {
      score += self.questions[i].getScore();
    }

    if (self.questions.length > 0) score /= self.questions.length;
    return Math.round(score * 100);
  }

  initEvents() {
    $("#btnPrevious").click(function () {
      self.previousQuestion();
    });

    $("#btnNext").click(function () {
      self.nextQuestion();
    });

    $("#btnFinish").click(self.finish);

    document.removeEventListener("onUserAnswer", self.onUserAnswer);
    document.addEventListener("onUserAnswer", self.onUserAnswer);
  }

  finish() {
    for (var i = 0; i < self.questions.length; i++)
      self.questions[i].isAnswered = true;
    self.startDate = new Date();
    var passed = self.getScore() >= 50;
    var html = '<div class="quiz-result col-lg-6 text-center">';
    html += '<div class="panel panel-' + (passed ? "success" : "danger") + '">';
    html += '    <div class="panel-heading">';
    html += '        <h3 class="panel-title">النتيجة</h3>';
    html += "    </div>";
    html += '    <div class="panel-body">';
    html +=
      '       <div class="score ' +
      (passed ? "passed" : "failed") +
      '">' +
      self.getScore() +
      " %</div>";
    html += "    </div>";
    html += "</div>";

    html +=
      '<div> <button id="btnResetQuiz" class="btn btn-primary">تدريب جديد</button></div>';

    html += self.getReportHtml();

    $("#" + self.quizAreaId).html(html);
    $("#btnResetQuiz").click(function () {
      self.show();
    });
    $(".english-word.audio").click(function () {
      var word = $(this).attr("word");
      word = Utilities.cleanWord(word);
      var player = new Audio("./data/media/sound/english/" + word + "/0.mp3");
      player.play();
    });
    $("#showOnlyWrongQuestions").change(function () {
      if ($(this).prop("checked")) {
        $(".quiz-questions-list").addClass("only-wrong-questions");
      } else {
        $(".quiz-questions-list").removeClass("only-wrong-questions");
      }
    });

    self.onReportDisplayed();
  }

  getReportHtml() {
    var html = '<div class="quiz-questions-list panel panel-primary">';
    html += '    <div class="panel-heading">';
    html += '        <h3 class="panel-title">أسئلة التدريب</h3>';
    html += "    </div>";
    html += '    <div class="panel-body">';
    html += "<table>";
    for (var i = 0; i < self.questions.length; i++) {
      html +=
        '<tr class="' +
        (self.questions[i].getScore() < 1 ? "wrong" : "correct") +
        '">';
      html += "<td>";
      html += '<div class="question-number">' + (i + 1) + " )</div>";
      html +=
        '<div class="question-title">' +
        self.questions[self.currentQuestion].title +
        "</div>";
      html +=
        '<div class="question-body" question-id="' +
        self.questions[i].id +
        '">';
      html += self.questions[i].getReportHtml();
      html += "</div>";
      if (self.questions[i].getScore() < 1) {
        html += '<div class="mb-2 report-correct-answer">';
        html += self.questions[i].getFormattedCorrectAnswer() + "</div>";
      }
      html += "</td>";

      html += "</tr>";
    }
    html += "</table>";
    html += "    </div> ";
    html += '<div class="panel-footer">';
    html += "        <label>";
    html +=
      '<input id="showOnlyWrongQuestions" type="checkbox" /> عرض الأسئلة الخاطئة فقط';
    html += "        </label>";
    html += "</div>";

    return html;
  }

  onReportDisplayed() {
    for (var i = 0; i < self.questions.length; i++)
      self.questions[i].onReportDisplayed();
  }

  onUserAnswer(event) {
    if (event.detail.getScore() >= 0.5) {
      self.feedback.correctAnswer();
    } else {
      self.feedback.wrongAnswer();
    }
    if (!self.canNavigateQuestions) {
      setTimeout(self.nextQuestion, 500);
      if (self.isAllQuestionsAnswered()) setTimeout(self.finish, 1000);
    } else {
      if (self.isAllQuestionsAnswered()) $("#btnFinish").removeAttr("disabled");
    }
  }

  previousQuestion() {
    if (self.currentQuestion == 0) return;

    self.currentQuestion--;
    self.displayQuestion();
  }
  nextQuestion() {
    if (self.currentQuestion >= self.questions.length - 1) return;

    self.currentQuestion++;
    self.displayQuestion();
  }

  isAllQuestionsAnswered() {
    for (var i = 0; i < self.questions.length; i++) {
      if (!self.questions[i].isAnswered) return false;
    }
    return true;
  }

  displayQuestion() {
    var html =
      '<div class="question-title">' +
      self.questions[self.currentQuestion].title +
      "</div>";
    html +=
      '<div class="question-body" question-id="' +
      self.questions[self.currentQuestion].id +
      '">' +
      self.questions[self.currentQuestion].getHtml() +
      "</div>";
    $("#questionArea").html(html);
    self.updatePagger();
    self.questions[self.currentQuestion].initEvents();
  }

  updatePagger() {
    $("#txtCurrentPage").val(
      self.currentQuestion + 1 + " / " + self.questions.length
    );
    if (self.currentQuestion == 0)
      $("#btnPrevious").attr("disabled", "disabled");
    else $("#btnPrevious").removeAttr("disabled");

    if (self.currentQuestion >= self.questions.length - 1)
      $("#btnNext").attr("disabled", "disabled");
    else $("#btnNext").removeAttr("disabled", "disabled");
  }
}
