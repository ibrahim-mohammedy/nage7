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
          new Unit(16, "العالم من حولى", [
            new Lesson(2, "عالمي الصغير"),
            new Lesson(2, "عالمي الكبير"),
          ]),
        ]),
        new Subject(8, "حساب", [
          new Unit(
            17,
            "الجمع",
            [],
            [],
            [new QuestionCategory(QuestionsTypes.Addition, "عملية الجمع", 5)]
          ),
          new Unit(
            18,
            "الطرح",
            [],
            [],
            [new QuestionCategory(QuestionsTypes.Subtraction, "عملية الطرح", 5)]
          ),
          new Unit(
            19,
            "جدول الضرب",
            [],
            [],
            [
              new QuestionCategory(
                QuestionsTypes.Multiplication,
                "جدول الضرب",
                5
              ),
            ]
          ),
        ]),
        new Subject(
          9,
          "لغة إنجليزية",
          [
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
              ]
            ),
            new Unit(
              20,
              "Hello",
              [],
              [
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
                new EnglishWord(
                  51,
                  "Open your book",
                  "افتح كتابك",
                  false,
                  false
                ),
                new EnglishWord(
                  52,
                  "Close your book",
                  "اغلق كتابك",
                  false,
                  false
                ),
                new EnglishWord(
                  53,
                  "Open your bag",
                  "افتح حقيبتك",
                  false,
                  false
                ),
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
              ]
            ),
            new Unit(
              21,
              "This is me",
              [],
              [
                new EnglishWord(66, "The", "ال", false, false),
                new EnglishWord(67, "Color", "لون", true, false),
                new EnglishWord(68, "This", "هذا", false, false),
                new EnglishWord(69, "This is", "هذا يكون", false, false),
                new EnglishWord(70, "Touch", "يلمس", false, true),
                new EnglishWord(
                  71,
                  "Touch your nose",
                  "المس أنفك",
                  false,
                  false
                ),
                new EnglishWord(72, "Nose", "أنف", true, false),
                new EnglishWord(
                  73,
                  "This is my nose",
                  "هذه أنفي",
                  false,
                  false
                ),
                new EnglishWord(74, "Well done", "أحسنت", false, false),
                new EnglishWord(75, "Face", "وجه", true, false),
                new EnglishWord(76, "Eye", "عين", true, false),
                new EnglishWord(77, "Nose", "أنف", true, false),
                new EnglishWord(78, "Mouth", "فم", true, false),
                new EnglishWord(79, "Ear", "أذن", true, false),
                new EnglishWord(80, "Hand", "يد", true, false),
                new EnglishWord(81, "Hair", "شعر", true, false),
                new EnglishWord(82, "Neck", "رقبة", true, false),
                new EnglishWord(83, "Teeth", "أسنان", true, false),
                new EnglishWord(84, "Time", "وقت", true, false),
                new EnglishWord(85, "Count", "يعد", false, true),
                new EnglishWord(86, "Odd", "غريب", true, false),
                new EnglishWord(87, "Out", "خارج", false, false),
              ]
            ),
            new Unit(
              22,
              "My school bag",
              [],
              [
                new EnglishWord(88, "School", "مدرسة", true, false),
                new EnglishWord(89, "What's this", "ما هذا؟", false, false),
                new EnglishWord(90, "It's a pencil", "إنه قلم", false, false),
                new EnglishWord(91, "Pencil", "قلم", true, false),
                new EnglishWord(
                  92,
                  "Pencil Case",
                  "مقلمة قلم رصاص",
                  true,
                  false
                ),
                new EnglishWord(93, "Pen", "قلم جاف", true, false),
                new EnglishWord(94, "Ruler", "مسطرة", true, false),
                new EnglishWord(95, "Sharpener", "براية", true, false),
                new EnglishWord(96, "Sound", "صوت", true, false),
                new EnglishWord(97, "Sounds", "أصوات", true, false),
              ]
            ),
            new Unit(
              23,
              "It's my birthday",
              [],
              [
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
              ]
            ),
            new Unit(
              24,
              "With my family",
              [],
              [
                new EnglishWord(135, "Has", "لديه / لديها", false, false),
                new EnglishWord(
                  136,
                  "Have",
                  "لدي / لديك / لديكم",
                  false,
                  false
                ),
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
                new EnglishWord(
                  149,
                  "Please",
                  "من فضلك / لو سمحت",
                  false,
                  false
                ),
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
                new EnglishWord(162, "Playtime", "وقت اللعب", false, false),
                new EnglishWord(163, "That", "الذي / التي", false, false),
                new EnglishWord(164, "Start", "يبدأ", false, true),
                new EnglishWord(165, "Start With", "يبدأ ب", false, false),
                new EnglishWord(166, "Picture", "صورة", true, false),
                new EnglishWord(167, "Pictures", "صور", true, false),
              ]
            ),
            new Unit(
              25,
              "Let's play music",
              [],
              [
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
              ]
            ),
            new Unit(
              26,
              "At home",
              [],
              [
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
              ]
            ),
            new Unit(
              27,
              "At the pyramids",
              [],
              [
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
              ]
            ),
            new Unit(
              28,
              "At the beach",
              [],
              [
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
            new Unit(
              10,
              "She's an engineer",
              [],
              [
                new EnglishWord(
                  0,
                  "She's an engineer",
                  "إنها مهندسة",
                  false,
                  false
                ),
                new EnglishWord(0, "engineer", "مهندس", false, false),
                new EnglishWord(0, "doctor", "طبيب", false, false),
                new EnglishWord(0, "dentist", "طبيب أسنان", false, false),
                new EnglishWord(0, "teacher", "مدرس", false, false),
                new EnglishWord(0, "vet", "طبيب بيطري", false, false),
                new EnglishWord(0, "soldier", "جندي", false, false),
                new EnglishWord(0, "police officer", "ضابط شرطة", false, false),
                new EnglishWord(0, "firefighter", "رجل إطفاء", false, false),
                new EnglishWord(0, "look", "انظر", false, false),
                new EnglishWord(
                  0,
                  "He's a firefighter",
                  " هو رجل مطافي",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "He's a dentist",
                  "هو طبيب أسنان",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "She's a vet",
                  "هي طبيبة بيطرية",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "He's an engineer",
                  "هو مهندس",
                  false,
                  false
                ),
                new EnglishWord(0, "Exit", "خروج", false, false),
                new EnglishWord(0, "egg", "بيضة", false, false),
                new EnglishWord(0, "eggs", "بيض", false, false),
                new EnglishWord(0, "lamp", "لمبة", false, false),
                new EnglishWord(0, "leaf", "ورقة شجر", false, false),
                new EnglishWord(0, "lemon", "ليمون", false, false),
                new EnglishWord(0, "lamb", "حمل (خروف صغير)", false, false),
                new EnglishWord(
                  0,
                  "I want to be a doctor",
                  "أريد أن أكون طبيب",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "I want to be an engineer",
                  "أريد أن أكون مهندس",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "I want to be a soldier",
                  "أريد أن أكون جندي",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "I want to be a firefighter",
                  "أريد أن أكون رجل مطافي",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "I want to be a police officer",
                  "أريد أن أكون ضابط شرطة",
                  false,
                  false
                ),
                new EnglishWord(0, "want", "يريد", false, false),
                new EnglishWord(0, "live ", "يعيش", false, false),
                new EnglishWord(
                  0,
                  "I live in Cairo",
                  "انا أعيش فى القاهرة",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "My name is Ahmed",
                  "اسمي أحمد",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "I am seven years old",
                  "أنا عندى 7 سنوات",
                  false,
                  false
                ),
                new EnglishWord(0, "bread", "خبز", false, false),
                new EnglishWord(0, "wheat", "قمح", false, false),
                new EnglishWord(0, "pizza", "بيتزا", false, false),
                new EnglishWord(0, "T-shirt", "تى شيرت", false, false),
                new EnglishWord(0, "fabric", "قماش", false, false),
                new EnglishWord(0, "cotton", "قطن", false, false),
                new EnglishWord(0, "flour", "دقيق", false, false),
                new EnglishWord(0, "is made of", "مصنوع من", false, false),
                new EnglishWord(
                  0,
                  "T-shirt is made of fabric",
                  "التيشيرت مصنوع من القماش",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "fabric is made of cotton",
                  "القماش مصنوع من القطن",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "flour is made of wheat",
                  "الدقيق مصنوع من القمح",
                  false,
                  false
                ),
                new EnglishWord(0, "leg", "ساق / رجل", false, false),
              ]
            ),
            new Unit(
              11,
              "It's rainy",
              [],
              [
                new EnglishWord(0, "rainy", "ممطر", false, false),
                new EnglishWord(0, "It's rainy", "إنه ممطر", false, false),
                new EnglishWord(0, "windy", "عاصف", false, false),
                new EnglishWord(0, "cloudy", "غائم", false, false),
                new EnglishWord(0, "hot", "حار", false, false),
                new EnglishWord(0, "The weather", "حالى الطقس", false, false),
                new EnglishWord(0, "sunny", "مشمس", false, false),
                new EnglishWord(0, "cold", "بارد", false, false),
                new EnglishWord(
                  0,
                  "It's rainy today",
                  "الجو ممطر اليوم",
                  false,
                  false
                ),
                new EnglishWord(0, "umbrella", "شمسية", false, false),
                new EnglishWord(
                  0,
                  "I like rainy days",
                  "أنا أحب الأيام الممطرة",
                  false,
                  false
                ),
                new EnglishWord(0, "It's windy", "الجو عاصف", false, false),
                new EnglishWord(
                  0,
                  "It's cold today",
                  "الجو بارد اليوم",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "It's hot today",
                  "الجو حار اليوم",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "I like sunny days",
                  " أنا  أحب أيام الأحد ",
                  false,
                  false
                ),
                new EnglishWord(0, "mom", "أم", false, false),
                new EnglishWord(0, "moon", "قمر", false, false),
                new EnglishWord(0, "map", "خريطة", false, false),
                new EnglishWord(0, "watch", "ساعة يد", false, false),
                new EnglishWord(0, "window", "شباك", false, false),
                new EnglishWord(0, "blue", "أزرق", false, false),
                new EnglishWord(0, "green", "أخضر", false, false),
                new EnglishWord(0, "orange", "برتقالي", false, false),
                new EnglishWord(0, "purple", "بنفسجي", false, false),
                new EnglishWord(0, "yellow", "أصفر", false, false),
                new EnglishWord(0, "red", "أحمر", false, false),
                new EnglishWord(0, "make", "يصنع", false, false),
                new EnglishWord(0, "rainbow", "قوس قزح", false, false),
                new EnglishWord(0, "colorful", "ملون", false, false),
                new EnglishWord(0, "sky", "سماء", false, false),
                new EnglishWord(0, "clouds", "سحاب", false, false),
                new EnglishWord(0, "rain", "مطر", false, false),
                new EnglishWord(0, "sun", "شمس", false, false),
                new EnglishWord(0, "winter", "فصل الشتاء", false, false),
                new EnglishWord(0, "fall", "فصل الخريف", false, false),
                new EnglishWord(0, "summer", "فصل الصيف", false, false),
                new EnglishWord(0, "spring", "فصل الربيع", false, false),
                new EnglishWord(0, "Alexandria", "الإسكندرية", false, false),
                new EnglishWord(0, "Cairo", "القاهرة", false, false),
                new EnglishWord(0, "Port Said", "بورسعيد", false, false),
                new EnglishWord(0, "Luxor", "الأقصر", false, false),
                new EnglishWord(0, "Aswan", "أسوان", false, false),
                new EnglishWord(0, "Hello", "مرحبا", false, false),
                new EnglishWord(0, "What's this?", "ما هذا ؟", false, false),
                new EnglishWord(0, "It's a cloud", "إنها سحابة", false, false),
                new EnglishWord(
                  0,
                  "Is it a red pen?",
                  "هل هذا قلم أحمر؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "No, It isn't",
                  "لا، ليس كذلك",
                  false,
                  false
                ),
                new EnglishWord(0, "Yes, it is ", "نعم أنه هو", false, false),
                new EnglishWord(
                  0,
                  "Let's play outside",
                  "هيا نلعب بالخارج",
                  false,
                  false
                ),
                new EnglishWord(0, "look outside", "انظر للخارج", false, false),
              ]
            ),
            new Unit(
              12,
              "Let's go shopping",
              [],
              [
                new EnglishWord(
                  0,
                  "Let's go shopping",
                  "هيا نذهب للتسوق",
                  false,
                  false
                ),
                new EnglishWord(0, "jacket", "جاكيت", false, false),
                new EnglishWord(0, "skirt", "جيبه", false, false),
                new EnglishWord(0, "shoes", "حذاء", false, false),
                new EnglishWord(0, "sweater", "سويتر", false, false),
                new EnglishWord(0, "pants", "بنطلون", false, false),
                new EnglishWord(0, "socks", "جورب - شراب", false, false),
                new EnglishWord(0, "zipper", "سوسته", false, false),
                new EnglishWord(0, "T-shirt", "تى شيرت", false, false),
                new EnglishWord(0, "clothes", "ملابس", false, false),
                new EnglishWord(0, "colors", "ألوان", false, false),
                new EnglishWord(0, "It's a jacket", "هذا جاكيت", false, false),
                new EnglishWord(
                  0,
                  "They are socks",
                  "إنهم جوارب",
                  false,
                  false
                ),
                new EnglishWord(0, "What are these?", "ما هؤلاء", false, false),
                new EnglishWord(
                  0,
                  "They're yellow",
                  "إن لونهم أصفر",
                  false,
                  false
                ),
                new EnglishWord(0, "It's a skirt", "إنها جيبه", false, false),
                new EnglishWord(0, "jump", "يقفز", false, false),
                new EnglishWord(0, "jam", "مربى", false, false),
                new EnglishWord(0, "violin", "ألة كمان", false, false),
                new EnglishWord(0, "van", "عربة نقل صغيرة مقفلة", false, false),
                new EnglishWord(0, "pajamas", "بيجاما", false, false),
                new EnglishWord(0, "They're shoes", "إنها أحذية", false, false),
                new EnglishWord(0, "help", "يساعد", false, false),
                new EnglishWord(
                  0,
                  "put away",
                  "يضع شيئ فى مكانه",
                  false,
                  false
                ),
                new EnglishWord(0, "please", "من فضلك", false, false),
                new EnglishWord(0, "let's", "هيا بنا", false, false),
                new EnglishWord(0, "tidy up", "يرتب", false, false),
                new EnglishWord(
                  0,
                  "please help me",
                  "من فضلكم ساعدنى",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Let's put the clothes away",
                  "هيا نضع الملابس فى مكانها",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Is this your skirt?",
                  "هل هذه جيبتك؟",
                  false,
                  false
                ),
                new EnglishWord(0, "Yes, it is ", "نعم إنها هي", false, false),
                new EnglishWord(
                  0,
                  "Are these your pants?",
                  "هل هذا بنطلونك؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Yes, they are my pants",
                  "نعم إنه بنطلوني",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Is this my T-shirt?",
                  "هل هذا قميصي؟",
                  false,
                  false
                ),
                new EnglishWord(0, "help", "يساعد", false, false),
              ]
            ),
            new Unit(
              13,
              "I can see a rocket",
              [],
              [
                new EnglishWord(
                  0,
                  "I can see a rocket",
                  "أستطيع أن أرى صاروخ",
                  false,
                  false
                ),
                new EnglishWord(0, "rocket", "صاروخ", false, false),
                new EnglishWord(0, "train", "قطار", false, false),
                new EnglishWord(0, "yacht", "يخت", false, false),
                new EnglishWord(0, "astronaut", "رجل فضاء", false, false),
                new EnglishWord(0, "motorbike", "دراجة بخارية", false, false),
                new EnglishWord(0, "bus", "أوتوبيس", false, false),
                new EnglishWord(0, "car", "سيارة", false, false),
                new EnglishWord(0, "bicycle", "دراجة", false, false),
                new EnglishWord(0, "truck", "شاحنة", false, false),
                new EnglishWord(
                  0,
                  "What can you see?",
                  "ماذا تستطيع أن ترى؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "I can see a truck and a bicycle",
                  "أنا أستطيع أن أرى شاحنة ودراجة",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "I can see a bus",
                  "أنا أستطيع أن أرى أتوبيس",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "I can see two motorbikes",
                  "أنا أستطيع أن أرى دراجتين بخاريتين",
                  false,
                  false
                ),
                new EnglishWord(0, "One car", "سيارة واحدة", false, false),
                new EnglishWord(0, "Two cars", "سيارتين", false, false),
                new EnglishWord(
                  0,
                  "I can see",
                  "أنا أستطيع أن أرى",
                  false,
                  false
                ),
                new EnglishWord(0, "fox", "ثعلب", false, false),
                new EnglishWord(0, "box", "صندوق", false, false),
                new EnglishWord(0, "zoo", "حديقة الحيوان", false, false),
                new EnglishWord(0, "zebra", "حمار وحشي", false, false),
                new EnglishWord(0, "yogurt", "زبادى", false, false),
                new EnglishWord(0, "stop", "يقف", false, false),
                new EnglishWord(0, "go", "يذهب", false, false),
                new EnglishWord(
                  0,
                  "cross the road",
                  "يعبر الطريق",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "traffic sign",
                  "إشارة المرور",
                  false,
                  false
                ),
              ]
            ),
          ],
          [
            new QuestionCategory(
              QuestionsTypes.ArabicEnglishChoice,
              "اختر الترجمة الصحيحة - عربي انجليزي",
              5
            ),
            new QuestionCategory(
              QuestionsTypes.EnglishArabicChoice,
              "اختر الترجمة الصحيحة - انجليزي عربي",
              5
            ),
            new QuestionCategory(
              QuestionsTypes.EnglishComplete,
              "أكمل الترجمة - انجليزي عربي",
              5
            ),
            new QuestionCategory(
              QuestionsTypes.EnglishListening,
              "استمع واختر الترجمة",
              5
            ),
          ]
        ),
      ])
    );
    this.years.push(
      new Year(4, "الصف الثاني الإبتدائي", [
        new Subject(10, "عربي"),
        new Subject(11, "حساب"),
        new Subject(
          9,
          "لغة إنجليزية",
          [
            new Unit(
              -1,
              "Basics",
              [],
              [
                new EnglishWord(0, "I", "أنا", false, false),
                new EnglishWord(0, "You", "أنت / أنتم", false, false),
                new EnglishWord(0, "He", "هو", false, false),
                new EnglishWord(0, "She", "هي", false, false),
                new EnglishWord(0, "They", "هم / هن", false, false),
                new EnglishWord(0, "I am", "أنا أكون", false, false),
                new EnglishWord(
                  0,
                  "You are",
                  "أنت تكون / أنتم تكونون",
                  false,
                  false
                ),
                new EnglishWord(0, "He is", "هو  يكون", false, false),
                new EnglishWord(0, "She is", "هي تكون", false, false),
                new EnglishWord(
                  0,
                  "They are",
                  "هم يكونون / هن يكنن",
                  false,
                  false
                ),
                new EnglishWord(0, "What", "ما  / ماذا", false, false),
                new EnglishWord(0, "Where", "أين", false, false),
                new EnglishWord(0, "When", "متى", false, false),
                new EnglishWord(0, "Which", "أى", false, false),
                new EnglishWord(0, "Who", "من", false, false),
                new EnglishWord(0, "How", "كيف", false, false),
              ]
            ),
            new Unit(-1, "1", [], []),
            new Unit(-1, "2", [], []),
            new Unit(-1, "3", [], []),
            new Unit(-1, "4", [], []),
            new Unit(-1, "5", [], []),
            new Unit(-1, "6", [], []),
            new Unit(
              -1,
              "Into the countryside",
              [],
              [
                new EnglishWord(0, "How", "كيف", false, false),
                new EnglishWord(0, "world", "عالم", false, false),
                new EnglishWord(0, "works", "يعمل", false, false),
                new EnglishWord(0, "into", "إلى", false, false),
                new EnglishWord(0, "countryside", "ريف", false, false),
                new EnglishWord(0, "grandmother", "جدة", false, false),
                new EnglishWord(0, "grandfather", "جد", false, false),
                new EnglishWord(0, "Where are you?", "أين أنت؟", false, false),
                new EnglishWord(0, "park", "منتزه", false, false),
                new EnglishWord(0, "beautiful", "جميل", false, false),
                new EnglishWord(0, "rainbow", "قوس قزح", false, false),
                new EnglishWord(
                  0,
                  "I'm in the park",
                  "أنا في الحديقة",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "It's beautiful",
                  "انها جميلة",
                  false,
                  false
                ),
                new EnglishWord(0, "sky", "سماء", false, false),
                new EnglishWord(
                  0,
                  "Is there a bench in the park?",
                  "هل يوجد مقعد في الحديقة؟",
                  false,
                  false
                ),
                new EnglishWord(0, "bench", "مقعد", false, false),
                new EnglishWord(0, "Yes", "نعم", false, false),
                new EnglishWord(0, "Yes, there is", "نعم هنالك", false, false),
                new EnglishWord(
                  0,
                  "I'm on the bench",
                  "أنا على المقعد",
                  false,
                  false
                ),
                new EnglishWord(0, "river", "نهر", false, false),
                new EnglishWord(
                  0,
                  "Is there a river?",
                  "هل يوجد نهر؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "No, there isn't",
                  "لا ، لا يوجد",
                  false,
                  false
                ),
                new EnglishWord(0, "there is", "يوجد", false, false),
                new EnglishWord(0, "there isn't", "لا يوجد", false, false),
                new EnglishWord(0, "no", "لا", false, false),
                new EnglishWord(0, "flower", "زهرة", false, false),
                new EnglishWord(0, "grass", "عشب", false, false),
                new EnglishWord(0, "plant", "نباتة", false, false),
                new EnglishWord(0, "tree", "شجرة", false, false),
                new EnglishWord(0, "color", "لون", false, false),
                new EnglishWord(0, "green", "أخضر", false, false),
                new EnglishWord(0, "red", "أحمر", false, false),
                new EnglishWord(0, "brown", "بني", false, false),
                new EnglishWord(0, "yellow", "أصفر", false, false),
                new EnglishWord(0, "love", "يحب", false, false),
                new EnglishWord(0, "see", "يرى", false, false),
                new EnglishWord(0, "bee", "نحلة", false, false),
                new EnglishWord(0, "bird", "عصفور", false, false),
                new EnglishWord(0, "ant", "نملة", false, false),
                new EnglishWord(0, "boy", "صبي / ولد", false, false),
                new EnglishWord(
                  0,
                  "Is there a boy on the grass?",
                  "هل يوجد ولد على العشب؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Is there a fish in the river?",
                  "هل يوجد سمكة في النهر؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Is there a lemon on the tree?",
                  "هل يوجد ليمون على الشجرة؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Is there a bee on the flower?",
                  "هل يوجد نحلة على الزهرة؟",
                  false,
                  false
                ),
                new EnglishWord(0, "water", "ماء", false, false),
                new EnglishWord(0, "states", "حالات", false, false),
                new EnglishWord(
                  0,
                  "Water has three states",
                  "الماء له ثلاث حالات",
                  false,
                  false
                ),
                new EnglishWord(0, "solid", "صلب", false, false),
                new EnglishWord(0, "liquid", "سائل", false, false),
                new EnglishWord(0, "gas", "غاز", false, false),
                new EnglishWord(0, "hot", "حار / ساخن", false, false),
                new EnglishWord(
                  0,
                  "very hot",
                  "حار جدا / ساخن جدا",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Very hot water is steam",
                  "الماء الساخن جدا هو بخار",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Steam is a gas",
                  "البخار غاز",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Very cold water is ice",
                  "الماء شديد البرودة ثلج",
                  false,
                  false
                ),
                new EnglishWord(0, "cold", "برد", false, false),
                new EnglishWord(0, "ice", "جليد / ثلج", false, false),
                new EnglishWord(0, "Ice is solid", "الثلج صلب", false, false),
                new EnglishWord(0, "can", "يستطيع", false, false),
                new EnglishWord(0, "boats", "زوارق / قوارب", false, false),
                new EnglishWord(
                  0,
                  "I can see boats",
                  "أنا أستطيع أن أرى القوارب",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "I can see the sea",
                  "أنا أستطيع أن أرى البحر",
                  false,
                  false
                ),
                new EnglishWord(0, "sea", "بحر", false, false),
                new EnglishWord(0, "picture", "صورة", false, false),
                new EnglishWord(
                  0,
                  "I like this picture",
                  "أنا أحب هذه الصورة",
                  false,
                  false
                ),
                new EnglishWord(0, "like", "يحب", false, false),
                new EnglishWord(
                  0,
                  "It's a picture of the sea",
                  "إنها صورة البحر",
                  false,
                  false
                ),
                new EnglishWord(0, "waves", "أمواج", false, false),
                new EnglishWord(0, "high", "عالي", false, false),
                new EnglishWord(
                  0,
                  "The waves are high",
                  "الأمواج عالية",
                  false,
                  false
                ),
                new EnglishWord(0, "look at", "ينظر الى", false, false),
                new EnglishWord(0, "sunset", "غروب الشمس", false, false),
                new EnglishWord(0, "low", "منخفض", false, false),
                new EnglishWord(0, "sun", "شمس", false, false),
                new EnglishWord(0, "down", "أسفل", false, false),
                new EnglishWord(0, "blue", "أزرق", false, false),
                new EnglishWord(0, "pink", "زهري", false, false),
                new EnglishWord(0, "too", "أيضا", false, false),
                new EnglishWord(
                  0,
                  "Look at the sunset",
                  "انظر إلى غروب الشمس",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "The waves are low",
                  "الأمواج منخفضة",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "The sun is going down",
                  "الشمس تغرب",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "I like this picture",
                  "أنا أحب هذه الصورة",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "What is a wave?",
                  "ما هي الموجة؟",
                  false,
                  false
                ),
                new EnglishWord(0, "move", "يتحرك", false, false),
                new EnglishWord(0, "boat", "قارب", false, false),
                new EnglishWord(0, "corn", "حبوب ذرة", false, false),
                new EnglishWord(0, "star", "نجمة", false, false),
                new EnglishWord(0, "horse", "حصان", false, false),
                new EnglishWord(0, "park", "منتزه / حديقة", false, false),
                new EnglishWord(0, "sport", "رياضة", false, false),
                new EnglishWord(0, "art", "فن", false, false),
                new EnglishWord(0, "jar", "إناء", false, false),
                new EnglishWord(0, "story", "قصة", false, false),
                new EnglishWord(0, "car", "سيارة", false, false),
                new EnglishWord(0, "shorts", "سراويل", false, false),
                new EnglishWord(0, "farm", "مزرعة", false, false),
                new EnglishWord(0, "garden", "حديقة", false, false),
                new EnglishWord(0, "morning", "صباح", false, false),
                new EnglishWord(0, "car", "سيارة", false, false),
                new EnglishWord(0, "star", "نجمة", false, false),
                new EnglishWord(0, "arm", "ذراع", false, false),
                new EnglishWord(0, "horse", "حصان", false, false),
                new EnglishWord(0, "forty", "أربعين", false, false),
                new EnglishWord(
                  0,
                  "This is  a beautiful park",
                  "هذه حديقة جميلة",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "There is a horse on the farm",
                  "يوجد حصان في المزرعة",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "I play sport in the park",
                  "ألعب الرياضة في الحديقة",
                  false,
                  false
                ),
                new EnglishWord(0, "sport", "رياضة", false, false),
                new EnglishWord(0, "play", "يلعب", false, false),
                new EnglishWord(
                  0,
                  "There are flowers in the garden",
                  "هناك زهور في الحديقة",
                  false,
                  false
                ),
                new EnglishWord(0, "trash", "قمامة، يدمر، يهدم", false, false),
                new EnglishWord(0, "parent", "الأبوين", false, false),
                new EnglishWord(
                  0,
                  "Is there a river?",
                  "هل يوجد نهر؟",
                  false,
                  false
                ),
                new EnglishWord(0, "pick", "قطف او يقطف", false, false),
                new EnglishWord(0, "Don't", "لا تفعل", false, false),
                new EnglishWord(
                  0,
                  "Don't pick the flowers",
                  "لا تقطف الزهور",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "I like the flowers",
                  "أنا أحب الزهور",
                  false,
                  false
                ),
                new EnglishWord(0, "we", "نحن", false, false),
                new EnglishWord(0, "must", "يجب", false, false),
                new EnglishWord(0, "protect", "يحمي", false, false),
                new EnglishWord(0, "environment", "بيئة", false, false),
                new EnglishWord(0, "our environment", "بيئتنا", false, false),
                new EnglishWord(
                  0,
                  "We must protect our environment",
                  "يجب أن نحمي بيئتنا",
                  false,
                  false
                ),
                new EnglishWord(0, "drink", "يشرب", false, false),
                new EnglishWord(0, "finish", "ينهي", false, false),
                new EnglishWord(0, "finished", "انتهى", false, false),
                new EnglishWord(
                  0,
                  "he has finished his drink",
                  "لقد انتهى من شرابه",
                  false,
                  false
                ),
                new EnglishWord(0, "throw", "يرمي", false, false),
                new EnglishWord(
                  0,
                  "Don't throw your trash in the river",
                  "لا ترمي القمامة في النهر",
                  false,
                  false
                ),
                new EnglishWord(0, "recycle", "إعادة التدوير", false, false),
                new EnglishWord(0, "home", "المنزل • العربيه", false, false),
                new EnglishWord(0, "grass", "عشب", false, false),
                new EnglishWord(0, "trash can", "سلة مهملات", false, false),
                new EnglishWord(0, "put", "يضع", false, false),
                new EnglishWord(
                  0,
                  "let's put the trash in the trash can",
                  "دعونا نضع القمامة في سلة المهملات",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Let's keep it beautiful",
                  "دعونا نبقيها جميلة",
                  false,
                  false
                ),
                new EnglishWord(0, "keep", "يحافظ", false, false),
                new EnglishWord(
                  0,
                  "What should I do?",
                  "ماذا علي أن أفعل؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "I'm in the park",
                  "أنا في الحديقة",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "I have some trash",
                  "لدي بعض القمامة",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "recycling bin",
                  "صندوق إعادة التدوير",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Don't throw the trash on the grass",
                  "لا ترمي القمامة على العشب",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "put the trash in a recycling bin",
                  "ضع القمامة في سلة المهملات",
                  false,
                  false
                ),
                new EnglishWord(0, "smell", "يشم", false, false),
                new EnglishWord(
                  0,
                  "take a picture",
                  "التقط صوره",
                  false,
                  false
                ),
                new EnglishWord(0, "picture", "صورة", false, false),
                new EnglishWord(0, "pick", "يقطف", false, false),
                new EnglishWord(0, "went to ", "ذهب إلى", false, false),
                new EnglishWord(0, "remember", "تذكر", false, false),
                new EnglishWord(
                  0,
                  "I don't pick flowers",
                  "أنا لا أقطف الزهور",
                  false,
                  false
                ),
                new EnglishWord(0, "scissors", "مقص", false, false),
                new EnglishWord(0, "glue", "صمغ", false, false),
                new EnglishWord(0, "colored paper", "ورق ملون", false, false),
                new EnglishWord(
                  0,
                  "colored pencils",
                  "أقلام ملونة",
                  false,
                  false
                ),
                new EnglishWord(0, "old", "قديم", false, false),
                new EnglishWord(0, "find", "يجد", false, false),
                new EnglishWord(0, "some", "بعض", false, false),
                new EnglishWord(0, "tear", "دمعة", false, false),
                new EnglishWord(0, "paper", "ورق", false, false),
                new EnglishWord(0, "small", "صغير", false, false),
                new EnglishWord(0, "pieces", "قطع", false, false),
                new EnglishWord(0, "make", "يصنع", false, false),
                new EnglishWord(0, "earth", "أرض", false, false),
                new EnglishWord(0, "stick", "يلتصق", false, false),
                new EnglishWord(0, "show", "يعرض", false, false),
                new EnglishWord(0, "tell", "يخبر", false, false),
              ]
            ),
            new Unit(
              -1,
              "A trip to the store",
              [],
              [
                new EnglishWord(0, "trip", "رحلة قصيرة", false, false),
                new EnglishWord(0, "store", "متجر", false, false),
                new EnglishWord(
                  0,
                  "stationery shop",
                  "متجر أدوات مكتبية",
                  false,
                  false
                ),
                new EnglishWord(0, "shop", "متجر", false, false),
                new EnglishWord(0, "pencil", "قلم", false, false),
                new EnglishWord(
                  0,
                  "pencil cases",
                  "حقائب أقلام رصاص",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Are there pencil cases?",
                  "هل توجد حقائب أقلام رصاص؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Are there any black pens",
                  "هل يوجد أقلام سوداء",
                  false,
                  false
                ),
                new EnglishWord(0, "pen", "قلم", false, false),
                new EnglishWord(0, "pens", "أقلام", false, false),
                new EnglishWord(0, "and", "و", false, false),
                new EnglishWord(
                  0,
                  "Yes, there are",
                  "نعم ، يوجد",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "No, there aren't",
                  "لا ، لا يوجد",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "There are blue pens",
                  "هناك أقلام زرقاء",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "There are red pens",
                  "هناك أقلام حمراء",
                  false,
                  false
                ),
                new EnglishWord(0, "bag", "كيس", false, false),
                new EnglishWord(0, "bags", "أكياس", false, false),
                new EnglishWord(0, "book", "كتاب", false, false),
                new EnglishWord(0, "books", "كتب", false, false),
                new EnglishWord(0, "calculator", "آلة حاسبة", false, false),
                new EnglishWord(0, "notebook", "دفتر ملاحظات", false, false),
                new EnglishWord(0, "calculators", "آلات حاسبة", false, false),
                new EnglishWord(0, "notebooks", "دفاتر ملاحظات", false, false),
                new EnglishWord(0, "paintbrush", "فرشاة رسم", false, false),
                new EnglishWord(0, "pencils", "اقلام رصاص", false, false),
                new EnglishWord(0, "paints", "دهانات", false, false),
                new EnglishWord(0, "colored paper", "ورق ملون", false, false),
                new EnglishWord(0, "rulers", "مساطر", false, false),
                new EnglishWord(0, "ruler", "مسطرة", false, false),
                new EnglishWord(0, "figs", "تين", false, false),
                new EnglishWord(
                  0,
                  "Are there any figs?",
                  "هل يوجد تين؟",
                  false,
                  false
                ),
                new EnglishWord(0, "apple", "تفاحة", false, false),
                new EnglishWord(0, "apples", "تفاح", false, false),
                new EnglishWord(0, "bananas", "موز", false, false),
                new EnglishWord(0, "lemons", "الليمون", false, false),
                new EnglishWord(0, "oranges", "برتقال", false, false),
                new EnglishWord(
                  0,
                  "Are there apples?",
                  "هل يوجد تفاح؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Are there oranges?",
                  "هل يوجد برتقال؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Are there any nuts?",
                  "هل هناك مكسرات؟",
                  false,
                  false
                ),
                new EnglishWord(0, "nuts", "مكسرات", false, false),
                new EnglishWord(
                  0,
                  "Are there any lemons?",
                  "هل يوجد ليمون؟",
                  false,
                  false
                ),
                new EnglishWord(0, "bus", "أوتوبيس", false, false),
                new EnglishWord(0, "number", "رقم", false, false),
                new EnglishWord(0, "team", "فريق", false, false),
                new EnglishWord(0, "live", "يعيش", false, false),
                new EnglishWord(0, "pound", "جنيه", false, false),
                new EnglishWord(0, "grandpa", "جد", false, false),
                new EnglishWord(
                  0,
                  "My grandpa is 75 years old",
                  "جدي عمره 75 سنة",
                  false,
                  false
                ),
                new EnglishWord(0, "race", "سباق", false, false),
                new EnglishWord(0, "skirt", "جيبه / تنوره", false, false),
                new EnglishWord(
                  0,
                  "The skirt is for LE seventy-two",
                  "سعر الجيبه هو اثنان وسبعون جنيهاً مصرياً",
                  false,
                  false
                ),
                new EnglishWord(0, "seventy", "سبعين", false, false),
                new EnglishWord(0, "forty", "أربعين", false, false),
                new EnglishWord(
                  0,
                  "I am 10 years old",
                  "أنا عمري 10 سنوات",
                  false,
                  false
                ),
                new EnglishWord(0, "I am", "أنا أكون", false, false),
                new EnglishWord(0, "friend", "صديق", false, false),
                new EnglishWord(0, "draw", "يرسم", false, false),
                new EnglishWord(0, "classroom", "فصل مدرسى", false, false),
                new EnglishWord(0, "chair", "كرسي", false, false),
                new EnglishWord(0, "chairs", "كراسي", false, false),
                new EnglishWord(
                  0,
                  "Are there any chairs?",
                  "هل يوجد أي كراسي؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "How many are there?",
                  "كم يوجد هناك؟",
                  false,
                  false
                ),
                new EnglishWord(0, "children", "أطفال", false, false),
                new EnglishWord(
                  0,
                  "Are there any children?",
                  "هل يوجد اطفال؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Are there any bags?",
                  "هل يوجد حقائب؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "There are 33 chairs in my classroom",
                  "يوجد 33 كرسيًا في فصلي",
                  false,
                  false
                ),
                new EnglishWord(0, "Money", "نقود", false, false),
                new EnglishWord(0, "coins", "عملات معدنية", false, false),
                new EnglishWord(
                  0,
                  "These are coins",
                  "هذه عملات معدنية",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "these are bills",
                  "هذه فواتير",
                  false,
                  false
                ),
                new EnglishWord(0, "bill", "ورقة نقدية", false, false),
                new EnglishWord(0, "bills", "أوراق نقدية", false, false),
                new EnglishWord(0, "twenty", "عشرين", false, false),
                new EnglishWord(0, "ten", "عشرة", false, false),
                new EnglishWord(0, "eight", "ثمانية", false, false),
                new EnglishWord(0, "five", "خمسة", false, false),
                new EnglishWord(0, "six", "ستة", false, false),
                new EnglishWord(0, "seven", "سبعة", false, false),
                new EnglishWord(0, "nine", "تسعة", false, false),
                new EnglishWord(0, "one", "واحد", false, false),
                new EnglishWord(0, "two", "اثنين", false, false),
                new EnglishWord(0, "three", "ثلاثة", false, false),
                new EnglishWord(0, "four", "أربعة", false, false),
                new EnglishWord(0, "thirty-six", "ستة وثلاثون", false, false),
                new EnglishWord(0, "fifty", "خمسون", false, false),
                new EnglishWord(0, "plus", "زائد / بالإضافة إلى", false, false),
                new EnglishWord(
                  0,
                  "Twenty plus ten is thirty",
                  "عشرون زائد عشرة يساوي ثلاثين",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Five plus one is six",
                  "خمسة زائد واحد يساوي ستة",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Fifty plus twenty plus one is seventy-one",
                  "خمسون زائد عشرين زائد واحد يساوي واحد وسبعين",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "How much money is there?",
                  "كم من المال هناك؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "There are 36 pounds",
                  "يوجد 36 جنيها",
                  false,
                  false
                ),
                new EnglishWord(0, "How much", "كم ثمن / ما سعر", false, false),
                new EnglishWord(
                  0,
                  "How much are the skirt and shoes, please?",
                  "كم سعر الجيبه والحذاء من فضلك؟",
                  false,
                  false
                ),
                new EnglishWord(0, "please", "من فضلك", false, false),
                new EnglishWord(0, "shoes", "أحذية", false, false),
                new EnglishWord(0, "t-shirt", "تي شيرت", false, false),
                new EnglishWord(0, "jacket", "جاكيت", false, false),
                new EnglishWord(
                  0,
                  "I want a t-shirt and a jacket, too, please",
                  "أريد تي شيرت وجاكيت أيضًا من فضلك",
                  false,
                  false
                ),
                new EnglishWord(0, "clothes store", "محل ملابس", false, false),
                new EnglishWord(0, "pants", "بنطلون", false, false),
                new EnglishWord(
                  0,
                  "How much are the pants, please?",
                  "كم سعر البنطلون من فضلك؟",
                  false,
                  false
                ),
                new EnglishWord(0, "want", "يريد", false, false),
                new EnglishWord(0, "cactus", "صبار", false, false),
                new EnglishWord(
                  0,
                  "I want a cactus and yellow flowers?",
                  "اريد صبار وزهور صفراء؟",
                  false,
                  false
                ),
                new EnglishWord(0, "bunches", "مجموعات / باقات", false, false),
                new EnglishWord(
                  0,
                  "I want 2 bunches of pink flowers",
                  "أريد مجموعتين من الأزهار الوردية",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "bunch",
                  "حزمة / باقة  / مجموعة",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "I want a bunch of yellow flowers, please.",
                  "أريد باقة من الزهور الصفراء من فضلك.",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "How much are a cactus?",
                  "كم سعر الصبار؟",
                  false,
                  false
                ),
                new EnglishWord(0, "plant", "نبات", false, false),
                new EnglishWord(0, "money", "مال", false, false),
                new EnglishWord(0, "buy", "يشترى", false, false),
                new EnglishWord(
                  0,
                  "We use money to buy things",
                  "نحن نستخدم المال لشراء الأشياء",
                  false,
                  false
                ),
                new EnglishWord(0, "buy", "يشترى", false, false),
                new EnglishWord(0, "things", "أشياء", false, false),
                new EnglishWord(0, "useful", "مفيد", false, false),
                new EnglishWord(0, "world", "عالم", false, false),
                new EnglishWord(0, "need", "يحتاج", false, false),
                new EnglishWord(0, "food", "غذاء", false, false),
                new EnglishWord(0, "like", "مثل", false, false),
                new EnglishWord(0, "house", "بيت / منزل", false, false),
                new EnglishWord(0, "houses", "بيوت / منازل", false, false),
                new EnglishWord(0, "sweets", "حلويات", false, false),
                new EnglishWord(0, "toys", "ألعاب الأطفال", false, false),
                new EnglishWord(0, "Egypt", "مصر", false, false),
                new EnglishWord(0, "currency", "عملة", false, false),
                new EnglishWord(
                  0,
                  "Money is very useful in our world",
                  "المال مفيد جدا في عالمنا",
                  false,
                  false
                ),
                new EnglishWord(0, "not useful", "ليس مفيدا", false, false),
                new EnglishWord(0, "eat", "يأكل", false, false),
                new EnglishWord(0, "people", "اشخاص / ناس", false, false),
                new EnglishWord(0, "coin", "عملة", false, false),
                new EnglishWord(0, "oil", "زيت / نفط / بترول", false, false),
                new EnglishWord(0, "boy", "ولد / صبي", false, false),
                new EnglishWord(0, "soil", "تربة / تراب", false, false),
                new EnglishWord(0, "Point at", "يشير إلى", false, false),
                new EnglishWord(
                  0,
                  "Point at the oil",
                  "يشير إلى الزيت",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "The boy has a toy",
                  "الصبي لديه لعبة",
                  false,
                  false
                ),
                new EnglishWord(0, "toy", "لعبة أطفال", false, false),
                new EnglishWord(
                  0,
                  "Is there a coin in the soil?",
                  "هل هناك عملة معدنية في التربة؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Coin is made of metal",
                  "العملة المعدنية مصنوعة من المعدن",
                  false,
                  false
                ),
                new EnglishWord(0, "metal", "معدن", false, false),
                new EnglishWord(0, "made of", "مصنوع من", false, false),
                new EnglishWord(
                  0,
                  "Bill is made of paper",
                  "أوراق النقدية مصنوعة من الورق",
                  false,
                  false
                ),
                new EnglishWord(0, "paper", "ورق", false, false),
                new EnglishWord(0, "plastic", "بلاستيك", false, false),
                new EnglishWord(0, "glass", "زجاج", false, false),
                new EnglishWord(
                  0,
                  "A bag is made of plastic",
                  "حقيبة مصنوعة من البلاستيك",
                  false,
                  false
                ),
                new EnglishWord(0, "bottle", "زجاجة", false, false),
                new EnglishWord(0, "water bottle", "زجاجة ماء", false, false),
                new EnglishWord(0, "paint", "طلاء", false, false),
                new EnglishWord(0, "decide", "يقرر", false, false),
                new EnglishWord(0, "make", "يصنع", false, false),
                new EnglishWord(
                  0,
                  "put some money in your money box",
                  "ضع بعض المال في صندوق أموالك",
                  false,
                  false
                ),
                new EnglishWord(0, "decorate", "تزيين", false, false),
                new EnglishWord(0, "window", "شباك", false, false),
              ]
            ),
          ],
          [
            new QuestionCategory(
              QuestionsTypes.ArabicEnglishChoice,
              "اختر الترجمة الصحيحة - عربي انجليزي",
              5
            ),
            new QuestionCategory(
              QuestionsTypes.EnglishArabicChoice,
              "اختر الترجمة الصحيحة - انجليزي عربي",
              5
            ),
            new QuestionCategory(
              QuestionsTypes.EnglishComplete,
              "أكمل الترجمة - انجليزي عربي",
              5
            ),
            new QuestionCategory(
              QuestionsTypes.EnglishListening,
              "استمع واختر الترجمة",
              5
            ),
          ]
        ),
      ])
    );
    this.years.push(
      new Year(5, "الصف الثالث الإبتدائي", [
        new Subject(13, "عربي", [
          new Unit(15, "من أكون؟ - الحياة الصحية", []),
          new Unit(16, "العالم من حولى - الاهتمام بعالمنا", []),
        ]),
        new Subject(14, "حساب", [
          new Unit(
            17,
            "الجمع",
            [],
            [],
            [new QuestionCategory(QuestionsTypes.Addition, "عملية الجمع", 5)]
          ),
          new Unit(
            18,
            "الطرح",
            [],
            [],
            [new QuestionCategory(QuestionsTypes.Subtraction, "عملية الطرح", 5)]
          ),
          new Unit(
            19,
            "الضرب",
            [],
            [],
            [
              new QuestionCategory(
                QuestionsTypes.Multiplication,
                "عملية الضرب",
                5
              ),
            ]
          ),
          new Unit(
            19,
            "القسمة",
            [],
            [],
            [new QuestionCategory(QuestionsTypes.Division, "عملية القسمة", 5)]
          ),
          new Unit(
            19,
            "الساعة",
            [],
            [],
            [new QuestionCategory(QuestionsTypes.Time, "الساعة", 5)]
          ),
        ]),
        new Subject(
          15,
          "لغة إنجليزية",
          [
            new Unit(
              -1,
              "Basics",
              [],
              [
                new EnglishWord(0, "I", "أنا", false, false),
                new EnglishWord(0, "You", "أنت / أنتم", false, false),
                new EnglishWord(0, "He", "هو", false, false),
                new EnglishWord(0, "She", "هي", false, false),
                new EnglishWord(0, "They", "هم / هن", false, false),
                new EnglishWord(0, "I am", "أنا أكون", false, false),
                new EnglishWord(
                  0,
                  "You are",
                  "أنت تكون / أنتم تكونون",
                  false,
                  false
                ),
                new EnglishWord(0, "He is", "هو  يكون", false, false),
                new EnglishWord(0, "She is", "هي تكون", false, false),
                new EnglishWord(
                  0,
                  "They are",
                  "هم يكونون / هن يكنن",
                  false,
                  false
                ),
                new EnglishWord(0, "I'm", "أنا أكون", false, false),
                new EnglishWord(
                  0,
                  "You're",
                  "أنت تكون / أنتم تكونون",
                  false,
                  false
                ),
                new EnglishWord(0, "He's", "هو  يكون", false, false),
                new EnglishWord(0, "She's", "هي تكون", false, false),
                new EnglishWord(
                  0,
                  "They're",
                  "هم يكونون / هن يكنن",
                  false,
                  false
                ),
                new EnglishWord(0, "What", "ما  / ماذا", false, false),
                new EnglishWord(0, "Where", "أين", false, false),
                new EnglishWord(0, "When", "متى", false, false),
                new EnglishWord(0, "Which", "أى", false, false),
                new EnglishWord(0, "Who", "من", false, false),
                new EnglishWord(0, "How", "كيف", false, false),
                new EnglishWord(0, "And", "و", false, false),
                new EnglishWord(0, "The", "ال", false, false),
                new EnglishWord(0, "has", "لديه / لديها", false, false),
                new EnglishWord(0, "have", "لدي / لديهم", false, false),
                new EnglishWord(0, "this", "هذا   / هذه", false, false),
                new EnglishWord(0, "that", "ذلك / تلك", false, false),
                new EnglishWord(0, "those", "أولئك", false, false),
                new EnglishWord(0, "these", "هؤلاء", false, false),
              ]
            ),
            new Unit(
              0,
              "I feel Happy",
              [],
              [
                new EnglishWord(0, "look", "نظرة", false, true),
                new EnglishWord(0, "write", "اكتب", false, true),
                new EnglishWord(0, "mystery", "لغز", true, false),
                new EnglishWord(0, "in", "في", false, false),
                new EnglishWord(0, "yellow", "أصفر", true, false),
                new EnglishWord(0, "let's", "هيا بنا", false, false),
                new EnglishWord(0, "remember", "يتذكر", false, true),
                new EnglishWord(0, "word", "كلمة", true, false),
                new EnglishWord(0, "read", "اقرأ", false, true),
                new EnglishWord(0, "match", "مباراة / صل", false, false),
                new EnglishWord(0, "question", "سؤال", true, false),
                new EnglishWord(0, "questions", "أسئلة", true, false),
                new EnglishWord(0, "answer", "جواب / إجابة", true, false),
                new EnglishWord(0, "answers", "إجابات", true, false),
                new EnglishWord(
                  0,
                  "is there",
                  "هل يوجد (للمفرد)",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "are there",
                  "هل يوجد (للجمع)",
                  false,
                  false
                ),
                new EnglishWord(0, "park", "حديقة", true, false),
                new EnglishWord(0, "any", "أي", false, false),
                new EnglishWord(0, "banana", "موز", true, false),
                new EnglishWord(0, "bananas", "موز", true, false),
                new EnglishWord(0, "apartment", "شقة", true, false),
                new EnglishWord(0, "these", "هؤلاء", false, false),
                new EnglishWord(0, "station", "محطة", true, false),
                new EnglishWord(0, "toy", "لعبة أطفال", true, false),
                new EnglishWord(0, "toys", "ألعاب أطفال", true, false),
                new EnglishWord(0, "fine", "بخير", false, false),
                new EnglishWord(0, "next to", "بجوار", false, false),
                new EnglishWord(0, "supermarket", "سوبر ماركت", true, false),
                new EnglishWord(0, "there is", "يوجد (للمفرد)", false, false),
                new EnglishWord(
                  0,
                  "there isn't",
                  "لا يوجد (للمفرد)",
                  false,
                  false
                ),
                new EnglishWord(0, "there are", "يوجد (للجمع)", false, false),
                new EnglishWord(
                  0,
                  "there aren't",
                  "لا يوجد (للجمع)",
                  false,
                  false
                ),
                new EnglishWord(0, "some", "بعض", false, false),
                new EnglishWord(0, "apples", "تفاح", true, false),
                new EnglishWord(0, "kitchen", "مطبخ", true, false),
                new EnglishWord(0, "living room", "غرفة المعيشة", true, false),
                new EnglishWord(0, "bedroom", "غرفة نوم", true, false),
                new EnglishWord(0, "bedrooms", "غرف نوم", true, false),
                new EnglishWord(0, "bathroom", "حمام", true, false),
                new EnglishWord(0, "Yes", "نعم", false, false),
                new EnglishWord(0, "no", "لا", false, false),
                new EnglishWord(0, "right", "يمين", true, false),
                new EnglishWord(0, "left", "يسار", true, false),
                new EnglishWord(0, "after", "بعد", false, false),
                new EnglishWord(
                  0,
                  "Is there a park?",
                  "هل توجد حديقة؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Are there any bananas?",
                  "هل يوجد أي موز؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "What do you have in your apartment?",
                  "ماذا لديك في شقتك؟",
                  false,
                  false
                ),
                new EnglishWord(0, "What are these?", "ما هذه؟", false, false),
                new EnglishWord(0, "How are you?", "كيف حالك؟", false, false),
                new EnglishWord(
                  0,
                  "Where's the station?",
                  "أين المحطة؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "These are my toys.",
                  "هذه هي ألعابي.",
                  false,
                  false
                ),
                new EnglishWord(0, "I'm fine", "انا جيد", false, false),
                new EnglishWord(
                  0,
                  "It's next to the supermarket",
                  "إنه بجوار السوبر ماركت",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "No, there aren't. There are some apples",
                  "لا ، لا يوجد. هناك بعض التفاح",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "I have a kitchen, a living room, two bedrooms and a bathroom.",
                  "لدي مطبخ وغرفة معيشة وغرفتي نوم وحمام.",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Yes, there is. It's on the right, after the station.",
                  "نعم يوجد. إنه على اليمين ، بعد المحطة.",
                  false,
                  false
                ),
                new EnglishWord(0, "trace", "تتبع", false, true),
                new EnglishWord(0, "circle", "دائرة / ضع دائرة", true, false),
                new EnglishWord(0, "color", "لون", true, false),
                new EnglishWord(0, "short", "قصير", true, false),
                new EnglishWord(0, "blue", "أزرق", true, false),
                new EnglishWord(0, "robot", "إنسان آلي", true, false),
                new EnglishWord(0, "doll", "لعبة", true, false),
                new EnglishWord(0, "big", "كبير", true, false),
                new EnglishWord(0, "small", "صغير", true, false),
                new EnglishWord(0, "kite", "طائرة ورقية", true, false),
                new EnglishWord(0, "book", "كتاب", true, false),
                new EnglishWord(0, "green", "أخضر", true, false),
                new EnglishWord(0, "red", "أحمر", true, false),
                new EnglishWord(0, "black", "أسود", true, false),
                new EnglishWord(0, "white", "أبيض", true, false),
                new EnglishWord(0, "couch", "أريكة", true, false),
                new EnglishWord(
                  0,
                  "computer",
                  "حاسوب / جهاز كمبيوتر",
                  true,
                  false
                ),
                new EnglishWord(0, "tall", "طويل", true, false),
                new EnglishWord(0, "tree", "شجرة", true, false),
                new EnglishWord(0, "pink", "زهري", true, false),
                new EnglishWord(0, "flower", "زهرة", true, false),
                new EnglishWord(0, "gray", "رمادي", true, false),
                new EnglishWord(0, "donkey", "حمار", true, false),
                new EnglishWord(0, "goat", "ماعز", true, false),
                new EnglishWord(0, "point to", "يشير إلى", false, true),
                new EnglishWord(0, "point", "يشير", false, true),
                new EnglishWord(0, "ask", "يطلب", false, true),
                new EnglishWord(0, "river", "نهر", true, false),
                new EnglishWord(0, "balloons", "بالونات", true, false),
                new EnglishWord(0, "football", "كرة القدم", true, false),
                new EnglishWord(0, "listen", "يستمع", false, true),
                new EnglishWord(0, "places", "أماكن", true, false),
                new EnglishWord(0, "map", "خريطة", true, false),
                new EnglishWord(0, "on", "على", false, false),
                new EnglishWord(0, "house", "بيت", true, false),
                new EnglishWord(0, "museum", "متحف", true, false),
                new EnglishWord(0, "restaurant", "مطعم", true, false),
                new EnglishWord(0, "store", "متجر", true, false),
                new EnglishWord(0, "road", "طريق", true, false),
                new EnglishWord(0, "go", "يذهب", false, true),
                new EnglishWord(0, "go straight", "انطلق للأمام", false, true),
                new EnglishWord(0, "turn right", "انعطف يمينا", false, true),
                new EnglishWord(0, "thank you", "شكرا لكم", false, false),
                new EnglishWord(0, "complete", "أكمل", false, true),
                new EnglishWord(0, "look", "انظر", false, true),
                new EnglishWord(0, "at", "في", false, false),
                new EnglishWord(0, "use", "يستخدم", false, true),
                new EnglishWord(0, "find", "يجد", false, true),
                new EnglishWord(0, "everything", "كل شىء", false, false),
                new EnglishWord(0, "take", "يأخذ", false, true),
                new EnglishWord(0, "photos", "صور", true, false),
                new EnglishWord(0, "feel", "يشعر", false, true),
                new EnglishWord(0, "happy", "سعيد", true, false),
                new EnglishWord(0, "repeat", "كرر", false, true),
                new EnglishWord(0, "today", "اليوم", false, false),
                new EnglishWord(0, "hot", "حار", true, false),
                new EnglishWord(0, "thirsty", "متعطش", true, false),
                new EnglishWord(0, "excited", "متحمس", true, false),
                new EnglishWord(0, "coming", "آت", true, false),
                new EnglishWord(0, "too", "جدا / أيضا", false, false),
                new EnglishWord(0, "hungry", "جوعان", true, false),
                new EnglishWord(0, "angry", "غاضب", true, false),
                new EnglishWord(0, "sad", "حزين", true, false),
                new EnglishWord(0, "tired", "مرهق", true, false),
                new EnglishWord(0, "match", "مباراة", true, false),
                new EnglishWord(0, "words", "كلمات", true, false),
                new EnglishWord(0, "unhappy", "تعيس / غير سعيد", true, false),
                new EnglishWord(0, "can", "يستطيع", false, true),
                new EnglishWord(0, "talking to", "يتحدث الي", false, true),
                new EnglishWord(0, "help", "مساعدة", true, false),
                new EnglishWord(0, "clean", "ينظف", false, true),
                new EnglishWord(0, "say", "يقول", false, true),
                new EnglishWord(0, "kind", "طيب", true, false),
                new EnglishWord(0, "unkind", "قاسي", true, false),
                new EnglishWord(0, "pen", "قلم", true, false),
                new EnglishWord(0, "can't", "لا تستطيع", false, false),
                new EnglishWord(
                  0,
                  "How do you feel?",
                  "ما هو شعورك؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "I feel thirsty",
                  "أشعر بالعطش",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "I can make you a sandwich!",
                  "استطيع ان اعد لك شطيرة!",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "you are very kind",
                  "انت لطيف جدا",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "have some juice",
                  "تناول بعض العصير",
                  false,
                  false
                ),
                new EnglishWord(0, "juice", "عصير", true, false),
                new EnglishWord(0, "correct", "صحيح", true, false),
                new EnglishWord(0, "again", "كرر / مرة أخرى", false, true),
                new EnglishWord(0, "make", "يصنع", false, true),
                new EnglishWord(0, "give", "يعطى", false, true),
                new EnglishWord(0, "draw", "يرسم", false, true),
                new EnglishWord(0, "healthy", "صحي", true, false),
                new EnglishWord(0, "food", "غذاء / طعام", true, false),
                new EnglishWord(0, "healthy food", "طعام صحي", true, false),
                new EnglishWord(0, "heart", "قلب", true, false),
                new EnglishWord(0, "lifestyle", "نمط الحياة", true, false),
                new EnglishWord(0, "drink", "يشرب", false, true),
                new EnglishWord(0, "eat", "يأكل", false, true),
                new EnglishWord(0, "sleep", "ينام", false, true),
                new EnglishWord(0, "play", "يلعب", false, true),
                new EnglishWord(0, "don't", "لا تفعل", false, false),
                new EnglishWord(0, "go by car", "أذهب بالسيارة", false, true),
                new EnglishWord(0, "water", "ماء", true, false),
                new EnglishWord(0, "fruit", "فاكهة", true, false),
                new EnglishWord(0, "vegetables", "خضروات", true, false),
                new EnglishWord(0, "hour", "ساعة", true, false),
                new EnglishWord(0, "hours", "ساعات", true, false),
                new EnglishWord(0, "every", "كل", false, false),
                new EnglishWord(0, "night", "ليلة", true, false),
                new EnglishWord(0, "every night", "كل ليلة", false, false),
                new EnglishWord(0, "outside", "الخارج", true, false),
                new EnglishWord(0, "sport", "رياضة", true, false),
                new EnglishWord(0, "sports", "رياضات", true, false),
                new EnglishWord(0, "good", "جيد / حسن", true, false),
                new EnglishWord(0, "watch", "يشاهد", false, true),
                new EnglishWord(
                  0,
                  "television",
                  "تلفاز / تليفزيون",
                  true,
                  false
                ),
                new EnglishWord(0, "chocolate", "شوكولاتة", true, false),
                new EnglishWord(0, "cake", "كيك", true, false),
                new EnglishWord(
                  0,
                  "chocolate cacke",
                  "كعكة شوكولاتة",
                  true,
                  false
                ),
                new EnglishWord(0, "walk", "يمشي", false, true),
                new EnglishWord(0, "school", "مدرسة", true, false),
                new EnglishWord(0, "to", "إلى", false, false),
                new EnglishWord(0, "play", "يلعب", false, true),
                new EnglishWord(0, "tennis", "تنس", true, false),
                new EnglishWord(0, "board", "كرتون / ورق مقوى", true, false),
                new EnglishWord(0, "games", "ألعاب", true, false),
                new EnglishWord(0, "game", "لعبة", true, false),
                new EnglishWord(0, "footballs", "كرات القدم", true, false),
                new EnglishWord(0, "for", "من أجل", false, false),
                new EnglishWord(0, "video", "فيديو", true, false),
                new EnglishWord(
                  0,
                  "exercise",
                  "ممارسة الرياضه / تدريب",
                  true,
                  false
                ),
                new EnglishWord(
                  0,
                  "watch television",
                  "شاهد التلفاز",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "he eats chocolate cake",
                  "هو يأكل كعكة الشوكولاتة",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "sleep for 8 hours",
                  "ينام لمدة 8 ساعات",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "I eat bananas",
                  "أنا آكل الموز",
                  false,
                  false
                ),
                new EnglishWord(0, "drink water", "اشرب ماء", false, false),
                new EnglishWord(0, "drink cola", "اشرب الكولا", false, false),
                new EnglishWord(
                  0,
                  "walk to school",
                  "امشي إلى المدرسة",
                  false,
                  false
                ),
                new EnglishWord(0, "play tennis", "العب تنس", false, false),
                new EnglishWord(
                  0,
                  "play board games",
                  "لعب ألعاب اللوح",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "play football",
                  "العب كرة القدم",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "play video games",
                  "لعب ألعاب الفيديو",
                  false,
                  false
                ),
                new EnglishWord(0, "ladders", "سلالم", true, false),
                new EnglishWord(0, "go up", "اذهب للأعلى", false, true),
                new EnglishWord(0, "go down", "انزل", false, true),
                new EnglishWord(0, "snakes", "ثعابين", true, false),
                new EnglishWord(0, "bee", "نحلة", true, false),
                new EnglishWord(0, "busy bee", "نحلة مشغولة", true, false),
                new EnglishWord(0, "leaf", "ورقة شجر", true, false),
                new EnglishWord(0, "reorder", "إعادة ترتيب", false, false),
                new EnglishWord(0, "sentence", "جملة", true, false),
                new EnglishWord(0, "add", "يضيف", false, true),
                new EnglishWord(0, "one", "واحد", false, false),
                new EnglishWord(0, "two", "اثنين", false, false),
                new EnglishWord(0, "three", "ثلاثة", false, false),
                new EnglishWord(0, "four", "أربعة", false, false),
                new EnglishWord(0, "five", "خمسة", false, false),
                new EnglishWord(0, "six", "ستة", false, false),
                new EnglishWord(0, "seven", "سبعة", false, false),
                new EnglishWord(0, "eight", "ثمانية", false, false),
                new EnglishWord(0, "nine", "تسعة", false, false),
                new EnglishWord(0, "ten", "عشرة", false, false),
                new EnglishWord(0, "eleven", "أحد عشر", false, false),
                new EnglishWord(0, "twelve", "اثني عشر", false, false),
                new EnglishWord(0, "the end", "النهاية", false, false),
                new EnglishWord(0, "the first", "الأول", false, false),
                new EnglishWord(0, "How long is it?", "كم طوله؟", false, false),
                new EnglishWord(0, "long", "طويل", false, false),
                new EnglishWord(0, "millimeter", "ملليمتر", false, false),
                new EnglishWord(0, "centimeter", "سنتيمتر", false, false),
                new EnglishWord(0, "measure", "يقيس", false, true),
                new EnglishWord(0, "hand", "يد / كف", true, false),
                new EnglishWord(0, "measurement", "قياس", true, false),
                new EnglishWord(0, "finger", "اصبع", true, false),
                new EnglishWord(0, "leg", "رجل", true, false),
                new EnglishWord(0, "children", "أطفال", true, false),
                new EnglishWord(0, "height", "ارتفاع", true, false),
                new EnglishWord(0, "bar", "شريط", true, false),
                new EnglishWord(0, "chart", "جدول / رسم بياني", true, false),
                new EnglishWord(0, "bar chart", "شريط رسم بياني", true, false),
                new EnglishWord(0, "name", "اسم", true, false),
                new EnglishWord(0, "names", "أسماء", true, false),
                new EnglishWord(0, "group", "مجموعة", true, false),
                new EnglishWord(0, "lunchbox", "صندوق الغداء", true, false),
                new EnglishWord(0, "will", "سوف", false, false),
                new EnglishWord(0, "need", "يحتاج", false, true),
                new EnglishWord(0, "choose", "اختر", false, true),
                new EnglishWord(0, "colored", "ملون", true, false),
                new EnglishWord(0, "cardboard", "ورق مقوى", true, false),
                new EnglishWord(0, "paper", "ورق", true, false),
                new EnglishWord(0, "cut", "يقطع", false, true),
                new EnglishWord(0, "stick", "عصا", true, false),
                new EnglishWord(0, "partner", "شريك", true, false),
                new EnglishWord(0, "sandwich", "ساندويتش", true, false),
                new EnglishWord(0, "front of", "أمام", false, false),
                new EnglishWord(0, "star", "نجمة", true, false),
                new EnglishWord(0, "stars", "نجوم", true, false),
                new EnglishWord(0, "describe", "يصف", false, true),
                new EnglishWord(0, "effort", "مجهود", true, false),
                new EnglishWord(0, "feelings", "مشاعر", true, false),
                new EnglishWord(0, "feeling", "شعور", true, false),
                new EnglishWord(0, "unkind", "غير لطيف", true, false),
                new EnglishWord(
                  0,
                  "capital letters",
                  "أحرف كبيرة",
                  true,
                  false
                ),
              ]
            ),
            new Unit(
              0,
              "What's the matter",
              [],
              [
                new EnglishWord(
                  0,
                  "What's the matter?",
                  "ما هو الأمر؟",
                  false,
                  false
                ),
                new EnglishWord(0, "picture", "صورة", true, false),
                new EnglishWord(0, "OK", "موافق", false, false),
                new EnglishWord(0, "Dad", "أب", false, false),
                new EnglishWord(0, "Are you OK?", "هل أنت بخير؟", false, false),
                new EnglishWord(0, "sick", "مريض", true, false),
                new EnglishWord(0, "I feel sick", "أشعر بالمرض", false, false),
                new EnglishWord(0, "headache", "صداع الراس", false, false),
                new EnglishWord(
                  0,
                  "I have a headache",
                  "عندى صداع",
                  false,
                  false
                ),
                new EnglishWord(0, "please", "من فضلك", false, false),
                new EnglishWord(0, "Yes", "نعم", false, false),
                new EnglishWord(0, "No", "لا", false, false),
                new EnglishWord(
                  0,
                  "glass of water",
                  "كاس من الماء",
                  false,
                  false
                ),
                new EnglishWord(0, "medicine", "دواء", true, false),
                new EnglishWord(0, "sure", "بالتأكيد", false, false),
                new EnglishWord(
                  0,
                  "I have a cold",
                  "لدي رشح / برد",
                  false,
                  false
                ),
                new EnglishWord(0, "I have a fever", "لدى حمى", false, false),
                new EnglishWord(0, "I have a cough", "لدي سعال", false, false),
                new EnglishWord(0, "cold", "برد", true, false),
                new EnglishWord(0, "fever", "حمى", true, false),
                new EnglishWord(0, "cough", "سعال", true, false),
                new EnglishWord(0, "put", "يضع", false, true),
                new EnglishWord(0, "order", "يطلب / طلب", true, true),
                new EnglishWord(
                  0,
                  "I don't feel well",
                  "لا أشعر أنني بحالة جيدة",
                  false,
                  false
                ),
                new EnglishWord(0, "well", "حسنا / جيد", false, false),
                new EnglishWord(0, "body", "جسم", true, false),
                new EnglishWord(0, "parts", "أجزاء / قطع", true, false),
                new EnglishWord(0, "part", "جزء / قطعة", true, false),
                new EnglishWord(0, "foot", "قدم", true, false),
                new EnglishWord(0, "arm", "ذراع", true, false),
                new EnglishWord(0, "leg", "رجل", true, false),
                new EnglishWord(0, "mouth", "فم", true, false),
                new EnglishWord(0, "nose", "أنف", true, false),
                new EnglishWord(0, "eye", "عين", true, false),
                new EnglishWord(0, "hand", "كف", true, false),
                new EnglishWord(0, "feet", "قدم", true, false),
                new EnglishWord(0, "heart", "قلب", true, false),
                new EnglishWord(0, "blood", "دم", true, false),
                new EnglishWord(0, "pump", "مضخة", true, false),
                new EnglishWord(
                  0,
                  "This is my heart",
                  "هذا قلبي",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "This is my skin. It protects my body",
                  "هذا جلدي. إنه يحمي جسمي",
                  false,
                  false
                ),
                new EnglishWord(0, "protect", "يحمي", false, true),
                new EnglishWord(0, "skin", "جلد", true, false),
                new EnglishWord(0, "bone", "عظام", true, false),
                new EnglishWord(0, "help", "يساعد / مساعدة", true, true),
                new EnglishWord(0, "move", "يحرك", false, true),
                new EnglishWord(0, "stomach", "معدة", true, false),
                new EnglishWord(0, "digest", "يهضم", false, true),
                new EnglishWord(0, "food", "غذاء / طعام", true, false),
                new EnglishWord(
                  0,
                  "This is my stomack. It digests food.",
                  "هذه هى معدتي. انها تهضم الطعام.",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "This is my bone. It help me move",
                  "هذه عظامي. انها تساعدني على الحركة",
                  false,
                  false
                ),
                new EnglishWord(0, "stay", "يبقى", false, true),
                new EnglishWord(0, "home", "منزل / بيت", true, false),
                new EnglishWord(0, "at", "في", false, false),
                new EnglishWord(
                  0,
                  "stay at home",
                  "ابقى فى المنزل",
                  false,
                  false
                ),
                new EnglishWord(0, "friend", "صديق", true, false),
                new EnglishWord(0, "friends", "أصدقاء", true, false),
                new EnglishWord(0, "play", "يلعب", false, true),
                new EnglishWord(0, "with", "مع", false, false),
                new EnglishWord(0, "go", "يذهب", false, true),
                new EnglishWord(0, "to", "إلى", false, false),
                new EnglishWord(0, "doctor", "طبيب", true, false),
                new EnglishWord(
                  0,
                  "go to the doctor",
                  "اذهب الى الطبيب",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "play with your friends",
                  "العب مع أصدقائك",
                  false,
                  false
                ),
                new EnglishWord(0, "loud", "بصوت عال", false, false),
                new EnglishWord(0, "music", "موسيقى", true, false),
                new EnglishWord(0, "loud music", "موسيقى صاخبة", true, false),
                new EnglishWord(0, "try", "يحاول", false, true),
                new EnglishWord(0, "sleep", "ينام", false, true),
                new EnglishWord(
                  0,
                  "try to sleep",
                  "حاول أن تنام",
                  false,
                  false
                ),
                new EnglishWord(0, "hot", "حار / ساخن", true, false),
                new EnglishWord(0, "shower", "دش", true, false),
                new EnglishWord(0, "hurt", "يجرح", false, true),
                new EnglishWord(0, "low", "قليل / منخفض", true, false),
                new EnglishWord(0, "cupboard", "دولاب / خزانة", true, false),
                new EnglishWord(0, "bag", "حقيبة", true, false),
                new EnglishWord(0, "drink", "يشرب", false, true),
                new EnglishWord(0, "without", "بدون", false, false),
                new EnglishWord(0, "adult", "شخص بالغ", true, false),
                new EnglishWord(0, "high", "مرتفع", true, false),
                new EnglishWord(0, "shelf", "رف", true, false),
                new EnglishWord(0, "dangerous", "خطير", true, false),
                new EnglishWord(0, "safe", "آمن", true, false),
                new EnglishWord(0, "ill", "مريض", true, false),
                new EnglishWord(
                  0,
                  "When we are ill, we go to the doctor",
                  "عندما نمرض نذهب إلى الطبيب",
                  false,
                  false
                ),
                new EnglishWord(0, "nurses", "ممرضات", true, false),
                new EnglishWord(0, "kind", "طيب", true, false),
                new EnglishWord(
                  0,
                  "they are very kind",
                  "هم لطفاء جدا",
                  false,
                  false
                ),
                new EnglishWord(0, "health", "صحة", true, false),
                new EnglishWord(0, "important", "هام / مهم", true, false),
                new EnglishWord(0, "skirt", "جيبه / تنورة", true, false),
                new EnglishWord(0, "sky", "سماء", true, false),
                new EnglishWord(0, "girl", "فتاة", true, false),
                new EnglishWord(0, "girls", "فتيات", true, false),
                new EnglishWord(0, "boy", "ولد / صبى", true, false),
                new EnglishWord(0, "garden", "حديقة", true, false),
                new EnglishWord(0, "ball", "كرة", true, false),
                new EnglishWord(
                  0,
                  "I feel happy",
                  "أشعر بالسعادة",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "She speaks English",
                  "هي تتحدث الإنجليزية",
                  false,
                  false
                ),
                new EnglishWord(0, "touch", "يلمس", false, true),
                new EnglishWord(0, "Don't", "لا تفعل", false, false),
                new EnglishWord(0, "face", "وجه", true, false),
                new EnglishWord(
                  0,
                  "Don't touch your face",
                  "لا تلمس وجهك",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Cover your mouth and nose",
                  "غطي فمك وأنفك",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "eat healthy food",
                  "تناول طعام صحي",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "exercise",
                  "تدريب - ممارسة الرياضه",
                  false,
                  false
                ),
                new EnglishWord(0, "wash", "يغسل", false, true),
                new EnglishWord(0, "hands", "يدين", true, false),
                new EnglishWord(0, "soap", "صابون", true, false),
                new EnglishWord(
                  0,
                  "wash your hands with soap",
                  "اغسل يديك بالصابون",
                  false,
                  false
                ),
                new EnglishWord(0, "smile", "يبتسم / ابتسامة", false, true),
                new EnglishWord(
                  0,
                  "smile and be happy",
                  "ابتسم وكن سعيدا",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "brushing",
                  "تنظيف الأسنان بالفرشاة",
                  false,
                  false
                ),
                new EnglishWord(0, "teeth", "أسنان", true, false),
                new EnglishWord(
                  0,
                  "brushing teeth",
                  "تنظيف الاسنان",
                  false,
                  false
                ),
                new EnglishWord(0, "washing hands", "غسل اليدين", false, false),
                new EnglishWord(
                  0,
                  "Do you like your job?",
                  "هل تحب عملك؟",
                  false,
                  false
                ),
                new EnglishWord(0, "like", "يحب / مثل / شبه", true, true),
                new EnglishWord(0, "job", "مهنة / وظيفة", true, false),
                new EnglishWord(
                  0,
                  "What do you do?",
                  "ماذا تفعل؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "What's your name?",
                  "ما اسمك؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Where do you work?",
                  "أين تعمل؟",
                  false,
                  false
                ),
                new EnglishWord(0, "work", "يعمل / شغل / عمل", true, true),
                new EnglishWord(
                  0,
                  "I work in a hospital",
                  "انا اعمل في مشفى",
                  false,
                  false
                ),
                new EnglishWord(0, "hospital", "مستشفى", true, false),
                new EnglishWord(0, "nurse", "ممرضة", true, false),
                new EnglishWord(0, "child", "طفل", true, false),
                new EnglishWord(0, "children", "أطفال", true, false),
                new EnglishWord(0, "love", "يحب", false, true),
                new EnglishWord(0, "healthy", "صحي", true, false),
                new EnglishWord(0, "bed", "سرير", true, false),
                new EnglishWord(0, "beds", "أسرة ( جمع سرير )", true, false),
                new EnglishWord(0, "room", "غرفة / حجرة", true, false),
                new EnglishWord(0, "wake up", "يستيقظ", false, true),
                new EnglishWord(0, "eat", "يأكل", false, true),
                new EnglishWord(0, "breakfast", "وجبة افطار", true, false),
                new EnglishWord(0, "study", "يدرس / دراسة", false, true),
                new EnglishWord(0, "too", "جدا / أيضا", false, false),
                new EnglishWord(0, "afternoon", "بعد الظهر", false, false),
                new EnglishWord(0, "tomorrow", "غدا", false, false),
                new EnglishWord(
                  0,
                  "I can go home tomorrow",
                  "يمكنني العودة إلى المنزل غدا",
                  false,
                  false
                ),
                new EnglishWord(0, "I'm happy", "أنا سعيد", false, false),
                new EnglishWord(0, "scissors", "مقص", true, false),
                new EnglishWord(0, "glue", "صمغ", true, false),
                new EnglishWord(0, "poster paper", "ورقة ملصق", true, false),
                new EnglishWord(0, "colored pens", "أقلام ملونة", true, false),
                new EnglishWord(
                  0,
                  "colored pencils",
                  "أقلام رصاص ملونة",
                  true,
                  false
                ),
                new EnglishWord(0, "pen", "قلم", true, false),
                new EnglishWord(0, "pens", "أقلام", true, false),
                new EnglishWord(0, "pencil", "قلم رصاص", true, false),
                new EnglishWord(0, "pencils", "اقلام رصاص", true, false),
                new EnglishWord(0, "poster", "ملصق", true, false),
                new EnglishWord(0, "pictures", "صور", true, false),
                new EnglishWord(0, "cut", "يقطع", false, true),
                new EnglishWord(0, "idea", "فكرة", true, false),
                new EnglishWord(0, "ideas", "أفكار", true, false),
                new EnglishWord(0, "keep", "يحتفظ", false, true),
                new EnglishWord(0, "cat", "قطة", true, false),
                new EnglishWord(
                  0,
                  "The cat is on the bed",
                  "القطة على السرير",
                  false,
                  false
                ),
              ]
            ),
            new Unit(
              0,
              "On the weekend",
              [],
              [
                new EnglishWord(
                  0,
                  "weekend",
                  "عطلة نهاية الاسبوع",
                  false,
                  false
                ),
                new EnglishWord(0, "draw", "يرسم", false, true),
                new EnglishWord(
                  0,
                  "What are you drawing?",
                  "ماذا ترسم؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "I'm drawing a cat",
                  "أنا أرسم قطة",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "I love cats",
                  "انا احب القطط",
                  false,
                  false
                ),
                new EnglishWord(0, "cats", "قطط", true, false),
                new EnglishWord(0, "cat", "قطة", true, false),
                new EnglishWord(0, "listen to", "يستمع إلى", false, true),
                new EnglishWord(
                  0,
                  "It's very good",
                  "انها جيدة جدا",
                  false,
                  false
                ),
                new EnglishWord(0, "good", "جيد", true, false),
                new EnglishWord(0, "very good", "جيد جدا", true, false),
                new EnglishWord(
                  0,
                  "I like drawing",
                  "أنا أحب التجفيف",
                  false,
                  false
                ),
                new EnglishWord(0, "collect", "يجمع", false, true),
                new EnglishWord(0, "magnets", "مغناطيس", true, false),
                new EnglishWord(
                  0,
                  "Do you like collecting magnets?",
                  "هل تحب جمع المغناطيس؟",
                  false,
                  false
                ),
                new EnglishWord(0, "Yes, I do", "نعم أفعل", false, false),
                new EnglishWord(
                  0,
                  "playing sports",
                  "ممارسة الرياضة",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "listening to music",
                  "الاستماع إلى الأغاني",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "collecting magnets",
                  "جمع المغناطيس",
                  false,
                  false
                ),
                new EnglishWord(0, "drawing pictures", "رسم صور", false, false),
                new EnglishWord(
                  0,
                  "taking photos",
                  "التقاط الصور",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "singing a song",
                  "يغني أغنية",
                  false,
                  false
                ),
                new EnglishWord(0, "song", "أغنية", true, false),
                new EnglishWord(0, "picture", "صورة", true, false),
                new EnglishWord(0, "pictures", "صور", true, false),
                new EnglishWord(0, "but", "لكن", false, false),
                new EnglishWord(0, "and", "و", false, false),
                new EnglishWord(0, "light yellow", "أصفر فاتح", true, false),
                new EnglishWord(0, "dark blue", "أزرق غامق", true, false),
                new EnglishWord(0, "pink", "زهري", true, false),
                new EnglishWord(0, "orange", "برتقالي", true, false),
                new EnglishWord(0, "light gray", "رمادي فاتح", true, false),
                new EnglishWord(0, "red", "أحمر", true, false),
                new EnglishWord(0, "black", "أسود", true, false),
                new EnglishWord(0, "light green", "اخضر فاتح", true, false),
                new EnglishWord(0, "spider", "عنكبوت", true, false),
                new EnglishWord(0, "football", "كرة القدم", true, false),
                new EnglishWord(0, "tennis", "تنس", true, false),
                new EnglishWord(0, "clock", "ساعة", true, false),
                new EnglishWord(0, "Saturday", "السبت", false, false),
                new EnglishWord(0, "Sunday", "الأحد", false, false),
                new EnglishWord(0, "Monday", "الاثنين", false, false),
                new EnglishWord(0, "Tuesday", "الثلاثاء", false, false),
                new EnglishWord(0, "Wednesday", "الأربعاء", false, false),
                new EnglishWord(0, "Thursday", "الخميس", false, false),
                new EnglishWord(0, "Friday", "الجمعة", false, false),
                new EnglishWord(
                  0,
                  "What time is it?",
                  "أي ساعة؟",
                  false,
                  false
                ),
                new EnglishWord(0, "half", "نصف", true, false),
                new EnglishWord(0, "quarter", "ربع", true, false),
                new EnglishWord(
                  0,
                  "It's half past two",
                  "انها الثانية والنصف",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "It's quarter past nine",
                  "إنها التاسعة والربع",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "It's quarter to five",
                  "انها الخامسة الا ربع",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "It's two thirty",
                  "انها الثانية  وثلاثين",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "It's three fifteen",
                  "إنها الثالثة و خمسة عشر",
                  false,
                  false
                ),
                new EnglishWord(0, "ten", "عشرة", false, false),
                new EnglishWord(0, "twenty", "عشرين", false, false),
                new EnglishWord(0, "thirty", "ثلاثين", false, false),
                new EnglishWord(0, "forty", "أربعين", false, false),
                new EnglishWord(0, "fifty", "خمسين", false, false),
                new EnglishWord(0, "sixty", "ستين", false, false),
                new EnglishWord(0, "seventy", "سبعين", false, false),
                new EnglishWord(0, "eighty", "ثمانين", false, false),
                new EnglishWord(0, "ninety", "تسعين", false, false),
                new EnglishWord(0, "bottle", "زجاجة", true, false),
                new EnglishWord(0, "string", "سلسلة", true, false),
                new EnglishWord(0, "paper clip", "مشبك ورق", true, false),
                new EnglishWord(0, "nail", "مسمار", true, false),
                new EnglishWord(0, "pencil", "قلم رصاص", true, false),
                new EnglishWord(0, "coin", "عملة", true, false),
                new EnglishWord(0, "attract", "يجذب", false, true),
                new EnglishWord(
                  0,
                  "the same poles repel",
                  "القطبان المتشابهان يتنافران (يتباعدان)",
                  false,
                  false
                ),
                new EnglishWord(0, "pole", "عمود", true, false),
                new EnglishWord(0, "poles", "أعمدة", true, false),
                new EnglishWord(0, "push away", "ادفع", false, true),
                new EnglishWord(0, "end", "نهاية", true, false),
                new EnglishWord(0, "center", "وسط / مركز", true, false),
                new EnglishWord(0, "magnet", "مغناطيس", true, false),
                new EnglishWord(
                  0,
                  "A magnet has two poles",
                  "مغناطيس له قطبان",
                  false,
                  false
                ),
                new EnglishWord(0, "north pole", "القطب الشمالي", false, false),
                new EnglishWord(0, "south pole", "القطب الجنوبي", false, false),
                new EnglishWord(0, "north", "شمال", true, false),
                new EnglishWord(0, "south", "جنوب", true, false),
                new EnglishWord(0, "together", "معا / سويا", false, false),
                new EnglishWord(0, "pull", "يحذب", false, true),
                new EnglishWord(0, "push", "يدفع", false, true),
                new EnglishWord(0, "repel", "يصد / يطرد / ينفر", false, true),
                new EnglishWord(0, "sing", "يغني", false, true),
                new EnglishWord(0, "fishing", "صيد السمك", true, false),
                new EnglishWord(0, "space", "فراغ", true, false),
                new EnglishWord(0, "angry", "غاضب", true, false),
                new EnglishWord(0, "egyptian", "مصري", true, false),
                new EnglishWord(0, "learn", "يتعلم", false, true),
                new EnglishWord(0, "school", "مدرسة", true, false),
                new EnglishWord(
                  0,
                  "I go to school",
                  "أنا أذهب إلى المدرسة",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "teacher",
                  "معلم / مدرس / أستاذ",
                  true,
                  false
                ),
                new EnglishWord(
                  0,
                  "I like my teacher",
                  "أنا أحب أستاذي",
                  false,
                  false
                ),
                new EnglishWord(0, "special", "مميز", true, false),
                new EnglishWord(0, "help", "يساعد / مساعدة", true, true),
                new EnglishWord(0, "can't", "لا يستطيع", false, false),
                new EnglishWord(0, "walk", "يمشي", false, true),
                new EnglishWord(0, "hear", "يسمع", false, true),
                new EnglishWord(0, "see", "يرى", false, true),
                new EnglishWord(
                  0,
                  "we help our friends",
                  "نحن نساعد أصدقائنا",
                  false,
                  false
                ),
                new EnglishWord(0, "special help", "مساعدة خاصة", false, false),
                new EnglishWord(0, "guess", "يخمن", false, true),
                new EnglishWord(0, "less", "أقل", true, false),
                new EnglishWord(0, "more", "أكثر", true, false),
                new EnglishWord(0, "book", "كتاب", true, false),
                new EnglishWord(0, "for you", "لك / من أجلك", false, false),
                new EnglishWord(
                  0,
                  "I can get this book for you",
                  "يمكنني الحصول على هذا الكتاب لك",
                  false,
                  false
                ),
                new EnglishWord(0, "can", "يستطيع", false, true),
                new EnglishWord(0, "again", "مرة أخرى", false, false),
                new EnglishWord(0, "say", "يقول", false, true),
                new EnglishWord(0, "read", "يقرأ", false, true),
                new EnglishWord(
                  0,
                  "sign",
                  "إشارة / علامة / لافتة",
                  true,
                  false
                ),
                new EnglishWord(0, "language", "لغة", true, false),
                new EnglishWord(0, "sign language", "لغة الإشارة", true, false),
                new EnglishWord(0, "understand", "يفهم", false, true),
                new EnglishWord(0, "hello", "مرحبا", false, false),
                new EnglishWord(0, "try", "يحاول", false, true),
                new EnglishWord(0, "now", "الآن", false, false),
                new EnglishWord(
                  0,
                  "I can't hear",
                  "لا استطيع السماع",
                  false,
                  false
                ),
                new EnglishWord(0, "wooden stick", "عصا خشبية", false, false),
                new EnglishWord(0, "copy", "ينسخ", false, true),
                new EnglishWord(0, "fish", "سمكة", true, false),
                new EnglishWord(0, "arrange", "يرتب", false, true),
                new EnglishWord(0, "bowl", "صحن", true, false),
                new EnglishWord(0, "box", "صندوق", true, false),
                new EnglishWord(0, "take", "يأخذ", false, true),
                new EnglishWord(
                  0,
                  "Would you like some juice?",
                  "هل تريد بعض العصير؟",
                  false,
                  false
                ),
                new EnglishWord(0, "some", "بعض", false, false),
                new EnglishWord(
                  0,
                  "Why are you sad?",
                  "لماذا انت حزين؟",
                  false,
                  false
                ),
                new EnglishWord(0, "sad", "حزين", true, false),
                new EnglishWord(
                  0,
                  "Can I make you a sandwich?",
                  "هل يمكنني صنع ساندويتش لك؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "What do you do in Saterdays?",
                  "ماذا تفعل في أيام السبت؟",
                  false,
                  false
                ),
                new EnglishWord(0, "Yes, Please", "نعم من فضلك", false, false),
                new EnglishWord(
                  0,
                  "I play tennis",
                  "انا العب التنس",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "He's drawing a picture",
                  "إنه يرسم صورة",
                  false,
                  false
                ),
                new EnglishWord(0, "bananas", "موز", true, false),
                new EnglishWord(0, "cake", "كيك", true, false),
                new EnglishWord(
                  0,
                  "I like bananas and cake",
                  "أنا أحب الموز والكيك",
                  false,
                  false
                ),
                new EnglishWord(0, "thirsty", "عطشان / متعطش", true, false),
                new EnglishWord(0, "She is thirsty", "هي متعطشة", false, false),
                new EnglishWord(0, "We are happy", "نحن سعداء", false, false),
                new EnglishWord(0, "Today", "اليوم", false, false),
              ]
            ),
            new Unit(
              0,
              "I love my home",
              [],
              [
                new EnglishWord(0, "world", "عالم", true, false),
                new EnglishWord(0, "around", "حول", false, false),
                new EnglishWord(
                  0,
                  "The world around me",
                  "العالم من حولي",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "I love my home",
                  "أنا أحب بيتي",
                  false,
                  false
                ),
                new EnglishWord(0, "my home", "منزلي", false, false),
                new EnglishWord(0, "math book", "كتاب الرياضيات", false, false),
                new EnglishWord(0, "know", "يعرف", false, true),
                new EnglishWord(0, "Do you know?", "هل تعرف؟", false, false),
                new EnglishWord(0, "Wher it is?", "أين هي؟", false, false),
                new EnglishWord(
                  0,
                  "I can't find it.",
                  "لا يمكنني العثور عليه.",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "I can help you",
                  "أستطيع مساعدتك",
                  false,
                  false
                ),
                new EnglishWord(0, "bookcase", "خزانة الكتب", false, false),
                new EnglishWord(0, "It's here", "إنه هنا", false, false),
                new EnglishWord(0, "next to", "بجوار", false, false),
                new EnglishWord(
                  0,
                  "table",
                  "طاولة / منضدة / جدول",
                  true,
                  false
                ),
                new EnglishWord(0, "lamp", "مصباح", true, false),
                new EnglishWord(0, "chair", "كرسي", true, false),
                new EnglishWord(0, "armchair", "كرسي ذو ذراعين", true, false),
                new EnglishWord(0, "clock", "ساعة", true, false),
                new EnglishWord(0, "bookcase", "خزانة كتب", true, false),
                new EnglishWord(0, "television", "التلفاز", true, false),
                new EnglishWord(0, "living room", "غرفة المعيشة", true, false),
                new EnglishWord(0, "there's", "يوجد (للمفرد)", false, false),
                new EnglishWord(0, "there're", "يوجد (للجمع)", false, false),
                new EnglishWord(
                  0,
                  "What's in the living room?",
                  "ماذا يوجد في غرفة المعيشة؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "There's a lamp on the table",
                  "هناك مصباح على المنضدة",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "armchair next to the cupboard",
                  "كرسي بذراعين بجانب الخزانة",
                  false,
                  false
                ),
                new EnglishWord(0, "behind", "خلف / وراء", false, false),
                new EnglishWord(
                  0,
                  "There's a bookcase behind the table",
                  "هناك خزانة كتب خلف الطاولة",
                  false,
                  false
                ),
                new EnglishWord(0, "between", "بين / ما بين", false, false),
                new EnglishWord(0, "mom", "أمي", false, false),
                new EnglishWord(0, "dad", "أبى", false, false),
                new EnglishWord(0, "feed", "يطعم", false, true),
                new EnglishWord(0, "feed the cat", "يطعم القط", false, false),
                new EnglishWord(0, "vegetables", "خضروات", true, false),
                new EnglishWord(
                  0,
                  "cut the vegetables",
                  "قطع الخضار",
                  false,
                  false
                ),
                new EnglishWord(0, "sweep", "يمسح / يكنس", false, false),
                new EnglishWord(
                  0,
                  "sweep the floor",
                  "أكنس الأرضية",
                  false,
                  false
                ),
                new EnglishWord(0, "make my bed", "أرتب سريري", false, false),
                new EnglishWord(
                  0,
                  "set the table",
                  "أعد المائدة",
                  false,
                  false
                ),
                new EnglishWord(0, "How many", "كم عدد", false, false),
                new EnglishWord(
                  0,
                  "How many books are there?",
                  "كم عدد الكتب هناك؟",
                  false,
                  false
                ),
                new EnglishWord(0, "adding", "عملية الجمع", true, false),
                new EnglishWord(0, "count", "عد / عدد", true, true),
                new EnglishWord(
                  0,
                  "multiplication",
                  "عمليه الضرب",
                  true,
                  false
                ),
                new EnglishWord(0, "the same", "نفس الشيء", false, false),
                new EnglishWord(0, "carrots", "جزر", true, false),
                new EnglishWord(0, "hair", "شعر", true, false),
                new EnglishWord(0, "pair", "زوج", true, false),
                new EnglishWord(0, "ear", "أذن", true, false),
                new EnglishWord(0, "beard", "لحية", true, false),
                new EnglishWord(0, "test", "اختبار", true, false),
                new EnglishWord(0, "Busy bee", "مشغول", false, false),
                new EnglishWord(
                  0,
                  "She likes ice cream",
                  "تحب الآيس كريم",
                  false,
                  false
                ),
                new EnglishWord(0, "ice cream", "آيس كريم", true, false),
                new EnglishWord(0, "chocolate", "شوكولاتة", true, false),
                new EnglishWord(0, "candy", "حلويات", true, false),
                new EnglishWord(0, "basketball", "كرة سلة", true, false),
                new EnglishWord(0, "every day", "كل يوم", false, false),
                new EnglishWord(0, "everywhere", "في كل مكان", false, false),
                new EnglishWord(0, "metal", "معدن", true, false),
                new EnglishWord(
                  0,
                  "We use metal everywhere",
                  "نستخدم المعدن في كل مكان",
                  false,
                  false
                ),
                new EnglishWord(0, "knife", "سكين", true, false),
                new EnglishWord(0, "bikes", "دراجات", true, false),
                new EnglishWord(0, "nails", "أظافر", true, false),
                new EnglishWord(0, "office", "مكتب / مقر / مركز", true, false),
                new EnglishWord(0, "made of", "مصنوع من", false, false),
                new EnglishWord(
                  0,
                  "The bikes are made of metals",
                  "الدراجات مصنوعة من المعادن",
                  false,
                  false
                ),
                new EnglishWord(0, "melt", "ذوبان / إنصهار", true, false),
                new EnglishWord(0, "iron ore", "خام الحديد", true, false),
                new EnglishWord(0, "rock", "صخر", true, false),
                new EnglishWord(0, "natural", "طبيعي", true, false),
                new EnglishWord(0, "resource", "موارد", true, false),
                new EnglishWord(
                  0,
                  "natural resources",
                  "موارد طبيعية",
                  true,
                  false
                ),
                new EnglishWord(0, "different", "مختلف", true, false),
                new EnglishWord(0, "things", "أشياء", true, false),
                new EnglishWord(0, "Egypt", "مصر", false, false),
                new EnglishWord(0, "sand", "رمل", true, false),
                new EnglishWord(
                  0,
                  "sand is a natural resource",
                  "الرمال مورد طبيعي",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "We can make glass from sand",
                  "يمكننا صنع الزجاج من الرمل",
                  false,
                  false
                ),
                new EnglishWord(0, "desert", "صحراء", true, false),
                new EnglishWord(
                  0,
                  "We take the sand from the desert",
                  "نأخذ الرمال من الصحراء",
                  false,
                  false
                ),
                new EnglishWord(0, "chemicals", "مواد كيميائية", true, false),
                new EnglishWord(0, "liquid", "سائل", true, false),
                new EnglishWord(0, "many", "كثير", false, false),
                new EnglishWord(0, "glass", "زجاج", true, false),
                new EnglishWord(0, "river", "نهر", true, false),
                new EnglishWord(0, "rivers", "أنهار", true, false),
                new EnglishWord(0, "car", "سيارة", true, false),
                new EnglishWord(0, "cars", "سيارات", true, false),
                new EnglishWord(0, "solid", "صلب", true, false),
                new EnglishWord(0, "gas", "غاز", true, false),
                new EnglishWord(0, "water", "ماء", true, false),
                new EnglishWord(0, "another", "آخر", false, false),
                new EnglishWord(0, "farmer", "مزارع", true, false),
                new EnglishWord(0, "farmers", "مزارعين", true, false),
                new EnglishWord(0, "plants", "نباتات", true, false),
                new EnglishWord(0, "the Nile", "نهر النيل", false, false),
                new EnglishWord(0, "eat", "يأكل", false, true),
                new EnglishWord(0, "then", "ثم", false, false),
                new EnglishWord(0, "buy", "يشترى", false, true),
                new EnglishWord(0, "market", "سوق", true, false),
                new EnglishWord(0, "grow", "ينمو", false, true),
                new EnglishWord(0, "bug", "حشرة", true, false),
                new EnglishWord(0, "game", "لعبه", true, false),
                new EnglishWord(0, "dice", "حجر النرد", true, false),
                new EnglishWord(0, "Grandpa", "الجد", false, false),
                new EnglishWord(0, "year", "سنة / عام", true, false),
                new EnglishWord(0, "years", "سنين / أعوام", true, false),
                new EnglishWord(0, "gray", "رمادي", true, false),
                new EnglishWord(0, "wear", "يرتدي / يلبس", false, true),
                new EnglishWord(
                  0,
                  "Grandpa is seventy years old",
                  "الجد يبلغ من العمر سبعين عامًا",
                  false,
                  false
                ),
                new EnglishWord(0, "division", "عملية القسمة", true, false),
              ]
            ),
            new Unit(
              0,
              "At the zoo",
              [],
              [
                new EnglishWord(0, "zoo", "حديقة حيوان", true, false),
                new EnglishWord(0, "animal", "حيوان", true, false),
                new EnglishWord(0, "animals", "حيوانات", true, false),
                new EnglishWord(0, "here", "هنا", false, false),
                new EnglishWord(0, "so many", "كثير جدا", false, false),
                new EnglishWord(
                  0,
                  "There are so many animals here",
                  "يوجد الكثير من الحيوانات هنا",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "I love the zoo",
                  "أنا أحب حديقة الحيوانات",
                  false,
                  false
                ),
                new EnglishWord(0, "want", "يريد", false, true),
                new EnglishWord(
                  0,
                  "What do you want to see?",
                  "ماذا تريد ان ترى؟",
                  false,
                  false
                ),
                new EnglishWord(0, "penguins", "طيور البطريق", true, false),
                new EnglishWord(0, "watch", "يشاهد", false, true),
                new EnglishWord(0, "elephant", "فيل", true, false),
                new EnglishWord(0, "elephants", "فيلة / أفيال", true, false),
                new EnglishWord(0, "idea", "فكرة", true, false),
                new EnglishWord(0, "good", "جيد", true, false),
                new EnglishWord(0, "good idea", "فكره جيده", false, false),
                new EnglishWord(
                  0,
                  "How about going to the zoo?",
                  "ماذا عن الذهاب الى حديقة الحيوان؟",
                  false,
                  false
                ),
                new EnglishWord(0, "hippo", "فرس النهر", true, false),
                new EnglishWord(0, "panda", "باندا", true, false),
                new EnglishWord(0, "lion", "أسد", true, false),
                new EnglishWord(0, "giraffe", "زرافة", true, false),
                new EnglishWord(0, "penguin", "بطريق", true, false),
                new EnglishWord(0, "favorite", "مفضل", true, false),
                new EnglishWord(
                  0,
                  "What is your favorite zoo animal?",
                  "ما هو الحيوان المفضل لديك فى حديقة الحيوان؟",
                  false,
                  false
                ),
                new EnglishWord(0, "safe", "آمن", true, false),
                new EnglishWord(0, "hippos", "أفراس النهر", true, false),
                new EnglishWord(0, "map", "خريطة", true, false),
                new EnglishWord(
                  0,
                  "Where are the lions?",
                  "أين الأسود؟",
                  false,
                  false
                ),
                new EnglishWord(0, "go straight", "انطلق للأمام", false, true),
                new EnglishWord(0, "turn right", "انعطف يمينا", false, true),
                new EnglishWord(0, "turn left", "انعطف لليسار", false, true),
                new EnglishWord(0, "pandas", "حيوانات الباندا", true, false),
                new EnglishWord(0, "habitat", "موطن", true, false),
                new EnglishWord(0, "natural", "طبيعي", true, false),
                new EnglishWord(0, "live", "يعيش", false, true),
                new EnglishWord(0, "forest", "غابة", true, false),
                new EnglishWord(
                  0,
                  "bamboo forest",
                  "غابة الخيزران",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Where does an elephant live?",
                  "أين يعيش الفيل؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "grasslands",
                  "مراعي / أراضي عشبية",
                  false,
                  false
                ),
                new EnglishWord(0, "lake", "بحيرة", true, false),
                new EnglishWord(0, "sea", "بحر", true, false),
                new EnglishWord(
                  0,
                  "It lives in grasslands",
                  "انها تعيش في المراعي",
                  false,
                  false
                ),
                new EnglishWord(0, "little", "قليل", true, false),
                new EnglishWord(0, "strong", "قوي", true, false),
                new EnglishWord(
                  0,
                  "The animal is very strong",
                  "الحيوان قوي جدا",
                  false,
                  false
                ),
                new EnglishWord(0, "neck", "رقبه", true, false),
                new EnglishWord(
                  0,
                  "The animal has a long neck",
                  "الحيوان له رقبة طويلة",
                  false,
                  false
                ),
                new EnglishWord(0, "fraction", "رقم كسر", true, false),
                new EnglishWord(0, "fractions", "كسور", true, false),
                new EnglishWord(0, "part of", "جزء من", false, false),
                new EnglishWord(0, "half", "نصف ½", true, false),
                new EnglishWord(0, "circle", "دائرة / ضع دائرة", true, true),
                new EnglishWord(0, "the whole", "الكل", false, false),
                new EnglishWord(0, "one-fourth", "ربع ¼", false, false),
                new EnglishWord(0, "one-eighth", "ثمن ⅛", false, false),
                new EnglishWord(0, "fourth", "ربع ¼   /  رابع", false, false),
                new EnglishWord(0, "fifth", "خمس ⅕    / خامس", false, false),
                new EnglishWord(0, "third", "ثلث ⅓    / ثالث", false, false),
                new EnglishWord(0, "the best", "الأفضل", false, false),
                new EnglishWord(0, "student", "طالب", true, false),
                new EnglishWord(0, "students", "طلاب", true, false),
                new EnglishWord(0, "classmates", "زملاء الصف", true, false),
                new EnglishWord(
                  0,
                  "bar chart",
                  "شريط الرسم البياني",
                  true,
                  false
                ),
                new EnglishWord(0, "planting", "يزرع / زراعة", true, true),
                new EnglishWord(0, "recycling", "إعادة التدوير", true, false),
                new EnglishWord(
                  0,
                  "sorting trash",
                  "فرز القمامة",
                  false,
                  false
                ),
                new EnglishWord(0, "trash", "قمامة", true, false),
                new EnglishWord(
                  0,
                  "polluting the river",
                  "تلويث النهر",
                  false,
                  false
                ),
                new EnglishWord(0, "river", "نهر", true, false),
                new EnglishWord(0, "polluting", "تلويث", false, false),
                new EnglishWord(0, "city", "مدينة", true, false),
                new EnglishWord(0, "cities", "مدن", true, false),
                new EnglishWord(0, "riding", "يركب / ركوب", true, true),
                new EnglishWord(0, "bike", "دراجة هوائية", true, false),
                new EnglishWord(
                  0,
                  "riding a bike",
                  "ركوب الدراجة",
                  true,
                  false
                ),
                new EnglishWord(0, "reusing", "إعادة الاستخدام", false, false),
                new EnglishWord(
                  0,
                  "going by car",
                  "الذهاب بالسيارة",
                  false,
                  false
                ),
                new EnglishWord(0, "plastic", "بلاستيك", true, false),
                new EnglishWord(0, "glass", "زجاج", true, false),
                new EnglishWord(0, "paper", "ورق", true, false),
                new EnglishWord(0, "sort", "يرتب / يفرز", false, true),
                new EnglishWord(0, "plant", "زرع", true, false),
                new EnglishWord(0, "reuse", "يعيد استخدام", false, true),
                new EnglishWord(0, "recycle", "يعيد تصنيع", false, true),
                new EnglishWord(0, "pollute", "يلوث", false, true),
                new EnglishWord(0, "bird", "عصفور", true, false),
                new EnglishWord(0, "birds", "طيور", true, false),
                new EnglishWord(0, "food", "غذاء", true, false),
                new EnglishWord(0, "balcony", "شرفة", true, false),
                new EnglishWord(0, "put", "يضع", false, true),
                new EnglishWord(0, "don't put", "لا تضع", false, false),
                new EnglishWord(0, "clean", "ينظف", false, true),
                new EnglishWord(0, "plant flowers", "يزرع زهور", false, false),
                new EnglishWord(0, "flower", "زهرة", true, false),
                new EnglishWord(0, "flowers", "زهور", true, false),
                new EnglishWord(0, "photo", "صورة فوتوغرافية", true, false),
                new EnglishWord(0, "white", "أبيض", true, false),
                new EnglishWord(0, "elephant", "فيل", true, false),
                new EnglishWord(0, "whale", "حوت", true, false),
                new EnglishWord(0, "meat", "لحم", true, false),
                new EnglishWord(
                  0,
                  "lion eats meat",
                  "الأسد يأكل اللحوم",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "animals template",
                  "قالب الحيوانات",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "black marker pen",
                  "قلم ماركر أسود",
                  false,
                  false
                ),
                new EnglishWord(0, "glue", "صمغ", true, false),
                new EnglishWord(0, "beautiful", "جميلة", true, false),
                new EnglishWord(0, "cow", "بقرة", true, false),
                new EnglishWord(0, "duck", "بطة", true, false),
                new EnglishWord(0, "goat", "ماعز", true, false),
                new EnglishWord(0, "horse", "حصان", true, false),
                new EnglishWord(0, "sheep", "خروف", true, false),
                new EnglishWord(0, "farm", "مزرعة", true, false),
                new EnglishWord(0, "chicken", "دجاج", true, false),
                new EnglishWord(0, "place", "مكان", true, false),
                new EnglishWord(0, "places", "أماكن", true, false),
                new EnglishWord(0, "different", "مختلف", true, false),
              ]
            ),
            new Unit(
              0,
              "Let's go to the circus",
              [],
              [
                new EnglishWord(0, "circus", "سيرك", true, false),
                new EnglishWord(0, "tent", "خيمة", true, false),
                new EnglishWord(0, "clown", "مهرج", true, false),
                new EnglishWord(0, "ringmaster", "مدير الحلبة", false, false),
                new EnglishWord(0, "acrobat", "بهلوان", false, false),
                new EnglishWord(0, "thin", "نحيف", false, false),
                new EnglishWord(0, "short", "قصيرة", false, false),
                new EnglishWord(0, "fat", "سمين", false, false),
                new EnglishWord(0, "dog trainer", "مدرب الكلاب", false, false),
                new EnglishWord(0, "trainer", "مدرب", false, false),
                new EnglishWord(0, "dog", "كلب", false, false),
                new EnglishWord(
                  0,
                  "trapeze artist",
                  "أرجوحة الفنان",
                  false,
                  false
                ),
                new EnglishWord(0, "juggler", "المحتال", false, false),
                new EnglishWord(0, "my friend", "صديقى", false, false),
                new EnglishWord(0, "look like", "يبدو مثل", false, false),
                new EnglishWord(0, "side", "جانب", true, false),
                new EnglishWord(0, "sides", "جوانب", true, false),
                new EnglishWord(0, "square", "مربع", true, false),
                new EnglishWord(0, "rectangle", "مستطيل", true, false),
                new EnglishWord(0, "rhombus", "معين", true, false),
                new EnglishWord(0, "corner", "ركن", true, false),
                new EnglishWord(0, "corners", "زوايا", true, false),
                new EnglishWord(0, "angle", "زاوية", true, false),
                new EnglishWord(0, "degrees", "درجات", true, false),
                new EnglishWord(
                  0,
                  "quadrilaterals",
                  "رباعي الأضلاع",
                  false,
                  false
                ),
                new EnglishWord(0, "american", "أمريكي", true, false),
                new EnglishWord(0, "partner", "شريك", true, false),
                new EnglishWord(0, "classroom", "قاعة الدراسة", true, false),
                new EnglishWord(0, "find", "يجد", false, true),
                new EnglishWord(
                  0,
                  "do you like the circus ?",
                  "هل تحب السيرك ؟",
                  false,
                  false
                ),
                new EnglishWord(0, "funny", "مضحك", true, false),
                new EnglishWord(0, "jump", "يقفز", false, true),
                new EnglishWord(0, "move", "ينقل / يحرك", false, true),
                new EnglishWord(0, "body", "جسم", true, false),
                new EnglishWord(0, "everyone", "كل واحد", false, false),
                new EnglishWord(0, "throw", "يرمي", false, true),
                new EnglishWord(0, "rings", "خواتم", true, false),
                new EnglishWord(0, "balls", "كرات", true, false),
                new EnglishWord(0, "fly", "يطير", false, true),
                new EnglishWord(0, "above", "فوق", false, false),
                new EnglishWord(0, "person", "شخص", true, false),
                new EnglishWord(0, "people", "أشخاص", true, false),
                new EnglishWord(0, "mouse", "فأر", true, false),
                new EnglishWord(0, "mouth", "فم", true, false),
                new EnglishWord(0, "pound", "جنيه", true, false),
                new EnglishWord(0, "cow", "بقرة", true, false),
                new EnglishWord(0, "drop", "قطرة", true, false),
                new EnglishWord(0, "drops", "قطرات", true, false),
                new EnglishWord(0, "water", "ماء", true, false),
                new EnglishWord(0, "pound coin", "عملة الجنيه", true, false),
                new EnglishWord(0, "decide", "يقرر", false, true),
                new EnglishWord(0, "dry", "يجفف / جاف", true, true),
                new EnglishWord(0, "experiment", "تجربة", true, false),
                new EnglishWord(0, "answer", "يجيب / جواب", true, true),
                new EnglishWord(
                  0,
                  "do the experiment again",
                  "قم بالتجربة مرة أخرى",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "check your answer",
                  "تحقق من إجابتك",
                  false,
                  false
                ),
                new EnglishWord(0, "finger", "اصبع اليد", true, false),
                new EnglishWord(0, "stop", "توقف", false, true),
                new EnglishWord(0, "number", "عدد", true, false),
                new EnglishWord(
                  0,
                  "number of drops",
                  "عدد القطرات",
                  false,
                  false
                ),
                new EnglishWord(0, "measure", "يقيس", false, true),
                new EnglishWord(
                  0,
                  "measuring length",
                  "قياس طول",
                  false,
                  false
                ),
                new EnglishWord(0, "guess", "خمن", false, true),
                new EnglishWord(0, "ruler", "مسطرة", true, false),
                new EnglishWord(0, "book", "كتاب", true, false),
                new EnglishWord(0, "object", "شيئ", false, false),
                new EnglishWord(0, "wide", "واسع", false, false),
                new EnglishWord(
                  0,
                  "I guess the book is 19 cm wide",
                  "أعتقد أن عرض الكتاب 19 سم",
                  false,
                  false
                ),
                new EnglishWord(0, "shape", "شكل", true, false),
                new EnglishWord(0, "shapes", "أشكال", true, false),
                new EnglishWord(0, "piece of", "قطعة من", false, false),
                new EnglishWord(
                  0,
                  "a big piece of white paper",
                  "قطعة كبيرة من الورق الأبيض",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "He's walking on a rope",
                  "إنه يمشي على حبل",
                  false,
                  false
                ),
                new EnglishWord(0, "rope", "حبل", true, false),
                new EnglishWord(0, "chair", "كرسي", true, false),
                new EnglishWord(0, "fantastic", "رائع", true, false),
                new EnglishWord(0, "field", "حقل", true, false),
                new EnglishWord(0, "sitting on", "يجلس على", false, true),
                new EnglishWord(0, "furniture", "أثاث", true, false),
                new EnglishWord(0, "Africa", "أفريقيا", false, false),
                new EnglishWord(0, "China", "الصين", false, false),
                new EnglishWord(0, "teeth", "أسنان", true, false),
                new EnglishWord(0, "ears", "آذان", true, false),
                new EnglishWord(0, "around", "حول", false, false),
                new EnglishWord(0, "hour", "ساعة", true, false),
                new EnglishWord(0, "hours", "ساعات", true, false),
                new EnglishWord(0, "day", "يوم", true, false),
                new EnglishWord(0, "per day", "في اليوم", false, false),
                new EnglishWord(0, "dream", "حلم", true, false),
                new EnglishWord(0, "adventures", "مغامرات", true, false),
                new EnglishWord(
                  0,
                  "american sign language",
                  "لغة الإشارة الأمريكية",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "He is using  american sign language to talk",
                  "إنه يستخدم لغة الإشارة الأمريكية للتحدث",
                  false,
                  false
                ),
                new EnglishWord(0, "lip-reading", "قراءة الشفاه", false, false),
                new EnglishWord(
                  0,
                  "she can't hear",
                  "هي لا تسمع",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "she is lip-reading",
                  "هي تقرأ الشفاه",
                  false,
                  false
                ),
                new EnglishWord(0, "university", "جامعة", true, false),
                new EnglishWord(
                  0,
                  "my brother studies at university",
                  "أخي يدرس في الجامعة",
                  false,
                  false
                ),
                new EnglishWord(0, "hearing aid", "سماعة الأذن", false, false),
                new EnglishWord(
                  0,
                  "hearing aid helps the child to hear",
                  "تساعد سماعة الأذن الطفل على السمع",
                  false,
                  false
                ),
                new EnglishWord(0, "proud", "فخور", true, false),
                new EnglishWord(0, "because", "لأن", false, false),
                new EnglishWord(0, "parents", "آباء", true, false),
                new EnglishWord(
                  0,
                  "his parents are very proud",
                  "والديه فخورون جدا",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "she can answer all the questions",
                  "يمكنها الإجابة على جميع الأسئلة",
                  false,
                  false
                ),
                new EnglishWord(0, "she is clever", "إنها ذكية", false, false),
                new EnglishWord(0, "clever", "ماهر", true, false),
                new EnglishWord(0, "teaching", "تعليم", true, false),
                new EnglishWord(0, "teacher", "معلم", true, false),
                new EnglishWord(
                  0,
                  "she wants to be a teacher",
                  "هى تريد أن تصبح معلمة",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "she loves teaching",
                  "هي تحب التدريس",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "he can't hear well",
                  "هو لا يسمع جيدا",
                  false,
                  false
                ),
                new EnglishWord(0, "wear", "يرتدي", false, true),
                new EnglishWord(
                  0,
                  "she wears a hearing aid",
                  "إنها ترتدي سماعة أذن",
                  false,
                  false
                ),
                new EnglishWord(0, "sometimes", "أحيانا", false, false),
                new EnglishWord(0, "understand", "يفهم", false, true),
                new EnglishWord(0, "read lips", "يقرأ الشفاه", false, false),
                new EnglishWord(0, "lips", "شفاه / شفه", false, false),
                new EnglishWord(0, "show", "يعرض / يبين", false, true),
                new EnglishWord(0, "now", "الآن", false, false),
                new EnglishWord(0, "playing games", "يلعب ألعاب", false, false),
                new EnglishWord(0, "kind", "طيب القلب", true, false),
                new EnglishWord(0, "learn", "يتعلم", false, true),
                new EnglishWord(
                  0,
                  "I want to be a teacher",
                  "أنا أريد أن أصبح معلما",
                  false,
                  false
                ),
                new EnglishWord(0, "work", "شغل / يعمل", true, true),
                new EnglishWord(0, "work hard", "اعمل بجد", false, false),
                new EnglishWord(0, "deaf", "اطرش / لا يسمع", false, false),
                new EnglishWord(0, "children", "أطفال", true, false),
                new EnglishWord(0, "speak", "يتحدث", false, true),
                new EnglishWord(0, "things", "أشياء", true, false),
                new EnglishWord(
                  0,
                  "she is very happy",
                  "هي سعيدة جدا",
                  false,
                  false
                ),
                new EnglishWord(0, "club", "نادي", true, false),
                new EnglishWord(0, "after", "بعد", false, false),
                new EnglishWord(0, "school", "مدرسة", true, false),
                new EnglishWord(0, "talk", "يتحدث", false, true),
                new EnglishWord(
                  0,
                  "help people learn",
                  "يساعد الناس على التعلم",
                  false,
                  false
                ),
                new EnglishWord(0, "sleep", "نائم", true, false),
                new EnglishWord(
                  0,
                  "television",
                  "تلفاز / تليفزيون",
                  true,
                  false
                ),
                new EnglishWord(
                  0,
                  "he can't hear at all",
                  "هو لا يسمع على الإطلاق",
                  false,
                  false
                ),
                new EnglishWord(0, "tired", "تعبان / مرهق", true, false),
                new EnglishWord(0, "excited", "فرح", true, false),
              ]
            ),
            new Unit(
              0,
              "Where Are You From?",
              [],
              [
                new EnglishWord(
                  0,
                  "Where are you from?",
                  "من أين أنت؟",
                  false,
                  false
                ),
                new EnglishWord(0, "Egypt", "مصر", false, false),
                new EnglishWord(0, "China", "دولة الصين", false, false),
                new EnglishWord(0, "Welcome", "مرحبا", false, false),
                new EnglishWord(0, "Friend", "صديق", false, false),
                new EnglishWord(0, "Happy", "سعيد", false, false),
                new EnglishWord(0, "House", "منزل", false, false),
                new EnglishWord(0, "Flag", "علم", false, false),
                new EnglishWord(0, "France", "فرنسا", false, false),
                new EnglishWord(0, "America", "أمريكا", false, false),
                new EnglishWord(0, "Country", "بلد", false, false),
                new EnglishWord(0, "Egyptian", "مصري", false, false),
                new EnglishWord(0, "Chinese", "صينى", false, false),
                new EnglishWord(0, "French", "فرنسي", false, false),
                new EnglishWord(0, "American", "أمريكي", false, false),
                new EnglishWord(
                  0,
                  "I'm from Egypt",
                  "أنا من مصر",
                  false,
                  false
                ),
                new EnglishWord(0, "I'm Egyptian", "أنا مصري", false, false),
                new EnglishWord(
                  0,
                  "I'm from France",
                  "أنا من فرنسا",
                  false,
                  false
                ),
                new EnglishWord(0, "I'm French", "أنا فرنسي", false, false),
                new EnglishWord(
                  0,
                  "I'm from America",
                  "انا من امريكا",
                  false,
                  false
                ),
                new EnglishWord(0, "I'm American", "انا امريكي", false, false),
                new EnglishWord(
                  0,
                  "I'm from China",
                  "انا من الصين",
                  false,
                  false
                ),
                new EnglishWord(0, "I'm Chinese", "انا صيني", false, false),
                new EnglishWord(0, "Hello", "أهلا", false, false),
                new EnglishWord(
                  0,
                  "Where are you from?",
                  "من أين أنتم؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "We're from China",
                  "نحن من الصين",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Welcome to Egypt",
                  "مرحبا بكم فى مصر",
                  false,
                  false
                ),
                new EnglishWord(0, "Thank you", "شكرا لك", false, false),
                new EnglishWord(
                  0,
                  "I'm happy to be here",
                  "انا سعيد بوجودي هنا",
                  false,
                  false
                ),
                new EnglishWord(0, "Name", "اسم", false, false),
                new EnglishWord(0, "Here", "هنا", false, false),
                new EnglishWord(0, "Children", "أطفال", false, false),
                new EnglishWord(0, "cake", "كيك", false, false),
                new EnglishWord(0, "wear", "يلبس-يرتدي", false, false),
                new EnglishWord(0, "house", "بيت", false, false),
                new EnglishWord(0, "dress", "فستان", false, false),
                new EnglishWord(0, "fortune cookies", "كعك الحظ", false, false),
                new EnglishWord(0, "a cup of tea", "فنجان شاي", false, false),
                new EnglishWord(0, "flower", "زهرة", false, false),
                new EnglishWord(0, "trousers", "بنطلون", false, false),
                new EnglishWord(0, "invite", "يدعو", false, false),
                new EnglishWord(0, "message", "رسالة", false, false),
                new EnglishWord(0, "life", "حياة", false, false),
                new EnglishWord(0, "game", "لعبه", false, false),
                new EnglishWord(0, "found", "وجد", false, false),
                new EnglishWord(0, "delicious", "لذيذ", false, false),
                new EnglishWord(0, "again", "مرة أخرى", false, false),
                new EnglishWord(0, "very good", "جيد جدا", false, false),
                new EnglishWord(0, "message", "رسالة", false, false),
                new EnglishWord(0, "cookie", "كعكه", false, false),
                new EnglishWord(0, "life", "حياة", false, false),
                new EnglishWord(0, "happy", "سعيد", false, false),
                new EnglishWord(0, "says", "يقول", false, false),
                new EnglishWord(0, "drink", "يشرب", false, false),
                new EnglishWord(0, "tea", "شاي", false, false),
                new EnglishWord(0, "eat", "يأكل", false, false),
                new EnglishWord(
                  0,
                  "They live in a house",
                  "انهم يعيشون في منزل",
                  false,
                  false
                ),
                new EnglishWord(0, "ful", "فول", false, false),
                new EnglishWord(0, "bread", "رغيف خبز", false, false),
                new EnglishWord(0, "milk", "حليب", false, false),
                new EnglishWord(0, "muffin", "كعكه اسفنجية", false, false),
                new EnglishWord(0, "flafel", "فلافل - طعمية", false, false),
                new EnglishWord(
                  0,
                  "Hot Choclate",
                  "مشروب شيكولاته ساخنه",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "noodles",
                  "نوع من أنواع الكرونه",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "What do you have for breakfast?",
                  "ماذا تتناول فى وجبة الافطار؟",
                  false,
                  false
                ),
                new EnglishWord(0, "breakfast", "وجبة افطار", false, false),
                new EnglishWord(
                  0,
                  "I drink Hot Chocolate",
                  "أشرب الشوكولاتة الساخنة",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "She eats ful and falafel",
                  "تأكل الفول والفلافل",
                  false,
                  false
                ),
                new EnglishWord(0, "German", "لغة ألمانية", false, false),
                new EnglishWord(0, "writing", "كتابة", false, false),
                new EnglishWord(0, "Math", "رياضيات", false, false),
                new EnglishWord(0, "Music", "موسيقى", false, false),
                new EnglishWord(0, "Science", "علم", false, false),
                new EnglishWord(0, "English", "إنجليزي", false, false),
                new EnglishWord(0, "Arabic", "عربي", false, false),
                new EnglishWord(0, "Geography", "جغرافيا", false, false),
                new EnglishWord(
                  0,
                  "Physical Education",
                  "تربية بدنية (رياضية)",
                  false,
                  false
                ),
                new EnglishWord(0, "Art", "رسم", false, false),
                new EnglishWord(
                  0,
                  "Social Studies",
                  "العلوم الإجتماعية",
                  false,
                  false
                ),
                new EnglishWord(0, "Piano Lesson", "درس بيانو", false, false),
                new EnglishWord(0, "Reading", "قراءة", false, false),
                new EnglishWord(0, "Before", "قبل", false, false),
                new EnglishWord(
                  0,
                  "Musical instrument",
                  "آلة موسيقية",
                  false,
                  false
                ),
                new EnglishWord(0, "instrument", "أداة", false, false),
                new EnglishWord(0, "lunch", "وجبة غداء", false, false),
                new EnglishWord(0, "afternoon", "وقت الظهيرة", false, false),
                new EnglishWord(0, "finish", "ينهي", false, false),
                new EnglishWord(0, "around", "حوالي", false, false),
                new EnglishWord(0, "morning", "صباحا", false, false),
                new EnglishWord(0, "day off", "يوم أجازة", false, false),
                new EnglishWord(0, "homework", "واجب منزلي", false, false),
                new EnglishWord(0, "club", "نادي رياضي", false, false),
                new EnglishWord(0, "volleyball", "كرة طائرة", false, false),
                new EnglishWord(0, "start", "يبدأ", false, false),
                new EnglishWord(
                  0,
                  "I start school at 8 o'clock",
                  "أبدأ المدرسة في الساعة 8 صباحًا",
                  false,
                  false
                ),
                new EnglishWord(0, "o'clock", "الساعة", false, false),
                new EnglishWord(
                  0,
                  "We finish school at around 4",
                  "ننهي المدرسة في حوالي الساعة 4",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "We have school on Saturday",
                  "لدينا مدرسة يوم السبت",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "We don't have school on Friday",
                  "ليس لدينا مدرسة يوم الجمعة",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "We have lunch from 12 o'clock to 1 o'clock",
                  "نتناول الغداء من الساعة 12 ظهرا حتى الساعة 1 ظهرا",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Who plays a musical instrument?",
                  "من الذي يعزف على الآلة الموسيقية؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Who has lunch before the others?",
                  "من تناول الغداء قبل الآخرين؟",
                  false,
                  false
                ),
                new EnglishWord(0, "coffee", "قهوة", false, false),
                new EnglishWord(0, "muffin", "فطيرة", false, false),
                new EnglishWord(0, "police officer", "ضابط شرطة", false, false),
                new EnglishWord(0, "bell", "جرس", false, false),
                new EnglishWord(0, "tall", "طويل", false, false),
                new EnglishWord(0, "dollar", "دولار", false, false),
                new EnglishWord(0, "glass", "زجاج", false, false),
                new EnglishWord(0, "dress", "فستان", false, false),
                new EnglishWord(
                  0,
                  "My new dress is for 50 dollar",
                  "ثوبي الجديد ب 50 دولار",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "My mom likes to eat muffins",
                  "أمي تحب أكل الكعك",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "She's is very happy",
                  "انها سعيدة جدا",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "I live in France",
                  "أنا أعيش في فرنسا",
                  false,
                  false
                ),
                new EnglishWord(0, "live", "يعيش", false, false),
                new EnglishWord(
                  0,
                  "Capital Letters",
                  "أحرف كبيرة",
                  false,
                  false
                ),
                new EnglishWord(0, "pound", "جنيه مصري", false, false),
                new EnglishWord(0, "piastres", "قروش", false, false),
                new EnglishWord(0, "euro", "يورو", false, false),
                new EnglishWord(0, "yen", "ين", false, false),
                new EnglishWord(0, "cent", "سنت", false, false),
                new EnglishWord(0, "yuan", "يوان", false, false),
                new EnglishWord(0, "jiao", "جياو", false, false),
                new EnglishWord(0, "currency", "عملة", false, false),
                new EnglishWord(
                  0,
                  "What's your money?",
                  "ما هي عملتك ؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "In my country, Egypt.",
                  "في بلدي مصر.",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Our money is the pound",
                  "عملتنا هي الجنيه",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "One pound is 100 piastres",
                  "الجنيه الواحد 100 قرش",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "How much is ..?",
                  "كم ثمن... ؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "How much is it?",
                  "كم سعرها؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "It's for 22 euros",
                  "إنها بـــ 22 يورو",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "What did you buy?",
                  "ماذا اشتريت؟",
                  false,
                  false
                ),
                new EnglishWord(0, "I bought", "انا اشتريت", false, false),
                new EnglishWord(0, "buy", "يشترى", false, false),
                new EnglishWord(0, "bought", "اشترى", false, false),
                new EnglishWord(
                  0,
                  "I bought a doll",
                  "أنا اشتريت دميه",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "It was for 50 pounds",
                  "ثمنها 50 جنيها",
                  false,
                  false
                ),
                new EnglishWord(0, "Add", "يضيف", false, false),
                new EnglishWord(0, "subtract", "يطرح", false, false),
                new EnglishWord(0, "money", "مال", false, false),
                new EnglishWord(0, "addition", "إضافة", false, false),
                new EnglishWord(0, "subtraction", "طرح", false, false),
                new EnglishWord(0, "ten", "عشرة", false, false),
                new EnglishWord(0, "twenty", "عشرين", false, false),
                new EnglishWord(0, "talk", "يتحدث", false, false),
                new EnglishWord(0, "about", "حوالي", false, false),
                new EnglishWord(0, "Japan", "اليابان", false, false),
                new EnglishWord(0, "white", "أبيض", false, false),
                new EnglishWord(0, "red", "أحمر", false, false),
                new EnglishWord(0, "circle", "دائرة", false, false),
                new EnglishWord(0, "middle", "وسط", false, false),
                new EnglishWord(0, "map", "خريطة", false, false),
                new EnglishWord(0, "like", "مثل / يحب", false, false),
                new EnglishWord(
                  0,
                  "How much did you spend?",
                  "كم انفقت؟",
                  false,
                  false
                ),
                new EnglishWord(0, "total", "مجموع / إجمالي", false, false),
                new EnglishWord(0, "price", "سعر", false, false),
                new EnglishWord(0, "prices", "أسعار", false, false),
                new EnglishWord(0, "draw", "يرسم", false, false),
                new EnglishWord(0, "item", "عنصر", false, false),
                new EnglishWord(0, "items", "عناصر", false, false),
              ]
            ),
            new Unit(
              0,
              "Seasons of the year",
              [],
              [
                new EnglishWord(0, "season", "موسم", false, false),
                new EnglishWord(0, "seasons", "مواسم", false, false),
                new EnglishWord(0, "year", "عام - سنة", false, false),
                new EnglishWord(0, "the seasons", "فصول السنة", false, false),
                new EnglishWord(0, "summer", "فصل الصيف", false, false),
                new EnglishWord(0, "fall", "فصل الخريف", false, false),
                new EnglishWord(0, "winter", "فصل   الشتاء", false, false),
                new EnglishWord(0, "spring", "فصل الربيع", false, false),
                new EnglishWord(0, "The weather", "حالة الطقس", false, false),
                new EnglishWord(0, "sunny", "مشمس", false, false),
                new EnglishWord(0, "cold", "بارد", false, false),
                new EnglishWord(0, "rainy", "ممطر", false, false),
                new EnglishWord(0, "hot", "حار", false, false),
                new EnglishWord(
                  0,
                  "Dad, What's your favorite month?",
                  "أبي ، ما هو شهرك المفضل؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "I like January best because it's cold",
                  "أنا أحب شهر يناير لأنه بارد",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "I like August best because it's hot",
                  "أنا أحب شهر أغسطس لأنه حار",
                  false,
                  false
                ),
                new EnglishWord(0, "hot", "حار", false, false),
                new EnglishWord(0, "cold", "برد", false, false),
                new EnglishWord(0, "August", "أغسطس", false, false),
                new EnglishWord(0, "too hot", "حار جدا", false, false),
                new EnglishWord(0, "some", "بعض", false, false),
                new EnglishWord(0, "places", "أماكن", false, false),
                new EnglishWord(0, "beautiful", "جميل", false, false),
                new EnglishWord(0, "colored", "ملون", false, false),
                new EnglishWord(0, "leaves", "اوراق اشجار", false, false),
                new EnglishWord(
                  0,
                  "colored leaves",
                  "أوراق ملونة",
                  false,
                  false
                ),
                new EnglishWord(0, "tomorrow", "غدا", false, false),
                new EnglishWord(0, "a lot of", "الكثير من", false, false),
                new EnglishWord(0, "sunshine", "شروق", false, false),
                new EnglishWord(0, "because", "لأن", false, false),
                new EnglishWord(0, "favorite", "مفضل", false, false),
                new EnglishWord(
                  0,
                  "It's cold today",
                  "انها باردة اليوم",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "It's hot today",
                  "الجو حار اليوم",
                  false,
                  false
                ),
                new EnglishWord(0, "past", "ماضي", false, false),
                new EnglishWord(0, "present", "حاضر", false, false),
                new EnglishWord(0, "yesterday", "الأمس", false, false),
                new EnglishWord(0, "today", "اليوم", false, false),
                new EnglishWord(0, "future", "مستقبل", false, false),
                new EnglishWord(0, "will be", "سوف يكون", false, false),
                new EnglishWord(
                  0,
                  "There's a lot of sunshine in Spring",
                  "تسطع الشمس كثيرًا في الربيع",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "It was rainy yesterday",
                  "كانت ممطرة أمس",
                  false,
                  false
                ),
                new EnglishWord(0, "calendar", "التقويم", false, false),
                new EnglishWord(
                  0,
                  "Listen and repeat",
                  "استمع وردد",
                  false,
                  false
                ),
                new EnglishWord(0, "January", "يناير", false, false),
                new EnglishWord(0, "February", "فبراير", false, false),
                new EnglishWord(0, "March", "مارس", false, false),
                new EnglishWord(0, "April", "أبريل", false, false),
                new EnglishWord(0, "May", "شهر مايو", false, false),
                new EnglishWord(0, "June", "يونيه", false, false),
                new EnglishWord(0, "July", "يوليو", false, false),
                new EnglishWord(0, "September", "سبتمبر", false, false),
                new EnglishWord(0, "October", "اكتوبر", false, false),
                new EnglishWord(0, "November", "شهر نوفمبر", false, false),
                new EnglishWord(0, "December", "ديسمبر", false, false),
                new EnglishWord(0, "Party", "حفلة", false, false),
                new EnglishWord(0, "fantastic", "جميل", false, false),
                new EnglishWord(0, "Eid-Alfitr", "عيد الفطر", false, false),
                new EnglishWord(0, "Sham El-Nessim", "شم النسيم", false, false),
                new EnglishWord(0, "special", "خاص", false, false),
                new EnglishWord(
                  0,
                  "Which months are special to you?",
                  "ما هي الأشهر الخاصة بك؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "My Favorite month is January",
                  "شهري المفضل هو يناير",
                  false,
                  false
                ),
                new EnglishWord(0, "grandparents", "الجد والجدة", false, false),
                new EnglishWord(
                  0,
                  "What is your favorite month?",
                  "ما هو الشهر المفضل لديك؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "My Favorite month is May",
                  "الشهر المفضل لدي هو مايو",
                  false,
                  false
                ),
                new EnglishWord(0, "birthday", "عيد الميلاد", false, false),
                new EnglishWord(
                  0,
                  "My birthday is on May",
                  "عيد ميلادي في مايو",
                  false,
                  false
                ),
                new EnglishWord(0, "first", "أول", false, false),
                new EnglishWord(0, "second", "ثاني", false, false),
                new EnglishWord(0, "third", "ثالث", false, false),
                new EnglishWord(0, "fourth", "رابع", false, false),
                new EnglishWord(0, "fifth", "خامس", false, false),
                new EnglishWord(0, "sixth", "سادس", false, false),
                new EnglishWord(0, "seventh", "سابع", false, false),
                new EnglishWord(0, "eighth", "ثامن", false, false),
                new EnglishWord(0, "ninth", "تاسع", false, false),
                new EnglishWord(0, "tenth", "عاشر", false, false),
                new EnglishWord(
                  0,
                  "happy birthday",
                  "عيد مولد سعيد",
                  false,
                  false
                ),
                new EnglishWord(0, "gaps", "ثغرات", false, false),
                new EnglishWord(0, "love", "يحب", false, false),
                new EnglishWord(0, "so", "وبالتالي - لذلك", false, false),
                new EnglishWord(0, "move around", "يتحرك حول", false, false),
                new EnglishWord(0, "cahange", "يتغير", false, false),
                new EnglishWord(0, "equator", "خط الاستواء", false, false),
                new EnglishWord(0, "ground", "أرض", false, false),
                new EnglishWord(0, "Uganda", "دولة أوغندا", false, false),
                new EnglishWord(0, "Africa", "قارة أفريقيا", false, false),
                new EnglishWord(0, "Fall on", "يقع على", false, false),
                new EnglishWord(0, "dry", "جاف", false, false),
                new EnglishWord(0, "wet", "مبلل", false, false),
                new EnglishWord(0, "flood", "فيضان", false, false),
                new EnglishWord(
                  0,
                  "monsoon",
                  "رياح أمطار موسمية",
                  false,
                  false
                ),
                new EnglishWord(0, "different", "مختلف", false, false),
                new EnglishWord(0, "earth", "أرض", false, false),
                new EnglishWord(0, "sun", "الشمس", false, false),
                new EnglishWord(0, "light", "خفيفة", false, false),
                new EnglishWord(0, "temperature", "درجة الحرارة", false, false),
                new EnglishWord(0, "country", "بلد - دولة", false, false),
                new EnglishWord(0, "countries", "بلدان - دول", false, false),
                new EnglishWord(0, "like", "مثل - يحب", false, false),
                new EnglishWord(0, "flowers", "زهور", false, false),
                new EnglishWord(0, "near", "قرب", false, false),
                new EnglishWord(0, "the same", "نفس الشيء", false, false),
                new EnglishWord(0, "weather", "الجو - الطقس", false, false),
                new EnglishWord(0, "plants", "نباتات", false, false),
                new EnglishWord(0, "trees", "أشجار", false, false),
                new EnglishWord(0, "grow", "تنمو", false, false),
                new EnglishWord(0, "change", "يتغير", false, false),
                new EnglishWord(0, "snow", "ثلج", false, false),
                new EnglishWord(0, "family", "أسرة - عائلة", false, false),
                new EnglishWord(
                  0,
                  "Hi, I'm from the US",
                  "مرحبًا ، أنا من الولايات المتحدة",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "It is very cold",
                  "انها باردة جدا",
                  false,
                  false
                ),
                new EnglishWord(0, "It's awesome", "إنه رائع", false, false),
                new EnglishWord(
                  0,
                  "I'm from France",
                  "أنا من فرنسا",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "In the Summer, it's very hot",
                  "في الصيف يكون الجو حارا جدا",
                  false,
                  false
                ),
                new EnglishWord(0, "rain", "مطر", false, false),
                new EnglishWord(0, "wet", "مبتل", false, false),
                new EnglishWord(0, "drink", "يشرب", false, false),
                new EnglishWord(0, "China", "الصين", false, false),
                new EnglishWord(0, "France", "فرنسا", false, false),
                new EnglishWord(0, "US", "نحن", false, false),
                new EnglishWord(0, "street", "شارع", false, false),
                new EnglishWord(0, "streets", "شوارع", false, false),
                new EnglishWord(0, "full of", "مليء", false, false),
                new EnglishWord(
                  0,
                  "The streets are full of water",
                  "الشوارع مليئة بالمياه",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "This is called flood",
                  "وهذا ما يسمى بالفيضان",
                  false,
                  false
                ),
                new EnglishWord(0, "sunny", "مشمس", false, false),
                new EnglishWord(
                  0,
                  "There are four different seasons in Egypt",
                  "هناك أربعة مواسم مختلفة في مصر",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "What is your favorite season?",
                  "ما هو موسمك المفضل؟",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "The Earth moves around the Sun",
                  "الأرض تتحرك حول الشمس",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Condensation",
                  "عملية التكثيف",
                  false,
                  false
                ),
                new EnglishWord(0, "evaporation", "عملية التبخر", false, false),
                new EnglishWord(
                  0,
                  "accumulation",
                  "تراكم(تجمع) الأمطار",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "precipitation of rain",
                  "سقوط الأمطار",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "The water goes into the earth, rivers and the sea",
                  "يذهب الماء إلى الأرض والأنهار والبحر",
                  false,
                  false
                ),
                new EnglishWord(0, "river", "نهر", false, false),
                new EnglishWord(0, "rivers", "أنهار", false, false),
                new EnglishWord(0, "sky", "سماء", false, false),
                new EnglishWord(0, "water vapor", "بخار ماء", false, false),
                new EnglishWord(0, "together", "سويا - معا", false, false),
                new EnglishWord(0, "clouds", "سحاب", false, false),
                new EnglishWord(0, "falls ", "يتساقط", false, false),
                new EnglishWord(0, "become", "يصبح", false, false),
                new EnglishWord(0, "warm", "يدفئ", false, false),
                new EnglishWord(0, "blow", "تهب", false, false),
                new EnglishWord(0, "need", "يحتاج", false, false),
                new EnglishWord(0, "planet", "كوكب", false, false),
                new EnglishWord(0, "wind", "ريح", false, false),
                new EnglishWord(0, "blow", "يضرب", false, false),
                new EnglishWord(
                  0,
                  "Earth is called the 'blue planet'",
                  "يطلق على الأرض اسم 'الكوكب الأزرق'",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "plants and animals need water",
                  "تحتاج النباتات والحيوانات إلى الماء",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "this is the water cycle",
                  "هذه هي دورة الماء",
                  false,
                  false
                ),
                new EnglishWord(0, "cycle", "دورة - حلقة", false, false),
                new EnglishWord(
                  0,
                  "the rain falls from the sky",
                  "المطر يسقط من السماء",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "The sun warms the sea and earth",
                  "تدفئ الشمس البحر والأرض",
                  false,
                  false
                ),
                new EnglishWord(0, "vapor", "بخار", false, false),
                new EnglishWord(0, "spray", "رذاذ", false, false),
                new EnglishWord(0, "strawberry", "فراولة", false, false),
                new EnglishWord(0, "straight", "مستقيم", false, false),
                new EnglishWord(0, "shower", "دش", false, false),
                new EnglishWord(0, "bath", "دش", false, false),
                new EnglishWord(0, "water", "ماء", false, false),
                new EnglishWord(0, "bowl", "سلطانية", false, false),
                new EnglishWord(0, "coffee", "قهوة", false, false),
                new EnglishWord(0, "shampoo", "شامبو", false, false),
                new EnglishWord(0, "faucet", "صنبور - حنفية", false, false),
                new EnglishWord(0, "drip", "ينقط", false, false),
                new EnglishWord(0, "turn off", "يغلق", false, false),
                new EnglishWord(0, "turn on", "يفتح - يشغل", false, false),
                new EnglishWord(0, "brush", "يغسل بالفرشاه", false, false),
                new EnglishWord(
                  0,
                  "Turn off the faucet when brushing your teeth",
                  "أغلق الصنبور عند تنظيف أسنانك بالفرشاة",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Water your plants in the morning or evening",
                  "اسقِ نباتاتك في الصباح أو في المساء",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "wash fruits in a bowl of water",
                  "اغسل الفاكهة في وعاء من الماء",
                  false,
                  false
                ),
                new EnglishWord(0, "vegetables", "خضروات", false, false),
                new EnglishWord(0, "Don't", "لا تفعل", false, false),
                new EnglishWord(
                  0,
                  "Don't use a lot of water",
                  "لا تستخدم الكثير من الماء",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "Don't take long baths",
                  "لا تأخذ حمامات طويلة",
                  false,
                  false
                ),
                new EnglishWord(0, "wash", "يغسل", false, false),
                new EnglishWord(0, "dishes", "أطباق", false, false),
                new EnglishWord(
                  0,
                  "wash fruits and vegetables",
                  "اغسل الفواكه والخضروات",
                  false,
                  false
                ),
                new EnglishWord(0, "take", "يأخذ", false, false),
                new EnglishWord(0, "tea", "شاي", false, false),
                new EnglishWord(0, "fix", "يصلح", false, false),
                new EnglishWord(
                  0,
                  "Fix the faucet if it drips",
                  "أصلح الصنبور إذا كان يقطر",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "it snows in winter",
                  "تتساقط الثلوج في فصل الشتاء",
                  false,
                  false
                ),
                new EnglishWord(0, "beach", "شاطئ بحر", false, false),
                new EnglishWord(
                  0,
                  "The weather is sunny",
                  "الطقس مشمس",
                  false,
                  false
                ),
                new EnglishWord(
                  0,
                  "When is your birthday?",
                  "متى يحين عيد ميلادك؟",
                  false,
                  false
                ),
                new EnglishWord(0, "near to", "بالقرب من", false, false),
              ]
            ),
          ],
          [
            new QuestionCategory(
              QuestionsTypes.ArabicEnglishChoice,
              "اختر الترجمة الصحيحة - عربي انجليزي",
              5
            ),
            new QuestionCategory(
              QuestionsTypes.EnglishArabicChoice,
              "اختر الترجمة الصحيحة - انجليزي عربي",
              5
            ),
            new QuestionCategory(
              QuestionsTypes.EnglishComplete,
              "أكمل الترجمة - انجليزي عربي",
              5
            ),
            new QuestionCategory(
              QuestionsTypes.EnglishListening,
              "استمع واختر الترجمة",
              5
            ),
          ]
        ),
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

  isValid() {
    for (var i = 0; i < this.subjects.length; i++) {
      if (this.subjects[i].isValid()) return true;
    }
    return false;
  }
}

class Subject {
  id = 0;
  name = "";
  units = [];
  questionsTypes = [];
  constructor(_id, _name, _units = [], _questionsTypes = []) {
    this.id = _id;
    this.name = _name;
    this.units = _units;
    this.questionsTypes = _questionsTypes;
  }

  isValid() {
    for (var i = 0; i < this.units.length; i++) {
      if (this.units[i].isValid()) return true;
    }
    return false;
  }
}

class Unit {
  id = 0;
  name = "";
  lessons = [];
  data = [];
  questionsTypes = [];
  constructor(_id, _name, _lessons = [], _data = [], _questionsTypes = []) {
    this.id = _id;
    this.name = _name;
    this.lessons = _lessons;
    this.data = _data;
    this.questionsTypes = _questionsTypes;
  }

  isValid() {
    return this.data.length > 0 || this.questionsTypes.length > 0;
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
