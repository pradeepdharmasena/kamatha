import React from "react";
import './Cultivation.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCrators } from '../../state/actionCreators'
import CultivationCard from "../../Components/CultivationCard/CultivationCard";


function Cultivations() {
    const state = useSelector((state) => state)
    const dispatch = useDispatch();
    const ac = bindActionCreators(actionCrators, dispatch)
    console.log("cultivation list in state", state.cultivationList.cultivationlist)

    if (state.cultivationList.cultivationlist[0].user_id === 0) {
        return (
            <div>
                <h4>Sorry there is no any cultivation yet...</h4>
            </div>
        )
    }

    return (<div >
        <button onClick={() => {
            ac.setPage("addnewcultivation")
        }}>Add New Cultivation</button>

        <div id="cultivationlistcontainer">

            {
                state.cultivationList.cultivationlist.map((culti) => {
                    return (
                        <CultivationCard
                            crop_id={culti.crop_id}
                            cultivation_id={culti.cultivation_id}
                            deadline={culti.deadline}
                            location_lati={culti.location_lati}
                            location_longi={culti.location_longi}
                            started_date={culti.started_date}
                            status={culti.state}
                            genaral_name={culti.genaral_name}
                        />
                    )
                })
            }

        </div>
    </div>)
}

export default Cultivations;