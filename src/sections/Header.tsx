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
        <header className="w-full flex justify-center fixed top-0 left-0 z-50 bg-DARK-background py-3 px-1 gradient-line">
            <ul className="flex items-center gap-5 md:gap-12 pt-1 pb-1 px-5 md:px-10 border-1 gradient-menu border-DARK-text/10 rounded-lg">
                {
                     navItems.map((item) => (
                        <li>
                            <a className="hover:text-DARK-text text-DARK-subtext text-xs" aria-label={item.label} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </header>
    )
}