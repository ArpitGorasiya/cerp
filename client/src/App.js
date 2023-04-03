import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import store from './redux/store'
import { useSelector } from 'react-redux'
import jwt_decode from 'jwt-decode';
import setAuthToken from './redux/utils/setAuthToken'

import Home from './pages/Login/Home';

import Alogin from './pages/Admin/Login'
import Ahome from './pages/Admin/Dashboard'
import Profile from './pages/Admin/Profile'
// import UpdateProfile from './pages/Admin/UpdateProfile'
import UpdatePassword from './pages/Admin/UpdatePassword'
import AddAdmin from './pages/Admin/AddAdmin'
import AllFaculty from './pages/Admin/GetAllFaculty'
import AddFaculty from './pages/Admin/AddFaculty'
import AllStudent from './pages/Admin/GelAllStudent'
import AddStudent from './pages/Admin/AddStudent'
import AllSubject from './pages/Admin/GelAllSubject'
import AddSubject from './pages/Admin/AddSubject'
import AddNotice from './pages/Admin/AddNotice'
import NotFound from './components/Notfound'

import Flogin from './pages/Faculty/Login'
import Fhome from './pages/Faculty/Dashboard'
import Profilef from './pages/Faculty/Profile'
import UpdateProfilef from './pages/Faculty/UpdateProfile'
import UpdatePasswordf from './pages/Faculty/UpdatePassword'
import Attendence from './pages/Faculty/Attendence'
import Marks from './pages/Faculty/Marks'
import Assignments from './pages/Faculty/Assignments'
import AddAssignment from './pages/Faculty/Assignment'

import Slogin from './pages/Student/Login'
import Shome from './pages/Student/Dashboard'
import Profiles from './pages/Student/Profile'
import UpdateProfiles from './pages/Student/UpdateProfile'
import UpdatePasswords from './pages/Student/UpdatePassword'
import Sattendence from './pages/Student/Attendence'
import Sresult from './pages/Student/Marks'
import Ssubject from './pages/Student/Subjects'
import Assignmentss from './pages/Student/Assignments'

import { setAdminUser, adminLogout } from './redux/action/adminAction'
import { facultyLogout, setFacultyUser } from './redux/action/facultyAction'
import { setStudentUser, studentLogout } from './redux/action/studentAction'
import Sidebar from './components/Sidebar';
if (window.localStorage.facultyJwtToken) {
  setAuthToken(localStorage.facultyJwtToken);
  const decoded = jwt_decode(localStorage.facultyJwtToken);

  store.dispatch(setFacultyUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(facultyLogout());
    window.location.href = '/';
  }
}
else if (window.localStorage.studentJwtToken) {
  setAuthToken(localStorage.studentJwtToken);
  const decoded = jwt_decode(localStorage.studentJwtToken);

  store.dispatch(setStudentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(studentLogout());
    window.location.href = '/';
  }
}
else if (window.localStorage.adminJwtToken) {
  setAuthToken(localStorage.adminJwtToken);
  const decoded = jwt_decode(localStorage.adminJwtToken);

  store.dispatch(setAdminUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(adminLogout());
    window.location.href = '/';
  }
}




function App() {

  const store = useSelector((store) => store)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route exact path='/' element={<Sidebar />} /> */}
          <Route exact path='/' element={<Home />} />

          {/* ADMIN */}
          <Route exact path='/adminLogin' element={<Alogin />} />
          <Route exact path='/admin/home' element={<Ahome />} />
          <Route exact path='/admin/profile' element={<Profile />} />
          {/* <Route path='/admin/updateProfile' element={<UpdateProfile/>} /> */}
          <Route exact path='/admin/updatePassword' element={<UpdatePassword />} />
          <Route exact path='/admin/addAdmin' element={<AddAdmin />} />
          <Route exact path='/admin/allFaculties' element={<AllFaculty />} />
          <Route exact path='/admin/addFaculty' element={<AddFaculty />} />
          <Route exact path='/admin/allStudents' element={<AllStudent />} />
          <Route exact path='/admin/addStudent' element={<AddStudent />} />
          <Route exact path='/admin/allSubjects' element={<AllSubject />} />
          <Route exact path='/admin/addSubject' element={<AddSubject />} />
          <Route exact path='/admin/addNotice' element={<AddNotice />} />

          {/* FACULTY */}
          <Route exact path='/facultyLogin' element={<Flogin />} />
          <Route exact path='/faculty/Home' element={<Fhome />} />
          <Route exact path='/faculty/profile' element={<Profilef />} />
          <Route exact path='/faculty/updateProfile' element={<UpdateProfilef />} />
          <Route exact path='/faculty/updatePassword' element={<UpdatePasswordf />} />
          <Route exact path='/faculty/Attendence' element={<Attendence />} />
          <Route exact path='/faculty/Marks' element={<Marks />} />
          <Route exact path='/faculty/assignments' element={<Assignments />} />
          <Route exact path='/faculty/addassignments' element={<AddAssignment />} />

          {/* STUDENT */}
          <Route exact path='/studentLogin' element={<Slogin />} />
          <Route exact path='/student/Home' element={<Shome />} />
          <Route exact path='/student/profile' element={<Profiles />} />
          <Route exact path='/student/updateProfile' element={<UpdateProfiles />} />
          <Route exact path='/student/updatePassword' element={<UpdatePasswords />} />
          <Route exact path='/student/attendence' element={<Sattendence />} />
          <Route exact path='/student/result' element={<Sresult />} />
          <Route exact path='/student/subjects' element={<Ssubject />} />
          <Route exact path='/student/assignments' element={<Assignmentss />} />

          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
