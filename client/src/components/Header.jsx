import React from 'react';
import {Link , useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from '../redux/slices/userApiSlice'; 
import { logout } from '../redux/slices/authSlice';

const Header = () => {
  const {userInfo} = useSelector((state)=>state.auth)

  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async(e)=>{
    e.preventDefault();
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/');
    } catch (err) {
      console.log(err);
    }

  }
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Mern-Auth
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {userInfo ? (
            <>
            
            <div>welcome, {userInfo.userName}</div>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button
                onClick={logoutHandler}
                className='btn'>
                  logout
                </button>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  profile
                </Link>
              </li>
            </ul>
            </>
            ) : (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </ul>)}
            
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
