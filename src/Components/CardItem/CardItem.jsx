import { GlobalContext } from '../../context'
import './CardItem.css'


const CardItem = ({ id, num }) => {
    const { removeItem } = GlobalContext()
    return <div className='card-item'>
        {num}
        <button
            onClick={() => removeItem(id)}
            className='delete-btn'
        >X</button>
    </div>

}


export default CardItem