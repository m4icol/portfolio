type ArrowProps = {
    className?: string,
    color?: string,
    size?: string
}

export default function Arrow({className = "", color = "black", size = "10"}: ArrowProps){
    return(
        <svg className={`${className}`} width={`${size}`} viewBox="0 0 36 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34 2L18 19L2 2" stroke={`${color}`} stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}