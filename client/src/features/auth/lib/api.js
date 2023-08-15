import axios from "axios";

export const login = async (
    email,
    password
) => {
    const data = {
        email: email,
        password: password,
    }

    const response = await axios.post("http://localhost:8080/api/auth/login-user", data);
    console.log(response);
}

export const registration = async (
    firstName,
    secondName,
    email,
    password
) => {
    const data = {
        firstName: firstName,
        lastName: secondName,
        email: email,
        password: password,
    }
    
    const response = await axios.post("http://localhost:8080/api/auth/register-user", data);
    console.log(response);
}
