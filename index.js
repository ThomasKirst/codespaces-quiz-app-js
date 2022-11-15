import { nanoid } from "nanoid";

const questions = [
  {
    id: 0,
    question: "Das ist Frage eins",
    answer: "Antwort eins",
    categories: ["eins", "zwei", "drei"],
    bookmarked: false,
  },
  {
    id: 2,
    question: "Das ist Frage zwei",
    answer: "Anwort Zwei",
    categories: ["eins", "zwei", "drei"],
    bookmarked: true,
  },

  {
    id: 4,
    question:
      "Dies ist eine sehr lange Frage, um zu testen, ob und wie die Darstellung einer solchen letztlich dem Gesamtstyle schadet.",
    answer:
      "Die Antwort wiederum ist im Vergleich zu Frage recht kurz geraten. Belassen wir es doch dabei!",
    categories: ["eins", "zwei", "drei"],
    bookmarked: false,
  },
];

const bookmarks = questions.filter((question) => question.bookmarked);
// console.log(bookmarks, "BOOKMARKS";

const newQuestions = deleteQuestion(3);

function deleteQuestion(id) {
  const remainingQuestions = questions.filter((question) => question.id !== id);
  return remainingQuestions;
}

// console.log(createQuestion('Was ist die Frage?', 'Das ist die Antwort'));

function createQuestion(question, answer) {
  return {
    id: nanoid(),
    question,
    answer,
  };
}

function toggleBookmarkFlag(questions, questionId) {
  questions.forEach((question) => {
    if (question.id === questionId) {
      question.bookmarked = !question.bookmarked;
    }
  });

  return questions;
}

console.log(toggleBookmarkFlag(questions, 1));
console.log(toggleBookmarkFlag(questions, 2));

