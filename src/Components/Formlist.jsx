import React, { useEffect, useState } from "react";
function Formlist({ list, handleDelete, handleEdit ,sortByFullName}) {
  const [search, setSearch] = useState("");
  const [filteredList,setFilteredList]= useState(list);
  const handleSearch = (event)=>{
    setSearch(event.target.value);
  };

  
useEffect(()=>{
  setFilteredList(
    list.filter((item) =>
    `${item.fname} ${item.lname}`.toLowerCase().includes(search.toLowerCase())
  )
  );
},[search,list]);

  return (
    <div>
      <div className="flex-container">
      <h2>List Of Students</h2>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearch}
        style={{ margin: "15px 0", padding: "9px", width: "310px" }}
      /> </div>
      
      <table border={1} className="table">
        <thead>
          <tr>
            {/*  <th>First Name</th>
            <th>Last Name</th> */}
            <th onClick={()=>sortByFullName('fname')} >Full Name</th>
            <th onClick={()=>sortByFullName('email')}  > Email</th>
            <th onClick={()=>sortByFullName('city')}  > City</th>
            <th onClick={()=>sortByFullName('contact')}  > Contact</th>
            <th onClick={()=>sortByFullName('gender')}  > Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.length>0?(
            filteredList.map((val, index) => (
              <tr key={index}>
                <td>
                  {val.fname} {val.lname}
                </td>
                <td>{val.email}</td>
                <td>{val.city}</td>
                <td>{val.contact}</td>
                <td>{val.gender}</td>
                <td>
                  <button
                    className="button button1"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                  <button
                    className="button button2"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))
          ):(
            <tr>
              <td style={{ textAlign: "center" }}>
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Formlist;
