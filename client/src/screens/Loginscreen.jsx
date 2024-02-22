import React , {useState}from 'react'
import {Link , useNavigate} from 'react-router-dom'
const Loginscreen = () => {

    const {email , setEmail} = useState("")
    const {password , setPassword} = useState("")

    const submitHandler = () =>{
        console.log("login");
    }

  return (
    <div className="py-5">
      <div className="container d-flex justify-content-center">
        <div className="card p-5 d-flex flex-column hero-card bg-light w-50">
          <h3 className="fw-bold text-center mb-4">LOGIN</h3>
          <form  onSubmit={submitHandler}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="fw-bold form-label">Email address</label>
                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="fw-bold form-label">Password</label>
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
            </div>
            <div className=' my-2'>New customer?<Link to='/register'> Register </Link></div>
            <div className="d-flex justify-content-center my-5">
                <button type="submit" className="btn btn-primary" >Submit</button>
            </div>
            </form>
          
        </div>
      </div>
    </div>
  )
}

export default Loginscreen