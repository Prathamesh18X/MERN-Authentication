import React from 'react';
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <div className="py-5">
      <div className="container d-flex justify-content-center">
        <div className="card p-5 d-flex flex-column hero-card bg-light w-75">
          <h1 className="text-center mb-4">MERN Authentication</h1>
          <p className="text-center mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas soluta nam quibusdam doloremque
            nostrum quia eos ipsam animi fugit, dolorem deserunt non rerum minima nihil amet reiciendis molestiae. Quod!
          </p>
          <div className="d-flex justify-content-center">
            <Link to="/login" className="btn btn-primary me-3">
              Login
            </Link>
            <Link to="/register" className="btn btn-secondary">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
