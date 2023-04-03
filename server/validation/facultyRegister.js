const Validator = require('validator');
const isEmpty = require('./is-empty');


const validateFacultyRegisterInput = (data) => {
    let errors = {}
    data.fname = !isEmpty(data.fname) ? data.fname : '';
    data.lname = !isEmpty(data.lname) ? data.lname : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.department = !isEmpty(data.department) ? data.department : '';
    data.designation = !isEmpty(data.designation) ? data.designation : '';
    data.dob = !isEmpty(data.dob) ? data.dob : '';
    data.gender = !isEmpty(data.gender) ? data.gender : '';
    data.facultyMobileNumber = !isEmpty(data.facultyMobileNumber) ? data.facultyMobileNumber : '';
    data.aadharCard = !isEmpty(data.aadharCard) ? data.aadharCard : '';

    if (!Validator.isLength(data.fname, { min: 2, max: 30 })) {
        errors.fname = 'First Name must be between 2 and 30 characters';
    }

    if (Validator.isEmpty(data.fname)) {
        errors.fname = 'First Name is required';
    }

    if (!Validator.isLength(data.lname, { min: 2, max: 30 })) {
        errors.lname = 'Last Name must be between 2 and 30 characters';
    }

    if (Validator.isEmpty(data.lname)) {
        errors.lname = 'Last Name is required';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    if (Validator.isEmpty(data.department)) {
        errors.department = 'Department field is required';
    }

    if (Validator.isEmpty(data.dob)) {
        errors.dob = 'DOB field is required';
    }
    if (Validator.isEmpty(data.designation)) {
        errors.designation = 'Designation field is required';
    }
    if (Validator.isEmpty(data.gender)) {
        errors.gender = 'Gender field is required';
    }
    if (Validator.isEmpty(data.facultyMobileNumber)) {
        errors.facultyMobileNumber = 'Mobile Number field is required';
    }
    // if (Validator.isLength(data.facultyMobileNumber, { min: 10, max: 10 })) {
    //     errors.facultyMobileNumber = 'Mobile Number must be 10 Characters';
    // }
    if (Validator.isEmpty(data.aadharCard)) {
        errors.aadharCard = 'Aadhar Number field is required';
    }
    else if (!Validator.isLength(data.aadharCard, { min: 12, max: 12 })) {
        errors.aadharCard = 'Aadhar Card must be 12 Characters';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };

}


module.exports = validateFacultyRegisterInput