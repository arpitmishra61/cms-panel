import React from 'react'
import { connect } from 'react-redux'
const displayOptionalDetails = (data) => {
    return data.options.map(option => {
        const { title, value } = option
        return <div className="card">
            <p>{value}</p>
            <h5>{title}</h5>
        </div>
    })
}
function Options(props) {
    return (
        <div className=" options centerFlex">
            {displayOptionalDetails(props.optionalDetails)}


        </div>
    )
}
const mapStateToProps = (state) => ({
    optionalDetails: state.optionalDetails
})
export default connect(mapStateToProps, null)(Options)