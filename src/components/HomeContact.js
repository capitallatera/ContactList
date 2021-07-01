import React from 'react'
import Contact from './Contact'
import { useSelector } from 'react-redux'


const HomeContact = () => {
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
                {fetchData.map((data) =>(<Contact key={data.id} data={data}/>) 
                    )}
                </tbody>

            </table>
        </div>
    )
}
export default HomeContact