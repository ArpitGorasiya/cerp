import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import classnames from 'classnames'
import { adminAddFaculty } from '../../redux/action/adminAction'
import AdminNav from '../../components/AdminNav'
import Sidebar from '../../components/Sidebar'

const AddFaculty = () => {

    const store = useSelector((state) => state)
    const dispatch = useDispatch()
    const history = useNavigate()
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [department, setDepartment] = useState('')
    const [designation, setDesignation] = useState('')
    const [facultyMobileNumber, setFacultyMobileNumber] = useState('')
    const [dob, setDob] = useState('')
    const [gender, setGender] = useState('')
    const [aadharCard, setAadharCard] = useState('')
    const [subject, setSubject] = useState('')
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        if (store.error) {
            setError(store.error)
        }
    }, [store.error])
    const formHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        dispatch(adminAddFaculty({
            fname,
            lname,
            email,
            designation,
            facultyMobileNumber,
            department,
            aadharCard,
            gender,
            dob: dob.split("-").reverse().join("-"),
            subject
        }))
    }

    useEffect(() => {
        if (store.admin.adminAddFacultyFlag) {
            setError({})
            // setFname = ''
            // setLname = ''
            // setEmail = ''
            // setDesignation = ''
            // setDepartment = ''
            // setDob = ''
            // setGender = ''
            // setFacultyMobileNumber = ''
            // setAadharCard = ''
            alert('Faculty Add Successfully')
            history('/admin/allFaculties')
        }
    }, [store.admin.adminAddFacultyFlag])

    useEffect(() => {
        if (store.error || store.admin.adminAddFacultyFlag) {
            setIsLoading(false)
        }
        else {
            setIsLoading(true)
        }
    }, [store.error, store.admin.adminAddFacultyFlag])

    const dep = store.admin.admin.department

    return (
        <div>
            {store.admin.isAuthenticated ? (<>
                <Sidebar />
                <div className='abc bg-light' style={{ height: '100vh' }}>
                <AdminNav />

                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0  text-gray-800"></h1>
                    </div>
                    <div className="container mt-4 border border-rounded p-4 bg-white">
                        <h2 className='text-center'>ADMIN ADD FACULTY</h2>
                        <div className="row mt-1">
                            <div className="col p-2">
                                <form noValidate onSubmit={formHandler}>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="nameId" className='mb-2'>First Name</label>
                                                <input onChange={(e) => setFname(e.target.value)} type="text" className={classnames("form-control",
                                                    {
                                                        'is-invalid': error.fname
                                                    })} id="nameId" />
                                                {error.fname && (<div className="text-danger mt-1 mb1">{error.fname}</div>)}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="nameId" className='mb-2'>Last Name</label>
                                                <input onChange={(e) => setLname(e.target.value)} type="text" className={classnames("form-control",
                                                    {
                                                        'is-invalid': error.lname
                                                    })} id="nameId" />
                                                {error.lname && (<div className="text-danger mt-1 mb-1">{error.lname}</div>)}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="emailId" className='mb-2'>Email</label>
                                                <input onChange={(e) => setEmail(e.target.value)} type="email" className={classnames("form-control",
                                                    {
                                                        'is-invalid': error.email
                                                    })} id="emailId" />
                                                {error.email && (<div className="text-danger mt-1 mb-1">{error.email}</div>)}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="designationId">Designation</label>
                                                <select onChange={(e) => setDesignation(e.target.value)} className={classnames("form-control",
                                                    {
                                                        'is-invalid': error.designation
                                                    })} id="designationId">
                                                    <option>Select</option>
                                                    <option value="Assistant Professor">Assistant Professor</option>
                                                    <option value="Senior Professer">Senior Professer</option>
                                                </select>
                                                {error.designation && (<div className="text-danger mt-1 mb-1">{error.designation}</div>)}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="departmentId" className='mb-2'>Department</label>
                                                <select onChange={(e) => setDepartment(e.target.value)} className={classnames("form-control",
                                                    {
                                                        'is-invalid': error.department
                                                    })} id="departmentId">
                                                    {/* <option>Select</option>
                                                    <option value="Electronics & Communication">Electronics & Communication</option>
                                                    <option value="Computer Science">Computer Science</option>
                                                    <option value="I.T">I.T</option>
                                                    <option value="Electrical & Electronics">Electrical & Electronics</option>
                                                    <option value="Mechanical">Mechanical</option>
                                                    <option value="Civil">Civil</option> */}
                                                    <option>Select</option>
                                                    <option value={dep}>{dep}</option>
                                                </select>
                                                {error.department && (<div className="text-danger mt-1 mb-1">{error.department}</div>)}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="dobId" className='mb-2'>DOB</label>
                                                <input onChange={(e) => setDob(e.target.value)} type="date" className={classnames("form-control",
                                                    {
                                                        'is-invalid': error.dob
                                                    })} id="dobId" />
                                                {error.dob && (<div className="text-danger mt-1 mb-1">{error.dob}</div>)}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="genderId" className='mb-2'>Gender</label>
                                                <select onChange={(e) => setGender(e.target.value)} className={classnames("form-control",
                                                    {
                                                        'is-invalid': error.gender
                                                    })} id="genderId">
                                                    <option>Select</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                                {error.gender && (<div className="text-danger mt-1 mb-1">{error.gender}</div>)}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="numberId" className='mb-2'>Contact Number</label>
                                                <input type="tel" onChange={(e) => setFacultyMobileNumber(e.target.value)} className={classnames("form-control",
                                                    {
                                                        'is-invalid': error.facultyMobileNumber
                                                    })} id='numberId' />
                                                {error.facultyMobileNumber && (<div className="text-danger mt-1 mb-1">{error.facultyMobileNumber}</div>)}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="aadharId" className='mb-2'>Aadhar Card Number</label>
                                                <input type="text" onChange={(e) => setAadharCard(e.target.value)} className={classnames("form-control",
                                                    {
                                                        'is-invalid': error.aadharCard
                                                    })} id='aadharId' />
                                                {error.aadharCard && (<div className="text-danger mt-1 mb-1">{error.aadharCard}</div>)}
                                            </div>
                                        </div>
                                        {/* <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="departmentId" className='mb-2'>Subject</label>
                                                <select onChange={(e) => setSubject(e.target.value)} className={classnames("form-control",
                                                    {
                                                        'is-invalid': error.department
                                                    })} id="departmentId">
                                                    <option>Select</option>
                                                    <option value={sub}>{sub}</option>
                                                </select>
                                                {error.department && (<div className="text-danger mt-1 mb-1">{error.department}</div>)}
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="row justify-content-center mt-2 mb-3">
                                        {/* <div className="col-md-1">
                                            {
                                                isLoading && <div><div className="spinner-border text-primary" role="status"></div>
                                                    <button type="submit" className="btn btn-info col-md-2 btnn">Add Faculty</button></div>
                                            }
                                        </div> */}<button type="submit" className="btn btn-primary col-md-2 btnn">Add Faculty</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>) : (history('/'))
            }
        </div >
    )
}

export default AddFaculty
