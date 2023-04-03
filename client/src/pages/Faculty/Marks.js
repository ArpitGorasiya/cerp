import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classnames from 'classnames'
import { fetchStudents, uploadMarks } from '../../redux/action/facultyAction'
import FacultyNav from '../../components/FacultyNav'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Fsidebar from '../../components/Fsidebar'

const Marks = () => {

    const store = useSelector((store) => store)
    const history = useNavigate()
    const dispatch = useDispatch()
    const [department, setDepartment] = useState("")
    const [year, setYear] = useState("")
    const [marks, setMarks] = useState([])
    const [section, setSection] = useState("")
    const [subjectCode, setSubjectCode] = useState("")
    const [totalMarks, setTotalMarks] = useState("")
    const [exam, setExam] = useState("")
    const [error, setError] = useState({})
    const [errorHelper, setErrorHelper] = useState({})




    const handleInputChange = (value, _id) => {

        const newMarks = [...marks]
        let index = newMarks.findIndex(m => m._id === _id)
        if (index === -1) {
            newMarks.push({ _id, value })
        }
        else {
            newMarks[index].value = value
        }
        setMarks(newMarks)
    }

    useEffect(() => {
        if (store.error) {
            setError(store.error)
        }
    }, [store.error])

    useEffect(() => {
        if (store.errorHelper) {
            setErrorHelper(store.errorHelper)
        }
    }, [store.errorHelper])

    const formHandler = (e) => {
        e.preventDefault()

        dispatch(fetchStudents(department, year, section))

    }



    const secondFormHandler = (e) => {
        e.preventDefault()
        dispatch(uploadMarks(subjectCode, exam, totalMarks, marks, department, year, section,
        ))
    }


    return (
        <div>
            {store.faculty.isAuthenticated ? <>
                <Fsidebar />
                <div className='abc bg-light' style={{ height: '100vh', width: "82vw" }}>
                    <FacultyNav />
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        {/* <h1 className="h3 mb-0 mt-4 text-gray-800">Dashboard</h1> */}
                    </div>
                    {store.faculty.fetchedStudentsHelper &&
                        <div className="container border border-rounded p-4 bg-white">
                            <h1>Marks</h1>
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
                                                    {error.year && (<div className="text-danger mt-1 mb-1">{error.year}</div>)}
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
                                                        {error.section && (<div className="text-danger mt-1 mb-1">{error.section}</div>)}
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
                            <h1>Marks</h1>
                            <div className="row mt-1">
                                <div className="col p-2">
                                    <form onSubmit={secondFormHandler}>
                                        <div className="row justify-content-center mt-3">
                                            <div className="col-md-6">
                                                <div className="form-group mb-2">
                                                    <label htmlFor="subjectId" className='mb-2'>Subject Code</label>
                                                    <select onChange={(e) => setSubjectCode(e.target.value)} className={classnames("form-control",
                                                        {
                                                            'is-invalid': errorHelper.subjectCode

                                                        })} id="subjectId">
                                                        <option>Select</option>
                                                        {
                                                            store.faculty.allSubjectCodeList.map(subjectCodeName =>
                                                                <option>{subjectCodeName}</option>
                                                            )
                                                        }
                                                    </select>
                                                    {errorHelper.subjectCode && (<div className="text-danger mt-1 mb-1">{errorHelper.subjectCode}</div>)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center mt-3">
                                            <div className="col-md-6">
                                                <div className="form-group mb-2">
                                                    <label htmlFor="examId" className='mb-2'>Exam</label>
                                                    <select onChange={(e) => setExam(e.target.value)} value={exam} className={classnames("form-control",
                                                        {
                                                            'is-invalid': errorHelper.exam

                                                        })} id="examId">
                                                        <option>Select</option>
                                                        {/* <option value="CycleTest1">Cycle Test 1</option>
                                                        <option value="CycleTest2">Cylce Test 2</option> */}
                                                        <option value="Semester1">Semester-1</option>
                                                        <option value="Semester2">Semester-2</option>
                                                        <option value="Semester3">Semester-3</option>
                                                        <option value="Semester4">Semester-4</option>
                                                        <option value="Semester5">Semester-5</option>
                                                        <option value="Semester6">Semester-6</option>
                                                        <option value="Semester7">Semester-7</option>
                                                        <option value="Semester8">Semester-8</option>
                                                    </select>
                                                    {errorHelper.exam && (<div className="text-danger mt-1 mb-1">{errorHelper.exam}</div>)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center mt-3">
                                            <div className="col-md-6">
                                                <div className="form-group mb-2">
                                                    <label htmlFor="marksId" className='mb-2'>Total Marks</label>
                                                    <input type="number" className={classnames("form-control",
                                                        {
                                                            'is-invalid': errorHelper.totalMarks

                                                        })} id="marksId"
                                                        value={totalMarks} onChange={(e) => setTotalMarks(e.target.value)} />
                                                    {errorHelper.totalMarks && (<div className="text-danger mt-1 mb-1">{errorHelper.totalMarks}</div>)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container mt-2 p-2 bg-white">
                                            <div className="row justify-content-center mt-3">
                                                <div className="col-md-6">
                                                    <table className="table border">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Registration Number</th>
                                                                <th scope="col">Student Name</th>
                                                                <th scope="col">Marks</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                store.faculty.fetchedStudents.map((obj, index) =>
                                                                    <tr key={index}>
                                                                        <td>{obj.registrationNumber}</td>
                                                                        <td>{obj.fname.toUpperCase()} {obj.lname.toUpperCase()}</td>
                                                                        <td><div className="form-check">
                                                                            <input className="form-control" type="number" value={obj.marks} onChange={(e) => handleInputChange(e.target.value, obj._id)} />
                                                                            {errorHelper.marks && (<div className="text-danger mt-1 mb-1">{errorHelper.marks}</div>)}
                                                                        </div></td>
                                                                    </tr>
                                                                )
                                                            }
                                                        </tbody>
                                                    </table>
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
            </> : (history.push('/'))}
        </div>
    )
}

export default Marks
