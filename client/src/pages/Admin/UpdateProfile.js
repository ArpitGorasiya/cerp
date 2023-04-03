import React from 'react'
import { NavLink } from 'react-router-dom'
import AdminNav from '../../components/AdminNav'

const UpdateProfile = () => {
    return (
        <>

            <div className='bg-light' style={{ height: '100vh' }}>
                {/* <AdminNav /> */}
                <div className="container mt-5 border border-rounded p-4 bg-white">
                    <h1 className='text-center'>UPDATE PROFILE</h1>
                    <div className="row mt-1">
                        <div className="col p-2">
                            <form>
                                <div className="row justify-content-center mt-3">
                                    {/* <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="emailId" className='mb-2'>Email</label>
                                        <input type="email" className="form-control" id="emailId" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="designationId">Designation</label>
                                        <select className="form-control" id="designationId">
                                            <option>Select</option>
                                            <option value="Assistant Professor">Assistant Professor</option>
                                            <option value="Senior Professer">Senior Professer</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="departmentId" className='mb-2'>Department</label>
                                        <select className="form-control" id="departmentId">
                                            <option>Select</option>
                                            <option value="Electronics & Communication">Electronics & Communication</option>
                                            <option value="Computer Science">Computer Science</option>
                                            <option value="I.T">I.T</option>
                                            <option value="Electrical & Electronics">Electrical & Electronics</option>
                                            <option value="Mechanical">Mechanical</option>
                                            <option value="Civil">Civil</option>
                                        </select>
                                    </div>
                                </div> */}
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label htmlFor="emailId" className='mb-2'>Profile Picture</label>
                                            <input type="file" accept=".jpg,.png,.jpeg" className="form-control" id="emailId" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-3">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label htmlFor="numberId" className='mb-2'>Contact Number</label>
                                            <input type="tel" className="form-control" id='numberId' />
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-5 mb-3">
                                    <button type="submit" className="btn btn-info col-md-2 btnn">Update Profile</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}

export default UpdateProfile
