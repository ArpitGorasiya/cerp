import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { facultyLogin } from '../../redux/action/facultyAction'
import classnames from 'classnames'
import logo from '../../image/logo.png'

const Login = () => {

  const store = useSelector((state) => state)
  const dispatch = useDispatch()
  const history = useNavigate()
  const [facultyRegNum, setFacultyRegNum] = useState('')
  const [facultyPassword, setFacultyPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [errorsHelper, setErrorsHelper] = useState({})
  const [isFacultyLoading, setIsFacultyLoading] = useState(false)

  useEffect(() => {
    if (store.faculty.isAuthenticated) {
      history('/faculty/home')
    }
  }, [store.faculty.isAuthenticated])

  useEffect(() => {
    if (store.error) {
      setErrors(store.error)
    }
  }, [store.error])

  useEffect(() => {
    if (store.errorHelper) {
      setErrorsHelper(store.errorHelper)
    }
  }, [store.errorHelper])

  const facultyFormHandler = (e) => {
    e.preventDefault()
    let registrationNumber;
    let password;
    setIsFacultyLoading(true)
    dispatch(facultyLogin({ registrationNumber: facultyRegNum, password: facultyPassword }))
  }

  useEffect(() => {
    if (store.error || store.faculty.isAuthenticated) {
      setIsFacultyLoading(false)
    }
    else {
      setIsFacultyLoading(true)
    }
  }, [store.error, store.faculty.isAuthenticated])

  return (
    <div className="App">
      <section className="h-100 gradient-form">
        <div className="container pt-70 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-6">
              <div className="card rounded-4 text-black">
                <div className="row g-0">
                  <div className="col-lg-12">
                    <div className="card-body p-md-3 mx-md-5">
                      <div className="text-center">
                        <img src={logo} style={{ width: 100 }} height="100px" alt="logo" className='p-2' />
                        <h4 className="mt-1 mb-3 pb-1">FACULTY LOGIN</h4>
                      </div>
                      <form noValidate onSubmit={facultyFormHandler}>
                        <p>Please login to your account</p>
                        <div className="form-outline mb-4">
                          <input type="text" value={facultyRegNum} onChange={(e) => setFacultyRegNum(e.target.value)} className={classnames("form-control rounded-pill",
                            {
                              'is-invalid': errors.registrationNumber
                            })} id="emailId"
                            placeholder="Username" />
                          {errors.registrationNumber && (<div className="text-danger mt-1 mb-1">{errors.registrationNumber}</div>)}
                        </div>
                        <div className="form-outline mb-3">
                          <input type="password" value={facultyPassword} onChange={(e) => setFacultyPassword(e.target.value)} className={classnames("form-control rounded-pill",
                            {
                              'is-invalid': errors.password
                            })} placeholder='Password' id="passwordId" />
                          {errors.password && (<div className="text-danger mt-1 mb-1">{errors.password}</div>)}
                        </div>
                        <div className="text-center pt-1 mb-3 pb-1">
                          <button type="submit" className="btn btn-primary btn-block btnsub rounded-pill mb-3 col-lg-12">Login</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
