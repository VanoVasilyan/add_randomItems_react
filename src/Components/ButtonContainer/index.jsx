import { useDispatch, useSelector } from 'react-redux';
import { GlobalContext } from '../../context';
import { addNewItem, sortCard, clearCard } from '../../redux/slices/card';
import './ButtonContainer.css';

const ButtonContainer = () => {
    const dispatch = useDispatch();
    const card = useSelector(state => state.cardReducer.card);
    const { setShowModal } = GlobalContext();

    return <div className='button-control'>
        <button className='btn add' onClick={() => dispatch(addNewItem())}>Add Card</button>
        <button className='btn' onClick={() => dispatch(sortCard())}>Sort List</button>
        <button className='btn clear' onClick={() => dispatch(clearCard())}>Clear List</button>
        <button className='btn' disabled={!card?.length} onClick={() => setShowModal(prev => !prev)}>Change Item Color</button>
    </div>
};

export default ButtonContainer
