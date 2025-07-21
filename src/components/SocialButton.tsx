import Arrow from "../assets/icons/Arrow";
import Github from "../assets/icons/GitHub";
import Link from "../assets/icons/Link";
import Document from "../assets/icons/Document";

type Options = "github" | "link" | "arrow" | "document"

type SocialButtonProps = {
  text: string;
  href?: string;
  download?: boolean | string;
  target?: string;
  Options?: Options;
  label?: string;
  className?: string;
};

export default function SocialButton({
  text = "",
  href = "#",
  download,
  target = "",
  Options = "arrow",
  label = "[read more...]",
  className = ""
}: SocialButtonProps) {
  return (
    <a
      href={href}
      className={` ${className} items-center justify-between flex gap-3 flex-row text-sm py-2.5 px-4.5
       text-LIGHT-text hover:text-LIGHT-subtext 
       dark:text-DARK-subtext dark:hover:text-DARK-text 
       border-1 border-LIGHT-subtext/20 dark:border-DARK-subtext/30 rounded-xl`}
      target={target}
      rel="noopener noreferrer"
      aria-label={label}
      {...(download ? { download } : {})}
    >
      
        {
          Options === "arrow" ? (
            <Arrow className="dark:text-DARK-text text-LIGHT-text" />
          ) : Options === "github" ? (
            <Github className="dark:text-DARK-text text-LIGHT-text" />
          ) : Options === "link" ? (
            <Link className="dark:text-DARK-text text-LIGHT-text" />
          ) : Options === "document" ? (
            <Document className="dark:text-DARK-text text-LIGHT-text"/>
          ) : null
        }

      {text}
    </a>
  );
}
