import { useDispatch, useSelector } from 'react-redux';
import { addNewItem, sortCard, clearCard } from '../../redux/slices/card';
import { GlobalContext } from '../../context';

export const useButtonContainer = () => {
    const dispatch = useDispatch();
    const mainCard = useSelector(state => state.cardReducer.card);
    const { setIsShowModal } = GlobalContext();

    const addNewCard = () => {
        dispatch(addNewItem());
    };

    const sortMainCard = () => {
        dispatch(sortCard());
    };

    const clearMainCard = () => {
        dispatch(clearCard());
    };

    const showModal = () => {
        setIsShowModal(prev => !prev);
    };

    return {
        addNewCard,
        sortMainCard,
        clearMainCard,
        showModal,
        mainCardLength: Boolean(mainCard?.length)
    };
}
