import React, { useEffect, useState } from "react";

function Form({ addData, currentData }) {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    city: "",
    contact: "",
    gender: "",
  });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (currentData && Object.keys(currentData).length > 0) {
      setFormData(currentData);
    } else {
      setFormData({
        fname: "",
        lname: "",
        email: "",
        city: "",
        contact: "",
        gender: "",
      });
    }
  }, [currentData]);

  const validate = () => {
    const dataKey = ["fname", "lname", "email", "city", "contact", "gender"];
    const newError = {};
    dataKey.forEach((item) => {
      if (!formData[item]) {
        newError[item] = `${item} is required`;
      }
    });
    return newError;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    /* console.log(value)
    console.log(name) */
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prevError) => ({ ...prevError, [name]: "" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formError = validate();
    if (Object.keys(formError).length > 0) {
      setErrors(formError);
    } else {
      const capitalFormData ={
        ...formData, 
        fname: formData.fname.charAt(0).toUpperCase()+formData.fname.slice(1),
        lname: formData.lname.charAt(0).toUpperCase()+formData.lname.slice(1),
        city: formData.city.charAt(0).toUpperCase()+formData.city.slice(1),
        gender: formData.fname.charAt(0).toUpperCase()+formData.fname.slice(1),

      }
      addData(capitalFormData);
      setFormData({
        fname: "",
        lname: "",
        email: "",
        city: "",
        contact: "",
        gender: "",
      });
      console.log(formData);
      setErrors({});
      /*  alert(`
            my First name is ${formData.fname}
            my Last name is ${formData.lname}
            email is ${formData.email}
            city is ${formData.city}
            contact is ${formData.contact}`); */
    }
  };

  return (
    <div className="body">
      <h2 className="registration-form">Registration Form</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="flex-container">
          <div>
            <label htmlFor="fname">First Name*</label>
            <input
              type="text"
              //placeholder="Enter First Name"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
            />
            <p className="error">
              {errors.fname && <p>First name is required</p>}
            </p>
          </div>
          <div>
            <label htmlFor="lname">Last Name*</label>
            <input
              type="text"
              //placeholder="Enter Last Name"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
            />
            <p className="error">
              {errors.lname && <p>Last name is required</p>}
            </p>
          </div>
          <div>
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              //placeholder="Enter Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <p className="error">
              {errors.email && <p>Email can not be empty</p>}
            </p>
          </div>
        </div>

        <div className="flex-container">
          <div>
            <label htmlFor="city">City*</label>
            <input
              type="text"
              //  placeholder="Enter City"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            <p className="error">
              {errors.city && <p>City name is required</p>}
            </p>
          </div>

          <div>
            <label htmlFor="contact">Contact*</label>
            <input
              type="tel"
              maxLength={10}
              minLength={10}
              // placeholder="Enter Contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
            />
            <p className="error">
              {errors.contact && <p>Contact can not be empty</p>}
            </p>
          </div>
          <div>
            <label htmlFor="gender">Gender*</label>
            <select
              className="gender-select"
              //placeholder="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <p className="error">
              {errors.gender && <p>Gender must be filled</p>}
            </p>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <button className="button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
