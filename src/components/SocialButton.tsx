import Arrow from "../assets/icons/Arrow";

type SocialButtonProps = {
  text: string;
  href?: string;
  download?: boolean | string;
  target?: string;
};

export default function SocialButton({
  text = "",
  href = "#",
  download,
  target = "",
}: SocialButtonProps) {
  return (
    <a
      href={href}
      className="rounded-full items-center flex gap-3 flex-row border text-xs text-DARK-subtext hover:text-DARK-text border-DARK-text/20 py-2 px-4 bg-DARK-button"
      target={target}
      rel="noopener noreferrer"
      {...(download ? { download } : {})}
    >
      {text}
      <div className="h-5 w-5 pt-0.5 flex justify-center items-center bg-DARK-text rounded-full">
        <Arrow />
      </div>
    </a>
  );
}
