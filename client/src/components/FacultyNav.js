import React, { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './nav.css'
import logo from '../image/logo.png'
import { useSelector, useDispatch } from 'react-redux'
import { facultyLogout } from '../redux/action/facultyAction'

const FacultyNav = () => {

    const store = useSelector(store => store)
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    useEffect(() => {

        if (store.faculty.faculty.faculty.fname) {
            setFname(store.faculty.faculty.faculty.fname)
        }
    }, [store.faculty.faculty.faculty.fname])

    useEffect(() => {

        if (store.faculty.faculty.faculty.lname) {
            setLname(store.faculty.faculty.faculty.lname)
        }
    }, [store.faculty.faculty.faculty.lname])
    const history = useNavigate()
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(facultyLogout())
        history('/')
    }

    return (
        <div>
            <nav className="snna navbar navbar-expand-lg sn ac shadow-lg p-3 mb-5" style={{ width: '80vw' }}>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <NavLink className="nav-link" to="/admin/home">DASHBOARD</NavLink> */}
                            </li>
                            <li className="nav-item">
                                {/* <NavLink className="nav-link" to="/admin/addAdmin">ADD ADMIN</NavLink> */}
                            </li>
                            <li className="nav-item">
                                {/* <NavLink className="nav-link" to="/admin/allFaculties">OUR FACULTY</NavLink> */}
                            </li>
                            <li className="nav-item">
                                {/* <NavLink className="nav-link" to="/admin/addFaculty">ADD FACULTY</NavLink> */}
                            </li>
                            <li className="nav-item">
                                {/* <NavLink className="nav-link" to="/admin/allStudents">OUR STUDENT</NavLink> */}
                            </li>
                            <li className="nav-item">
                                {/* <NavLink className="nav-link" to="/admin/addStudent">ADD STUDENT</NavLink> */}
                            </li>
                            <li className="nav-item">
                                {/* <NavLink className="nav-link" to="/admin/allSubjects">SUBJECT</NavLink> */}
                            </li>
                            <li className="nav-item">
                                {/* <NavLink className="nav-link" to="/admin/addSubject">ADD SUBJECT</NavLink> */}
                            </li>
                            <li className="nav-item">
                                {/* <NavLink className="nav-link" to="/admin/addNotice">ADD NOTICE</NavLink> */}
                            </li>
                        </ul>
                        <div className="dropdown dd p-3">
                            <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                {/* <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" /> */}
                                <strong><i className="fa-regular bt fa-user border rounded-5 p-2 text-dark bg-white rounded-circle"></i> {fname.toUpperCase()} {lname.toUpperCase()}</strong>
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                <li><Link className="dropdown-item" to="/faculty/profile">Profile</Link></li>
                                <li><Link className="dropdown-item" to="/faculty/updatePassword">Update Password</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                {/* <li><Link className="dropdown-item" to="#">Sign out</Link></li> */}
                                <li><button style={{ listStyle: "None" }} onClick={logoutHandler} type="button" className="btn text-white"><li>Sign out</li></button></li>
                            </ul>
                        </div>
                        {/* <div>
                            <li className=" p-3" style={{ listStyle: 'none' }}>
                                <span className="text-white"  >
                                    <i className="fa-regular bt fa-user border rounded-5 p-2 text-white rounded-circle"></i> {email.toUpperCase()}
                                </span> */}
                        {/* <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item bg-white text-dark" to="/admin/profile">PROFILE</Link></li>
                                    <li><Link className="dropdown-item bg-white text-dark" to="/admin/updatePassword">UPDATE PASSWORD</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><button style={{ listStyle: "None" }} onClick={logoutHandler} type="button" className="btn"><li>LOGOUT</li></button></li>
                                </ul> */}
                        {/* </li>
                        </div> */}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default FacultyNav
