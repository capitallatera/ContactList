import { React, useState } from 'react'
import { useSelector } from 'react-redux'
import ModalSearch from './ModalSearch'
import Modal from './Modal'


const HomeSearch = () => {
    const fetch = useSelector(state => state.contactReducer.contactData)
    const [text, setText] = useState()
    const [suggestion, setSuggestion] = useState([])
    const [value,setValue]=useState(null)
    const [isOn,setIsOn]=useState(false)

    const handleInput = (e) => {
        setText(e.target.value)
        let matches = []
        if (text) {
            matches = fetch.filter(contact => {
                const regex = new RegExp(`${text}`, "gi")
                return contact.name.match(regex)
            })
        }
        setSuggestion(matches)
    }
    
    return (
        <div className="home-search-container">
            <input type="text" value={text} onChange={(e) => handleInput(e)} />
            {suggestion.map(contact=>{
                return <ModalSearch 
                key={contact.id} 
                data={contact}
                model={<Modal isOnFun={setIsOn} putValue={value}/>}
                isOn={isOn}
                isOnFun={setIsOn}
                putValueFun={setValue}
                />
            })}
        </div>
    )
}
export default HomeSearch