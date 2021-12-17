class DB {
  static years = [];
  static saveItem(key, value) {
    localStorage.setItem(key, value);
  }
  static getItem(key) {
    return localStorage.getItem(key);
  }

  static getData(key) {
    return localStorage.getItem(key);
  }

  static initDB() {
    this.years = [];
    this.years.push(
      new Year(1, "KG1", [
        new Subject(1, "عربي", [
          new Unit(1, "الحروف"),
          new Unit(2, "الأرقام"),
          new Unit(3, "الحيوانات"),
        ]),
        new Subject(3, "لغة إنجليزية", [
          new Unit(5, "Letters"),
          new Unit(6, "Numbers"),
        ]),
      ])
    );
    this.years.push(
      new Year(2, "KG2", [
        new Subject(4, "عربي", [new Unit(7, "املاء")]),
        new Subject(5, "حساب", [
          new Unit(8, "الجمع"),
          new Unit(9, "الطرح"),
          new Unit(10, "العدد"),
        ]),
        new Subject(6, "لغة إنجليزية", 2, [
          new Unit(11, "Basics"),
          new Unit(12, "Animals"),
          new Unit(13, "House"),
          new Unit(14, "Human Body"),
        ]),
      ])
    );
    this.years.push(
      new Year(3, "الصف الأول الإبتدائي", [
        new Subject(7, "عربي", [
          new Unit(15, "من أكون؟", [
            new Lesson(1, "أنا مميز"),
            new Lesson(2, "أسرتي"),
          ]),
          new Unit(16, "العالم من حولى", 7, [
            new Lesson(2, "عالمي الصغير"),
            new Lesson(2, "عالمي الكبير"),
          ]),
        ]),
        new Subject(8, "حساب", [
          new Unit(17, "الجمع"),
          new Unit(18, "الطرح"),
          new Unit(19, "العدد"),
        ]),
        new Subject(9, "لغة إنجليزية", [
          new Unit(
            -1,
            "Basics",
            [],
            [
              new EnglishWord(0, "I", "أنا", false, false),
              new EnglishWord(1, "You", "أنت / أنتم", false, false),
              new EnglishWord(2, "He", "هو", false, false),
              new EnglishWord(3, "She", "هي", false, false),
              new EnglishWord(4, "They", "هم / هن", false, false),
              new EnglishWord(5, "I am", "أنا أكون", false, false),
              new EnglishWord(
                6,
                "You are",
                "أنت تكون / أنتم تكونون",
                false,
                false
              ),
              new EnglishWord(7, "He is", "هو  يكون", false, false),
              new EnglishWord(8, "She is", "هي تكون", false, false),
              new EnglishWord(
                9,
                "They are",
                "هم يكونون / هن يكنن",
                false,
                false
              ),

              new EnglishWord(5, "I'm", "أنا أكون", false, false),
              new EnglishWord(
                6,
                "You're",
                "أنت تكون / أنتم تكونون",
                false,
                false
              ),
              new EnglishWord(7, "He's", "هو  يكون", false, false),
              new EnglishWord(8, "She's", "هي تكون", false, false),
              new EnglishWord(
                9,
                "They're",
                "هم يكونون / هن يكنن",
                false,
                false
              ),

              new EnglishWord(10, "What", "ما  / ماذا", false, false),
              new EnglishWord(11, "Where", "أين", false, false),
              new EnglishWord(12, "When", "متى", false, false),
              new EnglishWord(13, "Which", "أى", false, false),
              new EnglishWord(14, "Who", "من", false, false),
              new EnglishWord(15, "How", "كيف", false, false),
              new EnglishWord(16, "Hello", "أهلا مرحبا", false, false),
              new EnglishWord(17, "Read", "يقرأ", false, true),
              new EnglishWord(18, "Listen", "يستمع", false, true),
              new EnglishWord(19, "Look", "انظر / ينظر", false, true),
              new EnglishWord(20, "And", "و", false, false),
              new EnglishWord(21, "Say", "قل / يقول", false, true),
              new EnglishWord(22, "Point", "يشير", false, true),
              new EnglishWord(23, "Point to", "يشير إلى", false, false),
              new EnglishWord(24, "Goodbye", "مع السلامة", false, false),
              new EnglishWord(25, "Sing", "يغني", false, false),
              new EnglishWord(26, "My", "ملكي", false, false),
              new EnglishWord(27, "Your", "ملكك / ملككم", false, false),
              new EnglishWord(28, "his", "ملكه", false, false),
              new EnglishWord(29, "her", "ملكها", false, false),
              new EnglishWord(30, "their", "ملكهم", false, false),
              new EnglishWord(31, "name", "اسم", true, false),
              new EnglishWord(32, "Your Name", "اسمك", false, false),
              new EnglishWord(
                33,
                "Hello, What's your name",
                "ما اسمك ؟",
                false,
                false
              ),
              new EnglishWord(34, "Circle", "ضع دائرة / دائرة", false, true),
              new EnglishWord(35, "Repeat", "يكرر", false, true),
              new EnglishWord(36, "Bag", "حقيبة", true, false),
              new EnglishWord(37, "Book", "كتاب", true, false),
              new EnglishWord(38, "Blue", "أزرق", true, false),
              new EnglishWord(39, "Busy Bee", "نحلة", true, false),
              new EnglishWord(40, "Bus", "أوتوبيس", true, false),
              new EnglishWord(41, "Learn", "يتعلم", false, true),
              new EnglishWord(42, "Write", "يكتب", false, true),
              new EnglishWord(43, "To", "إلى", false, false),
              new EnglishWord(44, "With", "مع", false, false),
              new EnglishWord(45, "Trace", "يتتبع", false, true),
              new EnglishWord(46, "Can", "يستطيع", false, true),
              new EnglishWord(47, "Follow", "يتبع", false, true),
              new EnglishWord(48, "instructions", "تعليمات", true, false),
              new EnglishWord(49, "Open", "يفتح", false, true),
              new EnglishWord(50, "Close", "يغلق", false, true),
              new EnglishWord(51, "Open your book", "افتح كتابك", false, false),
              new EnglishWord(
                52,
                "Close your book",
                "اغلق كتابك",
                false,
                false
              ),
              new EnglishWord(53, "Open your bag", "افتح حقيبتك", false, false),
              new EnglishWord(
                54,
                "Close your bag",
                "اغلق حقيبتك",
                false,
                false
              ),
              new EnglishWord(55, "Let's", "هيا", false, false),
              new EnglishWord(56, "Make", "يصنع", false, true),
              new EnglishWord(57, "Friend", "صديق", true, false),
              new EnglishWord(58, "Friends", "أصدقاء", true, false),
              new EnglishWord(
                59,
                "Let's make friends",
                "هيا نصنع أصدقاء",
                false,
                false
              ),
              new EnglishWord(60, "draw", "يرسم", false, true),
              new EnglishWord(61, "shake hands", "مصافحة", true, false),
              new EnglishWord(62, "Play", "يلعب", false, true),
              new EnglishWord(63, "do", "يفعل", false, true),
              new EnglishWord(64, "Complete", "يكمل", false, true),
              new EnglishWord(65, "Pattern", "نمط", true, false),
              new EnglishWord(66, "The", "ال", false, false),
              new EnglishWord(67, "Color", "لون", true, false),
              new EnglishWord(68, "This", "هذا", false, false),
              new EnglishWord(69, "This is", "هذا يكون", false, false),
              new EnglishWord(70, "Touch", "يلمس", false, true),
              new EnglishWord(71, "Touch your nose", "المس أنفك", false, false),
              new EnglishWord(72, "Nose", "أنف", true, false),
              new EnglishWord(73, "This is my nose", "هذه أنفي", false, false),
              new EnglishWord(74, "Well done", "أحسنت", false, false),
              new EnglishWord(75, "Face", "وجه", true, false),
              new EnglishWord(76, "Eye", "عين", true, false),
              new EnglishWord(77, "Nose", "أنف", true, false),
              new EnglishWord(78, "Mouse", "فم", true, false),
              new EnglishWord(79, "Ear", "أذن", true, false),
              new EnglishWord(80, "Hand", "يد", true, false),
              new EnglishWord(81, "Hair", "شعر", true, false),
              new EnglishWord(82, "Neck", "رقبة", true, false),
              new EnglishWord(83, "Teeth", "أسنان", true, false),
              new EnglishWord(84, "Time", "وقت", true, false),
              new EnglishWord(85, "Count", "يعد", false, true),
              new EnglishWord(86, "Odd", "غريب", true, false),
              new EnglishWord(87, "Out", "خارج", false, false),
              new EnglishWord(88, "School", "مدرسة", true, false),
              new EnglishWord(89, "What's this", "ما هذا؟", false, false),
              new EnglishWord(90, "It's a pencil", "إنه قلم", false, false),
              new EnglishWord(91, "Pencil", "قلم", true, false),
              new EnglishWord(92, "Pencil Case", "مقلمة قلم رصاص", true, false),
              new EnglishWord(93, "Pen", "قلم جاف", true, false),
              new EnglishWord(94, "Ruler", "مسطرة", true, false),
              new EnglishWord(95, "Sharpener", "براية", true, false),
              new EnglishWord(96, "Sound", "صوت", true, false),
              new EnglishWord(97, "Sounds", "أصوات", true, false),
              new EnglishWord(98, "Red", "أحمر", true, false),
              new EnglishWord(99, "Blue", "أزرق", true, false),
              new EnglishWord(100, "Green", "أخضر", true, false),
              new EnglishWord(101, "White", "أبيض", true, false),
              new EnglishWord(102, "Black", "أسود", true, false),
              new EnglishWord(103, "Yellow", "أصفر", true, false),
              new EnglishWord(104, "Brown", "بني", false, false),
              new EnglishWord(105, "One", "واحد", false, false),
              new EnglishWord(106, "Two", "اثنين", false, false),
              new EnglishWord(107, "Three", "ثلاثة", false, false),
              new EnglishWord(108, "Four", "أربعة", false, false),
              new EnglishWord(109, "Five", "خمسة", false, false),
              new EnglishWord(110, "Six", "ستة", false, false),
              new EnglishWord(111, "Seven", "سبعة", false, false),
              new EnglishWord(112, "Eight", "ثمانية", false, false),
              new EnglishWord(113, "Nine", "تسعة", false, false),
              new EnglishWord(114, "Ten", "عشرة", false, false),
              new EnglishWord(115, "ball", "كرة", true, false),
              new EnglishWord(116, "balls", "كرات", true, false),
              new EnglishWord(
                117,
                "Count the balls",
                "عد الكرات",
                false,
                false
              ),
              new EnglishWord(118, "Birthday", "عيد ميلاد", true, false),
              new EnglishWord(
                119,
                "How old are you?",
                "كم عمرك؟",
                false,
                false
              ),
              new EnglishWord(
                120,
                "I'm ten years old",
                "انا عمرى عشره سنوات",
                false,
                false
              ),
              new EnglishWord(121, "Match", "وصل", false, true),
              new EnglishWord(122, "Cake", "كيك", true, false),
              new EnglishWord(123, "Card", "بطاقة", true, false),
              new EnglishWord(124, "Candle", "شمعة", true, false),
              new EnglishWord(125, "Cairo", "القاهرة", false, false),
              new EnglishWord(126, "Orange", "برتقالة", true, false),
              new EnglishWord(127, "Oil", "زيت", true, false),
              new EnglishWord(128, "Olives", "زيتون", true, false),
              new EnglishWord(129, "Party", "حفلة", true, false),
              new EnglishWord(130, "Do", "يفعل", false, true),
              new EnglishWord(131, "Show", "يعرض", false, true),
              new EnglishWord(132, "Tell", "يخبر", false, true),
              new EnglishWord(
                133,
                "This is my card",
                "هذه بطاقتي",
                false,
                false
              ),
              new EnglishWord(134, "Join", "ينضم", false, true),
              new EnglishWord(135, "Has", "لديه / لديها", false, false),
              new EnglishWord(136, "Have", "لدي / لديك / لديكم", false, false),
              new EnglishWord(137, "Some", "بعض", false, false),
              new EnglishWord(138, "Tea", "شاي", true, false),
              new EnglishWord(
                139,
                "Have some tea, mother",
                "تناولي بعض الشاي يا أمي",
                false,
                false
              ),
              new EnglishWord(140, "Mother", "أم", true, false),
              new EnglishWord(141, "Father", "أب", true, false),
              new EnglishWord(142, "GrandMother", "جدة", true, false),
              new EnglishWord(143, "GrandFather", "جد", true, false),
              new EnglishWord(144, "Sister", "أخت", true, false),
              new EnglishWord(145, "Brother", "أخ", true, false),
              new EnglishWord(146, "Uncle", "خال / عم", true, false),
              new EnglishWord(147, "Aunt", "عمة / خالة", true, false),
              new EnglishWord(148, "Thank you", "شكرا  لك", false, false),
              new EnglishWord(149, "Please", "من فضلك / لو سمحت", false, false),
              new EnglishWord(
                150,
                "Please have some cake",
                "من فضلك خذ بعض الكعك",
                false,
                false
              ),
              new EnglishWord(151, "Who is this?", "من هذا؟", false, false),
              new EnglishWord(
                152,
                "This is my father",
                "هذا أبي",
                false,
                false
              ),
              new EnglishWord(153, "Family", "أسرة", true, false),
              new EnglishWord(154, "Flag", "علم", true, false),
              new EnglishWord(155, "Tea", "شاي", true, false),
              new EnglishWord(156, "Tree", "شجرة", true, false),
              new EnglishWord(157, "TV", "تلفزيون", true, false),
              new EnglishWord(158, "Polite", "مؤدب", true, false),
              new EnglishWord(
                159,
                "Let's be polite",
                "هيا نكون مؤدبين",
                false,
                false
              ),
              new EnglishWord(160, "I'm polite", "انا مؤدب", false, false),
              new EnglishWord(
                161,
                "This is my sister",
                "هذه أختي",
                false,
                false
              ),
              new EnglishWord(162, "Play time", "وقت اللعب", false, false),
              new EnglishWord(163, "That", "الذي / التي", false, false),
              new EnglishWord(164, "Start", "يبدأ", false, true),
              new EnglishWord(165, "Start With", "يبدأ ب", false, false),
              new EnglishWord(166, "Picture", "صورة", true, false),
              new EnglishWord(167, "Pictures", "صور", true, false),
              new EnglishWord(168, "Play", "يلعب", false, true),
              new EnglishWord(169, "Music", "موسيقى", true, false),
              new EnglishWord(170, "Guitar", "جيتار", true, false),
              new EnglishWord(171, "Triangle", "مثلث", true, false),
              new EnglishWord(172, "Flute", "مزمار / ناى", true, false),
              new EnglishWord(
                173,
                "I can play the guitar",
                "أنا أستطيع العزف علي الجيتار",
                false,
                false
              ),
              new EnglishWord(
                174,
                "I can play the flute",
                "يمكنني العزف على المزمار",
                false,
                false
              ),
              new EnglishWord(175, "Piano", "بيانو", true, false),
              new EnglishWord(176, "Together", "سويا", false, false),
              new EnglishWord(
                177,
                "Let's play together",
                "هيا نلعب معا",
                false,
                false
              ),
              new EnglishWord(178, "Drum", "طبلة", true, false),
              new EnglishWord(179, "Dog", "كلب", true, false),
              new EnglishWord(180, "Hear", "يسمع", false, true),
              new EnglishWord(181, "Smell", "يشم", false, true),
              new EnglishWord(182, "Touch", "يلمس", false, true),
              new EnglishWord(183, "Taste", "يتذوق", false, true),
              new EnglishWord(184, "See", "يرى", false, true),
              new EnglishWord(
                185,
                "I can hear",
                "أنا أستطيع أن أسمع",
                false,
                false
              ),
              new EnglishWord(
                186,
                "I can smell",
                "أنا أستطيع أن أشم",
                false,
                false
              ),
              new EnglishWord(
                187,
                "I can touch",
                "أنا أستطيع أن ألمس",
                false,
                false
              ),
              new EnglishWord(
                188,
                "I can taste",
                "أنا أستطيع أن أتذوق",
                false,
                false
              ),
              new EnglishWord(
                189,
                "I can see",
                "أنا أستطيع أن أرى",
                false,
                false
              ),
              new EnglishWord(190, "At", "في", false, false),
              new EnglishWord(191, "Home", "منزل / بيت", true, false),
              new EnglishWord(192, "in", "في", false, false),
              new EnglishWord(193, "Boy", "ولد", true, false),
              new EnglishWord(194, "Bathroom", "حمام", true, false),
              new EnglishWord(195, "Living room", "غرفة معيشة", true, false),
              new EnglishWord(196, "Bedroom", "غرفة نوم", true, false),
              new EnglishWord(197, "Kitchen", "مطبخ", true, false),
              new EnglishWord(198, "Garden", "حديقة", true, false),
              new EnglishWord(
                199,
                "Where's the boy?",
                "أين الولد؟",
                false,
                false
              ),
              new EnglishWord(
                200,
                "He's in the living room",
                "انه في غرفة المعيشة",
                false,
                false
              ),
              new EnglishWord(
                201,
                "Where's the girl?",
                "أين الفتاة؟",
                false,
                false
              ),
              new EnglishWord(
                202,
                "She's in the bathroom",
                "إنها في الحمام",
                false,
                false
              ),
              new EnglishWord(203, "Apple", "تفاحة", true, false),
              new EnglishWord(204, "Ant", "نملة", true, false),
              new EnglishWord(205, "Star", "نجمة", true, false),
              new EnglishWord(206, "Square", "مربع", true, false),
              new EnglishWord(207, "Triangle", "مثلث", true, false),
              new EnglishWord(208, "Circle", "دائرة", true, false),
              new EnglishWord(209, "Rectangle", "مستطيل", true, false),
              new EnglishWord(210, "Pyramid", "هرم", true, false),
              new EnglishWord(211, "Pyramids", "أهرامات", true, false),
              new EnglishWord(212, "At", "في", false, false),
              new EnglishWord(213, "Camel", "جمل", true, false),
              new EnglishWord(214, "Big", "كبير", true, false),
              new EnglishWord(215, "Small", "صغير", true, false),
              new EnglishWord(216, "King", "ملك", true, false),
              new EnglishWord(217, "Queen", "ملكة", true, false),
              new EnglishWord(218, "Stone", "حجر", true, false),
              new EnglishWord(219, "Stones", "حجارة", true, false),
              new EnglishWord(
                220,
                "The camel is big",
                "الجمل كبير",
                false,
                false
              ),
              new EnglishWord(
                221,
                "The ant is small",
                "النملة صغيرة",
                false,
                false
              ),
              new EnglishWord(
                222,
                "I can see a king  and a queen",
                "أنا أستطيع أن أرى ملكا  و ملكة",
                false,
                false
              ),
              new EnglishWord(
                223,
                "Look, The pyramid is big",
                "انظر ، الهرم كبير",
                false,
                false
              ),
              new EnglishWord(
                224,
                "The stone is small",
                "الحجر صغير",
                false,
                false
              ),
              new EnglishWord(225, "Key", "مفتاح", true, false),
              new EnglishWord(226, "Sphinx", "أبو الهول", false, false),
              new EnglishWord(227, "Kite", "طائرة ورقية", true, false),
              new EnglishWord(228, "Quiet", "هادئ", true, false),
              new EnglishWord(229, "Beach", "شاطئ", true, false),
              new EnglishWord(230, "Jump", "يقفز", false, true),
              new EnglishWord(231, "Swim", "يسبح", false, true),
              new EnglishWord(232, "Throw", "يرمي", false, true),
              new EnglishWord(233, "Skip", "يتخطى / يقفز", false, true),
              new EnglishWord(234, "Kick", "يركل", false, true),
              new EnglishWord(235, "Dig", "يحفر", false, true),
              new EnglishWord(
                236,
                "I can Jump",
                "أنا أستطيع أن أقفز",
                false,
                false
              ),
              new EnglishWord(
                237,
                "I can Swim",
                "أنا أستطيع أن أسبح",
                false,
                false
              ),
              new EnglishWord(
                238,
                "I can Throw",
                "أنا أستطيع أن أرمى",
                false,
                false
              ),
              new EnglishWord(
                239,
                "I can kick",
                "أنا أستطيع أن أركل",
                false,
                false
              ),
              new EnglishWord(
                240,
                "I can dig",
                "أنا أستطيع أن أحفر",
                false,
                false
              ),
              new EnglishWord(241, "in", "في", false, false),
              new EnglishWord(242, "Under", "تحت", false, false),
              new EnglishWord(243, "On", "على / فوق", false, false),
              new EnglishWord(244, "Behind", "خلف", false, false),
              new EnglishWord(245, "Insect", "حشرة", true, false),
              new EnglishWord(246, "Umbrella", "مظلة", true, false),
            ]
          ),
          new Unit(20, "Hello", [], []),
          new Unit(21, "This is me"),
          new Unit(22, "My school bag"),
          new Unit(23, "It's my birthday"),
          new Unit(24, "With my family"),
          new Unit(25, "Let's play music"),
          new Unit(26, "At home"),
          new Unit(27, "At the pyramids"),
          new Unit(28, "At the beach"),
        ]),
      ])
    );
    this.years.push(
      new Year(4, "الصف الثاني الإبتدائي", [
        new Subject(10, "عربي"),
        new Subject(11, "حساب"),
        new Subject(12, "لغة إنجليزية"),
      ])
    );
    this.years.push(
      new Year(5, "الصف الثالث الإبتدائي", [
        new Subject(13, "عربي", [
          new Unit(15, "من أكون؟ - الحياة الصحية", []),
          new Unit(16, "العالم من حولى - الاهتمام بعالمنا", []),
        ]),
        new Subject(14, "حساب"),
        new Subject(15, "لغة إنجليزية", [
          new Unit(0, "I feel Happy"),
          new Unit(0, "What's the matter"),
          new Unit(0, "On the weekend"),
          new Unit(0, "I love my home"),
          new Unit(0, "At the zoo"),
          new Unit(0, "Let's go to the circus"),
        ]),
      ])
    );
    this.years.push(new Year(6, "الصف الرابع الإبتدائي"));
    this.years.push(new Year(7, "الصف الخامس الإبتدائي"));
    this.years.push(new Year(8, "الصف السادس الإبتدائي"));

    for (
      var y = 0, subjectId = 0, unitId = 0, lessonId = 0;
      y < this.years.length;
      y++
    ) {
      this.years[y].id = y;
      for (var s = 0; s < this.years[y].subjects.length; s++) {
        this.years[y].subjects[s].id = subjectId++;
        for (var u = 0; u < this.years[y].subjects[s].units.length; u++) {
          this.years[y].subjects[s].units[u].id = unitId++;
          for (
            var l = 0;
            l < this.years[y].subjects[s].units[u].lessons.length;
            l++
          ) {
            this.years[y].subjects[s].units[u].lessons[l].id = lessonId++;
          }
        }
      }
    }
  }

  getYear(yearId) {
    return DB.years.find((x) => x.id == yearId);
  }
  getSubject(subjectId) {
    for (var y = 0; y < this.years.length; y++) {
      for (var s = 0; s < this.years[y].subjects.length; s++) {
        if (this.years[y].subjects[s].id == subjectId)
          return this.years[y].subjects[s];
      }
    }
  }

  getUnit(unitId) {
    for (var y = 0; y < this.years.length; y++) {
      for (var s = 0; s < this.years[y].subjects.length; s++) {
        for (var u = 0; u < this.years[y].subjects[s].units.length; u++) {
          if (this.years[y].subjects[s].units[u].id == unitId)
            return this.years[y].subjects[s].units[u];
        }
      }
    }
  }

  getLesson(lessonId) {
    for (var y = 0; y < this.years.length; y++) {
      for (var s = 0; s < this.years[y].subjects.length; s++) {
        for (var u = 0; u < this.years[y].subjects[s].units.length; u++) {
          for (
            var l = 0;
            l < this.years[y].subjects[s].units[u].lessons.length;
            l++
          ) {
            if (this.years[y].subjects[s].units[u].lessons[l].id == lessonId)
              return this.years[y].subjects[s].units[u].lessons[l];
          }
        }
      }
    }
  }
}

class Year {
  id = 0;
  name = "";
  subjects = [];
  constructor(_id, _name, _subjects = []) {
    this.id = _id;
    this.name = _name;
    this.subjects = _subjects;
  }
}

class Subject {
  id = 0;
  name = "";
  units = [];
  constructor(_id, _name, _units = []) {
    this.id = _id;
    this.name = _name;
    this.units = _units;
  }
}

class Unit {
  id = 0;
  name = "";
  lessons = [];
  data = [];
  constructor(_id, _name, _lessons = [], _data = []) {
    this.id = _id;
    this.name = _name;
    this.lessons = _lessons;
    this.data = _data;
  }
}

class Lesson {
  id = 0;
  name = "";
  questions = [];
  data = [];
  constructor(_id, _name, _questions = [], _data = []) {
    this.id = _id;
    this.name = _name;
    this.questions = _questions;
    this.data = _data;
  }
}

class EnglishWord {
  id = 0;
  word = 0;
  translation = "";
  isName = false;
  isVerb = false;
  constructor(_id, _word, _translation, _isName, _isVerb) {
    this.id = _id;
    this.word = _word;
    this.translation = _translation;
    this.isName = _isName;
    this.isVerb = _isVerb;
  }
}
