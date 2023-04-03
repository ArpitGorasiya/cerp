import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import classnames from 'classnames'
import FacultyNav from '../../components/FacultyNav'
import { facultyUpdatePassword, facultyLogout } from '../../redux/action/facultyAction'
import Fsidebar from '../../components/Fsidebar'

const UpdatePassword = () => {

    const store = useSelector((store) => store)
    const history = useNavigate()
    const dispatch = useDispatch()
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState({})

    useEffect(() => {
        if (store.error) {
            setError(store.error)
        }
    }, [store.error])
    const formHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        dispatch(facultyUpdatePassword({ registrationNumber: store.faculty.faculty.faculty.registrationNumber, oldPassword, newPassword, confirmNewPassword }))
        // alert('Password Updated')
        dispatch(facultyLogout())
        history('/faculty/home')
    }
    useEffect(() => {

    }, [store.faculty])

    return (
        <>
            <Fsidebar />
            <div className='abc bg-light' style={{ height: '100vh', width: "82vw" }}>
                <FacultyNav />
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    {/* <h1 className="h3 mb-0 mt-4 text-gray-800">Dashboard</h1> */}
                </div>
                <div className="container mt-5 border border-rounded p-4 bg-white" style={{ width: '80%' }}>
                    <h3 className='text-center'>FACULTY UPDATE PASSWORD</h3>
                    <div className="row mt-1">
                        <div className="col p-2">
                            <form noValidate onSubmit={formHandler}>
                                <div className="row justify-content-center mt-3">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label htmlFor="nameId" className='mb-2'>Old Password</label>
                                            <input onChange={(e) => setOldPassword(e.target.value)} type="password" value={oldPassword} className={classnames("form-control",
                                                {
                                                    'is-invalid': error.oldPassword

                                                })} id="nameId" />
                                            {error.oldPassword && (<div className="text-danger mt-1 mb-1">{error.oldPassword}</div>)}
                                        </div>
                                    </div>
                                </div>

                                <div className="row justify-content-center mt-3">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label htmlFor="nameId" className='mb-2'>New Password</label>
                                            <input onChange={(e) => setNewPassword(e.target.value)} value={newPassword} className={classnames("form-control", {
                                                "is-invalid": error.newPassword
                                            })} type="password" id="nameId" />
                                            {error.newPassword && (<div className="text-danger mt-1 mb-1">{error.newPassword}</div>)}
                                        </div>
                                    </div>
                                </div>

                                <div className="row justify-content-center mt-3">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label htmlFor="nameId" className='mb-2'>Confirm New Password</label>
                                            <input onChange={(e) => setConfirmNewPassword(e.target.value)} value={confirmNewPassword} className={classnames("form-control", {
                                                "is-invalid": error.confirmNewPassword
                                            })} type="password" id="nameId" />
                                            {error.confirmNewPassword && (<div className="text-danger mt-1 mb-1">{error.confirmNewPassword}</div>)}
                                        </div>
                                    </div>
                                </div>

                                <div className="row justify-content-center mt-5 mb-3">
                                    <button type="submit" className="btn btn-primary col-md-2 btnn">Update Password</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdatePassword
