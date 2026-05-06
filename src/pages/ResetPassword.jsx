import '../styles/main.css';
import { Link } from 'react-router';

export default function ResetPassword() {
    return (
        <div className="login-wrapper">
            {/* Left Side: White background + Floating Form */}
            <div className="left-side">
                <div className="login-card">
                    <img src="logo.jpeg" alt="Logo" className="logo" />
                    <h2>Inventory management system</h2>
                    <form className='form-wrapper'>
                        <div className="alert alert-success">
                            👋<span>Mumeen</span>, an OTP has been sent to your <span>email address</span> to reset your password.
                        </div>
                        <label>OTP</label>
                        <input className='form-input' type="number" placeholder="Enter OTP" />
                        <div className="alert alert-warning">
                            <em>At least 8 characters required including uppercase, lowercase, special characters and numbers</em>
                        </div>
                        <label>New Password</label>
                        <input className='form-input' type="password" placeholder="••••••••••" />
                        <label>Confirm New Password</label>
                        <input className='form-input' type="password" placeholder="••••••••••" />
                        <Link to="/reset-password"><button className="login-btn">Proceed</button></Link>
                    </form>
                </div>
            </div>

            {/* Right Side: Slanted Background Image */}
            <div className="right-side"></div>
        </div>
    )
}