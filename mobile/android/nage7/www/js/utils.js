class Utilities {
  static maleArabicAlphabeticNumbers = [
    "واحد",
    "اثنين",
    "ثلاثة",
    "أربعة",
    "خمسة",
    "ستة",
    "سبعة",
    "ثمانية",
    "تسعة",
    "عشرة",
    "إحدى عشر",
    "إثنى عشر",
    "ثلاثة عشر",
    "أربعة عشر",
    "خمسة عشر",
    "ستة عشر",
    "سبعة عشر",
    "ثمانية عشر",
    "تسعة عشر",
    "عشرين",
  ];

  static femaleArabicAlphabeticNumbers = [
    "الأولي",
    "الثانية",
    "الثالثة",
    "الرابعة",
    "الخامسة",
    "السادسة",
    "السابعة",
    "الثامنة",
    "التاسعة",
    "العاشرة",
    "الحادية عشر",
    "الثانية عشر",
    "الثالثة عشر",
    "الرابعة عشر",
    "الخامسة عشر",
    "السادسة عشر",
    "السابعة عشر",
    "الثامنة عشر",
    "التاسعة عشر",
    "العشرين",
  ];

  static cleanWord(word) {
    var cleanWord = word.toString().toLowerCase().replace(/\W+/g, "-");
    if (cleanWord.length > 0 && cleanWord[0] == "-")
      cleanWord = cleanWord.substr(1);
    if (cleanWord.length > 0 && cleanWord[cleanWord.length - 1] == "-")
      cleanWord = cleanWord.substr(0, cleanWord.length - 1);

    return cleanWord;
  }

  static generateUUID() {
    // Public Domain/MIT
    var d = new Date().getTime(); //Timestamp
    var d2 =
      (typeof performance !== "undefined" &&
        performance.now &&
        performance.now() * 1000) ||
      0; //Time in microseconds since page-load or 0 if unsupported
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = Math.random() * 16; //random number between 0 and 16
        if (d > 0) {
          //Use timestamp until depleted
          r = (d + r) % 16 | 0;
          d = Math.floor(d / 16);
        } else {
          //Use microseconds since page-load if supported
          r = (d2 + r) % 16 | 0;
          d2 = Math.floor(d2 / 16);
        }
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
  }
}
