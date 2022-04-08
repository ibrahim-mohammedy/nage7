class UnitsLessonsNavigtion {
  self = null;
  elementId = "body";
  breadcrumb = [];
  yearId = 0;
  subjectId = 0;
  unitsIds = "";
  lessonsIds = "";
  onStartCallback = null;
  constructor(divId, _onStartCallback) {
    self = this;
    self.elementId = divId;
  }

  showYears() {
    console.log("Show years...");
    var html = '<div class="years-list container">';
    html += '<div class="row p-2">';
    for (var i = 0; i < DB.years.length; i++) {
      if (!DB.years[i].isValid()) continue;
      html += '<div class="year-outer col-xlg-3 col-lg-4 col-sm-6 col-xs-12">';
      html +=
        '<div class="year" index="' +
        i +
        '">' +
        DB.years[i].name +
        "</div></div>";
    }
    html += "</div>";
    $("#" + this.elementId).html(html);
    $(".year").click(function (e) {
      var index = parseInt($(e.target).attr("index"));
      self.showYear(DB.years[index]);
    });
  }

  showYear(year) {
    this.yearId = year.id;
    var html = '<div class="subjects-list container">';
    html += '<div class="row p-2">';
    for (var i = 0; i < year.subjects.length; i++) {
      if (!year.subjects[i].isValid()) continue;
      html +=
        '<div class="subject-outer col-xlg-3 col-lg-4 col-sm-6 col-xs-12">';
      html +=
        '<div class="subject" index="' +
        i +
        '">' +
        year.subjects[i].name +
        "</div></div>";
    }
    html += "</div>";
    $("#" + this.elementId).html(html);
    $(".subject").click(function (e) {
      var index = parseInt($(e.target).attr("index"));
      self.showSubject(year.subjects[index]);
    });
  }

  showSubject(subject) {
    this.subjectId = subject.id;
    var html = '<div class="units-list container">';
    html += '<div class="row p-2">';
    for (var i = 0; i < subject.units.length; i++) {
      if (!subject.units[i].isValid()) continue;
      html += '<div class="unit-outer col-xlg-3 col-lg-4 col-sm-6 col-xs-12">';
      html +=
        '<div class="unit" index="' +
        i +
        '"><label><input type="checkbox" class="select-unit" unit-id="' +
        subject.units[i].id +
        '"/>' +
        (i + 1) +
        " ) " +
        subject.units[i].name +
        "</label>" +
        '<div class="lessons-list container">';
      for (var l = 0; l < subject.units[i].lessons.length; l++) {
        html += '<div class="lesson-outer col-lg-12 col-sm-12 col-xs-12">';
        html +=
          '<div class="lesson" index="' +
          i +
          '"><label><input type="checkbox" class="select-lesson" lesson-id="' +
          subject.units[i].lessons[l].id +
          '"/>' +
          (i + 1);
        " ) " + subject.units[i].lessons[l].name + "</label>" + "</div></div>";
      }
      html += "</div></div></div>";
    }
    html += "</div>";
    html +=
      '<div class="row col-lg-12 text-center mt-3"><span id="btnStartQuiz" class="btn btn-success">ابدأ</span></div>';
    html += "</div>";
    $("#" + this.elementId).html(html);
    $(".select-unit").change(function () {
      $(this)
        .parent()
        .parent()
        .find(".select-lesson")
        .prop("checked", $(this).prop("checked"));
    });

    $("#btnStartQuiz").click(function (e) {
      var selectedUits = $(".select-unit:checked");
      var selectedLessons = $(".select-lesson:checked");
      var selectedUnitsIds = "",
        selectedLessonsIds = "";
      for (var i = 0; i < selectedUits.length; i++) {
        if (selectedUnitsIds != "") selectedUnitsIds += ",";
        selectedUnitsIds += $(selectedUits[i]).attr("unit-id");
      }

      for (var i = 0; i < selectedLessons.length; i++) {
        if (selectedLessonsIds != "") selectedLessonsIds += ",";
        selectedLessonsIds += $(selectedLessons[i]).attr("lesson-id");
      }

      self.unitsIds = selectedUnitsIds == "" ? [] : selectedUnitsIds.split(",");
      self.lessonsIds =
        selectedLessonsIds == "" ? [] : selectedLessonsIds.split(",");

      self.onStartQuiz();
    });
  }

  onStartQuiz() {
    var quiz = new Quiz(
      "mainArea",
      self.yearId,
      self.subjectId,
      self.unitsIds,
      self.lessonsIds
    );

    var year = DB.years.find((x) => x.id == self.yearId);
    var subject = year.subjects.find((x) => x.id == self.subjectId);
    const units = subject.units.filter(
      (x) => self.unitsIds.find((id) => id == x.id) != null
    );

    units.forEach((unit) => {
      quiz.questionsTypes.push(...unit.questionsTypes);
    });
    quiz.questionsTypes.push(...subject.questionsTypes);
    quiz.show();
  }

  updateBreadcrumb() {
    var html = '<nav aria-label="breadcrumb">';
    html = '<ol class="breadcrumb">';
    html = '<li class="breadcrumb-item"><a href="#">Home</a></li>';
    html = '<li class="breadcrumb-item"><a href="#">Library</a></li>';
    html = '<li class="breadcrumb-item active" aria-current="page">Data</li>';
    html = "</ol>";
    html = "</nav>";
  }
}
