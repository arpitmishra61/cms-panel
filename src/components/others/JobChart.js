import React, { useEffect } from 'react'
import Chart from 'chart.js';
const getChart = () => {
    var ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Executive Office", "Production", "Sales", "IT", "Software Engineering"],
            datasets: [
                {

                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1,
                    data: [75, 60, 80, 100, 60]
                }
            ]

        }
        , options: {
            scales: {
                yAxes: [{

                    ticks: {
                        max: 100,
                        min: 0,
                        stepSize: 20


                    }
                }], xAxes: [{
                    barThickness: "50",
                    categoryPercentage: "0",

                    gridLines: {
                        display: false,
                        drawBorder: true
                    }
                }]
            },
            legend: {
                display: false
            }
        }

    });
}

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
