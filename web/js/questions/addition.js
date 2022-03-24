class AdditionQuestion extends KasrQuestion {
  constructor() {
    super();

    this.title = "اجمع الرقمين التاليين:";
    this.operation = "+";
    this.firstNumber = this.getRandomNumber(1, 1000);
    this.secondNumber = this.getRandomNumber(1, 1000);
    this.answer = this.firstNumber + this.secondNumber;
  }
}
