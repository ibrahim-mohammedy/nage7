var exam = {
    time: 5 * 60,
    questions: [],
    result: 0,
    startDate: null,
    endDate: null,
    start: function () {
        this.startDate = new Date();
    },
    finish: function () {
        this.endDate = new Date();
    }
}