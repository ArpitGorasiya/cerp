import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, withRouter } from 'react-router-dom'
import { facultyUpdate, facultyLogout } from '../../redux/action/facultyAction'
import FacultyNav from '../../components/FacultyNav'
import Fsidebar from '../../components/Fsidebar'

const UpdateProfile = () => {

    const store = useSelector((store) => store)
    const dispatch = useDispatch()
    const history = useNavigate()
    const [facultyMobileNumber, setContactNumber] = useState('')
    const [avatar, setAvatar] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const imagehandler = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0]
            setAvatar(img)
        }
    }


    const formHandler = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("facultyMobileNumber", facultyMobileNumber)
        formData.append("avatar", avatar)
        formData.append("email", store.faculty.faculty.faculty.email)
        setIsLoading(true)
        dispatch(facultyUpdate(formData, history))
        alert("Kindly login again to see updates")
        dispatch(facultyLogout())
        history('/facultyLogin')
    }

    useEffect(() => {
        if (store.faculty.updateProfileFlag) {
            setIsLoading(false)
        }
    }, [store.faculty.updateProfileFlag])

    return (
        <div>
            <Fsidebar />
            {store.faculty.isAuthenticated ? <>
                <div className='abc bg-light' style={{ height: '100vh', width: "82vw" }}>
                    <FacultyNav />
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        {/* <h1 className="h3 mb-0 mt-4 text-gray-800">Dashboard</h1> */}
                    </div>
                    <div className="container mt-5 bb border border-rounded p-4 bg-white">
                        <h1 className='text-center'>UPDATE PROFILE</h1>
                        <div className="row mt-1">
                            <div className="col p-2">
                                <form onSubmit={formHandler}>
                                    <div className="row justify-content-center mt-3">
                                        {/* <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="designationId">Designation</label>
                                        <select className="form-control" id="designationId">
                                            <option>Select</option>
                                            <option value="Assistant Professor">Assistant Professor</option>
                                            <option value="Senior Professer">Senior Professer</option>
                                        </select>
                                    </div>
                                </div> */}
                                        {/* <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="departmentId" className='mb-2'>Department</label>
                                        <select className="form-control" id="departmentId">
                                            <option>Select</option>
                                            <option value="Electronics & Communication">Electronics & Communication</option>
                                            <option value="Computer Science">Computer Science</option>
                                            <option value="I.T">I.T</option>
                                            <option value="Electrical & Electronics">Electrical & Electronics</option>
                                            <option value="Mechanical">Mechanical</option>
                                            <option value="Civil">Civil</option>
                                        </select>
                                    </div>
                                </div> */}
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="emailId" className='mb-2'>Profile Picture</label>
                                                <input type="file" accept=".jpg,.png,.jpeg" onChange={imagehandler} className="form-control" id="emailId" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center mt-3">

                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="emailId" className='mb-2'>Email</label>
                                                <input type="email" className="form-control" id="emailId" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center mt-3">
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="numberId" className='mb-2'>Contact Number</label>
                                                <input type="tel" onChange={(e) => setContactNumber(e.target.value)} className="form-control" id='numberId' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center mt-5 mb-3">
                                        <button type="submit" className="btn btn-info col-md-2 btnn">Update Profile</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </> : history('/facultyLogin')}
        </div>
    )
}

export default UpdateProfile
