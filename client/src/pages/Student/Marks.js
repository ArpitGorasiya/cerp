import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMarks } from '../../redux/action/studentAction'
import { useNavigate } from 'react-router-dom'
import StudentNav from '../../components/StudentNav'
import Ssidebar from '../../components/Ssidebar'

const Marks = () => {

  const store = useSelector(store => store)
  const history = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMarks())
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
          {store.student.allMarks.Semester1 &&
            <div className="container mt-5 p-2 bg-light">
              <div className="row justify-content-center mt-3">
                <div className="col-md-10">
                  {store.student.allMarks.Semester1.length !== 0 ? <>
                    <h2 className='mb-3'>Semester-1</h2>
                    <table className="table border">
                      <thead>
                        <tr>
                          <th scope="col">S.No</th>
                          <th scope="col">Subject Code</th>
                          <th scope="col">Subject Name</th>
                          <th scope="col">Obtained Marks</th>
                          <th scope="col">Total Marks</th>
                          <th scope="col">Percentage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          store.student.allMarks.Semester1.map((res, index) =>
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td>{res.subject.subjectCode}</td>
                              <td>{res.subject.subjectName}</td>
                              <td>{res.marks}</td>
                              <td>{res.totalMarks}</td>
                              <td>{(res.marks / res.totalMarks) * 100}%</td>
                            </tr>
                          )
                        }
                      </tbody>
                    </table>
                  </> : null}
                </div>
              </div>
            </div>
          }

          {store.student.allMarks.Semester2 &&
            <div className="container mt-5 p-2 bg-light">
              <div className="row justify-content-center mt-3">
                <div className="col-md-10">
                  {store.student.allMarks.Semester2.length !== 0 ? <>
                    <h2 className='mb-3'>Semester-2</h2>
                    <table className="table border">
                      <thead>
                        <tr>
                          <th scope="col">S.No</th>
                          <th scope="col">Subject Code</th>
                          <th scope="col">Subject Name</th>
                          <th scope="col">Obtained Marks</th>
                          <th scope="col">Total Marks</th>
                          <th scope="col">Percentage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          store.student.allMarks.Semester2.map((res, index) =>
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td>{res.subject.subjectCode}</td>
                              <td>{res.subject.subjectName}</td>
                              <td>{res.marks}</td>
                              <td>{res.totalMarks}</td>
                              <td>{((res.marks / res.totalMarks) * 100)}%</td>
                            </tr>
                          )
                        }
                      </tbody>
                    </table>
                  </> : null}
                </div>
              </div>
            </div>
          }

          {/* {!store.student.allMarks.Semester3 &&
            <div className="container mt-5 p-2 bg-white">
              <div className="row justify-content-center mt-3">
                <div className="col-md-10">
                  {store.student.allMarks.Semester3.length !== 0 ? <>
                    <h2 className='mb-3'>Semester-1</h2>
                    <table className="table border">
                      <thead>
                        <tr>
                          <th scope="col">S.No</th>
                          <th scope="col">Subject Code</th>
                          <th scope="col">Subject Name</th>
                          <th scope="col">Obtained Marks</th>
                          <th scope="col">Total Marks</th>
                          <th scope="col">Percentage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          store.student.allMarks.Semester3.map((res, index) =>
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td>{res.subject.subjectCode}</td>
                              <td>{res.subject.subjectName}</td>
                              <td>{res.marks}</td>
                              <td>{res.totalMarks}</td>
                              <td>{(res.marks / res.totalMarks) * 100}%</td>
                            </tr>
                          )
                        }
                      </tbody>
                    </table>
                  </> : null}
                </div>
              </div>
            </div>
          }

          {!store.student.allMarks.Semester4 &&
            <div className="container mt-5 p-2 bg-white">
              <div className="row justify-content-center mt-3">
                <div className="col-md-10">
                  {store.student.allMarks.Semester4.length !== 0 ? <>
                    <h2 className='mb-3'>Semester-1</h2>
                    <table className="table border">
                      <thead>
                        <tr>
                          <th scope="col">S.No</th>
                          <th scope="col">Subject Code</th>
                          <th scope="col">Subject Name</th>
                          <th scope="col">Obtained Marks</th>
                          <th scope="col">Total Marks</th>
                          <th scope="col">Percentage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          store.student.allMarks.Semester4.map((res, index) =>
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td>{res.subject.subjectCode}</td>
                              <td>{res.subject.subjectName}</td>
                              <td>{res.marks}</td>
                              <td>{res.totalMarks}</td>
                              <td>{(res.marks / res.totalMarks) * 100}%</td>
                            </tr>
                          )
                        }
                      </tbody>
                    </table>
                  </> : null}
                </div>
              </div>
            </div>
          }

          {!store.student.allMarks.Semester5 &&
            <div className="container mt-5 p-2 bg-white">
              <div className="row justify-content-center mt-3">
                <div className="col-md-10">
                  {store.student.allMarks.Semester5.length !== 0 ? <>
                    <h2 className='mb-3'>Semester-1</h2>
                    <table className="table border">
                      <thead>
                        <tr>
                          <th scope="col">S.No</th>
                          <th scope="col">Subject Code</th>
                          <th scope="col">Subject Name</th>
                          <th scope="col">Obtained Marks</th>
                          <th scope="col">Total Marks</th>
                          <th scope="col">Percentage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          store.student.allMarks.Semester5.map((res, index) =>
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td>{res.subject.subjectCode}</td>
                              <td>{res.subject.subjectName}</td>
                              <td>{res.marks}</td>
                              <td>{res.totalMarks}</td>
                              <td>{(res.marks / res.totalMarks) * 100}%</td>
                            </tr>
                          )
                        }
                      </tbody>
                    </table>
                  </> : null}
                </div>
              </div>
            </div>
          }

          {!store.student.allMarks.Semester6 &&
            <div className="container mt-5 p-2 bg-white">
              <div className="row justify-content-center mt-3">
                <div className="col-md-10">
                  {store.student.allMarks.Semester6.length !== 0 ? <>
                    <h2 className='mb-3'>Semester-1</h2>
                    <table className="table border">
                      <thead>
                        <tr>
                          <th scope="col">S.No</th>
                          <th scope="col">Subject Code</th>
                          <th scope="col">Subject Name</th>
                          <th scope="col">Obtained Marks</th>
                          <th scope="col">Total Marks</th>
                          <th scope="col">Percentage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          store.student.allMarks.Semester6.map((res, index) =>
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td>{res.subject.subjectCode}</td>
                              <td>{res.subject.subjectName}</td>
                              <td>{res.marks}</td>
                              <td>{res.totalMarks}</td>
                              <td>{(res.marks / res.totalMarks) * 100}%</td>
                            </tr>
                          )
                        }
                      </tbody>
                    </table>
                  </> : null}
                </div>
              </div>
            </div>
          }

          {!store.student.allMarks.Semester7 &&
            <div className="container mt-5 p-2 bg-white">
              <div className="row justify-content-center mt-3">
                <div className="col-md-10">
                  {store.student.allMarks.Semester7.length !== 0 ? <>
                    <h2 className='mb-3'>Semester-1</h2>
                    <table className="table border">
                      <thead>
                        <tr>
                          <th scope="col">S.No</th>
                          <th scope="col">Subject Code</th>
                          <th scope="col">Subject Name</th>
                          <th scope="col">Obtained Marks</th>
                          <th scope="col">Total Marks</th>
                          <th scope="col">Percentage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          store.student.allMarks.Semester7.map((res, index) =>
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td>{res.subject.subjectCode}</td>
                              <td>{res.subject.subjectName}</td>
                              <td>{res.marks}</td>
                              <td>{res.totalMarks}</td>
                              <td>{(res.marks / res.totalMarks) * 100}%</td>
                            </tr>
                          )
                        }
                      </tbody>
                    </table>
                  </> : null}
                </div>
              </div>
            </div>
          }

          {!store.student.allMarks.Semester8 &&
            <div className="container mt-5 p-2 bg-white">
              <div className="row justify-content-center mt-3">
                <div className="col-md-10">
                  {store.student.allMarks.Semester8.length !== 0 ? <>
                    <h2 className='mb-3'>Semester-1</h2>
                    <table className="table border">
                      <thead>
                        <tr>
                          <th scope="col">S.No</th>
                          <th scope="col">Subject Code</th>
                          <th scope="col">Subject Name</th>
                          <th scope="col">Obtained Marks</th>
                          <th scope="col">Total Marks</th>
                          <th scope="col">Percentage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          store.student.allMarks.Semester8.map((res, index) =>
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td>{res.subject.subjectCode}</td>
                              <td>{res.subject.subjectName}</td>
                              <td>{res.marks}</td>
                              <td>{res.totalMarks}</td>
                              <td>{(res.marks / res.totalMarks) * 100}%</td>
                            </tr>
                          )
                        }
                      </tbody>
                    </table>
                  </> : null}
                </div>
              </div>
            </div>
          } */}
        </div>
      </> : history('/')
      }
    </>
  )
}

export default Marks
