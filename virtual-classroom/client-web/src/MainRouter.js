import React from 'react'
import { Route, Switch } from 'react-router-dom'


import Signup from './Components/user/Signup'
import Signin from './Components/auth/Signin'
import Home from './Components/core/Student/StudentHome'
import TeacherHome from './Components/core/Teacher/TeacherHome'
import StudentHome from './Components/core/Student/StudentHome'
import TeacherLessons from './Components/core/Teacher/course/Lessons'
import StudentLessons from './Components/core/Student/course/Lessons'
import StudentCourse from './Components/core/Student/course/Course'
import TeacherCourse from './Components/core/Teacher/course/Course'



const MainRouter = () => {
    return (<div>

        <Switch>

            <Route path="/signup" component={Signup} />
            <Route path="/studenthome" component={Home} />
            <Route path="/teacherhome" component={TeacherHome} />
            <Route path="/studentHome" component={StudentHome} />
            <Route path="/teacherLessons" component={TeacherLessons} />
            <Route path="/studentLessons" component={StudentLessons} />
            <Route path="/studentCourse" component={StudentCourse} />
            <Route path="/teacherCourse" component={TeacherCourse} />
            <Route path="/" component={Signin} />


        </Switch>
    </div>)
}

export default MainRouter