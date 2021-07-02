import React from 'react'
import { AiFillEdit, AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';



const Contact = (props) => {
    
    const { id, name, lastName, phone } = props.data
    const handleDelete = () => {
        // dispatch(deleteContact(id))
        props.checkingModal(true)
        props.getValue(id)


    }

    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{lastName}</td>
                <td>{phone}</td>
                <td><Link to={`/contact/edit/${id}`}><AiFillEdit /></Link></td>
                <td><button 
                className="delete-button" 
                onClick={handleDelete
                
                }><AiOutlineClose /></button></td>
            </tr>
            {props.showingModal&&props.modal}
        </>

    )
}

export default Contact