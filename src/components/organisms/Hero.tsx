import quizzesData from "../../data.json";
import { ButtonsSection } from "../index";

type Quiz = {
  title: string;
  icon: string;
  questions: {
    question: string;
    options: string[];
    answer: string;
  }[];
};

export const Hero = () => {
  const { quizzes }: { quizzes: Quiz[] } = quizzesData;
  return (
    <section className="flex flex-col gap-10 pt-6 md:gap-14 md:pt-12 lg:grid lg:grid-cols-2 lg:pt-20">
      <div className="space-y-4 md:space-y-2 lg:space-y-12">
        <h2 className="text-darkNavy dark:text-lightGrey text-4xl font-light md:text-6xl md:leading-tight md:tracking-wider">
          Welcome to the{" "}
          <strong className="font-semibold">Frontend Quiz!</strong>
        </h2>
        <p className="text-greyNavy dark:text-lightBluish italic md:text-xl">
          Pick a subject to get started.
        </p>
      </div>
      <ButtonsSection quizzes={quizzes} />
    </section>
  );
};
