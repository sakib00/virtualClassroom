import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import Nav from '../Nav'
import Lessons from './Lessons'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import List from './List'
import { Grid } from '@material-ui/core';



export default function Course() {
    const [user, setUser] = useState({});
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("currentUser"));
        setUser(user.user);
    }, []);
    return (
        <div className="">

            <Nav user={user} />

            <Grid container spacing={2}>
                <Grid item xs={12} sm={10}>
                    <Container maxWidth="sm">

                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Courses Name
                        </Typography>
                        <Lessons />

                    </Container>

                </Grid>
                <Grid item xs={12} sm={2}>
                    <Container maxWidth="sm">

                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Student List
                        </Typography>
                        <List />

                    </Container>

                </Grid>
            </Grid>
        </div>
    );
}

