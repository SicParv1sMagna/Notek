import React from "react";

const Login = () => {

    const handleSubmitForm = (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
    }

    return (
        <form
            className="AuthForm"
            onSubmit={(e) => handleSubmitForm(e)}
        >
            <input id="email" placeholder="Email"></input>
            <input id="password" placeholder="Password"></input>
            <button type="Submit">Login</button>
        </form>
    )
};

export default Login;