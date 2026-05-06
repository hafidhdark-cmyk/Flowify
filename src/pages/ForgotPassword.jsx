import '../styles/main.css';
import { Link } from 'react-router';

export default function ForgotPassword() {
    return (
        <div className="login-wrapper">
            {/* Left Side: White background + Floating Form */}
            <div className="left-side">
                <div className="login-card">
                    <img src="logo.jpeg" alt="Logo" className="logo" />
                    <h2>Inventory management system</h2>
                    <form className='form-wrapper'>
                        <label>Email</label>
                        <input className='form-input' type="text" placeholder="your@email.com" />
                        <Link to="/reset-password"><button className="login-btn">Proceed</button></Link>
                    </form>
                </div>
            </div>

            {/* Right Side: Slanted Background Image */}
            <div className="right-side"></div>
        </div>
    );
}