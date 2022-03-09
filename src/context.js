import React, { useContext,useState } from "react";

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [card, setCard] = useState([])
    const [isCardEmpty, setisCardEmpty] = useState(true)
    

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
            id: Date.now(),
            num: randomNum,
            bgColor: randomColor
        }

        setCard([...card, obj]) 
        setisCardEmpty(false)
    }


    const removeItem = (id) => {
        const newArr = card.filter(item => item.id !== id)
        setCard([...newArr])

        if(newArr.length === 0){
            setisCardEmpty(true)
        }
    }


    const sortList = () => {
        const newElementsSorted = card

        const  compare = ( a, b ) => {
            if ( a.num < b.num ){
              return -1;
            }
            if ( a.num > b.num ){
              return 1;
            }
            return 0;
          }
        const newSortedArray = newElementsSorted.sort( compare );
       
        setCard([...newSortedArray])
    }


    const clearList = () => {
        setisCardEmpty(true)
        setCard([])
    }



    return <AppContext.Provider value={{
        card,
        isCardEmpty,
        clearList,
        sortList,
        removeItem,
        AddNewItem,
        setisCardEmpty
    }}>
        {children}
    </AppContext.Provider>
}


const GlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider,GlobalContext}