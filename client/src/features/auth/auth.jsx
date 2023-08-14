import React, { useState } from "react";
import Login from "./ui/Form/login";
import Registration from "./ui/Form/registration";

import "./ui/form.css";

const AuthorizationForm = () => {
    const [register, setRegister] = useState(true);

    const handleChooseRegister = (newRegister) => {
        setRegister(newRegister);
    }

    return (
        <div className="FormContainer">
            <div className="AuthButtonContainer">
                <button
                    id={register ? "activeAuthButton" : ""}
                    onClick={()=>handleChooseRegister(true)}
                >Регистрация</button>
                <button
                    id={!register ? "activeAuthButton" : ""}
                    onClick={()=>handleChooseRegister(false)}
                >Авторизация</button>
            </div>
            {register ?
                (
                    <Registration />
                )
                :
                (
                    <Login />
                )
            }
        </div>
    )
}

export default AuthorizationForm;