import React from 'react'
import Button from '../../components/atoms/Button/Button'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='login_frame'>
            <div className="login">
                <form>
                    <h3>Sign In</h3>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>
                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>
                    <Button size="sm" >Đăng nhập</Button>
                    <Link to="/signup">
                        <Button size="sm">Đăng kí</Button>
                    </Link>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login