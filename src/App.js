import './App.css';
import React from 'react'
import Navbar from './components/element/Navbar'
import AddContact from './components/AddContact'
import HomeContact from './components/HomeContact'
// import ContactContainer from './Containers/ContactContainer'
import EditContact from './components/EditContact'

import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'


function App() {
  
  return (
    <Provider store={store}>
      <div>
     <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/"><HomeContact/></Route>
        <Route path="/contact/add"><AddContact/></Route>
        <Route path="/contact/edit/:id"><EditContact/></Route>
      </Switch>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
