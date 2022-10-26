
const setUserReduser = (state ={user_id:0}, action) =>{
    switch(action.type){
        case "setId" : return({
            ...state,
            user_id:action.payload
        })
        case "setEmail" : return({
            ...state,
            email:action.payload
        })

        case "setPassword" : return({
            ...state,
            password:action.payload
        })

        default : return(state)
        }
    }

    export default setUserReduser;
