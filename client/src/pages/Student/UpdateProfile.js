import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'


import { studentUpdate, studentLogout } from '../../redux/action/studentAction'
import { useNavigate } from 'react-router-dom'
import StudentNav from '../../components/StudentNav'
import Ssidebar from '../../components/Ssidebar'

const UpdateProfile = () => {

    const store = useSelector((store) => store)
    const dispatch = useDispatch()
    const history = useNavigate()
    const [avatar, setAvatar] = useState('')
    // const [email, setEmail] = useState('')
    const [studentMobileNumber, setContactNumber] = useState('')
    const [fatherMobileNumber, setFatherContactNumber] = useState('')
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [modal, setModal] = useState(false)
    const imagehandler = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0]
            setAvatar(img)
        }
    }

    useEffect(() => {
        if (store.error) {
            setError(store.error)
        }
    }, [store.error])

    const formHandler = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("avatar", avatar)
        // formData.append("email", email)
        formData.append("studentMobileNumber", studentMobileNumber)
        formData.append("fatherMobileNumber", fatherMobileNumber)
        formData.append("email", store.student.student.student.email)
        dispatch(studentUpdate(formData, history))
        setModal(true)
        alert("Kindly login again to see updates")
        dispatch(studentLogout())
        history('/studentLogin')
    }

    return (
        <>
            <Ssidebar />
            <div className='abc bg-light' style={{ height: '100vh', width: '82vw' }}>
                <StudentNav />
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    {/* <h1 className="h3 mb-0 mt-4 text-gray-800">Dashboard</h1> */}
                </div>
                <div className="container mt-5 border border-rounded p-4 bg-white">
                    <h1 className='text-center'>UPDATE PROFILE</h1>
                    <div className="row mt-1">
                        <div className="col p-2">
                            <form onSubmit={formHandler}>
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
                                <div className="row justify-content-center mt-3">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label htmlFor="emailId" className='mb-2'>Profile Picture</label>
                                            <input type="file" accept=".jpg,.png,.jpeg" className="form-control" id="emailId" onChange={imagehandler} />
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="row justify-content-center mt-3">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="emailId" className='mb-2'>Email</label>
                                        <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="emailId" />
                                    </div>
                                </div>
                            </div> */}
                                <div className="row justify-content-center mt-3">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label htmlFor="numberId" className='mb-2'>Contact Number</label>
                                            <input type="tel" onChange={(e) => setContactNumber(e.target.value)} className="form-control" id='numberId' />
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-3">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label htmlFor="numberId" className='mb-2'>Father Contact Number</label>
                                            <input type="tel" onChange={(e) => setFatherContactNumber(e.target.value)} className="form-control" id='numberId' />
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-5 mb-3">
                                    <button type="submit" className="btn btn-info col-md-2 btnn">Update Profile</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}

export default UpdateProfile
