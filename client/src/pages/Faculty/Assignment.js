import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import classnames from 'classnames'
import { facultyAddAssignment } from '../../redux/action/facultyAction'
import FacultyNav from '../../components/FacultyNav'
import axios from 'axios'
import { getAllSubjects } from '../../redux/action/studentAction'
import Fsidebar from '../../components/Fsidebar'

const Assignment = () => {

  const store = useSelector((store) => store)
  const history = useNavigate()
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [sdate, setSdate] = useState('')
  const [year, setYear] = useState('')
  const [section, setSection] = useState('')
  const [image, setImage] = useState('')
  const [error, setError] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   dispatch(getAllSubjects())
  // }, [])

  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
    console.log(file);
  }

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    }
  }

  // useEffect(() => {
  //   if (store.error) {
  //     setError(store.error)
  //   }
  // }, [store.error])

  // const formHandler = (e) => {
  //   e.preventDefault()
  //   setIsLoading(true)
  //   dispatch(facultyAddAssignment({
  //     name,
  //     subject,
  //     year,
  //     section,
  //     sdate,
  //     file
  //   }))
  // }

  const ff = store.faculty.faculty.faculty.registrationNumber

  const formHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/faculty/addAssignment', { name, subject, year, section, image, reg: ff })
      if (data.success === true) {
        setName('');
        setSubject('');
        // setSdate('');
        setYear('');
        setSection('');
        setImage('');
        alert('assignment Added')
      }
      console.log(data);
    } catch (error) {
      console.log(error)
    }

  }

  // useEffect(() => {
  //   if (store.faculty.faculty.AddAssignmentFlag) {
  //     setError({})
  //   }
  // }, [store.faculty.faculty.AddAssignmentFlag])

  // useEffect(() => {
  //   if (store.error || store.faculty.faculty.AddAssignmentFlag) {
  //     setIsLoading(false)
  //   }
  // }, [store.error, store.faculty.faculty.AddAssignmentFlag])


  return (
    // <div>
    //   {store.faculty.isAuthenticated ? <>
    //     <div className='bg-light' style={{ height: '100vh' }}>
    //       <FacultyNav />
    //       <div className="container mt-5 border border-rounded p-4 bg-white">
    //         <h1 className='text-center'>ADD ASSIGNMENT</h1>
    //         <div className="row mt-1">
    //           <div className="col p-2">
    //             <form noValidate onSubmit={formHandler}>
    //               <div className="row justify-content-center mt-3">
    //                 <div className="col-md-6">
    //                   <div className="form-group mb-1">
    //                     <label htmlFor="namecId" className='mb-2'>Name</label>
    //                     <input onChange={(e) => setName(e.target.value)} type="text" className={classnames("form-control",
    //                       {
    //                         'is-invalid': error.name
    //                       })} id="namecId" />
    //                     {error.name && (<div className="text-danger mt-1 mb-1">{error.name}</div>)}
    //                   </div>
    //                 </div>
    //               </div>

    //               <div className="row justify-content-center mt-2">
    //                 <div className="col-md-6">
    //                   <div className="form-group mb-1">
    //                     <label htmlFor="nameId" className='mb-2'>Subject</label>
    //                     <input onChange={(e) => setSubject(e.target.value)} type="text" className={classnames("form-control",
    //                       {
    //                         'is-invalid': error.subject
    //                       })} id="namecId" />
    //                     {/* <select onChange={(e) => setSubject(e.target.value)} className={classnames("form-control",
    //                       {
    //                         'is-invalid': error.subject

    //                       })} id="branchId">
    //                       <option>Select</option>
    //                       {
    //                         store.faculty.allSubjectCodeList.map(subjectCodeName =>
    //                           <option>{subjectCodeName}</option>
    //                         )
    //                       }
    //                     </select> */}
    //                     {error.subject && (<div className="text-danger mt-1 mb-1">{error.subject}</div>)}
    //                   </div>
    //                 </div>
    //               </div>

    //               <div className="row justify-content-center mt-2">
    //                 <div className="col-md-6">
    //                   <div className="form-group mb-2">
    //                     <label htmlFor="yearId" className='mb-1'>Year</label>
    //                     <select onChange={(e) => setYear(e.target.value)} className={classnames("form-control",
    //                       {
    //                         'is-invalid': error.year
    //                       })} id="yearId">
    //                       <option>Select</option>
    //                       <option value="1">1</option>
    //                       <option value="2">2</option>
    //                       <option value="3">3</option>
    //                       <option value="4">4</option>
    //                     </select>
    //                   </div>
    //                   {error.year && (<div className="text-danger mt-1">{error.year}</div>)}
    //                 </div>
    //               </div>

    //               <div className="row justify-content-center mt-2">
    //                 <div className="col-md-6">
    //                   <div className="form-group mb-2">
    //                     <label htmlFor="sectionId" className='mb-1'>Section</label>
    //                     <select onChange={(e) => setSection(e.target.value)} type="text" className={classnames("form-control",
    //                       {
    //                         'is-invalid': error.section
    //                       })} id="sectionId">
    //                       <option>Select</option>
    //                       <option value="A">A</option>
    //                       <option value="B">B</option>
    //                       <option value="C">C</option>
    //                       <option value="D">D</option>
    //                     </select>
    //                   </div>
    //                   {error.section && (<div className="text-danger mt-1">{error.section}</div>)}
    //                 </div>
    //               </div>

    //               <div className="row justify-content-center mt-2">
    //                 <div className="col-md-6">
    //                   <div className="form-group mb-1">
    //                     <label htmlFor="nId" className='mb-2'>Submission Date</label>
    //                     <input type="date" onChange={(e) => setSdate(e.target.value)} className={classnames("form-control",
    //                       {
    //                         'is-invalid': error.sdate
    //                       })} />
    //                     {error.sdate && (<div className="text-danger mt-1 mb-1">{error.sdate}</div>)}
    //                   </div>
    //                 </div>
    //               </div>

    //               <div className="row justify-content-center mt-2">
    //                 <div className="col-md-6">
    //                   <div className="form-group mb-1">
    //                     <label htmlFor="pdf" className='mb-2'>Assignment Pdf</label>
    //                     <input type="file" name="pdf" accept='.pdf' onChange={(e) => setfile(e.target.value)} className={classnames("form-control",
    //                       {
    //                         'is-invalid': error.file

    //                       })} id='pdf' />
    //                     {error.file && (<div className="text-danger mt-1 mb-1">{error.file}</div>)}
    //                   </div>
    //                 </div>
    //               </div>

    //               <div className="row justify-content-center mt-5 mb-3">
    //                 <button type="submit" className="btn btn-info col-md-2 btnn">Add Assignment</button>
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </> : (history('/'))}
    // </div>

    <>
      <Fsidebar />
      <div className='abc bg-light' style={{ height: '100vh', width: "82vw" }}>
        <FacultyNav />
        {/* <div className="d-sm-flex align-items-center justify-content-between mb-4"> */}
          {/* <h1 className="h3 mb-0 mt-4 text-gray-800">Dashboard</h1> */}
        {/* </div> */}
        <div className="container mt-5 border border-rounded p-4 bg-white" style={{width: '70%'}}>
          <h1 className='text-center'>ADD ASSIGNMENT</h1>
          <div className="row mt-1">
            <div className="col p-2">
              <form encType="multipart/form-data" onSubmit={formHandler}>
                <div className="row justify-content-center mt-3">
                  <div className="col-md-6">
                    <div className="form-group mb-1">
                      <label htmlFor="namecId" className='mb-2'>Name</label>
                      <input required onChange={(e) => setName(e.target.value)} type="text" value={name} className="form-control" id="namecId" />
                      {/* {error.name && (<div className="text-danger mt-1 mb-1">{error.name}</div>)} */}
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center mt-2">
                  <div className="col-md-6">
                    <div className="form-group mb-1">
                      <label htmlFor="nameId" className='mb-2'>Subject</label>
                      <input required onChange={(e) => setSubject(e.target.value)} value={subject} type="text" className="form-control" id="namecId" />
                      {/* <select onChange={(e) => setSubject(e.target.value)} className={classnames("form-control",
                          {
                            'is-invalid': error.subject

                          })} id="branchId">
                          <option>Select</option>
                          {
                            store.faculty.allSubjectCodeList.map(subjectCodeName =>
                              <option>{subjectCodeName}</option>
                            )
                          }
                        </select> */}
                      {/* {error.subject && (<div className="text-danger mt-1 mb-1">{error.subject}</div>)} */}
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center mt-2">
                  <div className="col-md-6">
                    <div className="form-group mb-2">
                      <label htmlFor="yearId" className='mb-1'>Year</label>
                      <select required onChange={(e) => setYear(e.target.value)} value={year} className="form-control" id="yearId">
                        <option>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                    {/* {error.year && (<div className="text-danger mt-1">{error.year}</div>)} */}
                  </div>
                </div>

                <div className="row justify-content-center mt-2">
                  <div className="col-md-6">
                    <div className="form-group mb-2">
                      <label htmlFor="sectionId" className='mb-1'>Section</label>
                      <select required onChange={(e) => setSection(e.target.value)} value={section} type="text" className="form-control" id="sectionId">
                        <option>Select</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                      </select>
                    </div>
                    {/* {error.section && (<div className="text-danger mt-1">{error.section}</div>)} */}
                  </div>
                </div>

                {/* <div className="row justify-content-center mt-2">
                <div className="col-md-6">
                  <div className="form-group mb-1">
                    <label htmlFor="nId" className='mb-2'>Submission Date</label>
                    <input required type="date" onChange={(e) => setSdate(e.target.value)} value={sdate} className="form-control" />
                  </div>
                </div>
              </div> */}

                <div className="row justify-content-center mt-2">
                  <div className="col-md-6">
                    <div className="form-group mb-1">
                      <label htmlFor="pdf" className='mb-2'>Assignment Pdf</label>
                      <input required type="file" name="pdf" accept='.pdf' onChange={handleImage} className="form-control" id='pdf' />
                      {/* {error.file && (<div className="text-danger mt-1 mb-1">{error.file}</div>)} */}
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center mt-5 mb-3">
                  <button type="submit" className="btn btn-primary col-md-2 btnn">Add Assignment</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Assignment
