import { createStore }from "redux"
import { compositeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./reducers"

const store=createStore(rootReducer,compositeWithDevTools)

export default store