import { iconAnswer } from "../../assets/images/"

type ButtonSubmitProps = {
  isAnswerSubmitted: boolean;
  handleSubmit: () => void;
  handleNext: () => void;
  noSelectedAnswer: boolean;
};

export const ButtonSubmit: React.FC<ButtonSubmitProps> = ({
  isAnswerSubmitted,
  handleSubmit,
  handleNext,
  noSelectedAnswer,
}) => {
  return (
    <>
      {!isAnswerSubmitted ? (
        <button
          onClick={handleSubmit}
          className="bg-purple text-pureWhite rounded-xl p-4 font-medium tracking-wider 
          md:text-2xl md:rounded-3xl py-6 mt-4 lg:hover:bg-purpleLight"
        >
          Submit Answer
        </button>
      ) : (
        <button
          onClick={handleNext}
          className="bg-purple text-pureWhite rounded-xl p-4 font-medium tracking-wider 
          md:text-2xl md:rounded-3xl py-6 mt-4"
        >
          Next Question
        </button>
      )}
      {noSelectedAnswer && (
        <>
        <div className="flex items-center justify-center gap-2">

        <img src={iconAnswer.IconError} alt="icon error" />
        <p className="text-red dark:text-pureWhite md:text-xl lg:text-2xl">Please select an answer</p>
        </div>
        </>
      )}
    </>
  );
};
