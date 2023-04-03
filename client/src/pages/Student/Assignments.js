import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import StudentNav from '../../components/StudentNav'
import Ssidebar from '../../components/Ssidebar'

const Assignments = () => {

    const store = useSelector((store) => store)
    const history = useNavigate()

    const [assignment, setAssignment] = useState([])
    const [note, setNote] = useState([])


    useEffect(() => {
        axios.get('http://localhost:5000/api/faculty/getAllAssignmentf')
            .then((res) => setAssignment(res.data.allAssignment))
        if (assignment.length === 0) {
            setNote('No Assignment Found')
        }
    }, [])

    return (
        <div>
            {store.student.isAuthenticated ? <>
                <Ssidebar />
                <div className='abc bg-light' style={{ height: '100vh', width: '82vw' }}>
                    <StudentNav />
                    {/* <div className="d-sm-flex align-items-center justify-content-between mb-4"> */}
                        {/* <h1 className="h3 mb-0 mt-4 text-gray-800">Dashboard</h1> */}
                    {/* </div> */}
                    <div className="container mt-5 border border-rounded p-4 bg-white">
                        {/* <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 mt-4 text-gray-800"></h1>
                        </div> */}
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
                            <h5 className='text-center text-danger'>{note}</h5>
                        </div>
                    </div>
                </div>
            </> : (history('/'))}
        </div>
    )
}

export default Assignments
