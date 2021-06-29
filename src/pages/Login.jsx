import React, { useState } from 'react'

export default function Login() {
    const [name, setName] = useState('');

    const handleNameUpdate = (e) => {
        setName(e.target.value);
    };

    return (
        <>
            <h2>Login</h2>
            <p>please log in</p>

            <label>Name:</label>
            <input type="text" value={name} onChange={handleNameUpdate} />
            
            <button onClick={() => {}}>Log in</button>
        </>
    );
}
