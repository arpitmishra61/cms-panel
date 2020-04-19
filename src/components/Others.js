import React from 'react'
import JobChart from './others/JobChart'
import Options from './others/Options'
import Candidates from './others/Candidates'
import Interview from './others/Interview'
import Recruitment from './others/Recruitment'

export default function Others() {
    return (
        <div className="card others ">
            <Options />
            <div className="section-2 centerFlex">
                <Candidates />
                <Interview />
            </div>
            <div className="section-1 centerFlex">
                <JobChart />
                <Recruitment />
            </div>

        </div>
    )
}
