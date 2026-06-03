import { iconAnswer } from "../../assets/images/index";

type IconsAnswerProps = {
  showCorrectIcon: boolean;
  showErrorIcon: boolean;
};
export const IconsAnswer: React.FC<IconsAnswerProps> = ({
  showCorrectIcon,
  showErrorIcon,
}) => {
  return (
    <>
      {showCorrectIcon && (
        <img src={iconAnswer.IconCorrect} alt="icona risposta corretta" />
      )}
      {showErrorIcon && (
        <img src={iconAnswer.IconError} alt="icona risposta sbagliata" />
      )}
    </>
  );
};
