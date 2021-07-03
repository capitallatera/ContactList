// Depricated Component
import { React, useState, useEffect } from 'react'
import Contact from './Contact'
import { useSelector } from 'react-redux'
import Modal from './Modal'
import { useDispatch } from 'react-redux'
import { filterContact } from '../actions/action'

const HomeContact = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [value, setValue] = useState(null)
    const fetchData = useSelector(state => state.contactReducer.contactData)
 


    useEffect(() => {
        if (fetchData.length !== 0) {
            setShowSearch(true)
        }
        else {
            setShowSearch(false)
        }
    }, [fetchData])

    const handleInput = (e) => {
        e.preventDefault()
        if (inputValue?true:false){
        dispatch(filterContact(inputValue))
        }
    }

    return (
        <div className="super-container">
            <div className="table-container">
                {showSearch && <form onSubmit={(e)=>handleInput(e)}>
                    <input
                        className="search-box"
                        type="text"
                        value={inputValue}
                        placeholder="Type Name"
                        onChange={(e) =>setInputValue(e.target.value)} />
                        <button type="submit">search</button>
                </form>}
                <table id="table">

                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>

                    <tbody>
                    {fetchData.map((data) => (<Contact key={data.id} data={data}
                            modal={<Modal checkingModal={setShowModal} putValue={value} />}
                            showingModal={showModal}
                            checkingModal={setShowModal}
                            getValue={setValue}
                        />)
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default HomeContact