import { iconMaps } from "../../assets/images/";

type IconQuizProps = {
  title: string;
  icon: keyof typeof iconMaps;
};

// Devo inserire manualmente i colori, al momento non riesco a recuperare il fill degli svg
const iconsBackground: { [key: string]: string } = {
  IconCss: "#E0FDEF",
  IconHtml: "#FFF1E9",
  IconJavascript: "#EBF0FF",
  IconAccessibility: "#F6E7FF",
};

export const IconQuiz: React.FC<IconQuizProps> = ({ title, icon }) => {
  const IconComponent = iconMaps[icon];
  const iconBackground = iconsBackground[icon] || "#ffffff";

  return (
    <>
      {IconComponent ? (
        <div className="flex items-center gap-4 md:gap-8">
          <IconComponent
            style={{ background: iconBackground }}
            className="size-11 rounded-md p-2 md:size-14 md:rounded-xl lg:size-16"
            aria-label={`${title} icon`}
          />
          {title && (
            <h2 className="dark:text-pureWhite text-darkNavy font-rubik text-xl font-semibold
             tracking-wide md:text-3xl md:font-normal">
              {title}
            </h2>
          )}
        </div>
      ) : (
        <span>Icon not found</span>
      )}
    </>
  );
};
