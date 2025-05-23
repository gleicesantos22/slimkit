const surveyScreens = [
  {
    id: "screen-1",
    module: 1,
    type: "choice",
    question: "What’s your current walking level?",
    options: [
      {
        label: "Beginner",
        description: "You’re absolutely new to walking",
        image: "/q1_1.png",
      },
      {
        label: "Intermediate",
        description: "You walk regularly, can walk 1–2 miles per session",
        image: "/q1_2.png",
      },
      {
        label: "Advanced",
        description: "You can walk 3 or more miles per session",
        image: "/q1_3.png",
      },
    ],
  },
  {
    id: "screen-2",
    module: 1,
    type: "choice",
    question: "How often would you like to walk?",
    options: [
      { label: "2 times a week", image: "/q2_1.png" },
      { label: "3 times a week", image: "/q2_2.png" },
      { label: "4 times a week", image: "/q2_3.png" },
      { label: "I don’t know", image: "/q2_4.png" },
    ],
  },
  {
    id: "screen-3",
    module: 1,
    type: "choice",
    question: "How much time would you like to spend on workouts?",
    options: [
      { label: "Less than 10 min", image: "/q3_1.png" },
      { label: "10–20 min", image: "/q3_2.png" },
      { label: "More than 20 min", image: "/q3_3.png" },
      { label: "Let us decide", image: "/q3_4.png" },
    ],
  },
  {
    id: "screen-4",
    module: 1,
    type: "choice",
    question: "Please, describe your typical day",
    options: [
      { label: "At the office", image: "/q4_1.png" },
      { label: "Daily long walks", image: "/q4_2.png" },
      { label: "Physical work", image: "/q4_3.png" },
      { label: "Mostly at home", image: "/q4_4.png" },
    ],
  },
  {
    id: "screen-5",
    module: 1,
    type: "choice",
    question: "Choose your diet type",
    options: [
      { label: "All-food diet", image: "/q5_1.png" },
      { label: "Vegetarian", image: "/q5_2.png" },
      { label: "Vegan", image: "/q5_3.png" },
      { label: "Keto", image: "/q5_4.png" },
    ],
  },
  {
    id: "screen-6",
    module: 1,
    type: "choice",
    question: "Do you experience any allergies?",
    description:
      "Let us know if you have any of the following allergies, so we can tailor your meal plan to your needs",
    options: [
      { label: "No, I don't have any allergies", image: "/q6_1.png" },
      { label: "Nuts", image: "/q6_2.png" },
      { label: "Eggs", image: "/q6_3.png" },
      { label: "Seafood", image: "/q6_4.png" },
    ],
  },
  {
    id: "screen-7",
    module: 2,
    type: "choice",
    question: "Please, tell us about your sleep duration",
    options: [
      { label: "I sleep less than 7 hours", image: "/q7_1.png" },
      { label: "I sleep 7–9 hours", image: "/q7_2.png" },
      { label: "I sleep more than 9 hours", image: "/q7_3.png" },
    ],
  },
  {
    id: "screen-8",
    module: 2,
    type: "choice",
    question: "What’s your daily water intake?",
    options: [
      { label: "I only have coffee or tea", image: "/q8_1.png" },
      { label: "About 2 glasses (16 oz)", image: "/q8_2.png" },
      { label: "2 to 6 glasses (16–48 oz)", image: "/q8_3.png" },
      { label: "More than 6 glasses", image: "/q8_4.png" },
    ],
  },
  {
    id: "screen-9",
    module: 2,
    type: "choice",
    question: "How active is your job?",
    options: [
      { label: "Sedentary", image: "/q9_1.png" },
      { label: "Moderately active", image: "/q9_2.png" },
      { label: "Very active", image: "/q9_3.png" },
    ],
  },
  {
    id: "screen-10",
    module: 2,
    type: "gender",
    question: "Select your gender",
    options: [
      { label: "Female", image: "/q10_1.png" },
      { label: "Male", image: "/q10_2.png" },
    ],
  },
  {
    id: "screen-11",
    module: 3,
    type: "choice-alter",
    question: "How old are you?",
    options: [
      { label: "18–29 years", image: "/q11_1.png" },
      { label: "30–39 years", image: "/q11_2.png" },
      { label: "40–49 years", image: "/q11_3.png" },
      { label: "50–59 years", image: "/q11_4.png" },
      { label: "60–80 years", image: "/q11_5.png" },
    ],
  },
  {
    id: "screen-12",
    module: 3,
    type: "choice-alter",
    question: "What’s your body type?",
    options: [
      {
        label: "Apple-shaped",
        description: "Naturally wide torso and broad shoulders",
        image: "/q12_1.png",
      },
      {
        label: "Pear-shaped",
        description: "Naturally slimmer shoulders and thicker thighs",
        image: "/q12_2.png",
      },
      {
        label: "Square-shaped",
        description: "Naturally wide shoulders and thighs",
        image: "/q12_3.png",
      },
      {
        label: "Hourglass",
        description: "Wide bust and hips, a narrow waist",
        image: "/q12_4.png",
      },
      {
        label: "Inverted triangle",
        description: "Wider shoulders and slimmer hips",
        image: "/q12_5.png",
      },
    ],
  },
  {
    id: "screen-13",
    module: 3,
    type: "unit-input",
    question: "Your height",
    units: ["FT", "CM"],
  },
  {
    id: "screen-14",
    module: 3,
    type: "unit-input",
    question: "Your current weight",
    units: ["LB", "KG"],
  },
  {
    id: "screen-15",
    module: 3,
    type: "unit-input",
    question: "Your goal weight",
    units: ["LB", "KG"],
  },
  {
    id: "screen-16",
    module: 3,
    type: "choice",
    question: "Do you have an important event?",
    options: [
      { label: "Vacation", image: "/q16_1.png" },
      { label: "Wedding", image: "/q16_2.png" },
      { label: "Summer", image: "/q16_3.png" },
      { label: "Family gathering", image: "/q16_4.png" },
      { label: "Birthday party", image: "/q16_5.png" },
      { label: "I don't have a specific occasion", image: "/q16_6.png" },
      { label: "Other", image: "/q16_7.png" },
    ],
  },
  {
    id: "screen-17",
    module: 3,
    type: "date",
    question: "When is the birthday?",
    optional: true,
  },
  {
    id: "screen-18",
    module: 4,
    type: "choice",
    question: "Which of the following describes your lifestyle?",
    description:
      "Sometimes it might be difficult to maintain healthy habits. Our personal program will help you acheive your well-being goals.",
    options: [
      {
        label: "My activity level is not good and needs improvement",
        image: "/q18_1.png",
      },
      {
        label: "I try to practice healthy lifestyle habits",
        image: "/q18_2.png",
      },
    ],
  },
  {
    id: "screen-19",
    module: 4,
    type: "choice",
    question: "What motivates you to exercise?",
    options: [
      { label: "Improving health", image: "/q19_1.png" },
      { label: "Boosting immune system", image: "/q19_2.png" },
      { label: "Looking better", image: "/q19_3.png" },
      { label: "Building strength and endurance", image: "/q19_4.png" },
      { label: "Boosting libido", image: "/q19_5.png" },
    ],
  },
  {
    id: "screen-20",
    module: 4,
    type: "choice",
    question: "Would your life change if you reached your ideal weight?",
    options: [
      {
        label:
          "My life would do a complete 180 and I would be a brand new person",
        image: "/q20_1.png",
      },
      {
        label: "I would be more confident and be able to do more",
        image: "/q20_2.png",
      },
      {
        label: "I would be much happier and even take up new activities",
        image: "/q20_3.png",
      },
      { label: "My life wouldn’t change", image: "/q20_4.png" },
    ],
  },
  {
    id: "screen-21",
    module: 4,
    type: "scale",
    question: "How do you feel about the following statements?",
    speech: "“Walking is a good way to reduce stress level”",
    scale: [1, 2, 3, 4, 5],
  },
  {
    id: "screen-22",
    module: 4,
    type: "scale",
    question: "How do you feel about the following statements?",
    speech:
      "“Because of my surroundings, it is difficult for me to acquire good habits”",
    scale: [1, 2, 3, 4, 5],
  },
  {
    id: "screen-23",
    module: 4,
    type: "scale",
    question: "How do you feel about the following statements?",
    speech: "“I feel like it takes too much time to reach my goal weight”",
    scale: [1, 2, 3, 4, 5],
  },
  {
    id: "screen-24",
    module: 4,
    type: "scale",
    question: "How do you feel about the following statements?",
    speech: "“It is possible to lose weight by walking exercises”",
    scale: [1, 2, 3, 4, 5],
  },
  {
    id: "screen-25",
    module: 4,
    type: "scale",
    question: "How do you feel about the following statements?",
    speech: "“I need some extra motivation to work out regularly”",
    scale: [1, 2, 3, 4, 5],
  },
  {
    id: "screen-26",
    module: 4,
    type: "choice",
    question: "Does any of the following apply to you?",
    question: "How do you feel about the following statements?",
    options: [
      { label: "I have diabetes", image: "/q26_1.png" },
      { label: "I have asthma", image: "/q26_2.png" },
      { label: "I have joint diseases", image: "/q26_3.png" },
      { label: "None of the above", image: "/q26_4.png" },
    ],
  },
  {
    id: "screen-27",
    module: 4,
    type: "choice",
    question: "Are you taking any of the following supplements/medications?",
    options: [
      { label: "Vitamins", image: "/q27_1.png" },
      { label: "Hormones", image: "/q27_2.png" },
      { label: "Antibiotics", image: "/q27_3.png" },
      { label: "Other", image: "/q27_4.png" },
      { label: "I am not taking any medications", image: "/q27_5.png" },
    ],
  },
];

export default surveyScreens;
