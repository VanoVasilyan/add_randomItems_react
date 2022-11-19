import { useButtonContainer } from './useButtonContainer';
import './ButtonContainer.css';

const ButtonContainer = () => {
    const { addNewCard, sortMainCard, clearMainCard, showModal, mainCardLength } = useButtonContainer();

    return <div className='button-control'>
        <button className='btn add' onClick={addNewCard}>Add Card</button>
        <button className='btn' onClick={sortMainCard}>Sort List</button>
        <button className='btn clear' onClick={clearMainCard}>Clear List</button>
        <button className='btn' disabled={!mainCardLength} onClick={showModal}>Change Item Color</button>
    </div>
}

export default ButtonContainer;
