const faqsCategories = [
  { id: 1, name: 'people' },
  { id: 2, name: 'pets' },
  { id: 3, name: 'city' },
];

const faqsQuestions = [
  {
    id: 1,
    categoryId: 1,
    question: 'What is your firstname?',
    answer: 'Marcela',
  },
  {
    id: 2,
    categoryId: 1,
    question: 'What is your lastname?',
    answer: 'Aburto',
  },
  {
    id: 3,
    categoryId: 1,
    question: 'How old are you?',
    answer: 26,
  },
  {
    id: 4,
    categoryId: 1,
    question: 'Where do you live?',
    answer: 'Mateare',
  },
  {
    id: 5,
    categoryId: 2,
    question: 'What is your pets name?',
    answer: 'Canela',
  },
  {
    id: 6,
    categoryId: 2,
    question: 'What is your pets age?',
    answer: 3,
  },
  {
    id: 7,
    categoryId: 2,
    question: 'What type of pet do you have?',
    answer: 'dog',
  },
  {
    id: 8,
    categoryId: 2,
    question: 'What color is you pet?',
    answer: 'Brown',
  },
  {
    id: 9,
    categoryId: 3,
    question: 'In which country is located?',
    answer: 'Nicaragua',
  },
  {
    id: 10,
    categoryId: 3,
    question: 'What is the population?',
    answer: 6000000,
  },
  {
    id: 11,
    categoryId: 3,
    question: 'How is the weather?',
    answer: 'tropical',
  },
  {
    id: 12,
    categoryId: 3,
    question: 'What is the mayors name?',
    answer: 'Herty Lewites',
  },
];

export default { faqsCategories, faqsQuestions };
