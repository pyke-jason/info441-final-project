import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import escapeHTML from './utils/sanitize';

export default function LoginButton() {
    const [identityInfo, setIdentityInfo] = useState(null);
    const fetchUserIdentity = async () => {
        console.log('fetching user identit');
        fetch(`api/v1/users/myIdentity`).then(res => res.json()).then(
            json => {
                console.log(json);
                if (json !== null && json.status === "loggedin") {
                    setIdentityInfo(json);
                    console.log("identityInfo", identityInfo)
                }
            },
            (error) => {
                console.log(error);
            }
        )
    }
    useEffect(() => {
        fetchUserIdentity();
    }, []);
    const onClick = () => {
        const fetchUserIdentity = async () => {
            await fetch(`api/v1/users/myIdentity`).then(
                res => {
                    var json = res.json();
                    if (json !== null && json.status === "loggedin") {
                        setIdentityInfo(json);
                        console.log("identityInfo", identityInfo)
                    }
                },
                (error) => {
                    console.log(error);
                }
            )
        }
        fetchUserIdentity()
    }
    if (identityInfo === null) {
        return <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">UW ISL&NLA</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#library">Library</Nav.Link>
                    <Nav.Link href="#book">Books</Nav.Link>
                </Nav>
                <Button href="/signin" variant="secondary" onClick={onClick()}>Log In</Button>
            </Container>
        </Navbar>
    } else {
        return <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">UW ISL&NLA</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Button href="signout" onClick={onClick()}>Log Out</Button>
                <a href={`/userInfo?user=${encodeURIComponent(identityInfo.userInfo.username)}`}>{escapeHTML(identityInfo.userInfo.name)} ({escapeHTML(identityInfo.userInfo.username)})</a>
            </Container>
        </Navbar>
    }
}