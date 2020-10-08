import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import CoffeeForm from './components/CoffeeForm';
import Home from './components/Home'

function App() {
  const [orders, setOrders] = useState([])

  const addOrder = order =>{
    setOrders([...orders,order])
  }


  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/order-coffee" render={()=> <CoffeeForm orders={orders} addOrder={addOrder}/>}/>
        <Route path="/" render={()=> <Home/>}/>
      </Switch>
    </div>
  );
}

export default App;
