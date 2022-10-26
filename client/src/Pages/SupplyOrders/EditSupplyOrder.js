import React from 'react'
import Axios  from 'axios';
import NavBar from '../../Components/NavBar/NavBar';
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCrators } from '../../state/actionCreators'

function EditSupplyOrder({}){

    const state = useSelector((state) => state)
    const dispatch = useDispatch();
    const ac = bindActionCreators(actionCrators, dispatch)

    const submition = () =>{
        const amount = document.getElementById("amount").value
        const state_id = document.getElementById("supplyorderstatus").value
        Axios.post('http://localhost:3001/editsupplyorder',{
            supply_order_id:state.setEditSupplyOrder.editsupply.supply_order_id,
            amount_kg:amount,
            supply_order_status_id:state_id
        
    })
        .then((response)=>{
            
            if(response.data.affectedRows===1){
                console.log("Updating done successfully...")
                ac.editSupplySussessfull("true")
                Axios.get('http://localhost:3001/mysupplyorderslist', { params: { user_id: state.setUser.user_id } })
                        .then((response) => {

                            if (response.data[0] !== []) {
                                ac.setSupplingList(response.data[0])

                            }
                        })
                ac.setPage("mysupplyoders")
            }else{
                ac.editSupplySussessfull("false")
            }
        })
    }

    var body =<h4>Edit the order</h4>
    if(state.editnewsupplyorder.isSussesfull==="true"){
        body = <h4>Editing Succesfull</h4>
    }else if(state.editnewsupplyorder.isSussesfull==="false"){
        body = <h4>Editing failed...!</h4>
    }

    return(
        <div>
            <NavBar/>
            {body}
            <label>Status : </label>
                 <select
                name="supplyorderstatus"
                id="supplyorderstatus">  
             {
                 state.setStatus.supplyorderstatus.map((dis)=>{
                    return(<option key = {dis.state_id} value={dis.state_id}>{dis.supply_order_state}</option>)
                 })
             }

            </select>
            <label>Amount : </label>
            <input
             type="number" 
             id = "amount"
             defaultValue = {state.setEditSupplyOrder.editsupply.amount_kg}
             />
            <button onClick={()=>{
                submition()

            }}> submit</button>
        </div>
    )

}

export default EditSupplyOrder;