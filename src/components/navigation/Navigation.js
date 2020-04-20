//importing require files
import React from 'react'
import "../../css/navigation/navigation.css"
import { Link } from 'react-router-dom'

//importing dependent components
import Support from './Support'

//importing helper functions
import changeNavigationLink from './helpers/changeNavigationLink'

//Navigation Component
export default function Navigation() {
    return (
        <div className="card navigation columnFlex" onClick={
            changeNavigationLink
        }>
            <h4>Navigation</h4>
            <hr />
            <Link to="/"> <div className="card navigation-item active-nav">Dashboards</div>
            </Link>
            <Link to="/jobs-information"><div className="card navigation-item">Jobs</div> </Link>

            <div className="card navigation-item">Candidate</div>
            <div className="card navigation-item">Approvals</div>
            <div className="card navigation-item">Reports</div>
            <br />
            <hr />
            <Support />

        </div>
    )
}
