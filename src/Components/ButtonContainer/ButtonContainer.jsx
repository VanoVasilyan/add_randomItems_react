import { useDispatch } from 'react-redux';
import { addNewItem, sortCard, clearCard } from '../../redux/slices/card';
import './ButtonContainer.css';

const ButtonContainer = () => {
    const dispatch = useDispatch();

    return <div className='button-control'>
        <button className='btn' onClick={() => dispatch(addNewItem())}>Add Card</button>
        <button className='btn' onClick={() => dispatch(sortCard())}>Sort List</button>
        <button className='btn' onClick={() => dispatch(clearCard())}>Clear List</button>
    </div>
};

export default ButtonContainer
