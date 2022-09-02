import React from "react";
import Proptypes from "prop-types";
import useInput from '../hooks/useInput';
import { Link } from "react-router-dom";
import LocaleContext from "../context/LocaleContext";
import { registerLang } from "../utils/language";

function RegisterInput({register}){
    const [name,handleName] = useInput('');
    const [email,handleemail] = useInput('');
    const [password,handlepassword] = useInput('');
    const [confirmPassword,handleconfirmPassword] = useInput('');
    
    const { lang } = React.useContext(LocaleContext); 

    function onSubmitHandler(event){
        event.preventDefault();

        if(password !== confirmPassword){
            return alert("Confirmation password tidak sama")
        }
        
        register({
            name: name,
            email: email,
            password: password,
        });
    }

    return(
        <form onSubmit={onSubmitHandler} className='form'>
            <div>
                <label className="Input__Label">{registerLang[lang].name}</label>
                <input type='text' className="Input" placeholder='nama' value={name} onChange={handleName} />
            </div>
            <div>
                <label className="Input__Label">{registerLang[lang].email}</label>
                <input type='email' className="Input" placeholder='email' value={email} onChange={handleemail} />
            </div>
            <div>
                <label className="Input__Label">{registerLang[lang].password}</label>
                <input type='password' className="Input" placeholder='••••••••' value={password} autoComplete='current-password' onChange={handlepassword} />
            </div>
            <div>
                <label className="Input__Label">{registerLang[lang].confirmpassword}</label>
                <input type='password' className="Input" placeholder='••••••••' value={confirmPassword} onChange={handleconfirmPassword} />
            </div>
            <button type="submit" className="button-auth" >{registerLang[lang].button}</button>
            <p className="subtitle">{registerLang[lang].loginPlace} <Link to='/'>Login</Link></p>
        </form>
    )
}

RegisterInput.propTypes = {
    register: Proptypes.func.isRequired
}

export default RegisterInput;