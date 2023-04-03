import React, { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './nav.css'
import logo from '../image/logo.png'
import { useSelector, useDispatch } from 'react-redux'
import { adminLogout } from '../redux/action/adminAction'

const AdminNav = () => {
    const store = useSelector(store => store)
    const [name, setName] = useState("")
    useEffect(() => {

        if (store.admin.admin.name) {
            setName(store.admin.admin.name)
        }
    }, [store.admin.admin.name])
    const history = useNavigate()
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(adminLogout())
        history('/')
    }
    return (
        // <div>
        //     <nav className="navbar navbar-expand-lg bg-white">
        //         <div className="container-fluid">
        //             <NavLink className="navbar-brand" to="/admin/home">
        //                 <img src={logo} style={{ width: 80 }} height="80px" alt="logo" className='p-1' />
        //             </NavLink>
        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //             <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                     <li className="nav-item">
        //                         <NavLink className="nav-link" to="/admin/home">DASHBOARD</NavLink>
        //                     </li>
        //                     <li className="nav-item dropdown">
        //                         <Link className="nav-link" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                             FACULTY
        //                         </Link>
        //                         <ul className="dropdown-menu">
        //                             <li><NavLink className="dropdown-item" to="/admin/addFaculty">ADD FACULTY</NavLink></li>
        //                             <li><NavLink className="dropdown-item" to="/admin/allFaculties">OUR FACULTY</NavLink></li>
        //                         </ul>
        //                     </li>
        //                     <li className="nav-item dropdown">
        //                         <Link className="nav-link" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                             STUDENT
        //                         </Link>
        //                         <ul className="dropdown-menu">
        //                             <li><NavLink className="dropdown-item" to="/admin/addStudent">ADD STUDENT</NavLink></li>
        //                             <li><NavLink className="dropdown-item" to="/admin/allStudents">OUR STUDENT</NavLink></li>
        //                         </ul>
        //                     </li>
        //                     <li className="nav-item dropdown">
        //                         <Link className="nav-link" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                             SUBJECT
        //                         </Link>
        //                         <ul className="dropdown-menu">
        //                             <li><NavLink className="dropdown-item" to="/admin/addSubject">ADD SUBJECT</NavLink></li>
        //                             <li><NavLink className="dropdown-item" to="/admin/allSubjects">SUBJECT</NavLink></li>
        //                         </ul>
        //                     </li>
        //                     <li className="nav-item dropdown">
        //                         <Link className="nav-link" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                             NOTICE
        //                         </Link>
        //                         <ul className="dropdown-menu">
        //                             <li><NavLink className="dropdown-item" to="/admin/addNotice">ADD NOTICE</NavLink></li>
        //                         </ul>
        //                     </li>
        //                 </ul>
        //                 <div>
        //                     <li className="dropdown p-3" style={{ listStyle: 'none' }}>
        //                         <NavLink className="nav-link" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                             <i className="fa-regular bt fa-user border rounded-5 p-2 text-white rounded-circle"></i> {name.toUpperCase()}
        //                         </NavLink>
        //                         <ul className="dropdown-menu">
        //                             <li><NavLink className="dropdown-item bg-white text-dark" to="/admin/profile">PROFILE</NavLink></li>
        //                             {/* <li><NavLink className="dropdown-item bg-white text-dark" to="/admin/updatePassword">UPDATE PASSWORD</NavLink></li> */}
        //                             <li><hr className="dropdown-divider" /></li>
        //                             <li><button style={{ listStyle: "None" }} onClick={logoutHandler} type="button" className="btn"><li>LOGOUT</li></button></li>
        //                         </ul>
        //                     </li>
        //                 </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        //             </div>
        //         </div>
        //     </nav>
        // </div>
        <div>
            <nav className="snaa navbar  navbar-expand-lg sn shadow-lg p-3 mb-5" style={{ width: '81vw' }}>
                <div className="container-fluid">
                    {/* <Link className="navbar-brand" to="/admin/home">
                        <img src={logo} style={{ width: 80 }} height="80px" alt="logo" className='p-1' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav me-auto mb-2 mb-lg-0">
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
                                <strong><i className="fa-regular bt fa-user border rounded-5 p-2 text-dark bg-white rounded-circle"></i>  {name.toUpperCase()}</strong>
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                <li><Link className="dropdown-item" to="/admin/profile">Profile</Link></li>
                                {/* <li><Link className="dropdown-item" to="/admin/updatePassword">Update Password</Link></li> */}
                                <li><hr className="dropdown-divider" /></li>
                                {/* <li><Link className="dropdown-item" to="#">Sign out</Link></li> */}
                                <li><button style={{ listStyle: "None" }} onClick={logoutHandler} type="button" className="btn text-white"><li>Sign out</li></button></li>
                            </ul>
                        </div>
                        {/* <div>
                            <li className="dropdown dd p-3" style={{ listStyle: 'none' }}>
                                <span className="text-white"  >
                                    <i className="fa-regular bt fa-user border rounded-5 p-2 text-white rounded-circle"></i> {name.toUpperCase()}
                                </span>
                                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                                    <li><Link className="dropdown-item bg-white text-dark" to="/admin/profile">PROFILE</Link></li>
                                    <li><Link className="dropdown-item bg-white text-dark" to="/admin/updatePassword">UPDATE PASSWORD</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><button style={{ listStyle: "None" }} onClick={logoutHandler} type="button" className="btn"><li>LOGOUT</li></button></li>
                                </ul>
                            </li>
                        </div> */}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AdminNav
