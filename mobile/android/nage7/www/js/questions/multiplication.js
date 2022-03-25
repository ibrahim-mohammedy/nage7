class MultiplicationQuestion extends KasrQuestion {
  constructor() {
    super();

    this.title = "اختر حاصل ضرب الرقمين التاليين:";
    this.operation = "×";
    this.firstNumber = this.getRandomNumber(1, 1000);
    this.secondNumber = this.getRandomNumber(1, 12);
    this.answer = this.firstNumber * this.secondNumber;
  }
}
