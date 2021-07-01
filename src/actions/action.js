import {CREATE_CONTACT,GET_CONTACT,UPDATE_CONTACT,DELETE_CONTACT} from '../constant/constant'

export const addContact=(data)=>({
    type:CREATE_CONTACT,
    data:data
})

export const getContact=(id)=>({
    type:GET_CONTACT,
    data:id
})

export const updateContact=(data)=>({
    type:UPDATE_CONTACT,
    data:data
})
export const deleteContact=(id)=>({
    type:DELETE_CONTACT,
    data:id
})