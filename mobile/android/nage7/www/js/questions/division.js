class DivisionQuestion extends KasrQuestion {
  constructor() {
    super();

    this.title = "اختر حاصل قسمة الرقمين التاليين:";
    this.operation = "÷";
    this.answer = this.getRandomNumber(1, 12);
    this.secondNumber = this.getRandomNumber(1, 12);
    this.firstNumber = Math.round(this.answer * this.secondNumber);
  }
}
