const Validator = require('validator');
const isEmpty = require('./is-empty');


const addAssignment = (data) => {
    let errors = {}
    data.name = !isEmpty(data.name) ? data.name : '';
    data.subject = !isEmpty(data.subject) ? data.subject : ''
    data.year = !isEmpty(data.year) ? data.year : '';
    data.section = !isEmpty(data.section) ? data.section : '';
    data.sdate = !isEmpty(data.sdate) ? data.sdate : '';
    data.file = !isEmpty(data.file) ? data.file : '';

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Assignment Name is required';
    }
    if (Validator.isEmpty(data.subject)) {
        errors.subject = 'Subject of Assignment is required';
    }
    if (Validator.isEmpty(data.sdate)) {
        errors.sdate = 'Assignment Submission Date is required';
    }
    if (Validator.isEmpty(data.file)) {
        errors.file = 'Assignment file is required';
    }
    if (Validator.isEmpty(data.year)) {
        errors.year = 'year is required';
    }
    if (Validator.isEmpty(data.section)) {
        errors.section = 'section is required';
    }


    return {
        errors,
        isValid: isEmpty(errors)
    };

}


module.exports = addAssignment