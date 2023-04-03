import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import classnames from 'classnames'
import { adminAddAdmin } from '../../redux/action/adminAction'
import AdminNav from '../../components/AdminNav'
import Sidebar from '../../components/Sidebar'
import '../../components/nv.css'


const AddAdmin = () => {

    const store = useSelector((store) => store)
    const dispatch = useDispatch()
    const history = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [department, setDepartment] = useState('')
    const [dob, setDob] = useState('')
    const [contactNumber, setContactNumber] = useState('')
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
        dispatch(adminAddAdmin({
            name,
            email,
            department,
            dob: dob.split("-").reverse().join("-"),
            contactNumber
        }))
    }
    useEffect(() => {
        if (store.admin.adminAddAdminFlag) {
            setError({})
            alert('Admin Add Successfully')
            history('/admin/homre')
        }
    }, [store.admin.adminAddStudentFlag])

    useEffect(() => {
        if (store.error || store.admin.adminAddAdminFlag) {
            setIsLoading(false)
        }
    }, [store.error, store.admin.adminAddAdminFlag])

    const dep = store.admin.admin.department

    return (
        <div>
            {store.admin.isAuthenticated ? <>
                <Sidebar />
                <div className='abc bg-light' style={{ height: '100vh' }}>
                    <AdminNav />
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h3 className="h3 mb-0 text-gray-800"></h3>
                    </div>
                    <div className="container mb-2 border border-rounded p-4 bg-white">
                        <div className='mt-2'>
                            <h2 className=''>ADD ADMIN</h2>
                            <div className="row mt-1">
                                <div className="col p-1">
                                    <form noValidate onSubmit={formHandler}>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <div className="form-group mb-1">
                                                    <label htmlFor="fnameId" className='mb-1'>Name</label>
                                                    <input onChange={(e) => setName(e.target.value)} type="text" className={classnames("form-control",
                                                        {
                                                            'is-invalid': error.name
                                                        })} id="fnameId" />
                                                    {error.name && (<div className="text-danger mt-1">{error.name}</div>)}
                                                </div>
                                            </div>
                                            {/* <div className="col-md-6">
                                                <div className="form-group mb-2">
                                                    <label htmlFor="lnameId" className='mb-1'>Last Name</label>
                                                    <input onChange={(e) => setLname(e.target.value)} type="text" className={classnames("form-control",
                                                        {
                                                            'is-invalid': error.lname
                                                        })} id="lnameId" />
                                                </div>
                                                {error.lname && (<div className="text-danger mt-1">{error.lname}</div>)}
                                            </div> */}
                                            <div className="col-md-6">
                                                <div className="form-group mb-2">
                                                    <label htmlFor="emailId" className='mb-1'>Email</label>
                                                    <input onChange={(e) => setEmail(e.target.value)} type="email" className={classnames("form-control",
                                                        {
                                                            'is-invalid': error.email
                                                        })} id="emailId" />
                                                </div>
                                                {error.email && (<div className="text-danger mt-1">{error.email}</div>)}
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-2">
                                                    <label htmlFor="departmentId" className='mb-1'>Department</label>
                                                    <select onChange={(e) => setDepartment(e.target.value)} className={classnames("form-control",
                                                        {
                                                            'is-invalid': error.department
                                                        })} id="departmentId">
                                                        <option>Select</option>
                                                        <option value={dep}>{dep}</option>
                                                    </select>
                                                </div>
                                                {error.department && (<div className="text-danger mt-1">{error.department}</div>)}
                                            </div>
                                            {/* <div className="col-md-6">
                                                <div className="form-group mb-2">
                                                    <label htmlFor="yearId" className='mb-1'>Year</label>
                                                    <select onChange={(e) => setYear(e.target.value)} className={classnames("form-control",
                                                        {
                                                            'is-invalid': error.year
                                                        })} id="yearId">
                                                        <option>Select</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                    </select>
                                                </div>
                                                {error.year && (<div className="text-danger mt-1">{error.year}</div>)}
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group mb-2">
                                                    <label htmlFor="sectionId" className='mb-1'>Section</label>
                                                    <select onChange={(e) => setSection(e.target.value)} type="text" className={classnames("form-control",
                                                        {
                                                            'is-invalid': error.section
                                                        })} id="sectionId">
                                                        <option>Select</option>
                                                        <option value="A">A</option>
                                                        <option value="B">B</option>
                                                        <option value="C">C</option>
                                                        <option value="D">D</option>
                                                    </select>
                                                </div>
                                                {error.section && (<div className="text-danger mt-1">{error.section}</div>)}
                                            </div> */}
                                            <div className="col-md-6">
                                                <div className="form-group mb-2">
                                                    <label htmlFor="dobId" className='mb-1'>DOB</label>
                                                    <input onChange={(e) => setDob(e.target.value)} type="date" className={classnames("form-control",
                                                        {
                                                            'is-invalid': error.dob
                                                        })} id="dobId" />
                                                </div>
                                                {error.dob && (<div className="text-danger mt-1">{error.dob}</div>)}
                                            </div>
                                            {/* <div className="col-md-6">
                                                <div className="form-group mb-2">
                                                    <label htmlFor="genderId" className='mb-1'>Gender</label>
                                                    <select onChange={(e) => setGender(e.target.value)} type="date" className={classnames("form-control",
                                                        {
                                                            'is-invalid': error.gender
                                                        })} id="genderId">
                                                        <option>Select</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                </div>
                                                {error.gender && (<div className="text-danger mt-1">{error.gender}</div>)}
                                            </div> */}
                                            <div className="col-md-6">
                                                <div className="form-group mb-2">
                                                    <label htmlFor="numberId" className='mb-1'>Contact Number</label>
                                                    <input onChange={(e) => setContactNumber(e.target.value)} type="tel" className={classnames("form-control",
                                                        {
                                                            'is-invalid': error.contactNumber
                                                        })} id='numberId' />
                                                </div>
                                                {error.contactNumber && (<div className="text-danger mt-1">{error.contactNumber}</div>)}
                                            </div>

                                            {/* <div className="col-md-6">
                                                <div className="form-group mb-2">
                                                    <label htmlFor="fathercnId" className='mb-1'>Father Contact Number</label>
                                                    <input onChange={(e) => setFatherContactNumber(e.target.value)} type="tel" className={classnames("form-control",
                                                        {
                                                            'is-invalid': error.fatherMobileNumber
                                                        })} id='fathercnId' />
                                                </div>
                                                {error.fatherMobileNumber && (<div className="text-danger mt-1">{error.fatherMobileNumber}</div>)}
                                            </div> */}
                                            {/* <div className="col-md-6">
                                                <div className="form-group mb-2">
                                                    <label htmlFor="aadharId" className='mb-1'>Aadhar Card Number</label>
                                                    <input onChange={(e) => setAadharCard(e.target.value)} type="text" className={classnames("form-control",
                                                        {
                                                            'is-invalid': error.aadharCard
                                                        })} id='aadharId' />
                                                </div>
                                                {error.aadharCard && (<div className="text-danger mt-1">{error.aadharCard}</div>)}
                                            </div> */}
                                        </div>
                                        <div className="row justify-content-center mt-3">
                                            <button type="submit" className="btn btn-primary col-md-2 btnn">Add Admin</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </> : (history.push('/'))}
        </div>
    )
}

export default AddAdmin
