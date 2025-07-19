type SkillsPillProps = {
    icon?: React.ReactNode;
    text?: string;
    span?: 1 | 2; // Nueva prop para controlar el span
}

export default function SkillsPill ({icon, text, span = 1}: SkillsPillProps) {
    return(
        <div className={`flex flex-row py-2 opacity-75 px-2.5 border-1 border-LIGHT-subtext/20 dark:border-DARK-subtext/30 rounded-lg items-center gap-2 ${span === 2 ? 'col-span-2' : ''}`}>
            {icon}
            <p className="text-xs text-LIGHT-text dark:text-DARK-subtext">{text}</p>
        </div>
    )
}