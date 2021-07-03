import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../actions/action'


const Modal = (props) => {
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteContact(props.putValue))
        // props.checkingModal(false)
        props.isOnFun(false)

    }

    return (
        <div className="modal" >
            <div className="confirm-container" >
                <div className="confirm-text" ><p> Do you want to proceed with this operation? </p></div>
                <div className="confirm-button" >
                    <button
                        className="no-button"
                        onClick={() => props.isOnFun(false)}>No</button>
                    <button onClick={handleDelete} className="yes-button" >Yes</button>
                </div>
            </div>
        </div>
    )
}

export default Modal