
const setErrorReduser = (state ={errorId:0, discription:"null"}, action) =>{
    switch(action.type){
        case "seterrorid" : return({
            ...state,
            errorId:action.payload
        })
        case "seterrordiscription" : return({
            ...state,
            discription:action.payload
        })


        default : return(state)
        }
    }

    export default setErrorReduser;
