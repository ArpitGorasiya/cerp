const Validator = require('validator');
const isEmpty = require('./is-empty');


const addStudent = (data) => {
    let errors = {}
    data.fname = !isEmpty(data.fname) ? data.fname : '';
    data.mname = !isEmpty(data.mname) ? data.mname : '';
    data.lname = !isEmpty(data.lname) ? data.lname : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.department = !isEmpty(data.department) ? data.department : '';
    data.section = !isEmpty(data.section) ? data.section : '';
    data.dob = !isEmpty(data.dob) ? data.dob : '';
    data.year = !isEmpty(data.year) ? data.year : '';
    data.gender = !isEmpty(data.gender) ? data.gender : '';
    data.studentMobileNumber = !isEmpty(data.studentMobileNumber) ? data.aadharCard : '';
    data.aadharCard = !isEmpty(data.aadharCard) ? data.aadharCard : '';
    data.fatherMobileNumber = !isEmpty(data.fatherMobileNumber) ? data.fatherMobileNumber : '';

    if (!Validator.isLength(data.fname, { min: 2, max: 30 })) {
        errors.fname = 'First Name must be between 2 and 30 characters';
    }

    if (Validator.isEmpty(data.fname)) {
        errors.fname = 'First Name is required';
    }

    if (!Validator.isLength(data.mname, { min: 2, max: 30 })) {
        errors.mname = 'Middle Name must be between 2 and 30 characters';
    }

    if (Validator.isEmpty(data.mname)) {
        errors.mname = 'Middle Name field is required';
    }

    if (!Validator.isLength(data.lname, { min: 2, max: 30 })) {
        errors.lname = 'Last Name must be between 2 and 30 characters';
    }

    if (Validator.isEmpty(data.lname)) {
        errors.lname = 'Last Name field is required';
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

    if (Validator.isEmpty(data.year)) {
        errors.year = 'Year field is required';
    }

    if (Validator.isEmpty(data.section)) {
        errors.section = 'Section field is required';
    }

    if (Validator.isEmpty(data.dob)) {
        errors.dob = 'DOB field is required';
    }

    if (Validator.isEmpty(data.aadharCard)) {
        errors.aadharCard = 'Aadhar Number field is required';
    }
    else if (!Validator.isLength(data.aadharCard, { min: 12, max: 12 })) {
        errors.aadharCard = 'Aadhar Card must be 12 Characters';
    }

    if (Validator.isEmpty(data.gender)) {
        errors.gender = 'Gender is Not Selected';
    }

    if (Validator.isEmpty(data.studentMobileNumber)) {
        errors.studentMobileNumber = 'Student Mobile Number is Required';
    }

    if (Validator.isEmpty(data.fatherMobileNumber)) {
        errors.fatherMobileNumber = 'Father Mobile Number is Required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };

}


module.exports = addStudent