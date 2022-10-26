import React from "react";
import Axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionCrators} from '../../state/actionCreators'


function AddToCart() {

    const state = useSelector((state)=>state)
    const dispatch = useDispatch();
    const ac = bindActionCreators(actionCrators, dispatch)

    let massage = <div></div>
    if(state.feedback.feedback ==="add_to_cart_ok"){
        massage = <div>
            <h4>order added successfully...</h4>
        </div>
    }


    return(<div>
        <label>Amount :</label>
        <input type="number"
        onChange={(event)=>{
            ac.setaddtocartamount(event.target.value)
        }}/>
        <button onClick={()=>{
            Axios.post('http://localhost:3001/insertbuyingorder', {
                user_id:state.setUser.user_id,
                supply_order_id:state.addtocart.supply_id,
                amount_kg:state.addtocart.amount
            }).then((response)=>{
                console.log("after adding buying order response", response)
                

                    Axios.get('http://localhost:3001/mybuyingorderslist', { params: { user_id: state.setUser.user_id } })
                        .then((response) => {

                            if (response.data[0] !== []) {
                                ac.setBuyingList(response.data[0])

                            }
                        })

                        ac.setPage("mybuyingoders")
               

            })
        }}>Add to Cart</button>
        {massage}

        <button
        onClick={()=>{
            ac.setPage("allsupplyoders")
        }}>Back</button>
    </div>)
    
}

export default AddToCart;