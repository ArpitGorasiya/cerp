import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { adminGetAllStudent } from '../../redux/action/adminAction'
import AdminNav from '../../components/AdminNav'
import classnames from 'classnames'
import Sidebar from '../../components/Sidebar'

const GelAllStudent = () => {

    const store = useSelector((store) => store)
    const dispatch = useDispatch()
    const [department, setDepartment] = useState('')
    const [year, setYear] = useState('')
    const [isLoading, setIsLoading] = useState(false)



    const [error, setError] = useState({})
    const history = useNavigate()


    const formHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        dispatch(adminGetAllStudent({ department, year }))
    }

    useEffect(() => {
        if (store.admin.allStudent.length !== 0) {
            setIsLoading(false)
        }

    }, [store.admin.allStudent.length])

    return (
        <div>
            {store.admin.isAuthenticated ? <>
                <Sidebar />
                <div className='abc bg-light' style={{ height: '100vh' }}>
                <AdminNav />

                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800"></h1>
                    </div>
                    <div className="container mt-3 border border-rounded p-4 bg-white">
                        <h3>ADMIN GET ALL STUDENT</h3>
                        <div className="row mt-1">
                            <div className="col p-2">
                                <form noValidate onSubmit={formHandler}>
                                    <div className="row justify-content-center mt-3">
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="departmentId" className='mb-2'>Department</label>
                                                <select onChange={(e) => setDepartment(e.target.value)} className={classnames("form-control",
                                                    {
                                                        'is-invalid': error.department
                                                    })} id="departmentId"  >
                                                    <option>Select</option>
                                                    <option value="Electronics & Communication">Electronics & Communication</option>
                                                    <option value="Computer Science">Computer Science</option>
                                                    <option value="I.T">I.T</option>
                                                    <option value="Electrical & Electronics">Electrical & Electronics</option>
                                                    <option value="Mechanical">Mechanical</option>
                                                    <option value="Civil">Civil</option>
                                                </select>
                                                {error.department && (<div className="text-danger mt-1 mb-1">{error.department}</div>)}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="yearId" className='mb-2'>Year</label>
                                                <select onChange={(e) => setYear(e.target.value)} className={classnames("form-control",
                                                    {
                                                        'is-invalid': error.year
                                                    })} id="yearId" required>
                                                    <option>Select</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                </select>
                                                {error.year && (<div className="">{error.year}</div>)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center mt-3 mb-3">
                                        {/* <div className="col-md-1">
                                            {
                                                isLoading && <div className="spinner-border text-primary" role="status"></div>
                                            }
                                        </div> */}
                                    </div>
                                    <div className="row justify-content-center mt-2 mb-1">
                                        <div className="col-md-2">
                                            {/* {!isLoading &&
                                            } */}
                                            <button type="submit" className="btn btn-primary col-md-12 btnn">Search</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-3 border border-rounded p-4 bg-white">
                        <div className="col-md-12">
                            {store.admin.allStudent.length !== 0 &&
                                <>
                                    <table>
                                        <tr>
                                            <th>Department : {department}</th>
                                        </tr>
                                        <tr>
                                            <th>Year : {year}</th>
                                        </tr><br />
                                    </table>

                                    <table className="table border">
                                        <thead>
                                            <tr>
                                                <th scope="col">S.No</th>
                                                <th scope="col">Registration Number</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Section</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                store.admin.allStudent.map((res, index) =>
                                                    <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{res.registrationNumber}</td>
                                                        <td>{res.fname} {res.lname}</td>
                                                        <td>{res.email}</td>
                                                        <td>{res.section}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table></>
                            }
                        </div>
                    </div>
                </div>
            </> : (history.push('/'))}
        </div >
    )
}

export default GelAllStudent
