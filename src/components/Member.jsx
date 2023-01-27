import React, { useState } from "react";
import { AppContext } from "../App";
import { useContext } from "react";

function Member() {
  const { data, setData } = useContext(AppContext);
  const filteredSteps = data.orders.filter((s) => s.id == 1);
  const [order, setOrder] = useState(filteredSteps);
  const [listorder, setListorder]= useState([]);
   

 const handleChange = (e) => {
  e.preventDefault()
  setOrder(e.target.value);
 
 }
   const list = () => {
    setListorder([...listorder,order])

console.log(listorder);
   }

  return (
    <div className="card w-96 bg-primary text-primary-content" >
  <div className="card-body" >
    <h2 className="card-title">Search for an Order</h2>
    <form  className="text-black" >

     {order.map(i=> <>
      <strong className="text-black">Order: {i.id}</strong>
      <input 
    type="number"
    name= "item1"
     placeholder="111" 
     className="input input-bordered w-full max-w-xs" /> 

    
     
     <div className="list"></div>
     {i.items.map(j => <>
              {j.department == "Bending Line" && <tr className="text-black">
                <th>*</th>
                <td className="bg-green-500" >{j.name}</td>
                <td>{j.amount}</td>
                <td>{j.unit}</td>
                
                
              </tr>}
                
            
              </>)}

    <div className="card-actions justify-end">
    </div>
    </>)} 
    <button type='button' onClick={list} className="btn btn-warning backgroungcolor:red ">Submit</button>
    </form>
  
  </div>
</div>
  )
}

export default Member