class SubtractionQuestion extends KasrQuestion {
  constructor() {
    super();

    this.title = "اطرح الرقمين التاليين:";
    this.operation = "-";
    this.firstNumber = this.getRandomNumber(1, 1000);
    this.secondNumber = this.getRandomNumber(1, this.firstNumber);
    this.answer = this.firstNumber - this.secondNumber;
  }
}
