import React, { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../image/log.png'
import './nv.css'
import { useSelector, useDispatch } from 'react-redux'
import { studentLogout } from '../redux/action/studentAction'

const Ssidebar = () => {

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
        <div className="sna d-flex flex-column flex-shrink-0 p-3 text-white " style={{ width: "310px", height: "100vh" }}>
            <Link className="navbar-brand" to="/admin/home">
                <img src={logo} style={{ width: 100 }} height="100px" alt="logo" className='p-1 d-flex pic' />  <h6 className="sp font-weight-bold mt-3 mb-1  i fs-5">SUTEX Institute of Technology</h6>
            </Link>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/student/home">DASHBOARD</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/student/attendence">ATTENDENCE</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/student/result">RESULT</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/student/subjects">SUBJECTS</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/student/assignments">ASSIGNMENT</NavLink>
                </li>
            </ul>
            {/* <hr />
            <div className="dropdown dd">
                <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false"> */}
            {/* <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" /> */}
            {/* <strong><i className="fa-regular bt fa-user border rounded-5 p-2 text-dark bg-white rounded-circle"></i> {fname.toUpperCase()} {lname.toUpperCase()}</strong> */}
            {/* </Link> */}
            {/* <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><Link className="dropdown-item" to="/student/profile">Profile</Link></li>
                    <li><Link className="dropdown-item" to="/student/updatePassword">Update Password</Link></li>
                    <li><hr className="dropdown-divider" /></li> */}
            {/* <li><Link className="dropdown-item" to="#">Sign out</Link></li> */}
            {/* <li><button style={{ listStyle: "None" }} onClick={logoutHandler} type="button" className="btn text-white"><li>Sign out</li></button></li>
                </ul>
            </div> */}
        </div>
    )
}

export default Ssidebar
