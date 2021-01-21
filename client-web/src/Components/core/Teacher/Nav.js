import React, { useState, useEffect } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({

    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #C0C0C0',
        borderRadius: '20px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },


    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function PrimarySearchAppBar(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [CourseName, setCourseName] = useState('');
    const [CourseDesc, setCourseDesc] = useState('');

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const [open, setOpen] = React.useState(false);

    const handleModalOpen = () => {
        setOpen(true);
    };

    const handleModalClose = () => {
        setOpen(false);
    };

    const onCourseNameChange = (e) => {
        setCourseName(e.target.value);
        console.log(props.user);
    }

    // const onCourseDescChange = (e) => {
    //     setCourseDesc(e.target.value);
    // }

    const onSubmit = async (e) => {
        e.preventDefault();
        const course = {
            title: CourseName,
            user_id: props.user._id
        }

        console.log(course)

        try {
            const res = await axios.post("http://localhost:8080/api/courses", course);
            console.log(res.data);

        } catch (err) {
            console.log(err);
        }
        console.log(e);
    }

    const handleSignOut = () => {
        localStorage.removeItem("currentUser");
        window.location.replace("/signin");

    }
    const handleHome = () => {
        window.location.replace("/teacherHome");

    }



    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem>{props.user.name}</MenuItem>
            <MenuItem onClick={handleSignOut} >Sign Out</MenuItem>

        </Menu>
    );



    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography onClick={handleHome} className={classes.title} variant="h6" noWrap>
                        Virtual Classroom
          </Typography>

                    <div className={classes.grow} />

                    <IconButton
                        edge="end"
                        aria-label="add class"
                        // aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleModalOpen}
                        color="inherit"
                    >
                        <AddIcon />
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={open}
                            onClose={handleModalClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                        >
                            <Fade in={open}>
                                <div className={classes.paper}>
                                    <h2 id="transition-modal-title">Create Class</h2>
                                    <form className={classes.form} noValidate onSubmit={onSubmit}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="courseCreateName"
                                            label="Course Name"
                                            name="courseAdd"
                                            autoComplete="course"
                                            onChange={onCourseNameChange}
                                            autoFocus
                                        />

                                        {/* <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="courseDes"
                                            label="Course Description"
                                            name="courseDes"
                                            autoComplete="course"
                                            onChange={onCourseDescChange}
                                            autoFocus
                                        /> */}



                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            className={classes.submit}
                                        >
                                            Create
                                        </Button>

                                    </form>
                                </div>
                            </Fade>
                        </Modal>
                    </IconButton>

                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>


                </Toolbar>
            </AppBar>

            {renderMenu}
        </div>
    );
}
