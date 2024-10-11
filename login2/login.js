import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <button type="submit">Login</button>
          <a href="#" className="forgot-password">Forgot Password?</a>
        </form>
      </div>
      <div className="image-box">
        {/* Coloque a imagem ou use uma URL de imagem */}
        <img src="your-image-url-here" alt="Login illustration" />
      </div>
    </div>
  );
};

export default Login;
