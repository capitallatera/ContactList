import {React,useState} from 'react'
import Contact from './Contact'
import { useSelector } from 'react-redux'
import Modal from './Modal'


const HomeContact = () => {
    const [showModal,setShowModal]=useState(false)
    const [value,setValue]=useState(null)
    const fetchData = useSelector(state => state.contactReducer.contactData)
    return (
        <div className="table-container">
            <table id="table">
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                
                <tbody>
                {fetchData.map((data) =>(<Contact key={data.id} data={data}
                    modal={<Modal checkingModal={setShowModal} putValue={value}/>}
                    showingModal={showModal}
                    checkingModal={setShowModal}
                    getValue={setValue}
                />) 
                    )}
                </tbody>
            </table>
            
        </div>
    )
}
export default HomeContact