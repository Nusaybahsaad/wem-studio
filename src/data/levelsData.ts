export interface LevelPlan {
  title: string;
  reading: {
    desc: string;
    sources: string;
  };
  listening: {
    desc: string;
    sources: string;
  };
  grammar: string[];
  topics: string[];
}

export const levelsData: Record<"A1" | "A2" | "B1" | "B2", LevelPlan> = {
  A1: {
    title: "دليل الممارسة والأنشطة - مستوى A1 (المبتدئ)",
    reading: {
      desc: "اقرأ كلمات وجمل قصيرة، قصصاً مصورة، حوارات بسيطة ونصوصاً عن الحياة اليومية.",
      sources: "British Council LearnEnglish, Oxford Owl (القصص المصورة). ركّز على مواضيع: التعريف بالنفس، العائلة، الطعام، الأرقام والروتين اليومي."
    },
    listening: {
      desc: "الاستماع ومشاهدة المحتوى البسيط جداً مثل الحوارات القصيرة والبطيئة، المقاطع التعليمية للمبتدئين، الكرتون السهل. اختر محتوى تفهم منه 70%-80%.",
      sources: "BBC Learning English, VOA Learning English - Let's Learn English, فيديوهات Easy English على YouTube، ومقاطع الكرتون البسيطة مثل Peppa Pig."
    },
    grammar: [
      "Alphabet", "Capitalization", "Punctuation", "Numbers", "Articles (a, an, the)",
      "Subject Pronouns", "Object Pronouns", "Possessive Adjectives", "Possessive Pronouns",
      "Demonstratives", "Singular and Plural Nouns", "Countable and Uncountable Nouns",
      "Adjectives", "Adverbs", "Verb To Be (Am, Is, Are)", "Have & Has",
      "There Is & There Are", "Present Simple", "Present Continuous", "Imperatives",
      "Yes/No Questions", "Wh- Questions", "Question Formation", "Prepositions of Place",
      "Prepositions of Time", "Basic Conjunctions (and, but, or)", "Can / Can't", "Possessive 's"
    ],
    topics: [
      "1. Introduce Yourself", "2. My Favorite Food", "3. My Bedroom", "4. My Best Friend",
      "5. My Morning Routine", "6. My Favorite Season", "7. My Favorite Animal", "8. My Family",
      "9. My Dream House", "10. My Favorite Drink", "11. A Day at the Beach", "12. My Hobbies",
      "13. My Favorite Restaurant", "14. My Plans for Tomorrow", "15. My Neighborhood",
      "16. My Favorite Movie", "17. My Breakfast", "18. A Happy Day", "19. My Favorite Clothes",
      "20. My Favorite Place at Home", "21. My Favorite City", "22. My Evening Routine",
      "23. A Funny Day", "24. My Favorite Book", "25. My House", "26. My Favorite Sport",
      "27. My Weekend", "28. My Dream Job", "29. My Favorite Month", "30. At the Supermarket",
      "31. My Perfect Day", "32. My Favorite Person", "33. A Day at the Mall",
      "34. Things I Like and Dislike", "35. My Daily Routine", "36. A Place I Want to Visit",
      "37. My Favorite Song", "38. My Shopping List", "39. A Busy Day", "40. My Favorite Room",
      "41. My Dream Vacation", "42. My Favorite Day", "43. Shopping With a Friend",
      "44. A Meal I Want to Eat", "45. My Life in Five Years", "46. My Favorite Things",
      "47. My Plans for Next Weekend", "48. My Favorite Park", "49. If I Had a Free Day",
      "50. My Favorite Place"
    ]
  },
  A2: {
    title: "دليل الممارسة والأنشطة - مستوى A2 (ما قبل المتوسط)",
    reading: {
      desc: "اقرأ قصصاً قصيرة مبسطة، رسائل، منشورات، أوصافاً يومية ومقالات سهلة وقصيرة.",
      sources: "British Council LearnEnglish, Oxford Owl, ومقالات قصيرة وسهلة من News in Levels - Level 1. ركّز على مواضيع: السفر، العمل، الدراسة، الهوايات، الصحة، التسوق والعلاقات الاجتماعية."
    },
    listening: {
      desc: "استمع وشاهد فيديوهات يومية بسيطة، كرتوناً، مقاطع قصيرة بترجمة إنجليزية وبودكاست للمبتدئين. اختر محتوى تفهم منه 75%-85%.",
      sources: "BBC Learning English, VOA Learning - English in a Minute, قناة Easy English، وبعض حلقات Peppa Pig أو المحتوى الموجه للمتعلمين."
    },
    grammar: [
      "Past Simple", "Future with Will", "Future with Going To", "Comparative Adjectives",
      "Superlative Adjectives", "Too / Enough", "Some / Any", "Much / Many",
      "Few / A Few", "Little / A Little", "How Much / How Many", "Frequency Adverbs",
      "Must / Mustn't", "Have To", "Should / Shouldn't", "Gerunds",
      "Infinitives", "Present Perfect (Basic)", "Basic Relative Clauses"
    ],
    topics: [
      "1. My Favorite Meal", "2. A Person I Admire", "3. My Weekend Plans", "4. A Trip That Went Wrong",
      "5. Something I Want to Learn", "6. My Neighborhood", "7. Eating at Home vs. Eating Out",
      "8. My Favorite Memory", "9. A Day Without My Phone", "10. Healthy Food I Like",
      "11. My Future Job", "12. A Childhood Memory", "13. Planning a Dinner With Friends",
      "14. My Dream Holiday", "15. How I Spend My Free Time", "16. A Shopping Problem",
      "17. My Perfect Day", "18. Traveling Alone or With Friends?", "19. A Habit I Want to Change",
      "20. My Favorite Restaurant", "21. A Very Busy Day", "22. A City I Want to Visit",
      "23. Something I Am Good At", "24. Is Social Media Useful?", "25. My Last Shopping Trip",
      "26. My First Trip", "27. What Makes Me Happy?", "28. A Meal I Can Cook",
      "29. My Plans for Next Year", "30. My Favorite Place in My City", "31. How I Have Changed",
      "32. A Day at the Beach", "33. My Favorite Clothes", "34. How Can We Reduce Stress?",
      "35. My Typical Week", "36. A Food I Don't Like", "37. A Perfect Weekend",
      "38. My Life in Five Years", "39. My Dream Home", "40. What Can We Learn From Traveling?",
      "41. My Morning vs. My Evening", "42. A Trip I Remember", "43. The Advantages of Exercise",
      "44. My Favorite Place", "45. If I Had More Free Time", "46. My Weekend",
      "47. Is It Better to Study Alone or With Friends?", "48. Things I Always Take When I Travel",
      "49. My Plans for Tomorrow", "50. Where I Want to Live in the Future"
    ]
  },
  B1: {
    title: "دليل الممارسة والأنشطة - مستوى B1 (المتوسط)",
    reading: {
      desc: "اقرأ القصص والكتب المبسطة، المقالات القصيرة، الأخبار السهلة والمدونات والتجارب الشخصية.",
      sources: "British Council, News in Levels - Level 2, LearnEnglish, ومقالات مبسطة من National Geographic. اقرأ قصصاً وكتباً متدرجة المستوى مع التركيز على: السفر، الثقافة، العمل، التعليم، التكنولوجيا، الصحة والحياة اليومية."
    },
    listening: {
      desc: "ابدأ بالتعرض لمحتوى أكثر طبيعية مثل المسلسلات السهلة، YouTube، البودكاست الواضح، المقابلات القصيرة والفيديوهات عن الحياة اليومية. اختر محتوى تفهم منه 80%-90%.",
      sources: "BBC Learning English، فيديوهات Easy English، وحلقات البودكاست البسيطة مثل 6 Minute English من BBC، وشاهد مسلسلات سهلة نسبياً مع ترجمة إنجليزية عند الحاجة."
    },
    grammar: [
      "Present Perfect Continuous", "Past Continuous", "Future Continuous",
      "First Conditional", "Second Conditional", "Passive Voice",
      "Reported Speech", "So / Such", "Phrasal Verbs", "Quantifiers",
      "Used To / Be Used To / Get Used To"
    ],
    topics: [
      "1. A Trip I Will Never Forget", "2. A Person Who Influenced Me", "3. How to Stay Organized",
      "4. Working From Home vs. Working in an Office", "5. A Funny Experience I Had",
      "6. The Importance of Reading", "7. How Social Media Affects Our Lives",
      "8. A Habit I Want to Develop", "9. My Dream Job", "10. A Challenge I Successfully Overcame",
      "11. Living Alone vs. Living With Family", "12. A Teacher Who Made a Difference",
      "13. What Makes a Good Quality of Life?", "14. A Trip That Did Not Go as Planned",
      "15. How to Reduce Screen Time", "16. My Biggest Achievement",
      "17. Should Students Have Homework?", "18. The Advantages and Disadvantages of Smartphones",
      "19. My Ideal Weekend", "20. A Skill Everyone Should Learn", "21. How Traveling Can Change a Person",
      "22. A Mistake I Learned From", "23. The Most Important Skills for a Job",
      "24. How to Deal With Stress", "25. Learning Online vs. Learning in a Classroom",
      "26. A Person I Would Like to Meet", "27. Can We Live Without the Internet?",
      "28. How to Build a Good Habit", "29. The Best City to Live In",
      "30. What Makes a Good Employee?", "31. How I Have Changed in the Last Five Years",
      "32. The Importance of Having Time for Yourself", "33. How Technology Has Changed Education",
      "34. A Time When I Helped Someone", "35. Job Satisfaction vs. a High Salary",
      "36. The Importance of Sleep", "37. The Best Way to Learn a Language",
      "38. Online Shopping vs. Shopping in Stores", "39. Something That Makes Me Proud",
      "40. How Tourism Affects Local Communities", "41. A Simple Lifestyle vs. a Busy Lifestyle",
      "42. The Advantages of Having a Part-Time Job", "43. What Makes a Great Travel Experience?",
      "44. A Day Without My Phone", "45. How Technology Can Help Students",
      "46. A New Skill I Would Like to Learn", "47. My Dream Destination",
      "48. What Makes a Good Friend?", "49. Where Do I See Myself in Ten Years?",
      "50. How to Become a Better Student"
    ]
  },
  B2: {
    title: "دليل الممارسة والأنشطة - مستوى B2 (فوق المتوسط)",
    reading: {
      desc: "اقرأ الروايات الأصلية، المقالات الإخبارية ومقالات الرأي والمدونات والمجلات والكتب غير المبسطة.",
      sources: "BBC News, The Guardian, National Geographic, TIME, The Conversation. وابدأ بقراءة الروايات الأصلية والكتب غير المبسطة مع التركيز على مواضيع مثل: السياسة والمجتمع، العلوم، الاقتصاد، التكنولوجيا، الثقافة، العلاقات والعمل."
    },
    listening: {
      desc: "ركّز على المحتوى الطبيعي مثل المسلسلات والأفلام، البودكاست، المقابلات، TED Talks و YouTube، وحاول تقليل الاعتماد على الترجمة العربية. اختر محتوى تفهم منه 85%-95%.",
      sources: "قلل اعتمادك على المحتوى التعليمي وابدأ باستخدام الإنجليزية الطبيعية مثل TED Talks، BBC News، The Guardian، والبودكاست مثل The Daily أو 6 Minute English، وشاهد المسلسلات والأفلام بترجمة إنجليزية ثم بدون ترجمة تدريجياً."
    },
    grammar: [
      "Past Perfect", "Past Perfect Continuous", "Future Perfect",
      "Future Perfect Continuous", "Third Conditional", "Mixed Conditionals",
      "Causative (Have/Get Something Done)", "Wish", "Modal Perfects",
      "Reduced Relative Clauses", "Participle Clauses"
    ],
    topics: [
      "1. A Decision That Changed My Life", "2. Has Social Media Improved Communication?",
      "3. Working From Home vs. Working in an Office", "4. A Failure That Taught Me an Important Lesson",
      "5. Should Schools Teach More Practical Skills?", "6. How Can Traveling Change a Person?",
      "7. Is Being Busy a Sign of Success?", "8. Should Plastic Products Be Restricted?",
      "9. What Makes a Good Teacher?", "10. Can Money Buy Freedom?",
      "11. A Time When I Had to Leave My Comfort Zone", "12. Will Artificial Intelligence Replace Human Workers?",
      "13. Living in a Big City vs. Living in a Small Town", "14. Is Job Satisfaction More Important Than Salary?",
      "15. Should Everyone Go to University?", "16. How Can Cities Become More Environmentally Friendly?",
      "17. Does Money Really Make People Happy?", "18. Should Students Be Allowed to Use AI for Their Homework?",
      "19. A Person Who Changed the Way I Think", "20. Is Traveling Alone Better Than Traveling With Others?",
      "21. How Can Students Stay Motivated?", "22. Is Failure Necessary for Success?",
      "23. How Does Tourism Affect Local Communities?", "24. Are We Too Dependent on Smartphones?",
      "25. What Makes an Employee Valuable to a Company?", "26. A Situation That Taught Me the Importance of Patience",
      "27. Is Reading Still Important in the Digital Age?", "28. Can Individuals Really Make a Difference to the Environment?",
      "29. Should People Always Follow Their Dreams?", "30. How Can People Protect Their Privacy Online?",
      "31. A Time When My Plans Completely Changed", "32. Is University Education Worth the Time and Money?",
      "33. Can Tourism Destroy Local Culture?", "34. Should Companies Prioritize Employee Well-being?",
      "35. Is It Better to Plan Everything or Be Spontaneous?", "36. How Has Technology Changed the Way We Learn?",
      "37. Should Governments Do More to Fight Climate Change?", "38. What Makes Someone a Good Leader?",
      "39. A Problem I Faced and How I Solved It", "40. Is Online Learning as Effective as Traditional Learning?",
      "41. Does Social Status Still Matter Today?", "42. How Can Young People Prepare for Their Careers?",
      "43. Should Children Have Access to Social Media?", "44. A Difficult Choice Between Two Good Options",
      "45. Why Do People Want to Move to Big Cities?", "46. Should Schools Teach Financial Skills?",
      "47. Is Competition Good for Personal Growth?", "48. How Can Young People Help Their Communities?",
      "49. Can AI Make Education Better?", "50. Is a High Salary Worth a Stressful Job?"
    ]
  }
};
