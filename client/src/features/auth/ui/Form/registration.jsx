import React from "react";

const Registration = () => {
    const handleSubmitForm = (e) => {
        e.preventDefault();

        const firstName = document.getElementById("firstName").value;
        const secondName = document.getElementById("secondName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const rpassword = document.getElementById("rpassword").value;
    }

    return (
        <form
            className="AuthForm"
            onSubmit={(e) => handleSubmitForm(e)}
        >
            <input id="firstName" placeholder="First name"></input>
            <input id="secondName" placeholder="Second name"></input>
            <input id="email" placeholder="Email" type="email"></input>
            <input id="password" placeholder="Password" type="password"></input>
            <input id="rpassword" placeholder="Repeat Password" type="password"></input>
            <button type="submit">Register</button>
        </form>
    )
}

export default Registration;