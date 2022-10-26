import React from 'react'
import "./BuyingOrdersListItem.css"
import Image from "../../res/images/beans.jpg"
import axios from 'axios'

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCrators } from '../../state/actionCreators'

function BuyingOrderListItemRequest ({id, s_id, add_date, amount, state, price, time, page}){

    const st = useSelector((st) => st)
    const dispatch = useDispatch();
    const ac = bindActionCreators(actionCrators, dispatch)

    const onBtnClick = ()=>{
        axios.post("http://localhost:3001/aceptbuyingorder", {supply_order_id:s_id, buying_order_id:id})
        .then((response)=>{
            console.log("response after acpting buying order",response)
        })
    }

    var button = <div></div>
    {if(state !=="ACEPTED" && page === "buyingorders"){
       button= <button onClick={()=>{
           onBtnClick()
           axios.get('http://localhost:3001/buyingorderslist', { params: { supply_order_id: s_id } })
                    .then((response) => {
                        ac.setBuyingList(response.data[0])
                        ac.setPage("buyingorders")
                    }

                    )
        }}>Acept</button>
        
    }}

    return(
        <div className='BOLI_card'>
            <h1>#{id}</h1>
            <img id= "thumb_img" src={Image} alt ="thumbnail"/>
            <h4>Sup_#{s_id}</h4>
            <p>
            Add On:{add_date}<br/>
            Time:{time}<br/>
            Amount:{amount}<br/>
            State:{state}<br/>
            Price:{price}<br/>
            </p>
            {button}
            
        </div>
    )
}

export default BuyingOrderListItemRequest