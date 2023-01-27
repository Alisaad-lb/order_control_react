import React from 'react'
import BendingLine from './BendingLine';
import WeldingLine from './WeldingLine';
import PaintingLine from './PaintingLine';
import AssemblyLine from './AssemblyLine';
import {Route,Link, Routes}from 'react-router-dom';



function Department() {

  
  return (
    <div className="card  bg-primary text-primary-content" >
    <div className="card-body">
      <h2 className="card-title">Select your Section.</h2>
     
      <Routes>
      <Route BendingLine path='/BendingLine' element ={<BendingLine/>}/>
      <Route WeldingLine path='/WeldingLine' element ={<WeldingLine/>}/>
      <Route PaintingLine path='/PaintingLine' element ={<PaintingLine/>}/>
      <Route AssemblyLine path='/AssemblyLine' element ={<AssemblyLine/>}/>
      </Routes>
      <form >
      <div className="card-actions flex space-x-4 space-x-4  btn-group-vertical  "><br />
      <button className="btn "><Link to=  {"/BendingLine"}> Bending Line </Link></button>
      <button className="btn "> <Link to= {"/WeldingLine"}> Welding Line </Link></button>
      <button className="btn "> <Link to= {"/PaintingLine"}>Painting Line </Link></button>
      <button className="btn "> <Link to= {"/AssemblyLine"}>Assembly Line </Link></button>
      <br />
      
     

      </div>
      </form>
    </div>
  </div>
  )
}

export default Department