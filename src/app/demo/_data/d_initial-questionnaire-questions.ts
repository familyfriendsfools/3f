export const initialQuestionnaireQuestions = [
  {
    title: "What is your main motivation to start a business?",
    type: "radio",
    key: "motivation",
    options: [
      "Immediate financial freedom",
      "Realize a personal dream",
      "Impact the society positively",
      "Grow and scale quickly",
    ],
  },
  {
    title: "What is your main challenge?",
    type: "radio",
    key: "challenge",
    options: [
      "Have an idea",
      "Transform the idea into a viable product/service",
      "Have funding to start operating",
      "Find and retain first customers",
      "Improve/organize internal processes and/or team",
      "Scale to new markets quickly",
    ],
  },
  {
    title: "How many paying customers do you have?",
    type: "radio",
    key: "customers",
    options: ["None", "Up to 10", "10 to 100", "Hundreds or thousands"],
  },
  {
    title: "In what stage is your solution?",
    type: "radio",
    key: "businessStage",
    options: [
      "I don't have anything yet, only ambition",
      "Have a concept/idea to develop",
      "Prototype or MVP initial in test",
      "Product validated with first paying customers",
      "Consolidated operation, in growth phase",
      "Need to review business model and/or scale to stay open",
    ],
  },
  {
    title: "Email",
    type: "email",
    key: "email",
    placeholder: "youremail@example.com",
  },
];
