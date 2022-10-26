const setStatusReduser = (state = {
    supplyorderstatus :[]
}, action)=>{
    switch(action.type){
        case "supplyordersstatus" : return({
            ...state,
            supplyorderstatus:action.payload
        })

        default : return(state)
    }
}

export default setStatusReduser;