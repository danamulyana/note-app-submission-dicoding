import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Login.css';
import { login } from '../utils/network-data';
import LoginInput from '../components/LoginInput';

function LoginPage({ loginSuccess }) {
    const navigate = useNavigate();

    async function onLogin({ email, password }) {
      const { error, data } = await login({ email, password });
   
      if (!error) {
        loginSuccess(data);
        navigate('/');
      }
    }
   
    return (
        <section className='Login__section'>
            <div className="Login__container">
                <div className="Login__main">
                    <h1 className="Login__heading">Login</h1>
                    <LoginInput login={onLogin} />
                </div>
            </div>
        </section>
    );
  }
   
  LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
  }
   
  export default LoginPage;