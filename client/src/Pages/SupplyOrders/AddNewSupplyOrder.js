import React from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCrators } from '../../state/actionCreators'


function AddNewSupplyOrder(){

    const state = useSelector((state) => state)
    const dispatch = useDispatch();
    const ac = bindActionCreators(actionCrators, dispatch)

    const btnSubmit = ()=>{
        console.log(state.newSupplyOrder.cultivation_id,
        state.newSupplyOrder.amount_kg,
        state.newSupplyOrder.unit_price,
        state.newSupplyOrder.supply_on_date)
        axios.post("http://localhost:3001/insertsupplyorder", {
            cultivation_id:state.newSupplyOrder.cultivation_id,
            amount_kg :  state.newSupplyOrder.amount_kg,
            unit_price : state.newSupplyOrder.unit_price,
            supply_on_date: state.newSupplyOrder.supply_on_date
        })
        .then((response)=>{
            console.log("response of insertsupplyorder ==> ", response)
        })
    }

    return(
        <div>
            <h1>new suppply order page</h1>
            <label>Amount:</label>
            <input type="text"
            onChange={(event)=>{
                ac.addNewSupplyAmount(event.target.value)
            }}/>
            <label>Unit Price:</label>
            <input type="number"
             step="0.01"
             onChange={(event)=>{
                ac.addNewSupplyPrice(event.target.value)
            }}
             />
            <label>Supply Date:</label>
            <input type="date"
            onChange={(event)=>{
                ac.addNewSupplyDate(event.target.value)
            }}
            />

            <button onClick = {()=>{
                btnSubmit()
                axios.get('http://localhost:3001/mysupplyorderslist', { params: { user_id: state.setUser.user_id } })
                        .then((response) => {

                            if (response.data[0] !== []) {
                                ac.setSupplingList(response.data[0])

                            }
                        })
                ac.setPage("mysupplyoders")
               
                }} >Add New</button>

        </div>
    )

}

export default AddNewSupplyOrder;