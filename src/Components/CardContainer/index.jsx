import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { GlobalContext } from '../../context';
import CardItem from '../CardItem/CardItem';
import './CardContainer.css';

const CardContainer = () => {
    const card = useSelector(state => state.cardReducer.card);
    const { mainBackgroundColor, setMainBackgroundColor } = GlobalContext();

    useEffect(() => {
        if (!card.length) {
            setMainBackgroundColor('')
        }
    }, [card, setMainBackgroundColor])


    return <div className='main-card-cont'
        style={{ backgroundColor: !card?.length ? 'inherit' : mainBackgroundColor }}
    >
        {!card?.length && <h1 className='list-mess'>the list is empty</h1>}
        <div className='card-container'>
            {card?.map((elem) => {
                return <CardItem key={elem.id} {...elem} />
            })}
        </div>
    </div>
}

export default CardContainer
