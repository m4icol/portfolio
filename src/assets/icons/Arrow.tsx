type ArrowProps = {
    className?: string,
    size?: string
}

export default function Arrow({className = "", size = "10"}: ArrowProps){
    return(
        <svg className={`${className}`} width={`${size}`} viewBox="0 0 36 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34 2L18 19L2 2" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}