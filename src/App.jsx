import './App.css';
import {Routes,Route,Link}from 'react-router-dom';
import json from './data.json'
import Technologist from './components/Technologist';
import Member from './components/Member';
import Department from './components/Department';
import Notfound from './components/Notfound';
import BendingLine from './components/BendingLine';
import WeldingLine from './components/WeldingLine';
import PaintingLine from './components/PaintingLine';
import AssemblyLine from './components/AssemblyLine';
import { createContext, useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

export const AppContext = createContext();

function App() {
  const [departments, setDepartments] = useState()
  const [items, setItems] = useState()
  const [orders, setOrders] = useState()
  const [orderItems, setOrderItems] = useState()

  function fetching() {
    axios("https://order-control-api.onrender.com/departments").then(i => setDepartments(i.data))
    axios("https://order-control-api.onrender.com/items").then(i => setItems(i.data))
    axios("https://order-control-api.onrender.com/orders").then(i => setOrders(i.data))
    axios("https://order-control-api.onrender.com/orderItems").then(i => setOrderItems(i.data))
  }

  

  useEffect(() => {
    fetching()

   
  
    
  }, [])
  
  
  return (
    <div className=" App h-screen flex flex-col justify-between items-center" >

   <div className="navbar bg-neutral text-neutral-content ">
  <a className="btn btn-ghost normal-case text-xl " >Logo</a>
  <div className="btn-group ">
  <Link to= {"/Technologist"}> <button   className="btn m ">Technologist </button></Link>
  <Link to= {"/Department"}><button   className="btn m-5">Department </button></Link>
  <Link to= {"/Member"}><button   className="btn m-5">Member </button></Link>
</div>
</div>


<AppContext.Provider value={{items,orders,



}}>

   <Routes>
<Route  Member        path='/Member'        element=    {<Member/>}/>
<Route  Technologist  path='/Technologist'  element=   {<Technologist/>}/>
<Route  Department    path='/Department'    element=    {<Department/>}/>
<Route  BendingLine   path='/BendingLine'   element=    {<BendingLine/>}/>
<Route  WeldingLine   path='/WeldingLine'   element=    {<WeldingLine/>}/>
<Route  PaintingLine  path='/PaintingLine'  element=    {<PaintingLine/>}/>
<Route  AssemblyLine  path='/AssemblyLine'  element=    {<AssemblyLine/>}/>
< Route               path='*'              element=    {<Notfound/>}/>
  </Routes>

  </AppContext.Provider>
  
   

  <footer className="footer items-center p-4 bg-neutral text-neutral-content " >
  <div className="items-center grid-flow-col ">
    <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current" ></svg> 
    <p>Copyright © 2023 - All right reserved by Ali Saad</p>
  </div> 
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
  </div>
</footer>
 
      
    </div>
  );
}

export default App;