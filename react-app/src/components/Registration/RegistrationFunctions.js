import { useState } from 'react';

const RegistrationFunctions = () => {
    const [email, setEmail] = useState('asdasd');
    const [password, setPassword] = useState('asdasdas');

    function onEmailChange(e) {
        setEmail(e.target.value);
    }

    function onPasswordChange(e) {
        setPassword(e.target.value);
    }

    function onRegister(e) {
        e.preventDefault();
        console.log(email);
        console.log(password);
    }

    return (
        <div>
        
            <div>Registration Form</div>
            <form onSubmit={onRegister}>
                <div>
                    <div>Email</div>
                    <div>
                        <input
                            type='text'
                            value={email}
                            onChange={onEmailChange}
                        />
                    </div>
                </div>

                <div>
                    <div>Password</div>
                    <div>
                        <input
                            type='text'
                            value={password}
                            onChange={onPasswordChange}
                        />
                    </div>
                </div>

                <div>
                    <button type='submit'>Register</button>
                </div>
            </form>
        </div>
    );
};

export default RegistrationFunctions;
