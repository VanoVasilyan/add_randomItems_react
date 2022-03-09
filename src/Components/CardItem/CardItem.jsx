import { useState, useEffect } from 'react'
import { GlobalContext } from '../../context'
import './CardItem.css'


const CardItem = ({ id, num, bgColor }) => {
    const { removeItem } = GlobalContext()
    const [whiteColor, setWhiteColor] = useState(false)


    const backGroundList = bgColor.split(',').map(item => Number(item))


    useEffect(() => {
        if (backGroundList.every(item => item <= 100)) {
            setWhiteColor(true)
        }
    }, [backGroundList])


    return <div
        className={`${whiteColor && 'white-color'} card-item`}
        style={{ backgroundColor: `rgb(${bgColor})` }}>
        {num}
        <button
            onClick={() => removeItem(id)}
            className='delete-btn'
        >X</button>
    </div>

}


export default CardItem