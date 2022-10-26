const editnewsupplyorderReduser = (state = {
    new_amount:0,
    new_status:"0",
    isSussesfull:"notYet"
}, action) => {
    switch (action.type) {
      
        case "editSupplyAmount": return ({
            ...state,
            new_amount :action.payload
        })

        case "editSupplyStatus": return ({
            ...state,
            new_status :action.payload
        })

        case "editSupplySussess": return ({
            ...state,
            isSussesfull :action.payload
        })

        default: return (state)
    }
}

export default editnewsupplyorderReduser;

