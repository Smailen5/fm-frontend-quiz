import { twMerge } from "tailwind-merge";
import { indexToLetters } from "../../utils/indexUtils";

type ButtonAnswerProps = {
  option: string;
  onClick: () => void;
  isSelected?: boolean;
  classButton?: string;
  classIndex?: string;
  optionIndex: number;
  children?: React.ReactNode;
};

export const ButtonAnswer: React.FC<ButtonAnswerProps> = ({
  option,
  onClick,
  classButton,
  classIndex,
  optionIndex,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        `bg-pureWhite text-darkNavy focus:border-purple dark:bg-navy group flex w-full items-center
         gap-4 rounded-xl p-3 font-bold transition-none focus:border-2 md:rounded-3xl md:gap-8
         lg:p-5 border-2 group`,
        `${classButton}`,
      )}
    >
      {/* Indice domanda */}
      <span
        className={twMerge(
          `bg-lightGrey group-focus:bg-purple group-focus:text-pureWhite flex size-10 min-w-10
           items-center justify-center rounded-md transition-none md:size-14 md:min-w-14
           md:rounded-xl text-3xl font-medium text-darkNavy lg:group-hover:bg-purpleUltraLight lg:group-hover:text-purple`,
          `${classIndex}`,
        )}
      >
        {indexToLetters(optionIndex)}
      </span>
      {/* Domanda */}
      <div className="flex w-full items-center justify-between">
        <p className="text-darkNavy dark:text-pureWhite text-sm tracking-widest md:text-xl xl:text-2xl
           font-medium">
          {option}
        </p>
        {children}
      </div>
    </button>
  );
};
