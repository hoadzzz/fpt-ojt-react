import React from 'react'
import Button from '../../components/Button/Button'
import './Signup.css'

const Signup = () => {
    return (
        <div className="signup">
            <form>
                <h3 className="title-signup">Sign Up</h3>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <Button size="sm">Đăng Kí</Button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        </div>
    )
}

export default Signup