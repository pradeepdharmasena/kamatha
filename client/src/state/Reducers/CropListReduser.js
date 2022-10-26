
const cropListReduser = (state = {
    croplist:[]
}  
, action)=>{
switch(action.type){
    case "croplist" : return({
        croplist:action.payload
    })

    default : return(state)
}
}

export default cropListReduser;