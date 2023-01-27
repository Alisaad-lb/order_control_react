import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";

function Technologist() {
  const navigate = useNavigate()
  
  const [items, setItems] = useState()
  const [orders, setOrders] = useState()
  const [formValues, setFormValues] = useState([{ name: "" }]);
  const [createdOrder, setCreatedOrder] = useState();

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { name: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
  
    // create order and get its id
    axios
      .post("https://order-control-api.onrender.com/orders", { department_id: 1 })
      .then((i) => setCreatedOrder(i.data));

    let count = 0;
    
    formValues.forEach(function(e) {
      if (count == items){
        count = 0
      }
      count += 1
      
      

      axios
        .post("https://order-control-api.onrender.com/orderItems", {
          item_id: count,
          // item_id: foundItem.id,
          quantity: 3,
          order_id: orders.length + 1,
          isDone: false,
        })
        .then((i) => console.log(i));
    });

    navigate('/')


  };

  useEffect(() => {
    axios("https://order-control-api.onrender.com/items").then(i => setItems(i.data))
    axios("https://order-control-api.onrender.com/orders").then(i => setOrders(i.data))
  },[])

  return (
    <div className="card w-96 bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">Create New Order</h2>
        <p>By creating new order the data will be added to the Department</p>
        <form onSubmit={handleSubmit}>
          {formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <select
                value={element.name || ""}
                onChange={(e) => handleChange(index, e)}
                type="text"
                name="name"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs text-black">
                <option>Please select item</option>
                {items &&
                  items.map((option, index) => {
                    return <option id={option.id} key={index}>{option.name}</option>;
                  })}
              </select>
              {index ? (
                <button
                  type="button"
                  className="button remove"
                  onClick={() => removeFormFields(index)}>
                  Remove
                </button>
              ) : null}
            </div>
          ))}
          <div className="button-section">
            <button
              className="btn btn m-2"
              type="button"
              onClick={() => addFormFields()}>
              Add
            </button>
            <button className="btn btn m-2" type="submit">
              submit
            </button>
          </div>
        </form>
        {/* <form>
          <input
            type="number"
            name="item1"
            placeholder="111"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="item1"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />

          <div className="card-actions justify-end">
            <button className="btn btn-warning backgroungcolor:red ">
              Create
            </button>
          </div>
        </form> */}
      </div>
    </div>
  );
}

export default Technologist;
