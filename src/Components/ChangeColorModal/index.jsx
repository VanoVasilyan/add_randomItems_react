import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { GlobalContext } from '../../context';
import './Modal.css';
import { changeItemColor } from '../../redux/slices/card';

const ChangeColorModal = () => {
    Modal.setAppElement('#root');
    const dispatch = useDispatch();
    const card = useSelector(state => state.cardReducer.card);
    const { showModal, setShowModal } = GlobalContext();
    const [changedItemProps, setChangedItemProps] = useState({
        bgColor: '',
        index: ''
    });
    const [requiredForNumber, setRequiredForNumber] = useState(false);
    const [requiredForColor, setRequiredForColor] = useState(false);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            position: 'relative',
            width: '350px'
        },
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!changedItemProps.bgColor) {
            setRequiredForColor(true)
        }

        if (!changedItemProps.index) {
            setRequiredForNumber(true)
        }

        if (changedItemProps.bgColor && changedItemProps.index) {
            dispatch(changeItemColor({ ...changedItemProps, index: changedItemProps.index - 1 }))
            setShowModal(false)
        }
    }

    return (
        <Modal
            isOpen={showModal}
            onRequestClose={() => setShowModal(false)}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <button onClick={() => setShowModal(false)} className='delete-btn-modal'><i className="fa-solid fa-circle-xmark"></i></button>
            <form onSubmit={handleSubmit}>
                <div className='form-fileds'>
                    <div>
                        <label>&#8470; : <input className='numInput' type='number' min={0} max={card.length} value={changedItemProps.itemNumber} onChange={(e) => { setChangedItemProps({ ...changedItemProps, index: e.target.value }); setRequiredForNumber(false) }} /></label>
                        {requiredForNumber && <p className='err-msg'>Please set Item Number *</p>}
                    </div>
                    <div>
                        <label>Color : <input className='colorInput' type='color' value={changedItemProps.bgColor} onChange={(e) => { setChangedItemProps({ ...changedItemProps, bgColor: e.target.value }); setRequiredForColor(false) }} /></label>
                        {requiredForColor && <p className='err-msg'>Please select a new color *</p>}
                    </div>
                </div>
                <input type="submit" className='submit-btn' />
            </form>
        </Modal>
    )
}

export default ChangeColorModal
