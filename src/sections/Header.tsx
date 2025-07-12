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
            url: "/#about-me",
        },
        {
            title: "Contacto",
            label: "Contact-navigation",
            url: "/#contact",
        },
    ];

    return(
        <header className="w-screen flex justify-center fixed top-0 left-0 z-10 bg-DARK-background py-3 gradient-line">
            <ul className="flex justify-evenly items-center gap-12 gradient-menu pt-2 pb-1.5 px-10 border-1 border-DARK-text/10 rounded-lg">
                {
                     navItems.map((item) => (
                        <a className="hover:text-DARK-text text-DARK-subtext text-sm" aria-label={item.label} href={item.url}>
                            {item.title}
                        </a>
                    ))
                }
            </ul>
        </header>
    )
}