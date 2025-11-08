export const createCampaignQuestions = [
  {
    key: "intro",
    type: "group",
    fields: [
      { key: "email", type: "email", required: true, title: "Email", placeholder: "youremail@example.com" },
      { key: "name", type: "text", required: true, title: "Business name", description: "The name of the business you want to create", placeholder: "Example: 'My Business'" },
      { key: "businessType", type: "select", required: true, options: ["Product", "Service", "Subscription, Club, Community, Membership", "Platform, Marketplace", "Licensing, Franchise", "Leasing, Rental", "Collaborative economy, shared", "Advertising, recommendation marketing", "Circular economy, social impact"], title: "Business type", description: "Choose the option that best characterizes your project", placeholder: "Select an option" },
    ],
    required: true,
    hasTip: false,
  },
  {
    key: "businessStage",
    title: "Business stage",
    description: "What is the stage of your business?",
    type: "radio",
    required: false,
    options: ["I don't have anything yet, only ambition", "Have a concept/idea to develop", "Prototype or MVP initial in test", "Product validated with first paying customers", "Consolidated operation, in growth phase", "Need to review business model and/or scale to stay open"],
    hasTip: false,
  },
  {
    key: "description",
    type: "textarea",
    title: "Description",
    description: "Tell your story and share what you think is relevant to contextualize your friends and family in your project",
    maxLength: 1000,
    required: false,
    hasTip: true,
    tip: "Describe the differentiation that your product or production method brings; Frame the problem to solve and show how this idea will fix the failure, reconfigure production lines, save resources or improve product quality"
  },
  {
    key: "targetValue",
    type: "number",
    title: "Target value",
    placeholder: "Enter a numeric value (€)",
    description: "What is the investment value you need to raise?",
    required: true,
    hasTip: true,
    tip: "For the business type mentioned, the average funding needed is between 30,000€ and 75,000€, usually applied to prototypes, machinery, patents or certifications. Of course, take into account all your own capital or other sources of financing that help cover the total costs."
  }
];