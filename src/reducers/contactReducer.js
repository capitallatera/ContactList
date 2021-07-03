import {
    CREATE_CONTACT,
    GET_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
    FILTER_CONTACT
} from '../constant/constant'


const initialState = {
    contactData: JSON.parse(window.localStorage.getItem("data")),
    contact:"Checking Value",
    searched:[]
}




export default function contactReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_CONTACT:
            window.localStorage.setItem("data",JSON.stringify([action.data,...state.contactData]))
            return {
                ...state,
                contactData: [action.data, ...state.contactData],
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
            window.localStorage.setItem("data",JSON.stringify(state.contactData.map((contact)=>contact.id===action.data.id?action.data:contact)))
            return{
                ...state,
                contactData:state.contactData.map((contact)=>contact.id===action.data.id?action.data:contact)
            }
        
        case DELETE_CONTACT:
            window.localStorage.setItem("data",JSON.stringify(state.contactData.filter((contact)=>contact.id!==action.data)))
            return{
                ...state,
                contactData:state.contactData.filter((contact)=>contact.id!==action.data)
            }
        
        case FILTER_CONTACT:
            console.log("get Value",action.data)            
    
            return{
                ...state,
                contactData:state.contactData.filter((contact)=>contact.name===action.data?contact:null)
            }   

        default:
            return state;
    }
}