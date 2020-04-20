import React from 'react'
import { connect } from 'react-redux'

const displayInterviewScheduleInformation = (data) => {


    return data.candidates.map(candidate => {
        const { name, jobTitle, date, time } = candidate
        return <div className="card">
            <div className="detail">
                <h4>{name}</h4>
                <p>{date},{time}</p>
            </div>

            <p>{jobTitle}</p>

        </div>
    })

}

function Interview(props) {
    return (
        <div className="interview card columnFlex">
            <h3>Interview Schedule</h3>
            {displayInterviewScheduleInformation(props.interviewInformation)}
        </div>
    )
}
const mapStateToProps = (state) => ({
    interviewInformation: state.interviewInformation
})
export default connect(mapStateToProps, null)(Interview)