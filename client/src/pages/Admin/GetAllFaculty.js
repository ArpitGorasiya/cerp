import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { adminGetAllFaculty } from '../../redux/action/adminAction'
import AdminNav from '../../components/AdminNav'
import classnames from 'classnames'
import Sidebar from '../../components/Sidebar'

const GetAllFaculty = () => {

    const store = useSelector((store) => store)
    const dispatch = useDispatch()
    const [department, setDepartment] = useState('')
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const history = useNavigate()


    const formHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        dispatch(adminGetAllFaculty({ department }))
    }

    useEffect(() => {
        if (store.admin.allFaculty.length !== 0) {
            setIsLoading(false)
        }

    }, [store.admin.allFaculty.length])

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
                        <h3 className='text-center'>ADMIN GET ALL FACULTY</h3>
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
                                                    })} id="departmentId">
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
                                    </div>
                                    <div className="row justify-content-center mt-3 mb-3">
                                        {/* {!isLoading &&
                                        } */}
                                        <button type="submit" className="btn btn-primary col-md-2 btnn">Search</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-3 border border-rounded p-4 bg-white">
                        <div className="col-md-12">
                            {store.admin.allFaculty.length !== 0 &&
                                <>
                                    <table>
                                        <tr>
                                            <th>Department : {department}</th>
                                        </tr><br />
                                    </table>
                                    <table className="table border">
                                        <thead>
                                            <tr>
                                                <th scope="col">S.No</th>
                                                <th scope="col">Registration Number</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Joining Year</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                store.admin.allFaculty.map((res, index) =>
                                                    <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{res.registrationNumber}</td>
                                                        <td>{res.fname} {res.lname}</td>
                                                        <td>{res.email}</td>
                                                        <td>{res.joiningYear}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </> : (history('/'))}
        </div>
    )
}

export default GetAllFaculty
