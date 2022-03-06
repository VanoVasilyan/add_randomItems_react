import CardItem from '../CardItem'
import './CardContainer.css'
import { GlobalContext } from '../../context';


const CardContainer = () => {
    const { card, isCardEmpty } = GlobalContext()
    return <div className='main-card-cont'>
        {isCardEmpty && <h1 className='list-mess'>the list is empty</h1>}
        <div className='card-container'>
            {card.map((elem) => {
                return <CardItem key={elem.id} {...elem} />
            })}
        </div>
    </div>
}


export default CardContainer