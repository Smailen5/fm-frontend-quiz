import { Link } from "react-router-dom";
import { Button } from "../index";

type Quiz = {
  title: string;
  icon: string;
  questions: {
    question: string;
    options: string[];
    answer: string;
  }[];
};
export const ButtonsSection = (props: { quizzes: Quiz[] }) => {
  return (
    <section className="flex flex-col gap-4 md:gap-6">
      {props.quizzes.map((quiz) => (
        <Link to={`/${quiz.title.toLowerCase()}-quiz`} key={quiz.title}>
          <Button {...quiz} />
        </Link>
      ))}
    </section>
  );
};
