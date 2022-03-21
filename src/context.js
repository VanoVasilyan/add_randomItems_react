import React, { useContext, useEffect, useState } from "react";
import uniqId from 'uniqid'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [card, setCard] = useState([])
    const [isCardEmpty, setisCardEmpty] = useState(true)
    const [mainBackgroundColor, setMainBackgroundColor] = useState('')
    const [windowSize, setWindowSize] = useState({ yCoord: 0 })
    const id = uniqId()

    const giveRandomBackground = () => {
        const r = Math.trunc(Math.random() * 255)
        const g = Math.trunc(Math.random() * 255)
        const b = Math.trunc(Math.random() * 255)
        return `${r},${g},${b}`
    }

    const AddNewItem = () => {
        const randomColor = giveRandomBackground()
        const randomNum = Math.trunc(Math.random() * 1000) + 1

        const obj = {
            id,
            num: randomNum,
            bgColor: randomColor
        }

        setCard([...card, obj])
        setisCardEmpty(false)
    }

    const removeItem = (id) => {
        const newArr = card.filter(item => item.id !== id)
        setCard([...newArr])
        if (newArr.length === 0) {
            setisCardEmpty(true)
        }
    }

    const sortList = () => {
        const compare = (a, b) => {
            if (a.num < b.num) {
                return -1;
            }
            if (a.num > b.num) {
                return 1;
            }
            return 0;
        }
        const newSortedArray = card.sort(compare);

        setCard([...newSortedArray])
    }

    const clearList = () => {
        setisCardEmpty(true)
        setCard([])
    }

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
        card,
        isCardEmpty,
        mainBackgroundColor,
        windowSize,
        windowScrollToUp,
        clearList,
        sortList,
        removeItem,
        AddNewItem,
        setisCardEmpty,
        setMainBackgroundColor
    }}>
        {children}
    </AppContext.Provider>
}

const GlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, GlobalContext }