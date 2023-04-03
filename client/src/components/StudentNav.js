import React, { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './nav.css'
import { useSelector, useDispatch } from 'react-redux'
import logo from '../image/logo.png'
import { studentLogout } from '../redux/action/studentAction'

const StudentNav = () => {

    const history = useNavigate()
    const dispatch = useDispatch()
    const store = useSelector((store) => store)
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    useEffect(() => {
        if (store.student.student.student.fname) {
            setFname(store.student.student.student.fname)
        }
        if (store.student.student.student.lname) {
            setLname(store.student.student.student.lname)
        }
    }, [store.student.student.student.name])

    const logoutHandler = () => {
        dispatch(studentLogout())
        history('/')
    }

    return (
        <div>
            <nav className="snaa navbar  navbar-expand-lg sn ac shadow-lg p-3 mb-5" style={{ width: '80vw' }}>
                <div className="container-fluid">
                    {/* <Link className="navbar-brand" to="/student/home">
                        <img src={logo} style={{ width: 80 }} height="80px" alt="logo" className='p-1' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">NAME</NavLink>
                            </li> */}
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="#">ADD STUDENT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">ADD FACULTY</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">ADD SUBJECT</NavLink>
                            </li> */}
                            <li className="nav-item">
                                {/* <NavLink className="nav-link" to="/student/home">DASHBOARD</NavLink> */}
                            </li>
                            <li className="nav-item">
                                {/* <NavLink className="nav-link" to="/student/attendence">ATTENDENCE</NavLink> */}
                            </li>
                            <li className="nav-item">
                                {/* <NavLink className="nav-link" to="/student/result">RESULT</NavLink> */}
                            </li>
                            <li className="nav-item">
                                {/* <NavLink className="nav-link" to="/student/subjects">SUBJECTS</NavLink> */}
                            </li>
                            <li className="nav-item">
                                {/* <NavLink className="nav-link" to="/student/assignments">ASSIGNMENT</NavLink> */}
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown dd p-3">
                        <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            {/* <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" /> */}
                            <strong><i className="fa-regular bt fa-user border rounded-5 p-2 text-dark bg-white rounded-circle"></i>  {fname.toUpperCase()} {lname.toUpperCase()}</strong>
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                            <li><Link className="dropdown-item" to="/student/profile">Profile</Link></li>
                            <li><Link className="dropdown-item" to="/student/updatePassword">Update Password</Link></li>
                            {/* <li><Link className="dropdown-item" to="/admin/updatePassword">Update Password</Link></li> */}
                            <li><hr className="dropdown-divider" /></li>
                            {/* <li><Link className="dropdown-item" to="#">Sign out</Link></li> */}
                            <li><button style={{ listStyle: "None" }} onClick={logoutHandler} type="button" className="btn text-white"><li>Sign out</li></button></li>
                        </ul>
                    </div>
                    {/* <div>
                        <li className="dropdown p-3" style={{ listStyle: 'none' }}>
                            <NavLink className="linkdd" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa-regular bt fa-user border rounded-5 p-2 text-white rounded-circle"></i> {fname.toUpperCase()} {lname.toUpperCase()}
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item bg-white text-dark" to="/student/profile">PROFILE</Link></li>
                                <li><Link className="dropdown-item bg-white text-dark" to="/student/updatePassword">UPDATE PASSWORD</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><button style={{ listStyle: "None" }} onClick={logoutHandler} type="button" className="btn"><li>LOGOUT</li></button></li>
                            </ul>
                        </li>
                    </div> */}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
            </nav>
        </div>
    )
}

export default StudentNav
