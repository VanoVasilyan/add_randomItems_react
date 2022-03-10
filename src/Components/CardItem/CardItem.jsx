import { useState, useEffect } from 'react'
import { GlobalContext } from '../../context'
import './CardItem.css'


const CardItem = ({ id, num, bgColor }) => {
    const { removeItem, setMainBackgroundColor } = GlobalContext()
    const [whiteColor, setWhiteColor] = useState(false)

    const backGroundList = bgColor.split(',').map(item => Number(item))

    useEffect(() => {
        if (backGroundList.some(item => item <= 80)) {
            setWhiteColor(true)
        }
    }, [backGroundList])


    return <div
        className={`${whiteColor ? 'white-color card-item' : 'card-item'}`}
        style={{ backgroundColor: `rgb(${bgColor})` }}
    >
        <div
            className='count-div'
            onClick={() => setMainBackgroundColor(`rgb(${bgColor})`)}
        >{num}</div>
        <button
            onClick={() => removeItem(id)}
            className='delete-btn'
        >X</button>
    </div>

}


export default CardItem