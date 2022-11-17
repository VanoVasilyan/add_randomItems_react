import { useContext, useEffect, useState, createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [mainBackgroundColor, setMainBackgroundColor] = useState('inherit');
    const [windowSize, setWindowSize] = useState({ yCoord: 0 });
    const [showModal, setShowModal] = useState(false);

    const scrollDown = () => {
        setWindowSize({ yCoord: window.scrollY })
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollDown)
        return () => {
            window.removeEventListener('scroll', scrollDown)
        }
    }, [])

    const windowScrollToUp = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    return <AppContext.Provider value={{
        mainBackgroundColor,
        windowSize,
        showModal,
        setShowModal,
        windowScrollToUp,
        setMainBackgroundColor
    }}>
        {children}
    </AppContext.Provider>
};

const GlobalContext = () => {
    return useContext(AppContext)
};

export { AppProvider, GlobalContext }
