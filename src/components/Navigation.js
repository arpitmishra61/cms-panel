import React from 'react'
import { Link } from 'react-router-dom'
const changeNavigationLink = (e) => {
    if (!e.target.classList.contains("active-nav")) {
        document.querySelectorAll(".navigation-item").forEach(navItem => navItem.classList.remove("active-nav"))
        e.target.classList.add("active-nav")
    }
}
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
            <div className="support">
                <h4>Support</h4>
                <div className="card navigation-item">Help Desk</div>
                <div className="card navigation-item">Tutorial</div>
                <div className="card navigation-item">Feedback</div>
            </div>

        </div>
    )
}
