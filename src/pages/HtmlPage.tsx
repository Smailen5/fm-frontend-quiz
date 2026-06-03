import { Navbar, QuizForm } from "../components";
import { useSearchQuiz } from "../utils/quizUtils";

export const HtmlPage = () => {
  const quiz = useSearchQuiz({ selectedQuiz: "HTML" });

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
