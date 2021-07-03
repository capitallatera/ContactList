import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillEdit, AiOutlineClose } from 'react-icons/ai'

const ModalSearch = (props) => {
    // console.log("Modal Search", props.data)
    const data = props.data
    const handleDelete=()=>{
        console.log("ModalSearch is working",data.id)
        props.isOnFun(true)
        props.putValueFun(data.id)
    }

    return (
        <div className="modal-search-container" >
            <div className="modal-phone">{data.phone}</div>
            <div className="modal-name">{data.name + " " + data.lastName}</div>
            <div className="modal-button">
                <Link className="sub-modal-button" to={`/contact/edit/${data.id}`}><AiFillEdit /></Link>
                <button className="sub-modal-button" onClick={handleDelete} ><AiOutlineClose /></button>
            </div>
            {props.isOn&&props.model}
        </div>
    )
}

export default ModalSearch