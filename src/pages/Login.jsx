import '../styles/main.css';
import { Link } from 'react-router';

export default function Login() {
  return (
    <div className="login-wrapper">
      {/* Left Side: White background + Floating Form */}
      <div className="left-side">
        <div className="login-card">
          <img src="logo.jpeg" alt="Logo" className="logo" />
          <h2>Inventory management system</h2>
          <form className='form-wrapper'>
            <label>Username</label>
            <input className='form-input' type="text" placeholder="your@email.com" />
            <label>Password</label>
            <input className='form-input' type="password" placeholder="••••••••••" />
            <div className="preference">
                <input type="radio" name="preference" id="" />
                Remember my preference
            </div>
            <button className="login-btn">Login</button>
            <div className="exception"> <span>Don't have an account?</span> Sign up</div>
          </form>
        </div>
      </div>

      {/* Right Side: Slanted Background Image */}
      <div className="right-side"></div>
    </div>
  );
}
