import { GlobalContext } from '../../context';
import './ButtonContainer.css';

const ButtonContainer = () => {
    const { AddNewItem, sortList, clearList } = GlobalContext()

    return <div className='button-control'>
        <button className='btn' onClick={AddNewItem}>Add Card</button>
        <button className='btn' onClick={sortList}>Sort List</button>
        <button className='btn' onClick={clearList}>Clear List</button>
    </div>
};

export default ButtonContainer
