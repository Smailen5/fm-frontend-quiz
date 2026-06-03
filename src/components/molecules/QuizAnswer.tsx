import { ButtonAnswer } from "../index";
import { IconsAnswer } from "../index";

type Questions = {
  question: string;
  options: string[];
  answer: string;
};

type QuizAnswerProps = {
  question: Questions;
  isAnswerSubmitted: boolean;
  selectedAnswer: string | null;
  setSelectedAnswer: React.Dispatch<React.SetStateAction<string | null>>;
};

export const QuizAnswer: React.FC<QuizAnswerProps> = ({
  question,
  isAnswerSubmitted,
  selectedAnswer,
  setSelectedAnswer,
}) => {
  return (
    <>
      {question.options.map((option, optionIndex) => {
        let buttonStyle = "";
        let indexStyle = "";
        let showCorrectIcon = false;
        let showErrorIcon = false;
        // se la risposta e stata inviata
        if (isAnswerSubmitted) {
          if (option === question.answer) {
            console.log(option === question.answer);
            // stile per la risposta corretta
            buttonStyle = "border-2 border-green";
            indexStyle = "bg-green text-pureWhite";
            showCorrectIcon = true;
          } else if (option === selectedAnswer && option !== question.answer) {
            // stile per la risposta errata
            buttonStyle = "border-2 border-red";
            indexStyle = "bg-red text-pureWhite";
            showErrorIcon = true;
          }
        }
        return (
          <ButtonAnswer
            key={optionIndex}
            optionIndex={optionIndex}
            option={option}
            onClick={() => setSelectedAnswer(option)}
            isSelected={selectedAnswer === option}
            classButton={buttonStyle}
            classIndex={indexStyle}
          >
            <IconsAnswer
              showCorrectIcon={showCorrectIcon}
              showErrorIcon={showErrorIcon}
            />
          </ButtonAnswer>
        );
      })}
    </>
  );
};
