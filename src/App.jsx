import { useState, useEffect } from "react";
// import axios from "axios";

export default function App() {
const [formData, setFormData] = useState({
  firstName: "",
  lastName: ""
});
const [isSubmit, setIsSubmit] = useState(false);
const handleChange = (e) => {
const {name, value} = e.target;
setFormData({...formData, [name]: value});

}
const handleSubmit = (e) => {
e.preventDefault();

  setIsSubmit(true);


}
return(
  <div className="App">
    <h1 style = {{margin: "50px 0 50px 15px"}} >Full Name Display</h1>

  <form onSubmit={handleSubmit}>
  <label>First Name:
    <input
    name = "firstName"
    type="text"
    value = {formData.firstName}
    placeholder="Type your First name"
    onChange={handleChange}
    required
    />
  </label>
  <br />
  <br />
  <label>Last Name:
    <input
    name = "lastName"
    type="text"
    value = {formData.lastName}
    placeholder="Type your Last name"
    onChange= {handleChange}
    required
    />
  </label>
  <br />
  <br />
  <button type="submit" >Submit</button>
  </form>
  
 { isSubmit && ( <p>Full Name: {formData.firstName} {formData.lastName}</p>)}



  </div>
  
);




}
