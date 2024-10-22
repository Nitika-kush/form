import React, { useState } from 'react'

function Form() {
  const [formData,setFormData]=useState({name1:"",email:"",city:"",contact:"",address:""});

  const handleChange=(event)=>{
    const {name,value}=event.target
    setFormData(prev=>({...prev,[name]:value}))
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(formData);
    alert(`
    my name is ${formData.name}
    email is ${formData.email}
    city is ${formData.city}
    contact is ${formData.contact}
    address is ${formData.address}`);
  }
  return (
    <div>
      <div className='registration-form'>Registration Form</div><br />
      <form onSubmit={handleSubmit}>
        <div style={{textAlign:"center"}}>
        <label htmlFor="name">Name*</label>
        <input type="text" placeholder='Enter Name' name="name" value={formData.name} 
        onChange={handleChange}/><br/><br />
        <label htmlFor="email">Email*</label>
        <input type="email" placeholder='Enter Email' name="email" value={formData.email} 
        onChange={handleChange}/><br/><br />
        <label htmlFor="city">City*</label>
        <input type="text" placeholder='Enter City' name="city" value={formData.city} 
        onChange={handleChange}/><br/><br />
        <label htmlFor="contact">Contact*</label>
        <input type="text" placeholder='Enter Contact' name="contact" value={formData.contact} 
        onChange={handleChange}/><br/><br />
        <label htmlFor="address">Address*</label>
        <input type="text" placeholder='Enter Address' name='address' value={formData.address} 
        onChange={handleChange}/> <br /><br />
        </div>
      <div style={{textAlign:"center"}}>
      <button type='submit' >Submit</button>
      </div>
      </form>
      </div>
  )
}

export default Form