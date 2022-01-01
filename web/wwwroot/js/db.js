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
              new EnglishWord(71, "Touch your nose", "المس أنفك", false, false),
              new EnglishWord(72, "Nose", "أنف", true, false),
              new EnglishWord(73, "This is my nose", "هذه أنفي", false, false),
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
              new EnglishWord(92, "Pencil Case", "مقلمة قلم رصاص", true, false),
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
              new EnglishWord(0, "is there", "هل يوجد (للمفرد)", false, false),
              new EnglishWord(0, "are there", "هل يوجد (للجمع)", false, false),
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
              new EnglishWord(0, "point", "يشير ", false, true),
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
              new EnglishWord(0, "I feel thirsty", "أشعر بالعطش", false, false),
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
              new EnglishWord(0, "fruit ", "فاكهة", true, false),
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
              new EnglishWord(0, "television", "تلفاز / تليفزيون", true, false),
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
              new EnglishWord(0, "the first ", "الأول", false, false),
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
              new EnglishWord(0, "capital letters", "أحرف كبيرة", true, false),
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
              new EnglishWord(0, "This is my heart", "هذا قلبي", false, false),
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
              new EnglishWord(0, "try to sleep", "حاول أن تنام", false, false),
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
              new EnglishWord(0, "I feel happy", "أشعر بالسعادة", false, false),
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
              new EnglishWord(0, "like", "يحب / مثل / شبه ", true, true),
              new EnglishWord(0, "job", "مهنة / وظيفة", true, false),
              new EnglishWord(0, "What do you do?", "ماذا تفعل؟", false, false),
              new EnglishWord(0, "What's your name?", "ما اسمك؟", false, false),
              new EnglishWord(
                0,
                "Where do you work?",
                "أين تعمل؟",
                false,
                false
              ),
              new EnglishWord(0, "work", "يعمل / شغل / عمل ", true, true),
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
              new EnglishWord(0, "weekend", "عطلة نهاية الاسبوع", false, false),
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
              new EnglishWord(0, "I love cats", "انا احب القطط", false, false),
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
              new EnglishWord(0, "taking photos", "التقاط الصور", false, false),
              new EnglishWord(0, "singing a song", "يغني أغنية", false, false),
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
              new EnglishWord(0, "What time is it?", "أي ساعة؟", false, false),
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
                "انها الثانية  وثلاثين ",
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
              new EnglishWord(0, "teacher", "معلم / مدرس / أستاذ", true, false),
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
              new EnglishWord(0, "sign", "إشارة / علامة / لافتة", true, false),
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
              new EnglishWord(0, "thirsty", "عطشان / متعطش ", true, false),
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
              new EnglishWord(0, "table", "طاولة / منضدة / جدول", true, false),
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
              new EnglishWord(0, "set the table", "أعد المائدة", false, false),
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
              new EnglishWord(0, "multiplication", "عمليه الضرب", true, false),
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
              new EnglishWord(0, "sorting trash", "فرز القمامة", false, false),
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
              new EnglishWord(0, "riding a bike", "ركوب الدراجة", true, false),
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
              new EnglishWord(0, "recycle", "يعيد تصنيع ", false, true),
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
              new EnglishWord(0, "measuring length", "قياس طول", false, false),
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
              new EnglishWord(0, "she can't hear", "هي لا تسمع", false, false),
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
              new EnglishWord(0, "television", "تلفاز / تليفزيون", true, false),
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
