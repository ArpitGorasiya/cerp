import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import FacultyNav from '../../components/FacultyNav'
import axios from 'axios'
import Fsidebar from '../../components/Fsidebar'

const Assignments = () => {

    const store = useSelector((store) => store)
    const history = useNavigate()

    const [assignment, setAssignment] = useState([])
    const [] = useState([])

    const d = store.faculty.faculty.faculty.registrationNumber

    useEffect(() => {
        axios.get('http://localhost:5000/api/faculty/getAllAssignmentf')
            .then((res) => setAssignment(res.data.allAssignment))

        // const a = (res) => console.log(res.data.allAssignment[0].reg)
        //     ((res) => setAssignment(res.data.allAssignment))
    }, [])

    return (
        <div>
            {store.faculty.isAuthenticated ? <>
                <Fsidebar />
                <div className='abc bg-light' style={{ height: '100vh', width: "82vw" }}>
                    <FacultyNav />
                    {/* <div className="d-sm-flex align-items-center justify-content-between mb-4"> */}
                        {/* <h1 className="h3 mb-0 mt-4 text-gray-800">Dashboard</h1> */}
                    {/* </div> */}
                    <div className="container border border-rounded p-4 bg-white">
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 mt-4 text-gray-800">Assignments</h1>
                            <Link to='/faculty/addassignments' className='btn btn-primary d-flex flex-row-reverse'>Add Assignment</Link>
                        </div>
                        <div className="app">

                            {assignment.map((e, i) => {
                                return (
                                    <div className="col-lg-12 mb-4" key={i}>
                                        <div className="card shadow mb-4">
                                            <div className="card-header py-3">
                                                <h6 className="m-0 font-weight-bold text-primary">{e.subject} - {e.name}</h6>
                                            </div>
                                            <div className="card-body">
                                                <p className='d-flex flex-row'>Submission Date - {e.sdate.slice(0, 10)}</p>
                                                <a href={e.image} target='_blank' rel="noreferrer">Download</a>
                                                <h6 className='d-flex flex-row-reverse'>{e.date.slice(0, 10)}</h6>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </> : (history('/'))}
        </div>
    )
}

export default Assignments
