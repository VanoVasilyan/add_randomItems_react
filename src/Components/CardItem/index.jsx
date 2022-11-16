import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { GlobalContext } from '../../context';
import { deleteItem, editItemNumber } from '../../redux/slices/card';
import './CardItem.css';

const CardItem = ({ id, num, bgColor }) => {
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const { setMainBackgroundColor } = GlobalContext();
    const [whiteColor, setWhiteColor] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [newValue, setNewValue] = useState('')

    const backGroundList = bgColor.split(',').map(item => Number(item));

    useEffect(() => {
        if (backGroundList.some(item => item <= 80)) {
            setWhiteColor(true)
        }
    }, [backGroundList])

    useEffect(() => {
        if (inputRef.current) {
            inputRef?.current.focus()
        }
    }, [showForm])

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowForm(false)
        dispatch(editItemNumber({
            id,
            num: newValue
        }))
    }

    return <div
        className={`${whiteColor ? 'white-color card-item' : 'card-item'}`}
        style={{ backgroundColor: `rgb(${bgColor})` }}
        onBlur={() => setShowForm(false)}
    >
        <div
            className='count-div'
            onClick={() => { setMainBackgroundColor(`rgb(${bgColor})`); setShowForm(true) }}
        >
            {showForm ? (
                <form onSubmit={handleSubmit}>
                    <input type="text" className='inputForChangeNumber' ref={inputRef} onChange={(e) => setNewValue(e.target.value)} />
                </form>
            ) : (
                <span>{num}</span>
            )}
        </div>
        <button
            onClick={() => dispatch(deleteItem(id))}
            className='delete-btn'
        ><i className="fa-solid fa-circle-xmark"></i></button>
    </div>
};

export default CardItem
