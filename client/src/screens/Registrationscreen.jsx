import React,{useState} from 'react'
import {Link , useNavigate} from 'react-router-dom'

const Registrationscreen = () => { 
const {name , setName} = useState("")
const {email , setEmail} = useState("")
const {password , setPassword} = useState("")

const submitHandler = () =>{
    console.log("welo");
}

return (
<div className="py-5">
  <div className="container d-flex justify-content-center">
    <div className="card p-5 d-flex flex-column hero-card bg-light w-50">
      <h3 className="fw-bold text-center mb-4">REGISTER</h3>
      <form  onSubmit={submitHandler}>
        <div className="mb-3">
            <label htmlFor="exampleInputName" className="fw-bold form-label">UserName</label>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="form-control" id="exampleInputName" aria-describedby="nameHelp"/>
            <div id="nameHelp" className="form-text">user name should be unique</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail" className="fw-bold form-label">Email address</label>
            <input type="email" value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword" className="fw-bold form-label">Password</label>
            <input type="password" value={password} className="form-control" id="exampleInputPassword"/>
        </div>
        <div className=' my-2'>already a customer?<Link to='/login'> Login </Link></div>
        <div className="d-flex justify-content-center my-5">
            <button type="submit" className="btn btn-primary" >Register</button>
        </div>
        </form>
    </div>
  </div>
</div>
)
}

export default Registrationscreen