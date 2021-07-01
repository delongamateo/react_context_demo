import React, {useContext} from 'react';
import {UserContext} from "../App";


export default function PersonalSetting() {
    const {userSalutation} = useContext(UserContext);

    return (
        <>
            <h3>Personal setting sectin</h3>
            <h4>Hello, {userSalutation}</h4>

            <p>Sorry, there is nothing you can setup.</p>
        </>
    );
}
