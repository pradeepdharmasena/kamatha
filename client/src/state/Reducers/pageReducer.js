const pageReducer = (state = {page:"Home"}, action)=>{
    switch(action.type){
        case "setPage" : return({
            ...state,
            page:action.payload
        })

        default : return(state)
    }
}

export default pageReducer;