import React from 'react'
import { connect } from 'react-redux'
const displayJobs = (data) => {
    return data.jobs.map(job => {
        const { jobTitle, location, screen, offer, rejected, onhoalds, candidate, status } = job
        return <div className="card jobDetail">
            <div className="part">
                <h4>{jobTitle}</h4>
                <p>{location}</p>
            </div>
            <p>status: {status}</p>

            <div className="part">

                <div> <p>screen: {screen}</p>
                    <p>offer: {offer}</p></div>
                <div> <p>rejected: {rejected}</p>
                    <p>onholds: {onhoalds}</p></div>

            </div>

            <div className="part">
                <p>candidates: {candidate}</p>
                <p>
                    <a href="/">More..</a>
                </p>
            </div>


        </div>
    })

}
function JobDetails(props) {
    return (
        <div className="centerFlex jobDetails">
            {displayJobs(props.jobsInformation)}



        </div>

    )
}

const mapStateToProps = (state) => ({
    jobsInformation: state.jobsInformation
})

export default connect(mapStateToProps, null)(JobDetails)
