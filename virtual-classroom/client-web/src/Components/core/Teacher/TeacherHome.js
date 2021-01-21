import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import Nav from './Nav'
import Body from './Body.js'
import axios from 'axios';

export default function TeacherHome() {
    const [user, setUser] = useState({});
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        let userOb = JSON.parse(localStorage.getItem("currentUser"));
        setUser(userOb.user);
        getCourses(userOb.user._id);
    }, []);

    const getCourses = async (user_id) => {
        // try {
        //     const res = await axios.post('http://localhost:8080/api/teacher/courses', { user_id: user_id });
        //     console.log(res.data.courses)
        //     setCourses(res.data.courses)
        //    // console.log('courses', res.data.courses)
        // } catch (err) {
        //     // Handle Error Here
        //     console.error(err);
        // }
    };
    return (
        <div className="">
            <Nav user={user} />
            <Body user={user} />
        </div>
    );
}


