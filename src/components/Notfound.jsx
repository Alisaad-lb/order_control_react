import React from 'react'
import Department from './Department';
import {Routes,Route,Link}from 'react-router-dom';
function Notfound() {
  return (


    
    
   <div>

<Link to= {"/Department"}><button   className="btn m-5">Go to Department </button></Link>
 
<Routes>
<Route  Department    path='/Department'    element=    {<Department/>}/>
</Routes>

</div>
  )
}

export default Notfound