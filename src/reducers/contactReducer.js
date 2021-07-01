import {
    CREATE_CONTACT,
    GET_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT
} from '../constant/constant'

const initialState = {
    contactData: [],
    contact:"Checking Value"
}
export default function contactReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_CONTACT:
            return {
                ...state,
                contactData: [action.data, ...state.contactData]
            }
        case GET_CONTACT:
            let arr=state.contactData.filter((contact)=> contact.id === action.data)
            arr=arr.values()

            for (let value of arr){
                arr=value
            }
            console.log(arr)

            return {
                ...state,
                contact:arr
            }
        
        case UPDATE_CONTACT:
            // console.log("Action",action.data)
            return{
                ...state,
                contactData:state.contactData.map((contact)=>contact.id===action.data.id?action.data:contact)
            }
        
        case DELETE_CONTACT:
            return{
                ...state,
                contactData:state.contactData.filter((contact)=>contact.id!==action.data)
            }

        default:
            return state;
    }
}