const addNewSupplyReduser = (state = {
        cultivation_id:0,
        amount_kg:0,
        supply_on_date: "0000-00-00",
        unit_price:0
}, action)=>{
    switch(action.type){
        case "addnewsupplyamount" : return({
            ...state,
            amount_kg:action.payload
        })
        case "addnewsupplydate" : return({
            ...state,
            supply_on_date:action.payload
        })
        case "addnewsupplyprice" : return({
            ...state,
            unit_price:action.payload
        })
        case "addnewsupplycultivationid" : return({
            ...state,
            cultivation_id:action.payload
        })
        default : return(state)
    }
}

export default addNewSupplyReduser;