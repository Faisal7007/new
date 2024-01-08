import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../src/components/Header'
import Home from '../src/components/Home'
import Base from '../src/components/Base'
import Toppings from '../src/components/Toppings'
import Order from '../src/components/Order'

const App = () => {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }
  
  const addTopping = (topping) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='base' element={<Base addBase={addBase} pizza={pizza} />}/>
    <Route path='toppings'  element={<Toppings addTopping={addTopping} pizza={pizza} />}/>
    <Route path='Order'  element={<Order pizza={pizza}/>}/>   
  </Routes>
  </BrowserRouter>
  )
}

export default App
