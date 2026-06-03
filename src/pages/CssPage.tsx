import { Navbar, QuizForm } from "../components";
import { useQuiz } from "../utils/useQuiz";

export const CssPage = () => {
  const quiz = useQuiz({ selectedQuiz: "CSS" });

  if (!quiz) {
    return <div>Quiz not found</div>;
  }
  
  const { title, icon, questions } = quiz;

  return (
    <>
      <Navbar quizzes={{ title: title, icon: icon }} />
      <QuizForm title={title} icon={icon} questions={questions} />
    </>
  );
};
