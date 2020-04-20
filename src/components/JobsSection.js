import React from 'react'
import JobDetails from './jobsSection/JobDetails'
import ActionPanel from './jobsSection/ActionPanel'

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
