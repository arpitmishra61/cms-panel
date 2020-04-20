//Importing required files and styles
import React from 'react'
import "../../css/dashboard/dashboard.css"

//Importing other child or dependent components
import JobChart from '../sectionsDetail/dashboardSection/JobChart'
import Options from '../sectionsDetail/dashboardSection/Options'
import Candidates from '../sectionsDetail/dashboardSection/Candidates'
import Interview from '../sectionsDetail/dashboardSection/Interview'
import Recruitment from '../sectionsDetail/dashboardSection/Recruitment'

//Dashboard Section Components
export default function DashboardSection() {
    return (
        <div className="card dashboard ">
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
