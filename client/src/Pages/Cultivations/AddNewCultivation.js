import React from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCrators } from '../../state/actionCreators'


function AddNewCultivation() {

    const state = useSelector((state) => state)
    const dispatch = useDispatch();
    const ac = bindActionCreators(actionCrators, dispatch)

    
    const btnSubmit = () => {
        setter();
        axios.post('http://localhost:3001/insertcultivation', {
            crop_id: state.newCultivation.crop_id,
            user_id: state.setUser.user_id,
            area_hectare: state.newCultivation.area_hectare,
            started_date: state.newCultivation.started_date,
            deadline: state.newCultivation.deadline,
            district_id: state.newCultivation.district
        })
            .then((response) => {
                console.log("response after adding new cultivation", response)
                axios.get("http://localhost:3001/cultivationlist", { params: { user_id: state.setUser.user_id } })
                    .then((response) => {
                        ac.editCultivationlist(response.data[0]);
                        console.log("cultivation list in response", response.data[0])
                    })
                ac.setPage("mycultivations")
            })
    }

    const setter = () => {
        const crop_id = document.getElementById("crop_id").value;
        const will_start_on_date = document.getElementById("will_start_on_date").value;
        const will_end_on_date = document.getElementById("will_end_on_date").value;
        var area_hec = document.getElementById("area_hec").value;
        var district = document.getElementById("district").value;
        if (area_hec.length !== 0) {

            ac.addNewCultivation({
                area_hectare: area_hec,
                crop_id: crop_id,
                deadline: will_end_on_date,
                started_date: will_start_on_date,
                district: district
            })
        }

        console.log(state.newCultivation)
    }

    return (
        <div>
            <h1>new cultivation page</h1>
            <label>Crop Id:</label>
            <select
                name="Crop_id"
                id = "crop_id"
            >  
             {
                 state.croplist.croplist.map((crop)=>{
                    return(<option value={crop.crop_id}>{crop.genaral_name}</option>)
                 })
             }

            </select>
            <label>Area Hec:</label>
            <input type="number"
                step="0.01"
                id="area_hec"
            />
            <label>District:</label>
            <select
                name="Districts"
                id="district"
            >  
             {
                 state.districts.districtList.map((dis)=>{
                    return(<option value={dis.disrict_id}>{dis.disrict_name}</option>)
                 })
             }

            </select>
            <label>Will Start On:</label>
            <input type="date"
                id='will_start_on_date'
            />
            <label>Will Ends On:</label>
            <input type="date"
                id='will_end_on_date'
            />

            <button onClick={() => {
                btnSubmit()
            }}>Submit</button>
        </div>
    )

}

export default AddNewCultivation;
