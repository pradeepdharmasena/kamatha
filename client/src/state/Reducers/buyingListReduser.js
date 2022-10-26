const buyingListReducer = (state = {buyinglist:[{
    amount: 0,
    buyer_order_id: 0,
    buying_order_state: "null",
    ordered_on_date_time: "0000-00-00",
    supply_order_id: 0,
    unit_price:0,
    supply_on_date: "0000-00-00",
    address: 'null',      
    contact_no: '0000000000'
}]}, action)=>{
    switch(action.type){
        case "mybuyinglist" : return({
            ...state,
            buyinglist:action.payload
        })
        default : return(state)
    }
}

export default buyingListReducer;



