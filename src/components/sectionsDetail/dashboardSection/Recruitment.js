import React from 'react'
import { connect } from 'react-redux'
import '../../../css/dashboard/recruitment.css'


const displayRecruitmentInformation = (data) => {
    return data.stages.map(stageInformation => {
        const { stage, completion } = stageInformation
        return <div className="detail">
            <h4>{stage}</h4>
            <div className="card completion" style={{
                width: `${completion}%`,


            }}>{completion}</div>
        </div>
    })


}
function Recruitment(props) {
    return (
        <div className="recruitment card">
            <h3>Recruitment Funnel</h3>
            <hr />
            {displayRecruitmentInformation(props.recruitmentInformation)}





        </div>
    )
}
const mapStateToProps = (state) => ({
    recruitmentInformation: state.recruitmentInformation
})
export default connect(mapStateToProps, null)(Recruitment)