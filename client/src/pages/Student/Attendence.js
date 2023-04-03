import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAttendence } from '../../redux/action/studentAction'
import { useNavigate } from 'react-router-dom'
import StudentNav from '../../components/StudentNav'
import Ssidebar from '../../components/Ssidebar'

const Attendence = () => {

    const store = useSelector(store => store)
    const history = useNavigate()
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchAttendence())
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
                    <div className="container p-2 mt-5 bg-white">
                        <div className="row justify-content-center mt-3">
                            <div className="col-md-10 mt-3">
                                <table className="table border">
                                    <thead>
                                        <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">Subject Code</th>
                                            <th scope="col">Subject Name</th>
                                            {/* <th scope="col">Maximum Hours</th> */}
                                            <th scope="col">Present</th>
                                            <th scope="col">Absent</th>
                                            <th scope="col">Total Lectures</th>
                                            <th scope="col">Attendence</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            store.student.attendence.map((res, index) =>
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{res.subjectCode}</td>
                                                    <td>{res.subjectName}</td>
                                                    {/* <td>{res.maxHours}</td> */}
                                                    <td>{res.lectureAttended}</td>
                                                    <td>{res.absentHours}</td>
                                                    <td>{res.totalLecturesByFaculty}</td>
                                                    <td>{res.attendence}%</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </> : (history.push('/'))
            }
        </div >
    )
}

export default Attendence
