//combineReducers is a function to combine all other reducers into one root reducer
import { combineReducers } from 'redux'

//importing other reducers
import interviewInformation from './dashboard/interviewScheduleReducer'
import recruitmentInformation from './dashboard/recruitmentReducer'
import unactionCandidatesInfromation from './dashboard/unactionCandidatesReducer'
import optionalDetails from './dashboard/optionalDetailsReducer'
import jobsInformation from "./jobs/jobsInformationReducer";

export default combineReducers({
    interviewInformation,
    recruitmentInformation,
    unactionCandidatesInfromation,
    optionalDetails,
    jobsInformation
})