import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { studentLogin } from '../../redux/action/studentAction'
import classnames from 'classnames'
import logo from '../../image/logo.png'

const Login = () => {

  const store = useSelector((state) => state)
  const dispatch = useDispatch()
  const [studentRegNum, setStudentRegNum] = useState('')
  const [studentPassword, setStudentPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [errorsHelper, setErrorsHelper] = useState({})
  const [isStudentLoading, setIsStudentLoading] = useState(false)
  const history = useNavigate()

  useEffect(() => {
    if (store.student.isAuthenticated) {
      history('/student/home')
    }
  }, [store.student.isAuthenticated])

  useEffect(() => {
    if (store.errorHelper) {
      setErrorsHelper(store.errorHelper)
    }
  }, [store.errorHelper])

  const studentFormHandler = (e) => {
    e.preventDefault()
    let registrationNumber;
    let password;
    setIsStudentLoading(true)
    dispatch(studentLogin({ registrationNumber: studentRegNum, password: studentPassword }))
  }

  useEffect(() => {
    if (store.errorHelper ||
      store.student.isAuthenticated) {
      setIsStudentLoading(false)
    }
    else {
      setIsStudentLoading(false)
    }

  }, [store.errorHelper, store.student.isAuthenticated])

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
                        <h4 className="mt-1 mb-3 pb-1">STUDENT LOGIN</h4>
                      </div>
                      <form noValidate onSubmit={studentFormHandler}>
                        <p>Please login to your account</p>
                        <div className="form-outline mb-4">
                          <input type="text" onChange={(e) => setStudentRegNum(e.target.value)} value={studentRegNum} className={classnames('form-control', 'rounded-pill', {
                            'is-invalid': errorsHelper.registrationNumber
                          })} id="emailId" placeholder="Username" />
                          {errorsHelper.registrationNumber && (<div className="text-danger mt-1 mb-1">{errorsHelper.registrationNumber}</div>)}
                        </div>
                        <div className="form-outline mb-3">
                          <input onChange={(e) => setStudentPassword(e.target.value)} value={studentPassword} className={classnames("form-control", 'rounded-pill', {
                            'is-invalid': errorsHelper.password
                          })} type="password" placeholder='Password' id="passwordId" />
                          {errorsHelper.password && (<div className="text-danger mt-1 mb-1">{errorsHelper.password}</div>)}
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
