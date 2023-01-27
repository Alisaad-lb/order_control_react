import React, { useState, useEffect } from "react";
import { AppContext } from "../App";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function BendingLine() {
  const [orders, setOrders] = useState();
  const [orderItems, setOrderItems] = useState();
  const [items, setItems] = useState();
  const [something, setSomething] = useState(true);
  const { departments, setDepartments } = useContext(AppContext);
  const departmentId = 1;

  function moveOrder(e) {
    let re = orders.filter((i) => i.id != e.target.name);
    setOrders((i) => re);
    axios.put(`http://localhost:3000/orders/${e.target.name}`, {
      department_id: 2,
    });
  }

  function changeHandler(e) {

    let result = orderItems?.find((i) => i.id == e.target.name);
    const { isDone, quantity, item_id, order_id } = result;
    axios.put(`http://localhost:3000/orderItems/${e.target.name}`, {
      isDone: !isDone,
      quantity: quantity,
      item_id: item_id,
      order_id: order_id,
    });

    let re = orderItems.find((i) => i.id == e.target.name);
    let all = orderItems.filter((i) => i.id != e.target.name);

    re.isDone = !re.isDone;

    all.push(re);

    setOrderItems((i) => all);
  }

  function callOrders() {
    axios("http://localhost:3000/orders").then((i) => setOrders(i.data));
  }

  function callItems() {
    axios("http://localhost:3000/items").then((i) => setItems(i.data));
  }

  function callOrderItems() {
    axios("http://localhost:3000/orderitems").then((i) =>
      setOrderItems(i.data)
    );
  }

  useEffect(() => {
    callItems();
    callOrderItems();
    callOrders();

    return callItems(), callOrderItems(), callOrders();
  }, []);

  return (
    <>
      {orders &&
        orders
          .filter((i) => i.department_id == departmentId)
          .map((i) => (
            <>
              <div
                className="card w-97 bg-primary text-primary-content m-5"
                data-theme="light">
                <div className="card-body">
                  <h2 className="card-title">Bending Line-Order: {i.id}</h2>
                  <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                      <thead>
                        <tr className="text-blue-600">
                          <th>*</th>
                          <th>Name</th>
                          <th>Amount</th>
                          <th>Unit</th>
                          <th>Done</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderItems &&
                          orderItems
                            .filter((j) => j.order_id == i.id)
                            .map((j) => (
                              <tr className="text-black">
                                <td>
                                  {j.item_id}{" "}
                                  {items &&
                                    items.find((k) => k.id == j.item_id).name}
                                </td>
                                <td>{j.quantity}</td>
                                <td>Nothing</td>
                                <td>{j.isDone}</td>
                                <td>
                                  <input
                                    id={j.isDone}
                                    type="checkbox"
                                    className="checkbox checkbox-success"
                                    checked={j.isDone}
                                    onChange={changeHandler}
                                    name={j.id}
                                  />
                                </td>
                              </tr>
                            ))}
                      </tbody>
                    </table>
                    <button
                      name={i.id}
                      onClick={moveOrder}
                      type="button"
                      className="btn btn  ">
                      go to welding line
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
                    <div className="tooltip tooltip-open tooltip-top" data-tip="hello">
  <button className="btn">Top</button>
</div>
    </>
  );
}

export default BendingLine;

// (
// <div className="overflow-x-auto">
//          {order.map(i => <>
//          <h1>Order: {i.id}</h1>
//            <table className="table w-full">
//            {/* <!-- head --> */}
//            <thead>
//              <tr>
//                <th></th>
//                <th>Name</th>
//                <th>Amount</th>
//                <th>Unit</th>
//                <th>Done</th>
//              </tr>
//            </thead>
//            <tbody>
//              {/* <!-- row 1 --> */}

//              {i.items.map(j => <>
//                <tr>
//                <th>1</th>
//                <td>{j.name}</td>
//                <td>2</td>
//                <td>pieces</td>
//                <td>True</td>
//              </tr>

//              </>)}

//            </tbody>
//          </table>
//          </>)}

//        </div>
//        )

// =====================================

// filteredSteps.map((s) => (
//   <div>
//     <strong>Steps is : {s.step} </strong>
//   </div>
// ))
