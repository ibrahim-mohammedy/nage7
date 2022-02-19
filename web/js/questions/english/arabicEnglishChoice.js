class ArabicEnglishChoiceQuestion extends EnglishChoiceQuestion {
  constructor(_yearId, _subjectId, _unitsIds, _lessonsIds) {
    super(
      _yearId,
      _subjectId,
      _unitsIds,
      _lessonsIds,
      TranslationDirection.ArabicEnglish
    );
  }
}
