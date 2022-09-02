import React from "react";
import { useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import '../css/Register.css';
import { register } from "../utils/network-data";

function RegisterPage(){
    const navigate = useNavigate();

    async function onRegisterHandler(user){
        const { error } = await register(user);
        if(!error){
            navigate('/');
        }
    }

    return(
        <section className="Register__section">
            <div className="Register__container">
                <div className="Register__main">
                    <h1 className="Register__heading">Created Account</h1>
                    <RegisterInput register={onRegisterHandler} />
                </div>
            </div>
        </section>
    )
}

export default RegisterPage;