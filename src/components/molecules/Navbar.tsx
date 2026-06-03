import { Link } from "react-router-dom";
import { IconQuiz, ToggleButton } from "../index";

type NavbarProps = {
  quizzes?: { title: string; icon: string };
};
export const Navbar: React.FC<NavbarProps> = ({ quizzes }) => {
  // navbar nelle pagine quiz
  if (quizzes) {
    return (
      <header className="flex items-center justify-between">
        <Link to={"/"}>
          <IconQuiz title={quizzes.title} icon={quizzes.icon} />
        </Link>
        <ToggleButton />
      </header>
    );
  }
  return (
    <header className="mx-auto flex max-w-screen-xl justify-end py-2">
      <nav className="">
        <ToggleButton />
      </nav>
    </header>
  );
};
