import { combineReducers } from 'redux'

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