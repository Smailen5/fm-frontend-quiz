import { Link } from "react-router-dom";
import { IconQuiz } from "../index";

type ScoreProps = {
  title: string;
  icon: string;
  correctAnswers?: number;
  questionLength?: number;
};
export const Score: React.FC<ScoreProps> = ({
  title,
  icon,
  correctAnswers,
  questionLength,
}) => {
  return (
    <section className="flex flex-col gap-6 pt-10 md:gap-14 md:pt-14 lg:grid lg:grid-cols-2 lg:pt-20">
      <h2 className="text-darkNavy dark:text-pureWhite text-4xl font-light md:text-6xl md:tracking-wide
      md:leading-tight">
        Quiz completed <br />
        <span className="font-medium">You scored...</span>
      </h2>

      <div className="flex flex-col gap-3 md:gap-8">
        <div className="bg-pureWhite dark:bg-navy flex w-full flex-col items-center gap-4 rounded-xl p-8
        md:gap-8 md:rounded-3xl md:p-12">
          <IconQuiz title={title} icon={icon} />
          {/* Risposte corrette */}
          <span className="text-darkNavy dark:text-pureWhite text-7xl font-medium md:text-9xl">
            {correctAnswers ? correctAnswers : "0"}
          </span>
          <span className="text-greyNavy dark:text-lightBluish md:text-2xl">
            out of {questionLength}
          </span>
        </div>
        <Link to="/">
          <button className="bg-purple text-pureWhite w-full rounded-xl p-3 font-medium md:text-3xl
          md:py-8 md:rounded-3xl">
            Play Again
          </button>
        </Link>
      </div>
    </section>
  );
};
