import React from "react";

export const Paymentdetails = () => {
  const result = JSON.parse(localStorage.getItem("userpayment"));

  return (
    <div>
      <table className="table">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Treatment</th>
          <th>Doctor Name</th>
          <th>Room No</th>
          <th>Total Bill</th>
        </tr>
        {result.map((item, index) => {
          return (
            <tr>
              <td>{index + 101}</td>
              <td>{item.pname}</td>
              <td>{item.treat}</td>
              <td>{item.drname}</td>
              <td>{item.roomno}</td>
              <td>{item.tamount}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
