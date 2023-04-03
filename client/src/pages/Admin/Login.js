import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { adminLogin } from '../../redux/action/adminAction'
import logo from '../../image/logo.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const store = useSelector((store) => store)
  const dispatch = useDispatch()
  const [registrationNumber, setRegistrationNumber] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const history = useNavigate()

  useEffect(() => {
    if (store.admin.isAuthenticated) {
      history('/admin/home')
    }
  }, [store.admin.isAuthenticated])

  useEffect(() => {
    if (store.error) {
      setError(store.error)
    }
  }, [store.error])

  const fromHandler = (e) => {
    e.preventDefault()
    setIsLoading(true)
    dispatch(adminLogin({ registrationNumber, password }))

  }

  useEffect(() => {
    if (store.error ||
      store.admin.isAuthenticated) {
      setIsLoading(false)
    }

    else {
      setIsLoading(true)
    }
  }, [store.error, store.admin.isAuthenticated])

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
                        <h4 className="mt-1 mb-3 pb-1">ADMIN LOGIN</h4>
                      </div>
                      <form noValidate onSubmit={fromHandler}>
                        <p>Please login to your account</p>
                        <div className="form-outline mb-4">
                          <input type="text" value={registrationNumber} onChange={(e) => setRegistrationNumber(e.target.value)} className="form-control rounded-pill {'is-invalid' : error.registrationNumber}" id="emailId"
                            placeholder="Registration Number" />
                          {error.registrationNumber && (<div className="text-danger mt-1 mb-1">{error.registrationNumber}</div>)}
                        </div>
                        <div className="form-outline mb-1">
                          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control rounded-pill {'is-invalid': error.password}" placeholder='Password' id="passwordId" />
                        </div>
                        {error.password && (<div className="text-danger mb-3">{error.password}</div>)}
                        <div className="text-center pt-1 mb-3 pb-1">
                          <div className="col-md-1">
                            {
                              isLoading && <div className="spinner-border text-primary" role="status">
                                {/* <span className="sr-only">Loading...</span> */}
                              </div>
                            }
                          </div>
                          {!isLoading && <button type="submit" className="btn btn-primary btn-block btnsub rounded-pill mt-3 mb-3 col-lg-12">Login</button>}
                          {/* <button className="btn btn-primary btn-block btnsub rounded-pill mb-3 col-lg-12" type="button">Login</button><br /> */}
                          {/* <a className="text-muted" style={{ textDecoration: 'none' }} href="#!">Forgot password?</a> */}
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
