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
    const [showMessage,setShowMessage]=useState(false)
    const fetchData = useSelector((state) => state.contactReducer.contact)
    let history=useHistory()
    const handleUpdate = (e) => {
        e.preventDefault()
        if (phone.length===10){
            const update_contact = Object.assign(fetchData, {
                name: name,
                lastName: lastName,
                phone: phone,
            })
            dispatch(updateContact(update_contact))
            history.push("/")
        }
        else{
            setShowMessage(true)
        }

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
                {showMessage&&`Length should be 10`}
                <button className="button" >Update Contact</button>
            </form>
        </div>
    )

}
export default EditContact