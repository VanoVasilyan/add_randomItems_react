import { useEffect, useRef } from "react";
import { FaChevronCircleUp } from "react-icons/fa";
import { GlobalContext } from "../../context";
import './Footer.css'

const Footer = () => {
    const { windowScrollToUp, windowSize: { yCoord } } = GlobalContext()
    const buttonRef = useRef()

    useEffect(() => {
        yCoord ?
            buttonRef.current.style.display = 'block' :
            buttonRef.current.style.display = 'none'
    }, [yCoord])

    return (<>
        <button
            ref={buttonRef}
            onClick={windowScrollToUp}
            className="up-btn"
        ><FaChevronCircleUp size={50} /></button>
        <footer>
            <p>Its Done!</p>
        </footer>
    </>)
}


export default Footer


