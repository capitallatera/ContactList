import React from 'react'
import { AiFillEdit, AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {deleteContact} from '../actions/action'


const Contact = (props) => {
    const dispatch=useDispatch()
    const {id, name, lastName, phone } = props.data
    const handleDelete=()=>{
        console.log("Working")
        dispatch(deleteContact(id))
    }

    return (
                <tr>
                <td>{name}</td>
                <td>{lastName}</td>
                <td>{phone}</td>
                <td><Link to={`/contact/edit/${id}`}><AiFillEdit /></Link></td>
                <td><button className="delete-button" onClick={()=>handleDelete()}><AiOutlineClose /></button></td>
            </tr>
        
    )
}

export default Contact