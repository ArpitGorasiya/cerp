import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSubjects } from '../../redux/action/studentAction'
import { useNavigate } from 'react-router-dom'
import StudentNav from '../../components/StudentNav'
import Ssidebar from '../../components/Ssidebar'

const Subjects = () => {

  const store = useSelector((store) => store)
  const history = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllSubjects())
  }, [])

  return (
    <>
      {store.student.isAuthenticated ? <>
        <Ssidebar />
        <div className='abc bg-light' style={{ height: '100vh', width: '82vw' }}>
          <StudentNav />
          {/* <div className="d-sm-flex align-items-center justify-content-between mb-4"> */}
            {/* <h1 className="h3 mb-0 mt-4 text-gray-800">Dashboard</h1> */}
          {/* </div> */}
          <div className="container mt-5 p-2 bg-white">
            <div className="row justify-content-center mt-3">
              <div className="col-md-10">
                <table className="table border">
                  <thead>
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">Subject Code</th>
                      <th scope="col">Subject Name</th>
                      <th scope="col">Year</th>
                      <th scope="col">Total Lectures</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      store.student.allSubjects.map((res, index) =>
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{res.subjectCode}</td>
                          <td>{res.subjectName}</td>
                          <td>{res.year}</td>
                          <td>{res.totalLectures}</td>
                        </tr>
                      )
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </> : history('/')
      }
    </>
  )
}

export default Subjects
