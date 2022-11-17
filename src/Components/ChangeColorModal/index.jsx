import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import { GlobalContext } from '../../context';

const ChangeColorModal = () => {
    Modal.setAppElement('#root');
    const card = useSelector(state => state.cardReducer.card);
    const { showModal, setShowModal } = GlobalContext();
    const [changedItemProps, setChangedItemProps] = useState({
        color: '',
        itemNumber: ''
    })

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (changedItemProps.color && changedItemProps.itemNumber) {
            if (!card[Number(changedItemProps.itemNumber - 1)]) {
                alert('Please set valid item number')
                return
            }
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
            <button onClick={() => setShowModal(false)}>X</button>
            <form onSubmit={handleSubmit}>
                <label>Item Number:</label><input id='num' type='number' value={changedItemProps.itemNumber} onChange={(e) => setChangedItemProps({ ...changedItemProps, itemNumber: e.target.value })} />
                <label htmlFor="color">Color:</label><input id='color' type='text' defaultValue='' onChange={(e) => setChangedItemProps({ ...changedItemProps, color: e.target.value })} />
                <input type="submit" />
            </form>
        </Modal>
    )
}

export default ChangeColorModal
