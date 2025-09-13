function validEmail(email){
    emailValidation = email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/g)
    if (!emailValidation){
        const err =  Error('O email é invalido, precisa seguir o modelo "__@__.__"')
        err.input = 'email'
        throw err
    }
}
function validPassword(password) {
    const passwordValidation = password.match(/[A-Z]/);
    const passwordValidation2 = password.match(/[a-z]/);
    const passwordValidation3 = password.match(/[0-9]/);
    const passwordValidation4 = password.match(/[^A-Za-z0-9]/);

    if (!passwordValidation || !passwordValidation2 || !passwordValidation3 || !passwordValidation4 || password.length < 8) {
        const err = Error("A senha é inválida. Ela deve conter: pelo menos 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial, além de ter no mínimo 8 caracteres.");
        err.input = 'password';
        throw err;
    }
}


function resetFormStyle(inputs){
    Object.entries(inputs).forEach(([key, value]) =>{
        value.classList.remove('error', 'success')
        document.querySelector(`#${key}-error`).textContent = ''
    })
}

const userInputs = {
    email: document.getElementById('email'),
    password: document.getElementById('password')
}


function getInformation(){
    resetFormStyle(userInputs)
    try{
        validEmail(userInputs.email.value)
        userInputs.email.classList.add('success')
        validPassword(userInputs.password.value)
        userInputs.password.classList.add('success')
    }
    catch (err){
            userInputs[err.input].classList.add('error');  
            document.querySelector(`#${err.input}-error`).textContent = err.message;
    }
}