import React from 'react'

//Child Components
import JobDetails from '../sectionsDetail/jobsSection/JobDetails'
import ActionPanel from '../sectionsDetail/jobsSection/ActionPanel'

export default function JobsSection() {
    return (
        <div className="jobsSection centerFlex card">
            <div className="columnFlex" >
                <JobDetails />

            </div>

            <ActionPanel />



        </div>
    )
}
