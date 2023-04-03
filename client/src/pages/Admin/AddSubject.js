import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import classnames from 'classnames'
import { adminAddSubject } from '../../redux/action/adminAction'
import AdminNav from '../../components/AdminNav'
import Sidebar from '../../components/Sidebar'


const AddSubject = () => {

    const store = useSelector((store) => store)
    const dispatch = useDispatch()
    const history = useNavigate()
    const [subjectName, setSubjectName] = useState('')
    const [subjectCode, setSubjectCode] = useState('')
    // const [totalLectures, setTotalLectures] = useState('')
    const [department, setDepartment] = useState('')
    const [year, setYear] = useState('')
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
        dispatch(adminAddSubject({
            subjectCode,
            subjectName,
            // totalLectures,
            department,
            year
        }))
    }

    useEffect(() => {
        if (store.admin.adminAddSubjectFlag) {
            setError({})
            alert('Subject Add Successfully')
            history('/admin/allSubjects')
        }
    }, [store.admin.adminAddSubjectFlag])

    useEffect(() => {
        if (store.error || store.admin.adminAddSubjectFlag) {
            setIsLoading(false)
        }
    }, [store.error, store.admin.adminAddSubjectFlag])

    const dep = store.admin.admin.department

    return (
        <div>
            {store.admin.isAuthenticated ? <>
                <Sidebar />
                <div className='abc bg-light' style={{ height: '100vh' }}>
                    <AdminNav />

                    {/* <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 mt-4 text-gray-800"></h1>
                    </div> */}
                    <div className="container mt-5 border border-rounded p-4 bg-white" style={{ width: '70%' }}>
                        <h1 className='text-center'>ADMIN ADD SUBJECT</h1>
                        <div className="row mt-1">
                            <div className="col p-2">
                                <form noValidate onSubmit={formHandler}>
                                    <div className="row justify-content-center mt-3">
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="nameId" className='mb-2'>Subject Name</label>
                                                <input onChange={(e) => setSubjectName(e.target.value)} type="text" className={classnames("form-control",
                                                    {
                                                        'is-invalid': error.subjectName
                                                    })} id="nameId" />
                                                {error.subjectName && (<div className="text-danger mt-1 mb-1">{error.subjectName}</div>)}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row justify-content-center mt-3">
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="nameId" className='mb-2'>Subject Code</label>
                                                <input onChange={(e) => setSubjectCode(e.target.value)} type="text" className={classnames("form-control",
                                                    {
                                                        'is-invalid': error.subjectCode
                                                    })} id="nameId" />
                                                {error.subjectCode && (<div className="text-danger mt-1 mb-1">{error.subjectCode}</div>)}
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="row justify-content-center mt-3">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="nameId" className='mb-2'>Total Lectures</label>
                                        <input type="text" className="form-control" id="nameId" />
                                    </div>
                                </div>
                            </div> */}

                                    <div className="row justify-content-center mt-3">
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
                                    </div>

                                    <div className="row justify-content-center mt-3">
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="yearId" className='mb-2'>Year</label>
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
                                                {error.year && (<div className="text-danger mt-1 mb-1">{error.year}</div>)}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row justify-content-center mt-5 mb-3">
                                        <button type="submit" className="btn btn-primary col-md-2 btnn">Add Subject</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </> : (history('/'))}
        </div>
    )
}

export default AddSubject
