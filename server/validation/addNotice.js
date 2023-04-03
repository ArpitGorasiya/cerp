const Validator = require('validator');
const isEmpty = require('./is-empty');


const addNotice = (data) => {
    let errors = {}
    data.topic = !isEmpty(data.topic) ? data.topic : '';
    data.type = !isEmpty(data.type) ? data.type : ''
    data.content = !isEmpty(data.content) ? data.content : '';

    if (Validator.isEmpty(data.topic)) {
        errors.topic = 'Notice Topic is required';
    }

    if (Validator.isEmpty(data.content)) {
        errors.content = 'Notice Content is required';
    }
    if (Validator.isEmpty(data.type)) {
        errors.type = 'Notice for whom is required';
    }


    return {
        errors,
        isValid: isEmpty(errors)
    };

}


module.exports = addNotice