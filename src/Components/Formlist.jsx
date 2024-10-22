import React from 'react'

function Formlist({list}) {
  return (
    <div className="App">
      <h2>List of Students</h2>
      <table border={1} className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
        {list.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.city}</td>
                <td>{val.contact}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Formlist