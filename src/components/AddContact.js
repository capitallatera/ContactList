import React, { useState } from 'react'
import shortid from 'shortid'
import { useDispatch } from 'react-redux'
import { addContact } from '../actions/action'
import { useHistory } from 'react-router-dom'
// import { useSelector } from 'react-redux'

const AddContact = () => {
    const dispatch = useDispatch()
    // const fetchData = useSelector(state => state.contactReducer.contactData)

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhoneNo] = useState()
    let history = useHistory()
    const [showMessage,setShowMessage]=useState(false)

    const createContact = (e) => {
        e.preventDefault()

        // console.log(phone.length)
        if (phone.length === 10) {
            const new_data = {
                id: shortid.generate(),
                name: name,
                lastName: lastName,
                phone: phone
            }
            dispatch(addContact(new_data))
            history.push("/")
        }
        else{
            setShowMessage(true)
        }
    }

    return (
        <div className="add-contact-container" >
            <form onSubmit={(e) => createContact(e)}>
                <input type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} />
                <input type="text" placeholder="Enter your last name" value={lastName} onChange={e => setLastName(e.target.value)} />
                <input type="text" placeholder="Enter your phone" value={phone} onChange={e => setPhoneNo(e.target.value)} />
                {showMessage&&`Length should be of 10` }
                <button className="button" type="submit" >Add Contact</button>
            </form>
        </div>
    )
}
export default AddContact