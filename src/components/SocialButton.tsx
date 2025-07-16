import Arrow from "../assets/icons/Arrow";
import Github from "../assets/icons/GitHub";
import Link from "../assets/icons/Link";

type Options = "github" | "link" | "arrow"

type SocialButtonProps = {
  text: string;
  href?: string;
  download?: boolean | string;
  target?: string;
  Options?: Options
};

export default function SocialButton({
  text = "",
  href = "#",
  download,
  target = "",
  Options = "arrow"
}: SocialButtonProps) {
  return (
    <a
      href={href}
      className="rounded-full items-center flex gap-3 flex-row border text-xs text-DARK-subtext hover:text-DARK-text border-DARK-text/20 py-2 pl-4 pr-2.5 bg-DARK-button/60"
      target={target}
      rel="noopener noreferrer"
      {...(download ? { download } : {})}
    >
      {text}
      <div className="h-5 w-5 pt-0.5 flex justify-center items-center bg-DARK-text rounded-full">
      {
        Options === "arrow" ? (
          <Arrow />
        ) : Options === "github" ? (
          <Github />
        ) : Options === "link" ? (
          <Link />
        ) : null
      }

        
        
      </div>
    </a>
  );
}
