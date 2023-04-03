
import { SET_STUDENT, SET_OTP, SET_FLAG } from '../actionTypes'

import isEmpty from '../validation/is-empty'

const initialState = {
    isAuthenticated: false,
    student: {},
    alongsideStudent: {},
    flag: false,
    allSubjects: [],
    attendence: [],
    allMarks: {}
}


const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STUDENT:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                student: action.payload
            }
        case SET_FLAG:
            return {
                ...state,
                flag: true
            }
        case "GET_ALL_SUBJECTS":
            return {
                ...state,
                allSubjects: action.payload
            }

        case "GET_ATTENDENCE":
            return {
                ...state,
                attendence: action.payload
            }

        case "GET_MARKS":
            return {
                ...state,
                allMarks: action.payload
            }

        default:
            return state

    }
}

export default studentReducer