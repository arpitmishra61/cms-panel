import React, { useEffect } from 'react'
import getChart from './helpers/jobchart/getChart'
import "../../../css/dashboard/jobChart.css"



export default function JobChart() {
    useEffect(() => {
        getChart()
    }, [])
    return (
        <div className="jobChart card">
            <h3>Offer Acceptance Rate By Department</h3>
            <hr />
            <canvas id="myChart" height="130vh" ></canvas>

        </div>
    )
}
