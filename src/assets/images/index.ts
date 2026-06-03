// Icon Quiz
import IconAccessibility from "./icon-accessibility.svg?react";
import IconCss from "./icon-css.svg?react";
import IconHtml from "./icon-html.svg?react";
import IconJavascript from "./icon-js.svg?react";
// Icon Dark mode
import IconMoonDark from "./icon-moon-dark.svg?react";
import IconMoonLight from "./icon-moon-light.svg?react";
import IconSunDark from "./icon-sun-dark.svg?react";
import IconSunLight from "./icon-sun-light.svg?react";
// Icon Answer
import IconCorrect from "./icon-correct.svg";
import IconError from "./icon-error.svg";
// Background image
import mobileLight from "./pattern-background-mobile-light.svg";
import tabletLight from "./pattern-background-tablet-light.svg";
import desktopLight from "./pattern-background-desktop-light.svg";
import mobileDark from "./pattern-background-mobile-dark.svg";
import tabletDark from "./pattern-background-tablet-dark.svg";
import desktopDark from "./pattern-background-desktop-dark.svg";

type IconComponents = {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const iconMaps: IconComponents = {
  IconCss,
  IconHtml,
  IconJavascript,
  IconAccessibility,
};

type IconDarkMode = {
  light: {
    [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
  };
  dark: {
    [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
  };
};

export const iconDarkMode: IconDarkMode = {
  light: {
    IconSun: IconSunLight,
    IconMoon: IconMoonLight,
  },
  dark: {
    IconSun: IconSunDark,
    IconMoon: IconMoonDark,
  },
};

export const iconAnswer = {
  IconCorrect,
  IconError,
};

export const backgroundImage = {
  mobileLight,
  tabletLight,
  desktopLight,
  mobileDark,
  tabletDark,
  desktopDark,
};
