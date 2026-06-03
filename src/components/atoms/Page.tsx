import { useDarkModeContext } from "../../utils/darkModeContext";
import { backgroundImage } from "../../assets/images";

type PageProps = {
  children: React.ReactNode;
};
export const Page: React.FC<PageProps> = ({ children }) => {
  const { darkMode } = useDarkModeContext();
  const {
    mobileLight,
    tabletLight,
    desktopLight,
    mobileDark,
    tabletDark,
    desktopDark,
  } = backgroundImage;

  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        {/* colore di sfondo */}
        <div className="absolute inset-0 z-0 bg-lightGrey dark:bg-darkNavy" />
        <picture className="absolute z-0">
          {/* Tema chiaro/scuro - desktop */}
          <source
            srcSet={darkMode ? desktopDark : desktopLight}
            media="(min-width: 1024px)"
            className="block dark:hidden"
          />
          {/* Tema chiaro/scuro - tablet */}
          <source
            srcSet={darkMode ? tabletDark : tabletLight}
            media="(min-width: 768px)"
            className="block dark:hidden"
          />
          {/* Tema chiaro/scuro - mobile */}
          <source
            srcSet={darkMode ? mobileDark : mobileLight}
            media="(max-width: 767px)"
            className="block dark:hidden"
          />
          {/* Fallback per browser senza supporto <picture> */}
          <img
            src={darkMode ? mobileDark : mobileLight}
            alt="Background pattern"
            className="relative z-0 lg:h-screen xl:w-screen"
          />
        </picture>
        <section className="relative z-10 mx-auto max-w-screen-xl p-4 font-rubik md:px-14 md:pt-10 lg:pt-20">
          {children}
        </section>
      </div>
    </>
  );
};
