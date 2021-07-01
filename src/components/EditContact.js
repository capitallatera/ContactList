import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContact, updateContact } from '../actions/action'
import { useParams } from "react-router-dom"
import { useHistory } from 'react-router-dom'

const EditContact = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhoneNo] = useState()
    const fetchData = useSelector((state) => state.contactReducer.contact)
    let history=useHistory()
    const handleUpdate = (e) => {
        e.preventDefault()
        const update_contact=Object.assign(fetchData,{
            name:name,
            lastName:lastName,
            phone:phone, 
        })
        // console.log(update_contact)
        dispatch(updateContact(update_contact))
        history.push("/")

    }

    useEffect(() => {
        dispatch(getContact(id))
            if (fetchData != null) {
            setName(fetchData.name)
            setLastName(fetchData.lastName)
            setPhoneNo(fetchData.phone)
        }
        // eslint-disable-next-line
    }, [fetchData])
    return (
        <div className="add-contact-container" >
            <form onSubmit={(e) => handleUpdate(e)}>
                <input type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} />
                <input type="text" placeholder="Enter your last name" value={lastName} onChange={e => setLastName(e.target.value)} />
                <input type="text" placeholder="Enter your phone" value={phone} onChange={e => setPhoneNo(e.target.value)} />
                <button className="button" >Update Contact</button>
            </form>
        </div>
    )

}
export default EditContact