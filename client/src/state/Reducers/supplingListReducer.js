const supplingListReducer = (state = {supplinglist:[
    {
        amount_kg:0,
        cultivation_id: 0,
        order_added_on_date: "2021-11-01",
        supply_on_date: "2022-11-05",
        supply_order_id:0,
        supply_order_state: "0 % CONFIRMED",
        thumbnail: "defalt",
        unit_price:0
        }
]}, action)=>{
    switch(action.type){
        case "mysupplinglist" : return({
            ...state,
            supplinglist:action.payload
        })

        default : return(state)
    }
}

export default supplingListReducer;
