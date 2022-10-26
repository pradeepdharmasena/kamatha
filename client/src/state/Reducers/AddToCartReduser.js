const addToCartReduser = (state = {
    supply_id:0,
    amount:0
    
}, action)=>{
switch(action.type){
    case "setaddtocartid" : return({
        ...state,
        supply_id:action.payload
    })
    case "setaddtocartamount" : return({
        ...state,
        amount:action.payload
    })

    default : return(state)
}
}

export default addToCartReduser;