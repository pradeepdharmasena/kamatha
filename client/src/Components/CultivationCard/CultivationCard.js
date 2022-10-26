import React from 'react'
import './CultivationCard.css'

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCrators } from '../../state/actionCreators'

function CultivationCard({ crop_id, cultivation_id, deadline, started_date, status, genaral_name }) {
    const state = useSelector((state) => state)
    const dispatch = useDispatch();
    const ac = bindActionCreators(actionCrators, dispatch)
    return (
        <div id='CultivationCardContainer'>
            <span>Crop Name: {genaral_name}</span>
            <span>Crop Id : {crop_id}</span>
            <span>Cultivation Id : {cultivation_id}</span>
            <span>Deadline : {deadline.substr(0, 10)}</span>
            <span>Started On: {started_date.substr(0, 10)}</span>
            <span>State : {status}</span>

            <button onClick={() => {
                ac.addNewSupplyCultivationid(cultivation_id)
                ac.setPage("addnewsupplyorder")
            }}>Add New</button>
        </div>
    )
}

export default CultivationCard;