import { React, useState } from 'react'
import { useSelector } from 'react-redux'
import ModalSearch from './ModalSearch'

const HomeSearch = () => {
    const fetch = useSelector(state => state.contactReducer.contactData)
    const [text, setText] = useState()
    const [suggestion, setSuggestion] = useState([])
    
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

    // console.log("data", fetch)
    // console.log("suggestion",suggestion)

    return (
        <div className="home-search-container">
            <input type="text" value={text} onChange={(e) => handleInput(e)} />
            {/* {suggestion.map(contact=>{
                return contact.name +" "+ contact.lastName
            })} */}

            <ModalSearch data={suggestion}/>
        </div>
    )
}
export default HomeSearch