export default function Header(){

    const navItems = [
        {
            title: "Inicio",
            label: "Home-navigation",
            url: "/#home",
        },
        {
            title: "Proyectos",
            label: "Projects-navigation",
            url: "/#projects",
        },
        {
            title: "Sobre Mi",
            label: "About-me-navigation",
            url: "/#about",
        },
        {
            title: "Contacto",
            label: "Contact-navigation",
            url: "/#contact",
        },
    ];

    return(
        <header className="w-full flex justify-center fixed top-0 left-0 z-50 py-3 px-1 gradient-line
        bg-LIGHT-background dark:bg-DARK-background ">

            <ul className="flex items-center gap-5 md:gap-10 pt-1 pb-1 px-5 md:px-10 border-1 gradient-menu rounded-lg
            border-DARK-text/10 dark:border-DARK-text/10">
                {
                     navItems.map((item) => (
                        <li>
                            <a className="text-xs
                            hover:text-LIGHT-subtext text-LIGHT-text 
                            dark:hover:text-DARK-text dark:text-DARK-subtext" aria-label={item.label} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </header>
    )
}