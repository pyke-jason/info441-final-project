import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import escapeHTML from './utils/sanitize';

export default function LoginButton() {
    const [identityInfo, setIdentityInfo] = useState(null);
    useEffect(() => {
        fetch(`api/v1/users/myIdentity`).then(
            res => {

                var json = res.json();
                if (json !== null && json.status === "loggedin") {

                    setIdentityInfo(json);
                }
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);
    const onClick = () => {

    }
    if (identityInfo === null) {
        return <>
            <button href="signin" onClick={onClick()}>Log In</button>
        </>
    }
    else {
        return <>
            <button href="signout" onClick={onClick()}>Log Out</button>
            <a href={`/userInfo?user=${encodeURIComponent(identityInfo.userInfo.username)}`}>{escapeHTML(identityInfo.userInfo.name)} ({escapeHTML(identityInfo.userInfo.username)})</a>
        </>
    }
}