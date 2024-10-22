import React, { useState } from 'react'

function Form({addData}) {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    city:"",
    contact:"",
    address:""
  });

  const handleChange=(event)=>{
    const {name,value}=event.target
    /* console.log(value)
    console.log(name) */
    setFormData(prev=>({...prev,[name]:value}))
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    if(formData.name===""||formData.email===""||formData.city===""||formData.contact===""){
      alert("fill all the fields");
    }
    else{
      addData(formData);
      setFormData({name:"",email:"",city:"",contact:""})
      /* alert(`
      my name is ${formData.name}
      email is ${formData.email}
      city is ${formData.city}
      contact is ${formData.contact}`); */
    }
   
  }
  return (
    <div className='body'>
      <h2 className='registration-form'>Registration Form</h2><br />
      <form onSubmit={handleSubmit}>
          <div className='flex-container'>
            <div>
                <label htmlFor="name">Name*</label>
                <input type="text" placeholder='Enter Name' name="name" value={formData.name} 
                onChange={handleChange} required/>
            </div>
            <div>
                <label htmlFor="email">Email*</label>
                <input type="email" placeholder='Enter Email' name="email" value={formData.email} 
                onChange={handleChange} required/>
            </div>
      
          </div>
        
          <div className='flex-container'>
            <div>
                <label htmlFor="city">City*</label>
                <input type="text" placeholder='Enter City' name="city" value={formData.city} 
                onChange={handleChange} required/>
            </div>

            <div>
                <label htmlFor="contact">Contact*</label>
                <input type="tel" maxLength={10} minLength={10} 
                 placeholder='Enter Contact' name="contact" value={formData.contact} 
                onChange={handleChange} required/>
            </div>
                
           </div>
      
      <div style={{textAlign:"center"}}>
      <button className='button' type='submit' >Submit</button>
      </div>
      </form>
      </div>
  )
}

export default Form