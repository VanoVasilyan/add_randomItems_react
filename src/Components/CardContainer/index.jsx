import CardItem from '../CardItem/CardItem';
import { GlobalContext } from '../../context';
import { useEffect } from 'react';
import './CardContainer.css';

const CardContainer = () => {
    const { card, isCardEmpty, mainBackgroundColor, setMainBackgroundColor } = GlobalContext();

    useEffect(() => {
        if (!card.length) {
            setMainBackgroundColor('')
        }
    }, [card, setMainBackgroundColor])

    return <div className='main-card-cont'
        style={{ backgroundColor: isCardEmpty ? 'inherit' : mainBackgroundColor }}
    >
        {isCardEmpty && <h1 className='list-mess'>the list is empty</h1>}
        <div className='card-container'>
            {card.map((elem) => {
                return <CardItem key={elem.id} {...elem} />
            })}
        </div>
    </div>
}

export default CardContainer
