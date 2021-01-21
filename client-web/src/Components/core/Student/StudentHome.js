import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import Nav from './Nav'
import Body from './Body'


export default function Home() {
    const [user, setUser] = useState({});
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("currentUser"));
        setUser(user.user);
    }, []);
    return (
        <div className="">
            <Nav user={user} />
            <Body user={user} />
        </div>
    );
}


