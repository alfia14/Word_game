const words= [
 
{
  word: "doctor",
  hint: "They provide medical care when you're unwell."
  },
  {
  word: "teacher",
  hint: "They impart valuable knowledge and educate you."
  },
  {
  word: "painter",
  hint: "Their artistry brings beautiful pictures to life."
  },
  {
  word: "pilot",
  hint: "They skillfully navigate and fly airplanes."
  },
  {
  word: "gardener",
  hint: "They tend to and nurture flowers and plants."
  },
  {
  word: "chef",
  hint: "They professionally prepare delicious meals."
  },
  {
  word: "carpenter",
  hint: "They possess carpentry skills to construct furniture."
  },
  {
  word: "policeofficer",
  hint: "They enforce the law and maintain public safety."
  },
  {
  word: "nurse",
  hint: "They provide care and assistance in medical settings."
  },
  {
  word: "mechanic",
  hint: "They repair and maintain vehicles and machinery."
  },
  {
  word: "lawyer",
  hint: "They provide legal advice and represent clients in court."
  },
  {
  word: "photographer",
  hint: "They capture moments and create visual art through photography."
  },
  {
  word: "electrician",
  hint: "They install and repair electrical systems and wiring."
  },
  {
  word: "plumber",
  hint: "They install and repair plumbing systems and fixtures."
  },
  {
  word: "actor",
  hint: "They act in movies."
  }
 


];

function randomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

export default words;

