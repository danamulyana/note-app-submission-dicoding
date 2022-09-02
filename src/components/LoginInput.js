import React from "react";
import Proptypes from "prop-types";
import useInput from '../hooks/useInput';
import { Link } from "react-router-dom";
import { loginLang } from "../utils/language";
import LocaleContext from "../context/LocaleContext";

function LoginInput({login}){

    const [email,handleemail] = useInput('');
    const [password,handlepassword] = useInput('');

    const { lang } = React.useContext(LocaleContext); 
    
    function onSubmitHandler(event){
        event.preventDefault();
        
        login({
            email: email,
            password: password,
        });
    }

    return(
        <form onSubmit={onSubmitHandler} className='form'>
            <div>
                <label className="Input__Label">Email</label>
                <input type='email' className="Input" placeholder='email' value={email} onChange={handleemail} />
            </div>
            <div>
                <label className="Input__Label">Password</label>
                <input type='password' className="Input" placeholder='••••••••' value={password} autoComplete='current-password' onChange={handlepassword} />
            </div>
            <button type="submit" className="button-auth" >Login</button>
            <p className="subtitle">{loginLang[lang].RegisterPlaceholder} <Link to='/register'> {loginLang[lang].RegisterBtn}</Link></p>
        </form>
    )
}

LoginInput.propTypes = {
    login: Proptypes.func.isRequired
}

export default LoginInput;