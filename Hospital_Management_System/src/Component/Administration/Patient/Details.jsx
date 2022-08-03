import React from "react";

export const Details = () => {
  const result = JSON.parse(localStorage.getItem("userdata"));
  console.log(result);

  return (
    <div>
      <div>
        <table className="table">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Mobile NO</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Address</th>
            <th>Aadhar No</th>
            <th>Date Of Appointment</th>
          </tr>
          {result.map((item, index) => {
            return (
              <tr>
                <td>{index + 101}</td>
                <td>{item.name}</td>
                <td>{item.number}</td>
                <td>{item.email}</td>
                <td>{item.dob}</td>
                <td>{item.address}</td>
                <td>{item.aadhar}</td>
                <td>{item.date}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};
