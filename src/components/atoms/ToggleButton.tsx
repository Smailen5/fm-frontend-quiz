import { iconDarkMode } from "../../assets/images";
import { useDarkModeContext } from "../../utils/darkModeContext";

export const ToggleButton: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkModeContext();
  const { IconSun, IconMoon } = darkMode
    ? iconDarkMode.light
    : iconDarkMode.dark;

  return (
    <label className="inline-flex cursor-pointer items-center gap-2 md:gap-4">
      <span>
        <IconSun aria-label="icon sun" className="size-5 md:size-7" />
      </span>
      <input
        type="checkbox"
        className="peer sr-only"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
      <div className="bg-purple after:bg-pureWhite peer relative h-6 w-10 rounded-full after:absolute
      after:start-[4px] after:top-[4px] after:h-4 after:w-4 after:rounded-full after:transition-all
      after:content-[''] peer-checked:after:translate-x-full peer-focus:outline-none md:h-8 md:w-14
      md:after:h-6 md:after:w-6 rtl:peer-checked:after:-translate-x-full" />
      <span>
        <IconMoon aria-label="icon moon" className="size-5 md:size-7" />
      </span>
    </label>
  );
};
