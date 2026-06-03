import quizzesData from "../data.json";

type Questions = {
  question: string;
  options: string[];
  answer: string;
};

type Quiz = {
  title: string;
  icon: string;
  questions: Questions[];
};

type useQuizProps = {
  selectedQuiz: string;
};

export const useQuiz = ({ selectedQuiz }: useQuizProps) => {
  // Trova il quiz con il titolo HTML
  const quiz = quizzesData.quizzes.find(
    (quiz: Quiz) => quiz.title === selectedQuiz,
  );

  //   restituisce le domande del quiz trovato
  return quiz;
};

// ! ATTENZIONE: useQuiz puo restituire null, controlla sempre se hai la risposta prima di utilizzarla
// ** if (!question) {
// **  return <div>Quiz not found</div>
// ** }
