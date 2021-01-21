import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from "axios";

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('0');


    const onSubmit = (e) => {
        e.preventDefault();
        // const formData = new FormData();
        // formData.append("name", this.state.name);
        // formData.append("password", this.state.password);
        // formData.append("email", this.state.email);
        // formData.append("role", this.state.role);
        const user = {
            name: name,
            password: password,
            email: email,
            role: role
        }

        console.log(user)
        

        // try {
        //     const res = await axios.post("http://localhost:8080/api/registeruser", user);
        //     console.log(res.data);

        // } catch (err) {
        //     console.log(err);
        // }
    }


    return (




        <div className="form-row">
            <form className="row g-3" onSubmit={onSubmit}>
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="role" className="form-label">Role</label>
                    <select id="role" className="form-select" name="role" value={role} onChange={e => setRole(e.target.value)}>
                        <option selected value="0">Student</option>
                        <option value="1">Teacher</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign up</button>
                </div>
            </form>

        </div>
    )

}
