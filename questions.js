const questions = {
  level1: [
    {
      question: "What is the plural of 'cat'?",
      answers: ["cats", "cat", "cates", "catz"],
      correct: "cats"
    },
    {
      question: "Choose the correct verb: 'He ___ a book.'",
      answers: ["read", "reads", "reading", "readed"],
      correct: "reads"
    },
    {
      question: "Fill in the blank: 'I ___ happy.'",
      answers: ["am", "is", "are", "be"],
      correct: "am"
    },
    {
      question: "What is the opposite of 'big'?",
      answers: ["small", "tall", "long", "short"],
      correct: "small"
    },
    {
      question: "Choose the correct article: '___ apple a day.'",
      answers: ["A", "An", "The", "No article"],
      correct: "An"
    },
    {
      question: "Fill in the blank: 'They ___ playing.'",
      answers: ["is", "are", "am", "be"],
      correct: "are"
    },
    {
      question: "Choose the correct pronoun: '___ is my friend.'",
      answers: ["He", "She", "It", "They"],
      correct: "He"
    },
    {
      question: "What is the past tense of 'go'?",
      answers: ["goed", "went", "gone", "going"],
      correct: "went"
    },
    {
      question: "Fill in the blank: 'I ___ to school.'",
      answers: ["go", "goes", "went", "going"],
      correct: "go"
    },
    {
      question: "Choose the correct preposition: 'I live ___ New York.'",
      answers: ["in", "on", "at", "to"],
      correct: "in"
    }
  ],

  level2: [
    {
      question: "What is the past tense of 'eat'?",
      answers: ["eated", "ate", "eat", "eating"],
      correct: "ate"
    },
    {
      question: "Choose the correct word: 'She ___ happy.'",
      answers: ["is", "are", "am", "be"],
      correct: "is"
    },
    {
      question: "Fill in the blank: 'We ___ friends.'",
      answers: ["is", "are", "am", "be"],
      correct: "are"
    },
    {
      question: "What is the opposite of 'hot'?",
      answers: ["cold", "warm", "cool", "freezing"],
      correct: "cold"
    },
    {
      question: "Choose the correct article: '___ cat is black.'",
      answers: ["A", "An", "The", "No article"],
      correct: "The"
    },
    {
      question: "Fill in the blank: 'He ___ running.'",
      answers: ["is", "are", "am", "be"],
      correct: "is"
    },
    {
      question: "Choose the correct pronoun: '___ like to play.'",
      answers: ["They", "He", "She", "It"],
      correct: "They"
    },
    {
      question: "What is the plural of 'child'?",
      answers: ["childs", "childes", "children", "child"],
      correct: "children"
    },
    {
      question: "Fill in the blank: 'I ___ a car.'",
      answers: ["have", "has", "had", "having"],
      correct: "have"
    },
    {
      question: "Choose the correct preposition: 'The book is ___ the table.'",
      answers: ["on", "in", "at", "over"],
      correct: "on"
    }
  ],

  level3: [
    {
      question: "What is the past tense of 'see'?",
      answers: ["seen", "saw", "see", "seed"],
      correct: "saw"
    },
    {
      question: "Choose the correct verb: 'They ___ happy.'",
      answers: ["is", "are", "am", "be"],
      correct: "are"
    },
    {
      question: "Fill in the blank: 'I ___ studying.'",
      answers: ["am", "is", "are", "be"],
      correct: "am"
    },
    {
      question: "What is the opposite of 'easy'?",
      answers: ["hard", "simple", "quick", "fast"],
      correct: "hard"
    },
    {
      question: "Choose the correct article: '___ elephant is big.'",
      answers: ["An", "A", "The", "No article"],
      correct: "An"
    },
    {
      question: "Fill in the blank: 'She ___ a teacher.'",
      answers: ["is", "are", "am", "be"],
      correct: "is"
    },
    {
      question: "Choose the correct pronoun: '___ are my parents.'",
      answers: ["They", "He", "She", "It"],
      correct: "They"
    },
    {
      question: "What is the plural of 'mouse'?",
      answers: ["mouses", "mice", "mouse", "meese"],
      correct: "mice"
    },
    {
      question: "Fill in the blank: 'He ___ a bike.'",
      answers: ["has", "have", "had", "having"],
      correct: "has"
    },
    {
      question: "Choose the correct preposition: 'She is ___ the park.'",
      answers: ["at", "in", "on", "over"],
      correct: "in"
    }
  ],

  level4: [
    {
      question: "What is the past tense of 'write'?",
      answers: ["wrote", "written", "write", "writing"],
      correct: "wrote"
    },
    {
      question: "Choose the correct verb: 'He ___ playing football.'",
      answers: ["is", "are", "am", "be"],
      correct: "is"
    },
    {
      question: "Fill in the blank: 'We ___ going to the movies.'",
      answers: ["are", "is", "am", "be"],
      correct: "are"
    },
    {
      question: "What is the opposite of 'fast'?",
      answers: ["slow", "quick", "rapid", "speedy"],
      correct: "slow"
    },
    {
      question: "Choose the correct article: '___ hour ago.'",
      answers: ["A", "An", "The", "No article"],
      correct: "An"
    },
    {
      question: "Fill in the blank: 'They ___ happy.'",
      answers: ["are", "is", "am", "be"],
      correct: "are"
    },
    {
      question: "Choose the correct pronoun: '___ is my brother.'",
      answers: ["He", "She", "It", "They"],
      correct: "He"
    },
    {
      question: "What is the plural of 'leaf'?",
      answers: ["leafs", "leaves", "leafes", "leafe"],
      correct: "leaves"
    },
    {
      question: "Fill in the blank: 'I ___ a new phone.'",
      answers: ["have", "has", "had", "having"],
      correct: "have"
    },
    {
      question: "Choose the correct preposition: 'The cat is ___ the sofa.'",
      answers: ["under", "in", "on", "over"],
      correct: "under"
    }
  ],

  level5: [
    {
      question: "What is the past participle of 'take'?",
      answers: ["took", "taken", "take", "taking"],
      correct: "taken"
    },
    {
      question: "Choose the correct verb: 'She ___ cooking.'",
      answers: ["is", "are", "am", "be"],
      correct: "is"
    },
    {
      question: "Fill in the blank: 'They ___ watching TV.'",
      answers: ["are", "is", "am", "be"],
      correct: "are"
    },
    {
      question: "What is the opposite of 'happy'?",
      answers: ["sad", "angry", "mad", "glad"],
      correct: "sad"
    },
    {
      question: "Choose the correct article: '___ honest man.'",
      answers: ["A", "An", "The", "No article"],
      correct: "An"
    },
    {
      question: "Fill in the blank: 'He ___ late.'",
      answers: ["is", "are", "am", "be"],
      correct: "is"
    },
    {
      question: "Choose the correct pronoun: '___ are friends.'",
      answers: ["They", "He", "She", "It"],
      correct: "They"
    },
    {
      question: "What is the plural of 'city'?",
      answers: ["citys", "cities", "cityes", "citiez"],
      correct: "cities"
    },
    {
      question: "Fill in the blank: 'I ___ a doctor.'",
      answers: ["am", "is", "are", "be"],
      correct: "am"
    },
    {
      question: "Choose the correct preposition: 'The book is ___ the shelf.'",
      answers: ["on", "in", "at", "over"],
      correct: "on"
    }
  ],

  level6: [
    {
      question: "Fill the blank: 'She ___ been to the party.'",
      answers: ["have", "has", "had", "having"],
      correct: "has"
    },
    {
      question: "Choose the correct indirect object: 'I gave ___ the book.'",
      answers: ["he", "him", "his", "her"],
      correct: "him"
    },
    {
      question: "What is the superlative of 'good'?",
      answers: ["goodest", "better", "best", "more good"],
      correct: "best"
    },
    {
      question: "Select the correct phrasal verb: 'Turn ___ the light.'",
      answers: ["on", "off", "up", "down"],
      correct: "on"
    },
    {
      question: "Choose the correct form: 'They ___ already left.'",
      answers: ["have", "has", "had", "having"],
      correct: "have"
    },
    {
      question: "What does 'although' mean?",
      answers: ["Porque", "Embora", "Então", "Mas"],
      correct: "Embora"
    },
    {
      question: "Fill in the blank: 'He ___ cooking dinner.'",
      answers: ["is", "are", "am", "be"],
      correct: "is"
    },
    {
      question: "Select the correct word: 'She speaks English very ___.'",
      answers: ["good", "well", "better", "best"],
      correct: "well"
    },
    {
      question: "What is the past tense of 'teach'?",
      answers: ["teached", "taught", "teaching", "taughted"],
      correct: "taught"
    },
    {
      question: "Choose the correct question tag: 'You are coming, ___?'",
      answers: ["aren't you", "isn't you", "aren't", "don't you"],
      correct: "aren't you"
    }
  ],

  level7: [
    {
      question: "What is the opposite of 'accept'?",
      answers: ["deny", "allow", "agree", "permit"],
      correct: "deny"
    },
    {
      question: "Fill in the blank: 'He will ___ the meeting tomorrow.'",
      answers: ["attend", "attended", "attending", "attends"],
      correct: "attend"
    },
    {
      question: "Choose the correct synonym of 'big'.",
      answers: ["tiny", "huge", "small", "short"],
      correct: "huge"
    },
    {
      question: "What is the plural of 'analysis'?",
      answers: ["analysises", "analysis", "analyses", "analysi"],
      correct: "analyses"
    },
    {
      question: "Select the correct form: 'She ___ been working here since 2010.'",
      answers: ["has", "have", "had", "having"],
      correct: "has"
    },
    {
      question: "What does 'despite' mean?",
      answers: ["Apesar de", "Por causa de", "Enquanto", "Para"],
      correct: "Apesar de"
    },
    {
      question: "Choose the correct word: 'I am interested ___ music.'",
      answers: ["on", "in", "at", "for"],
      correct: "in"
    },
    {
      question: "What is the past tense of 'choose'?",
      answers: ["chosed", "choose", "chose", "choosen"],
      correct: "chose"
    },
    {
      question: "Select the correct sentence:",
      answers: [
        "I have went to the store.",
        "I have gone to the store.",
        "I has gone to the store.",
        "I gone to the store."
      ],
      correct: "I have gone to the store."
    },
    {
      question: "Fill the blank: 'They ___ playing soccer now.'",
      answers: ["is", "are", "am", "be"],
      correct: "are"
    }
  ],

  level8: [
    {
      question: "What is the superlative of 'bad'?",
      answers: ["worst", "badder", "bad", "worse"],
      correct: "worst"
    },
    {
      question: "Choose the correct word: '___ you ever been to London?'",
      answers: ["Did", "Have", "Has", "Had"],
      correct: "Have"
    },
    {
      question: "Fill the blank: 'He ___ like pizza.'",
      answers: ["don't", "doesn't", "didn't", "isn't"],
      correct: "doesn't"
    },
    {
      question: "What is the plural of 'knife'?",
      answers: ["knifes", "knives", "knife", "knifves"],
      correct: "knives"
    },
    {
      question: "Select the correct phrase: 'I am looking forward ___ the trip.'",
      answers: ["to", "for", "at", "on"],
      correct: "to"
    },
    {
      question: "What is the opposite of 'noisy'?",
      answers: ["quiet", "loud", "angry", "soft"],
      correct: "quiet"
    },
    {
      question: "Choose the correct sentence:",
      answers: [
        "She don't like chocolate.",
        "She doesn't likes chocolate.",
        "She doesn't like chocolate.",
        "She don't likes chocolate."
      ],
      correct: "She doesn't like chocolate."
    },
    {
      question: "Fill in the blank: 'They ___ been friends for years.'",
      answers: ["has", "have", "had", "having"],
      correct: "have"
    },
    {
      question: "What is the past participle of 'break'?",
      answers: ["breaked", "broke", "broken", "breaking"],
      correct: "broken"
    },
    {
      question: "Select the correct word: 'We should ___ more water.'",
      answers: ["drink", "drank", "drunk", "drinking"],
      correct: "drink"
    }
  ],

  level9: [
    {
      question: "Choose the correct word: 'She is very ___ in science.'",
      answers: ["interesting", "interested", "interest", "interests"],
      correct: "interested"
    },
    {
      question: "What is the opposite of 'generous'?",
      answers: ["stingy", "kind", "nice", "friendly"],
      correct: "stingy"
    },
    {
      question: "Fill in the blank: 'I will call you when I ___ home.'",
      answers: ["get", "got", "getting", "gets"],
      correct: "get"
    },
    {
      question: "Choose the correct sentence:",
      answers: [
        "He don't like football.",
        "He doesn't like football.",
        "He doesn't likes football.",
        "He don't likes football."
      ],
      correct: "He doesn't like football."
    },
    {
      question: "Select the correct synonym for 'fast'.",
      answers: ["slow", "quick", "late", "early"],
      correct: "quick"
    },
    {
      question: "What is the plural form of 'goose'?",
      answers: ["gooses", "geese", "goos", "goosen"],
      correct: "geese"
    },
    {
      question: "Fill the blank: 'She ___ a beautiful dress.'",
      answers: ["wear", "wears", "wearing", "wore"],
      correct: "wears"
    },
    {
      question: "Choose the correct word: 'We have been friends ___ childhood.'",
      answers: ["for", "since", "from", "at"],
      correct: "since"
    },
    {
      question: "What does 'although' mean?",
      answers: ["Apesar de", "Porque", "Então", "Então que"],
      correct: "Apesar de"
    },
    {
      question: "Select the correct question form: '___ she like music?'",
      answers: ["Does", "Do", "Did", "Is"],
      correct: "Does"
    }
  ],

  level10: [
    {
      question: "What is the past perfect form of 'go'?",
      answers: ["had gone", "has gone", "have gone", "was gone"],
      correct: "had gone"
    },
    {
      question: "Choose the correct word: 'They ___ finished their homework.'",
      answers: ["have", "has", "had", "having"],
      correct: "have"
    },
    {
      question: "Fill in the blank: 'I wish I ___ fly.'",
      answers: ["can", "could", "may", "might"],
      correct: "could"
    },
    {
      question: "What is the synonym of 'begin'?",
      answers: ["start", "end", "stop", "finish"],
      correct: "start"
    },
    {
      question: "Select the correct form: 'If I ___ you, I would study more.'",
      answers: ["was", "were", "am", "be"],
      correct: "were"
    },
    {
      question: "What is the opposite of 'success'?",
      answers: ["failure", "victory", "win", "achievement"],
      correct: "failure"
    },
    {
      question: "Choose the correct preposition: 'She is afraid ___ spiders.'",
      answers: ["of", "for", "to", "at"],
      correct: "of"
    },
    {
      question: "Fill the blank: 'They ___ to the party if they had time.'",
      answers: ["would go", "will go", "go", "went"],
      correct: "would go"
    },
    {
      question: "What does 'nevertheless' mean?",
      answers: ["No entanto", "Portanto", "Por isso", "Porque"],
      correct: "No entanto"
    },
    {
      question: "Select the correct word: 'I am looking forward ___ your reply.'",
      answers: ["to", "for", "at", "on"],
      correct: "to"
    }
  ],

  level11: [
    {
      question: "What is the past participle of 'write'?",
      answers: ["wrote", "written", "write", "writen"],
      correct: "written"
    },
    {
      question: "Fill in: 'They haven't seen her ___ last week.'",
      answers: ["since", "for", "at", "in"],
      correct: "since"
    },
    {
      question: "Choose the correct passive form: 'The cake ___ by Mary.'",
      answers: ["was made", "made", "is make", "makes"],
      correct: "was made"
    },
    {
      question: "Select the correct word: 'Neither of them ___ going.'",
      answers: ["is", "are", "be", "were"],
      correct: "is"
    },
    {
      question: "What does 'however' mean?",
      answers: ["Portanto", "Contudo", "Além disso", "Mesmo que"],
      correct: "Contudo"
    },
    {
      question: "Choose the correct sentence:",
      answers: [
        "She suggested to go out.",
        "She suggested going out.",
        "She suggested go out.",
        "She suggested gone out."
      ],
      correct: "She suggested going out."
    },
    {
      question: "What is a synonym for 'angry'?",
      answers: ["furious", "happy", "tired", "excited"],
      correct: "furious"
    },
    {
      question: "Fill in: 'He was accused ___ stealing money.'",
      answers: ["for", "of", "to", "with"],
      correct: "of"
    },
    {
      question: "What’s the correct indirect question: 'Where is she?'",
      answers: [
        "Do you know where she is?",
        "Do you know where is she?",
        "Do you know where she?",
        "Do you know she is where?"
      ],
      correct: "Do you know where she is?"
    },
    {
      question: "Choose the correct form: 'I had never ___ sushi before.'",
      answers: ["eat", "ate", "eaten", "eating"],
      correct: "eaten"
    }
  ],

  level12: [
    {
      question: "What is the plural of 'crisis'?",
      answers: ["crisises", "crises", "crisis", "crisiss"],
      correct: "crises"
    },
    {
      question: "Choose the correct sentence:",
      answers: [
        "It's important he studies.",
        "It's important he study.",
        "It's important he studied.",
        "It's important he is study."
      ],
      correct: "It's important he study."
    },
    {
      question: "Select the correct phrasal verb: 'give ___ smoking'",
      answers: ["up", "out", "in", "off"],
      correct: "up"
    },
    {
      question: "What does 'barely' mean?",
      answers: ["Facilmente", "Apenas", "Nunca", "Sempre"],
      correct: "Apenas"
    },
    {
      question: "Complete: 'She prefers tea ___ coffee.'",
      answers: ["than", "to", "over", "for"],
      correct: "to"
    },
    {
      question: "Choose the correct form: 'If she ___ earlier, she wouldn’t be late.'",
      answers: ["left", "had left", "leaves", "would leave"],
      correct: "had left"
    },
    {
      question: "Which word is an adverb?",
      answers: ["quickly", "quick", "quicker", "quicken"],
      correct: "quickly"
    },
    {
      question: "Select the correct verb: 'He let me ___ the car.'",
      answers: ["drive", "to drive", "driving", "drove"],
      correct: "drive"
    },
    {
      question: "What is the synonym of 'honest'?",
      answers: ["truthful", "lazy", "serious", "angry"],
      correct: "truthful"
    },
    {
      question: "What’s the opposite of 'increase'?",
      answers: ["reduce", "grow", "rise", "expand"],
      correct: "reduce"
    }
  ],

  level13: [
    {
      question: "What does 'meanwhile' mean?",
      answers: ["Entretanto", "Porque", "Ainda", "Portanto"],
      correct: "Entretanto"
    },
    {
      question: "What is the noun form of 'decide'?",
      answers: ["deciding", "decision", "decide", "decided"],
      correct: "decision"
    },
    {
      question: "Choose the correct sentence:",
      answers: [
        "She has been here since three hours.",
        "She has been here for three hours.",
        "She has been here during three hours.",
        "She has been here by three hours."
      ],
      correct: "She has been here for three hours."
    },
    {
      question: "What is the past tense of 'lend'?",
      answers: ["lent", "lended", "lend", "lending"],
      correct: "lent"
    },
    {
      question: "Select the correct article: '___ European country'",
      answers: ["An", "A", "The", "Some"],
      correct: "A"
    },
    {
      question: "What’s the opposite of 'sharp'?",
      answers: ["dull", "hard", "soft", "light"],
      correct: "dull"
    },
    {
      question: "Choose the correct phrasal verb: 'come ___ with a solution'",
      answers: ["up", "out", "off", "down"],
      correct: "up"
    },
    {
      question: "What is the correct sentence?",
      answers: [
        "Neither of them are coming.",
        "Neither of them is coming.",
        "Neither of them were coming.",
        "Neither of them come."
      ],
      correct: "Neither of them is coming."
    },
    {
      question: "What is a synonym for 'strange'?",
      answers: ["weird", "normal", "familiar", "close"],
      correct: "weird"
    },
    {
      question: "Choose the correct tag: 'She can drive, ___?'",
      answers: ["can't she", "can she", "isn't she", "won't she"],
      correct: "can't she"
    }
  ],

  level14: [
    {
      question: "What is the past of 'lie' (to recline)?",
      answers: ["lied", "lay", "laid", "lays"],
      correct: "lay"
    },
    {
      question: "Choose the correct sentence:",
      answers: [
        "He stopped to smoke.",
        "He stopped smoking.",
        "He stop smoking.",
        "He stopping to smoke."
      ],
      correct: "He stopped smoking."
    },
    {
      question: "Fill the blank: '___ we were tired, we continued walking.'",
      answers: ["Although", "Because", "So", "If"],
      correct: "Although"
    },
    {
      question: "What is the opposite of 'tight'?",
      answers: ["loose", "fast", "fit", "short"],
      correct: "loose"
    },
    {
      question: "Which is correct?",
      answers: [
        "This is the less interesting topic.",
        "This is the least interesting topic.",
        "This is the less interesting of all.",
        "This is the fewest interesting topic."
      ],
      correct: "This is the least interesting topic."
    },
    {
      question: "What is a synonym of 'complicated'?",
      answers: ["complex", "simple", "easy", "clear"],
      correct: "complex"
    },
    {
      question: "Choose the correct preposition: 'He is good ___ math.'",
      answers: ["at", "in", "on", "for"],
      correct: "at"
    },
    {
      question: "Fill in the blank: 'She advised me ___ earlier.'",
      answers: ["come", "to come", "coming", "came"],
      correct: "to come"
    },
    {
      question: "What is the opposite of 'ancient'?",
      answers: ["modern", "old", "historic", "old-fashioned"],
      correct: "modern"
    },
    {
      question: "Choose the correct sentence:",
      answers: [
        "If I will see him, I will tell.",
        "If I saw him, I will tell.",
        "If I see him, I will tell.",
        "If I see him, I would tell."
      ],
      correct: "If I see him, I will tell."
    }
  ],

  level15: [
    {
      question: "What is the past participle of 'sing'?",
      answers: ["sang", "singed", "sung", "sing"],
      correct: "sung"
    },
    {
      question: "Choose the correct sentence:",
      answers: [
        "She suggested going to the park.",
        "She suggested to go to the park.",
        "She suggested go to the park.",
        "She suggested gone to the park."
      ],
      correct: "She suggested going to the park."
    },
    {
      question: "Fill in the blank: 'He has lived here ___ 5 years.'",
      answers: ["since", "for", "from", "at"],
      correct: "for"
    },
    {
      question: "What is the synonym of 'difficult'?",
      answers: ["easy", "hard", "simple", "quick"],
      correct: "hard"
    },
    {
      question: "Choose the correct preposition: 'They are afraid ___ dogs.'",
      answers: ["of", "for", "to", "at"],
      correct: "of"
    },
    {
      question: "Select the correct form: 'If I ___ the answer, I would tell you.'",
      answers: ["know", "knew", "known", "knowing"],
      correct: "knew"
    },
    {
      question: "What does 'although' mean?",
      answers: ["apesar de", "porque", "então", "mas"],
      correct: "apesar de"
    },
    {
      question: "Fill the blank: 'They have been friends ___ childhood.'",
      answers: ["since", "for", "from", "at"],
      correct: "since"
    },
    {
      question: "Choose the correct phrasal verb: 'Put ___ your coat.'",
      answers: ["on", "off", "up", "in"],
      correct: "on"
    },
    {
      question: "What is the opposite of 'success'?",
      answers: ["failure", "victory", "win", "achievement"],
      correct: "failure"
    }
  ]
};
