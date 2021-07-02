import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../actions/action'


const ModalSearch = (props) => {
console.log("Modal Search",props.data)

    return (
        <div className="modal-search-container" >
           Checking Modal Search
        </div>
    )
}

export default ModalSearch