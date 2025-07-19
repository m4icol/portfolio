type LineProps ={
    classList?: string
}

export default function Line({classList = ""}: LineProps){
    return(
        <svg className={`${classList}`} width="63" height="7" viewBox="0 0 63 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M62.8868 3.5L60 6.38675L57.1132 3.5L60 0.613249L62.8868 3.5ZM60 3.5V4H0V3.5V3H60V3.5Z" fill="url(#paint0_linear_365_700)"/>
            <defs>
            <linearGradient id="paint0_linear_365_700" x1="60" y1="4" x2="0" y2="4" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9E9E9E"/>
            <stop offset="1" stopColor="#383838"/>
            </linearGradient>
            </defs>
        </svg>
    )
}