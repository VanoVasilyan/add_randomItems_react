import { useEffect, useRef } from 'react';
import { FaChevronCircleUp } from 'react-icons/fa';
import { GlobalContext } from '../../context';
import './Footer.css';

const Footer = () => {
    const { windowScrollToUp, windowSize: { yCoord } } = GlobalContext();
    const buttonRef = useRef();

    const currentYear = new Date().getFullYear();

    useEffect(() => {
        if (yCoord) {
            buttonRef.current.style.display = 'block'
        } else {
            buttonRef.current.style.display = 'none'
        }
    }, [yCoord])

    return (
        <>
            <button
                ref={buttonRef}
                onClick={windowScrollToUp}
                className='up-btn'
            >
                <FaChevronCircleUp size={50} />
            </button>
            <footer>
                <p>{currentYear}</p>
            </footer>
        </>
    )
}

export default Footer;
