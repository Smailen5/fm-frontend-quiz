import { IconQuiz } from "../index";

type ButtonProps = {
  title: string;
  icon: string;
};

export const Button: React.FC<ButtonProps> = ({ icon, title }) => {
  return (
    <button className="w-full rounded-xl bg-pureWhite p-3 font-bold text-darkNavy md:rounded-3xl lg:p-5 dark:bg-navy">
      <IconQuiz icon={icon} title={title} />
    </button>
  );
};
