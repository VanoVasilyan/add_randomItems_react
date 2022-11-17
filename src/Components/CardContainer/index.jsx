import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { GlobalContext } from '../../context';
import CardItem from '../CardItem';
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
        {!card?.length && <h1 className='list-mess'>The list is empty, add new card</h1>}
        <div className='card-container'>
            {card?.map((elem, idx) => {
                return <CardItem key={elem.id} idx={idx} elem={elem} />
            })}
        </div>
    </div>
};

export default CardContainer
