
import React from 'react'
//import 'connect' to get the state of app from redux
import { connect } from 'react-redux'

//importing styles
import "../../../css/dashboard/candidates.css"

const displayUnactionCandidatesInformation = (data) => {
    console.log(data)
    return data.candidates.map(candidate => {
        const { jobTitle, location, unreadMessages } = candidate
        return <div className="card ">
            <h4>{jobTitle}<span>,{"  "}{location}</span>  </h4>

            <p>unread messages:{unreadMessages}</p>
        </div>
    })
}

function Candidates(props) {
    return (
        <div className="candidates card">
            <h3>Unactioned Candidates</h3>
            {displayUnactionCandidatesInformation(props.unactionCandidatesInformation)}

        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return ({
        unactionCandidatesInformation: state.unactionCandidatesInfromation
    })
}

export default connect(mapStateToProps, null)(Candidates)