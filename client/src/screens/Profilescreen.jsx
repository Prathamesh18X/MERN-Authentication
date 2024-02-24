import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { setCredentials } from "../redux/slices/authSlice";
import { toast } from "react-toastify";
import { useUpdateMutation } from "../redux/slices/userApiSlice";


const Profilescreen = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const [update, {isLoading}] = useUpdateMutation();

  useEffect(() => {
    setUserName(userInfo.userName)
    setEmail(userInfo.email)

  }, [userInfo.setEmail, userInfo.setUserName]);

  const submitHandler = async(e) => {
    e.preventDefault();
    if(!userName || !email || !password || !cPassword){
      toast.error("Enter all credentials")
    }
    else if(password !== cPassword){
      toast.error("Password do not match")
    }else{
      try {
         const res = update({
            id : userInfo._id,
            userName,
            email,
            password
        }).unwrap();
        toast.success("user password updated");    
      } catch (err) {
        toast.error(err?.data?.message)
      }
    }
  };

  return (
    <div className="py-5">
      <div className="container d-flex justify-content-center">
        <div className="card p-5 d-flex flex-column hero-card bg-light w-50">
          <h3 className="fw-bold text-center mb-4">Update Password</h3>
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="fw-bold form-label">
                UserName
              </label>
              <input
                type="text"
                value={userName}
                placeholder="Enter Username"
                onChange={(e) => setUserName(e.target.value)}
                className="form-control"
                id="exampleInputName"
                aria-describedby="nameHelp"
              />
              <div id="nameHelp" className="form-text">
                user name should be unique
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail" className="fw-bold form-label">
                Email address
              </label>
              <input
                type="email"
                value={email}
                placeholder="example@gmail.com"
                onChange={(e)=>setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword"
                className="fw-bold form-label"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="create strong password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputCPassword"
                className="fw-bold form-label"
              >
                Confirm Password
              </label>
              <input
                type="password"
                value={cPassword}
                placeholder="Confirm password"
                onChange={(e)=>setCPassword(e.target.value)}
                className="form-control"
                id="exampleInputCPassword"
              />
            </div>
            
            <div className="d-flex justify-content-center my-5">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profilescreen;
