const feedbackReduser = (state = {feedback :"null"}, action)=>{
    switch(action.type){
        case "feedback_ok" : return({
            ...state,
            feedback:action.payload
        })

        default : return(state)
    }
}

export default feedbackReduser;