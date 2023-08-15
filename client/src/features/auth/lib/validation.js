export const validateEmail = (email) => {
    const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (emailReg.test(email) == false) {
        return "Введите корректный Email";
    }

    return true;
};

export const validatePassword = (password, rpassword) => {
    let passwordReg = /^[a-zA-Z]{3,}\w{8,20}\d+$/;

    if (password !== rpassword) {
        return "Паролни не совпадают";
    }

    if (passwordReg.test(password) == false) {
        return "Введите корректный пароль";
    }

    return true;
};
