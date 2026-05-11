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
            <label className='form-label'>Username</label>
            <input className='form-input' type="text" placeholder="your@email.com" />
            <label className='form-label'>Password</label>
            <input className='form-input' type="password" placeholder="••••••••••" />
            <Link to="/home">
            <button className="login-btn">Login</button>
            </Link>
            <div className="exception">
              <label className='exception-label'><input type="radio" name="preference" id="" />
                Remember my preference
              </label>
              <Link to="/forgot-password">Forgot password?</Link>
            </div>
          </form>
        </div>
      </div>
      
      {/* Right Side: Slanted Background Image */}
      <div className="right-side"></div>
    </div>
  );
}
