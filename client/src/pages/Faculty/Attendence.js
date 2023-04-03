import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classnames from 'classnames'
import { fetchStudents, markAttendence } from '../../redux/action/facultyAction'
import { useNavigate } from 'react-router-dom'
import FacultyNav from '../../components/FacultyNav'
import $ from 'jquery'
import './att.css'
import Fsidebar from '../../components/Fsidebar'

const Attendence = () => {

    const store = useSelector((store) => store)
    const history = useNavigate()
    const dispatch = useDispatch()
    const [department, setDepartment] = useState("")
    const [year, setYear] = useState("")
    const [section, setSection] = useState("")
    const [subjectCode, setSubjectCode] = useState("")
    const [checkedValue, setCheckedValue] = useState([])
    const [error, setError] = useState({})
    const [flag, setFlag] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [isLoading2, setIsLoading2] = useState(false)

    const handleInputChange = (e) => {
        const tempCheck = checkedValue
        let index
        if (e.target.checked) {
            tempCheck.push(e.target.value)
        }
        else {
            index = tempCheck.indexOf(e.target.value)
            tempCheck.splice(index, 1)
        }
        setCheckedValue(tempCheck)
    }


    useEffect(() => {
        if (store.error) {
            setError(store.error)
        }
    }, [store.error])

    const formHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        dispatch(fetchStudents(department, year, section))

    }

    useEffect(() => {
        if (store.error || !store.faculty.fetchedStudentsHelper) {
            setIsLoading(false)
        }

    }, [store.error, store.faculty.fetchedStudentsHelper])


    // if ($("input[type=checkbox]").is(':checked')) {
    //     $(".abc").css('background', 'green');
    // } else {
    //     $(".abc").css('background', 'red');
    // }

    $(document).on('change', '.checking', function () {
        if ($(this).prop('checked')) {
            $(this).closest('.abc').addClass('active');
        }
        else {
            $(this).closest('.abc').removeClass('active');
        }
    });

    const secondFormHandler = (e) => {
        e.preventDefault()
        setIsLoading2(true)
        dispatch(markAttendence(checkedValue, subjectCode, department, year, section))
        setCheckedValue([])

    }

    useEffect(() => {
        if (store.faculty.fetchedStudentsHelper) {
            setIsLoading2(false)
        }

    }, [store.faculty.fetchedStudentsHelper])

    return (
        <>
            {store.faculty.isAuthenticated ? <>
                <Fsidebar />
                <div className='abc bg-light' style={{ height: '100vh', width: "82vw" }}>
                    <FacultyNav />
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        {/* <h1 className="h3 mb-0 mt-4 text-gray-800">Dashboard</h1> */}
                    </div>
                    {store.faculty.fetchedStudentsHelper &&
                        <div className="container border border-rounded p-4 bg-white">
                            <h1>Attendence</h1>
                            <div className="row mt-1">
                                <div className="col p-2">
                                    <form noValidate onSubmit={formHandler}>
                                        <div className="row justify-content-center mt-3">
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="branchId" className='mb-2'>Department</label>
                                                    <select onChange={(e) => setDepartment(e.target.value)} className={classnames("form-control",
                                                        {
                                                            'is-invalid': error.department

                                                        })} id="branchId">
                                                        <option>Select</option>
                                                        <option value={store.faculty.faculty.faculty.department}>{store.faculty.faculty.faculty.department}</option>
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
                                                    {error.year && (<div className="text-danger mt-2 mb-1">{error.year}</div>)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center mt-3">
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <div className="form-group">
                                                        <label htmlFor="sectionId" className='mb-2'>Section</label>
                                                        <select onChange={(e) => setSection(e.target.value)} className={classnames("form-control",
                                                            {
                                                                'is-invalid': error.section

                                                            })} id="sectionId">
                                                            <option>Select</option>
                                                            <option value="A">A</option>
                                                            <option value="B">B</option>
                                                            <option value="C">C</option>
                                                            <option value="D">D</option>
                                                        </select>
                                                        {error.section && (<div className="text-danger mt-2 mb-1">{error.section}</div>)}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row justify-content-center mt-4 mb-3">
                                                <button type="submit" className="btn btn-primary col-md-2 btnn">Search</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    }
                    {!store.faculty.fetchedStudentsHelper &&
                        <div className="container mt-5 border border-rounded p-4 bg-white">
                            <h1>Attendence</h1>
                            <div className="row mt-1">
                                <div className="col p-2">
                                    <form onSubmit={secondFormHandler}>
                                        <div className="row justify-content-center mt-3">
                                            <div className="col-md-6">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="subjectId">Subject Code</label>
                                                    <select required onChange={(e) => setSubjectCode(e.target.value)} className="form-control" id="subjectId">
                                                        <option >Select</option>
                                                        {
                                                            store.faculty.allSubjectCodeList.map(subjectCodeName =>
                                                                <option>{subjectCodeName}</option>
                                                            )
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container mt-2 p-2 bg-white">
                                            <div className="row justify-content-center mt-3">
                                                <div className="col-md-6">
                                                    {/* <table className="table border">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col"></th>
                                                                <th scope="col">Registration Number</th>
                                                                <th scope="col">Name</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                store.faculty.fetchedStudents.map((obj, index) =>
                                                                    <tr id='tddd'>
                                                                        <td><div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" value={obj._id} onChange={handleInputChange} id="defaultCheck1" />
                                                                        </div></td>
                                                                        <td key={index}>{obj.registrationNumber}</td>
                                                                        <td>{obj.fname} {obj.lname}</td>
                                                                    </tr>
                                                                )
                                                            }
                                                        </tbody>
                                                    </table> */}
                                                    <div className="row  p-2">
                                                        {
                                                            store.faculty.fetchedStudents.map((obj, index) =>
                                                                <div className="abc col-3 border  text-white" key={index}>
                                                                    <div className="form-check">
                                                                        <input className="form-check-input checking" type="checkbox" value={obj._id} onChange={handleInputChange} id="defaultCheck1" />
                                                                    </div>
                                                                    <h5 >{obj.registrationNumber}</h5>
                                                                    <p>{obj.fname} {obj.lname}</p>
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                    <div className="row justify-content-center mt-5 mb-3">
                                                        <button type="submit" className="btn btn-primary col-md-2 btnn">Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </> : (history('/'))}
        </>
    )
}

export default Attendence
