import React from "react";
import AuthorizationForm from "../../features/auth/auth";
import About from "../../widgets/about/about";

import "./auth.css";

const Authorization = () => {
    return (
        <div className="AuthContainer">
            <About />
            <AuthorizationForm />
        </div>
    )
};

export default Authorization;