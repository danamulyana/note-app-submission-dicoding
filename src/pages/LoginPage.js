import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';
import { login } from '../utils/network-data';
import LoginInput from '../components/LoginInput';
import AuthContext from '../context/AuthContext';

function LoginPage() {
    const navigate = useNavigate();
    const { onLoginSuccess } = React.useContext(AuthContext);

    async function onLogin({ email, password }) {
      const { error, data } = await login({ email, password });
   
      if (!error) {
        onLoginSuccess(data);
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
   
export default LoginPage;