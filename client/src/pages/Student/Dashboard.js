import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import StudentNav from '../../components/StudentNav'
import axios from 'axios';
import Ssidebar from '../../components/Ssidebar';

const Dashboard = () => {

    const [notice, setNotice] = useState([])
    const [noticel, setNoticel] = useState([])
    const [stu, setStu] = useState('')
    const [sub, setSub] = useState('')

    useEffect(() => {
        axios.get('http://localhost:5000/api/student/allNotice')
            .then((res) => setNotice(res.data.data))
    }, [])

    useEffect(() => {
        axios.get('http://localhost:5000/api/student/allNotice')
            .then((res) => setNoticel(res.data.data.length))
    }, [])

    useEffect(() => {
        axios.get('http://localhost:5000/api/admin/getAllStudentdash')
            .then((res) => setStu(res.data))
    })

    useEffect(() => {
        axios.get('http://localhost:5000/api/admin/getAllSubjectdash')
            .then((res) => setSub(res.data))
    })

    const store = useSelector((store) => store)
    const history = useNavigate()

    return (
        <>
            {store.student.isAuthenticated ? <>
                <Ssidebar />
                <div className='abc bg-light' style={{ height: '100vh', width: '81vw' }}>
                    <StudentNav />
                    <div className="container container-fluid" style={{marginLeft: '50px'}}>
                        {/* <div className="d-sm-flex align-items-center justify-content-between mb-4"> */}
                            {/* <h1 className="h3 mb-0 mt-4 text-gray-800">Dashboard</h1> */}
                        {/* </div> */}
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0  text-gray-800">Dashboard</h1>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-primary shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                    Notice</div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">{noticel}</div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fa-solid fa-bullhorn fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-success shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                    Subject</div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">{sub}</div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fa-solid fa-book fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-info shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Exam
                                                </div>
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col-auto">
                                                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">2</div>
                                                    </div>
                                                    {/* <div className="col">
                          <div className="progress progress-sm mr-2">
                            <div className="progress-bar bg-info" role="progressbar"
                              style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0"
                              aria-valuemax="100"></div>
                          </div>
                        </div> */}
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fa-solid fa-square-poll-vertical fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-warning shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                    Assignment</div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">2</div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fa-solid fa-list-check fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 mt-4 text-gray-800">Notice</h1>
                        </div>
                        <div className="app">
                            {notice.map((e, i) => {
                                return (
                                    <div className="col-lg-12 mb-4" key={i} >
                                        <div className="card shadow mb-4">
                                            <div className="card-header py-3">
                                                <h6 className="m-0 font-weight-bold text-primary">{e.topic.toUpperCase()} - NOTICE FOR {e.type.toUpperCase()}</h6>
                                            </div>
                                            <div className="card-body">
                                                <p className='d-flex flex-row'>{e.content}</p>
                                                <a href={e.image} target='_blank'>Download</a>
                                                <h6 className='d-flex flex-row-reverse'>{e.date.slice(0, 10)}</h6>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </> : history('/')}
        </>
    )
}

export default Dashboard
