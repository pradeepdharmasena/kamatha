const editbuyingorderReduser = (state = {editBuying:{}}, action)=>{
    switch(action.type){
        case "editBuying" : return({
            ...state,
            editBuying:action.payload
        })

        default : return(state)
    }
}

export default editbuyingorderReduser;